import type { Resume } from "./types";
import { createEmptyResume } from "./defaults";
import { generateId } from "./helpers";

// ─── JSON import ──────────────────────────────────────────────────────────────

export function importFromJSON(raw: string): Resume {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("Invalid JSON — could not parse file.");
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error("Invalid format — expected a JSON object.");
  }

  const obj = parsed as Record<string, unknown>;
  if (!obj.personalInfo) throw new Error("Missing required field: personalInfo.");

  const base = createEmptyResume();
  const now = new Date().toISOString();

  return {
    ...base,
    ...(obj as Partial<Resume>),
    id: generateId(),
    createdAt: now,
    updatedAt: now,
    personalInfo: { ...base.personalInfo, ...(obj.personalInfo as object) },
    design: { ...base.design, ...(obj.design as object) },
    settings: { ...base.settings, ...(obj.settings as object) },
    experience: Array.isArray(obj.experience) ? obj.experience : base.experience,
    education: Array.isArray(obj.education) ? obj.education : base.education,
    skills: Array.isArray(obj.skills) ? obj.skills : base.skills,
    projects: Array.isArray(obj.projects) ? obj.projects : base.projects,
    certifications: Array.isArray(obj.certifications) ? obj.certifications : base.certifications,
    languages: Array.isArray(obj.languages) ? obj.languages : base.languages,
    achievements: Array.isArray(obj.achievements) ? obj.achievements : base.achievements,
    volunteer: Array.isArray(obj.volunteer) ? obj.volunteer : base.volunteer,
    interests: Array.isArray(obj.interests) ? obj.interests : base.interests,
    customSections: Array.isArray(obj.customSections) ? obj.customSections : base.customSections,
    sections: Array.isArray(obj.sections) ? obj.sections : base.sections,
  };
}

// ─── PDF text extraction ──────────────────────────────────────────────────────

export async function extractTextFromPDF(file: File): Promise<string> {
  const pdfjsLib = await import("pdfjs-dist");
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.mjs",
    import.meta.url
  ).toString();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const pages: string[] = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();

    // Group text items by y-coordinate to reconstruct lines
    const lineMap = new Map<number, string[]>();
    for (const item of content.items) {
      if (!("str" in item) || !item.str.trim()) continue;
      const y = Math.round((item.transform as number[])[5] / 2) * 2;
      if (!lineMap.has(y)) lineMap.set(y, []);
      lineMap.get(y)!.push(item.str);
    }

    // Sort top-to-bottom (higher y = higher on page in PDF coordinate space)
    const sortedLines = [...lineMap.entries()]
      .sort((a, b) => b[0] - a[0])
      .map(([, words]) => words.join(" ").trim())
      .filter(Boolean);

    pages.push(sortedLines.join("\n"));
  }

  return pages.join("\n");
}

// ─── PDF heuristic parser ─────────────────────────────────────────────────────

// Maps ALL-CAPS section headings to internal keys
const SECTION_KEY_MAP: Record<string, string> = {
  SUMMARY: "summary",
  "WORK EXPERIENCE": "experience",
  EXPERIENCE: "experience",
  EDUCATION: "education",
  SKILLS: "skills",
  PROJECTS: "projects",
  CERTIFICATIONS: "certifications",
  CERTIFICATION: "certifications",
  LANGUAGES: "languages",
  LANGUAGE: "languages",
  ACHIEVEMENTS: "achievements",
  ACHIEVEMENT: "achievements",
  AWARDS: "achievements",
  VOLUNTEER: "volunteer",
  INTERESTS: "interests",
  INTEREST: "interests",
};

function splitIntoSections(lines: string[]): Record<string, string[]> {
  const sections: Record<string, string[]> = { header: [] };
  let current = "header";

  for (const line of lines) {
    const key = SECTION_KEY_MAP[line.trim().toUpperCase()];
    if (key) {
      current = key;
      if (!sections[current]) sections[current] = [];
    } else {
      if (!sections[current]) sections[current] = [];
      sections[current].push(line);
    }
  }

  return sections;
}

