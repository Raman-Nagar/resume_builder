import type { Resume } from "./types";

export interface ScoreItem {
  id: string;
  label: string;
  done: boolean;
  points: number;
  tip: string;
}

export interface ResumeScore {
  total: number;       // 0–100
  items: ScoreItem[];
  level: "weak" | "fair" | "good" | "strong";
}

export function scoreResume(resume: Resume): ResumeScore {
  const p = resume.personalInfo;

  const items: ScoreItem[] = [
    {
      id: "name",
      label: "Full name",
      done: p.fullName.trim().length > 0,
      points: 5,
      tip: "Add your full name in the Personal section.",
    },
    {
      id: "email",
      label: "Email address",
      done: p.email.trim().length > 0,
      points: 5,
      tip: "Add your email so recruiters can contact you.",
    },
    {
      id: "phone",
      label: "Phone number",
      done: p.phone.trim().length > 0,
      points: 5,
      tip: "Add your phone number for direct contact.",
    },
    {
      id: "location",
      label: "Location",
      done: p.location.trim().length > 0,
      points: 5,
      tip: "Add your city or region — many ATS systems filter by location.",
    },
    {
      id: "headline",
      label: "Professional headline",
      done: p.headline.trim().length > 0,
      points: 5,
      tip: "Add a headline like \"Senior Frontend Engineer\" to pass ATS keyword filters.",
    },
    {
      id: "linkedin",
      label: "LinkedIn profile",
      done: p.linkedin.trim().length > 0,
      points: 5,
      tip: "Add your LinkedIn URL — most recruiters check it.",
    },
    {
      id: "summary",
      label: "Professional summary (50+ chars)",
      done: p.summary.trim().length >= 50,
      points: 10,
      tip: "Write a 2–3 sentence summary packed with relevant keywords.",
    },
    {
      id: "experience",
      label: "At least one job",
      done: resume.experience.length > 0,
      points: 10,
      tip: "Add your work experience — it's the most important section.",
    },
    {
      id: "bullets",
      label: "Experience has bullet points",
      done: resume.experience.length > 0 &&
        resume.experience.some((e) => e.bullets.filter(Boolean).length >= 2),
      points: 10,
      tip: "Add 3–5 achievement-focused bullets per role. Start with action verbs.",
    },
    {
      id: "exp_dates",
      label: "Experience dates filled",
      done: resume.experience.length > 0 &&
        resume.experience.every((e) => e.startDate.trim().length > 0),
      points: 5,
      tip: "Fill in start dates for all experience entries.",
    },
    {
      id: "education",
      label: "Education",
      done: resume.education.length > 0,
      points: 5,
      tip: "Add your highest level of education.",
    },
    {
      id: "skills",
      label: "5 or more skills",
      done: resume.skills.length >= 5,
      points: 10,
      tip: "Add at least 5 skills — ATS systems match job descriptions against your skills list.",
    },
    {
      id: "title",
      label: "Resume has a custom title",
      done: resume.title.trim().length > 0 && resume.title !== "Untitled Resume",
      points: 5,
      tip: "Give your resume a descriptive title like \"Software Engineer Resume\".",
    },
    {
      id: "sections",
      label: "3 or more sections visible",
      done: resume.sections.filter((s) => s.visible).length >= 3,
      points: 5,
      tip: "Enable more sections to give recruiters a complete picture.",
    },
    {
      id: "photo",
      label: "Profile photo",
      done: p.photo.trim().length > 0,
      points: 5,
      tip: "A photo adds a personal touch (optional — skip for US/UK markets).",
    },
  ];

  const total = items.reduce((sum, item) => sum + (item.done ? item.points : 0), 0);

  const level: ResumeScore["level"] =
    total >= 80 ? "strong" :
    total >= 60 ? "good" :
    total >= 35 ? "fair" : "weak";

  return { total, items, level };
}
