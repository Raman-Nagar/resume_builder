import type {
  DesignSettings,
  PersonalInfo,
  Resume,
  ResumeSection,
  ResumeSettings,
  SectionKey,
} from "./types";
import { generateId } from "./helpers";

export const DEFAULT_PERSONAL_INFO: PersonalInfo = {
  fullName: "",
  headline: "",
  email: "",
  phone: "",
  location: "",
  website: "",
  linkedin: "",
  github: "",
  summary: "",
  photo: "",
};

export const DEFAULT_DESIGN: DesignSettings = {
  template: "classic",
  font: "inter",
  accentColor: "navy",
  customAccentColor: "#2563eb",
  fontSize: "normal",
  pageMargin: "normal",
  showIcons: true,
  showDividers: true,
};

export const DEFAULT_SETTINGS: ResumeSettings = {
  language: "en",
  dateFormat: "MMM YYYY",
  pageSize: "A4",
};

const SECTION_DEFAULTS: Array<{ key: SectionKey; label: string }> = [
  { key: "summary", label: "Summary" },
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "certifications", label: "Certifications" },
  { key: "languages", label: "Languages" },
  { key: "achievements", label: "Achievements" },
  { key: "volunteer", label: "Volunteer" },
  { key: "interests", label: "Interests" },
  { key: "custom", label: "Custom" },
];

export function createDefaultSections(): ResumeSection[] {
  return SECTION_DEFAULTS.map((s, i) => ({
    key: s.key,
    label: s.label,
    visible: ["summary", "experience", "education", "skills"].includes(s.key),
    order: i,
  }));
}

export function createEmptyResume(title = "Untitled Resume"): Resume {
  const now = new Date().toISOString();
  return {
    id: generateId(),
    title,
    personalInfo: { ...DEFAULT_PERSONAL_INFO },
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
    achievements: [],
    volunteer: [],
    interests: [],
    customSections: [],
    sections: createDefaultSections(),
    design: { ...DEFAULT_DESIGN },
    settings: { ...DEFAULT_SETTINGS },
    createdAt: now,
    updatedAt: now,
  };
}