// Matches a date range inline: "Sep 2025 - Present", "July 2023 - June 2025", "2017 - 2021"
const DATE_RANGE_RE = /((jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{4}|\d{4})\s*[-–—]\s*((jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{4}|\d{4}|present|current)/i;
const DATE_RE = /((jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{4}|\d{4})/gi;

function parseDateRange(text: string) {
  const matches = [...text.matchAll(DATE_RE)].map((m) => m[0]);
  const current = /present|current/i.test(text);
  return {
    startDate: matches[0] ?? "",
    endDate: current ? "" : (matches[1] ?? ""),
    current,
  };
}

function parseHeader(lines: string[]) {
  const text = lines.join("\n");
  const emailMatch = text.match(/[\w.+-]+@[\w-]+\.[a-z]{2,}/i);
  const phoneMatch = text.match(/\b\d[\d\s\-().]{6,14}\d\b/);
  const linkedinMatch = text.match(/linkedin\.com\/in\/([\w-]+)/i);
  const githubMatch = text.match(/github\.com\/([\w-]+)/i);
  const websiteMatch = text.match(/https?:\/\/(?!linkedin|github)[\w.-]+\.[a-z]{2,}[\w/.-]*/i);

  // Name = first line, headline = second line (skip lines with contact info)
  const contactRe = /@|\d{7,}|linkedin|github|http/i;
  const textLines = lines.filter((l) => !contactRe.test(l) && l.trim().length > 0);

  // A standalone slug line like "Raman-Nagar" (no spaces, has hyphen, short)
  const slugLine = lines.find((l) => /^[\w]+-[\w-]+$/.test(l.trim()) && l.trim().length < 40);

  return {
    fullName: textLines[0] ?? "",
    headline: textLines[1] ?? "",
    email: emailMatch?.[0] ?? "",
    phone: phoneMatch?.[0]?.trim() ?? "",
    location: "",
    website: websiteMatch?.[0] ?? "",
    linkedin: linkedinMatch
      ? `https://linkedin.com/in/${linkedinMatch[1]}`
      : slugLine
      ? `https://linkedin.com/in/${slugLine.trim()}`
      : "",
    github: githubMatch ? `https://github.com/${githubMatch[1]}` : "",
    summary: "",
    photo: "",
  };
}

function parseExperience(lines: string[]) {
  const results: {
    id: string; company: string; title: string; location: string;
    startDate: string; endDate: string; current: boolean; bullets: string[];
  }[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const isBullet = /^[•\-–*►▪]/.test(line);

    // Company line: not a bullet, no date range, not all-lowercase sentence
    if (!isBullet && !DATE_RANGE_RE.test(line) && line.trim().length > 0) {
      const company = line.trim();
      // Next line should be "Title   Date"
      if (i + 1 < lines.length && DATE_RANGE_RE.test(lines[i + 1])) {
        const titleLine = lines[i + 1];
        const title = titleLine.replace(DATE_RANGE_RE, "").trim();
        const dates = parseDateRange(titleLine);
        const bullets: string[] = [];
        i += 2;
        while (i < lines.length) {
          const l = lines[i];
          // Stop if we hit a date range (next entry's title line) or a company-like line followed by a date
          if (DATE_RANGE_RE.test(l)) break;
          // Stop if this looks like a company name (next line has a date range)
          if (!(/^[•\-–*►▪]/.test(l)) && i + 1 < lines.length && DATE_RANGE_RE.test(lines[i + 1])) break;
          if (/^[•\-–*►▪]/.test(l)) {
            bullets.push(l.replace(/^[•\-–*►▪]\s*/, ""));
          } else if (bullets.length > 0) {
            // Wrapped continuation of previous bullet
            bullets[bullets.length - 1] += " " + l;
          }
          i++;
        }
        results.push({ id: generateId(), company, title, location: "", ...dates, bullets });
      } else {
        i++;
      }
    } else {
      i++;
    }
  }

  return results;
}

function parseEducation(lines: string[]) {
  const results: {
    id: string; institution: string; degree: string; field: string;
    location: string; startDate: string; endDate: string; current: boolean;
    gpa: string; bullets: string[];
  }[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    // Institution line: no date range
    if (!DATE_RANGE_RE.test(line) && line.trim().length > 0) {
      const institution = line.trim();
      if (i + 1 < lines.length && DATE_RANGE_RE.test(lines[i + 1])) {
        const degreeLine = lines[i + 1];
        const degree = degreeLine.replace(DATE_RANGE_RE, "").trim();
        const dates = parseDateRange(degreeLine);
        const gpaMatch = degreeLine.match(/([0-9]+\.[0-9]+)/);
        results.push({
          id: generateId(),
          institution,
          degree,
          field: "",
          location: "",
          ...dates,
          gpa: gpaMatch?.[1] ?? "",
          bullets: [],
        });
        i += 2;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }

  return results;
}

function parseSkills(lines: string[]) {
  const skills: { id: string; name: string; level: ""; category: string }[] = [];

  for (const line of lines) {
    const colonIdx = line.indexOf(":");
    if (colonIdx > 0 && colonIdx < 35) {
      const category = line.slice(0, colonIdx).trim();
      const items = line
        .slice(colonIdx + 1)
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
      for (const name of items) {
        skills.push({ id: generateId(), name, level: "", category });
      }
    } else {
      line
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 1 && s.length < 60)
        .forEach((name) => skills.push({ id: generateId(), name, level: "", category: "Skills" }));
    }
  }

  return skills;
}

function parseProjects(lines: string[]) {
  const results: {
    id: string; name: string; description: string; url: string;
    githubUrl: string; startDate: string; endDate: string; current: boolean;
    bullets: string[]; technologies: string[];
  }[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    // Project heading line contains a date range
    if (DATE_RANGE_RE.test(line)) {
      const name = line.replace(DATE_RANGE_RE, "").replace(/[()]/g, "").trim();
      const dates = parseDateRange(line);
      // Next line = tech stack (short, comma-separated, no sentence structure)
      let technologies: string[] = [];
      let descLines: string[] = [];
      i++;
      if (i < lines.length && !DATE_RANGE_RE.test(lines[i])) {
        const techLine = lines[i];
        // Tech line: comma-separated short tokens (not a sentence)
        if (techLine.split(",").length > 1 && techLine.length < 200) {
          technologies = techLine.split(",").map((s) => s.trim().replace(/\.$/, "")).filter(Boolean);
          i++;
        }
      }
      while (i < lines.length && !DATE_RANGE_RE.test(lines[i])) {
        const dl = lines[i];
        // Skip short leftover tech tokens (e.g. "Zod." wrapped from previous line)
        if (dl.length > 5 && !/^[\w.+#-]+\.$/.test(dl)) descLines.push(dl);
        i++;
      }
      results.push({
        id: generateId(),
        name,
        description: descLines.join(" ").trim(),
        url: "",
        githubUrl: "",
        ...dates,
        bullets: [],
        technologies,
      });
    } else {
      i++;
    }
  }

  return results;
}

export function parsePDFText(text: string): Resume {
  const allLines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const sections = splitIntoSections(allLines);
  const base = createEmptyResume();
  const now = new Date().toISOString();

  const personalInfo = parseHeader(sections.header ?? []);
  if (sections.summary) {
    personalInfo.summary = sections.summary.join(" ").trim();
  }

  return {
    ...base,
    id: generateId(),
    title: personalInfo.fullName ? `${personalInfo.fullName}'s Resume` : "Imported Resume",
    personalInfo,
    experience: sections.experience ? parseExperience(sections.experience) : [],
    education: sections.education ? parseEducation(sections.education) : [],
    skills: sections.skills ? parseSkills(sections.skills) : [],
    projects: sections.projects ? parseProjects(sections.projects) : [],
    createdAt: now,
    updatedAt: now,
  };
}
