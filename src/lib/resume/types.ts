// ─── Primitive helpers ────────────────────────────────────────────────────────

export type ISODateString = string; // "YYYY-MM-DD" or "YYYY-MM"
export type TemplateId = "classic" | "modern" | "minimal" | "executive" | "creative";
export type SectionKey =
  | "summary"
  | "experience"
  | "education"
  | "skills"
  | "projects"
  | "certifications"
  | "languages"
  | "achievements"
  | "volunteer"
  | "interests"
  | "custom";

// ─── Domain models ────────────────────────────────────────────────────────────

export interface PersonalInfo {
  fullName: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  summary: string;
  photo: string;
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: ISODateString;
  endDate: ISODateString;
  current: boolean;
  bullets: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: ISODateString;
  endDate: ISODateString;
  current: boolean;
  gpa: string;
  bullets: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert" | "";
  category: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  githubUrl: string;
  startDate: ISODateString;
  endDate: ISODateString;
  current: boolean;
  bullets: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: ISODateString;
  expiryDate: ISODateString;
  credentialId: string;
  url: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: "elementary" | "limited" | "professional" | "full" | "native" | "";
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: ISODateString;
}

export interface VolunteerExperience {
  id: string;
  organization: string;
  role: string;
  location: string;
  startDate: ISODateString;
  endDate: ISODateString;
  current: boolean;
  description: string;
}

export interface Interest {
  id: string;
  name: string;
}

export interface CustomSectionItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  url: string;
  description: string;
  bullets: string[];
}

export interface CustomSection {
  id: string;
  heading: string;
  items: CustomSectionItem[];
}

// ─── Section config ───────────────────────────────────────────────────────────

export interface ResumeSection {
  key: SectionKey;
  label: string;
  visible: boolean;
  order: number;
}

// ─── Design / settings ────────────────────────────────────────────────────────

export type FontFamily =
  | "inter"
  | "georgia"
  | "lato"
  | "source-serif"
  | "playfair";
export type AccentColor =
  | "black"
  | "navy"
  | "blue"
  | "green"
  | "purple"
  | "burgundy"
  | "custom";
export type FontSize = "compact" | "normal" | "large";
export type PageMargin = "compact" | "normal" | "comfortable";

export interface DesignSettings {
  template: TemplateId;
  font: FontFamily;
  accentColor: AccentColor;
  customAccentColor: string; // hex, used when accentColor === "custom"
  fontSize: FontSize;
  pageMargin: PageMargin;
  showIcons: boolean;
  showDividers: boolean;
}

export interface ResumeSettings {
  language: string; // BCP-47, e.g. "en"
  dateFormat: "MMM YYYY" | "MM/YYYY" | "YYYY";
  pageSize: "A4" | "Letter";
}

// ─── Root Resume ──────────────────────────────────────────────────────────────

export interface Resume {
  id: string;
  title: string;
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  achievements: Achievement[];
  volunteer: VolunteerExperience[];
  interests: Interest[];
  customSections: CustomSection[];
  sections: ResumeSection[];
  design: DesignSettings;
  settings: ResumeSettings;
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}
