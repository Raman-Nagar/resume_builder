import type {
  Certification,
  Education,
  Experience,
  Language,
  PersonalInfo,
  Project,
  Skill,
} from "./types";

// ─── Result type ──────────────────────────────────────────────────────────────

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

function result(errors: Record<string, string>): ValidationResult {
  return { valid: Object.keys(errors).length === 0, errors };
}

// ─── Primitive validators ─────────────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /^https?:\/\/.+\..+/;
const PHONE_RE = /^[+\d\s\-().]{7,20}$/;

export function isValidEmail(v: string): boolean {
  return EMAIL_RE.test(v.trim());
}

export function isValidUrl(v: string): boolean {
  return v === "" || URL_RE.test(v.trim());
}

export function isValidPhone(v: string): boolean {
  return v === "" || PHONE_RE.test(v.trim());
}

// ─── Domain validators ────────────────────────────────────────────────────────

export function validatePersonalInfo(p: PersonalInfo): ValidationResult {
  const errors: Record<string, string> = {};

  if (!p.fullName.trim()) errors.fullName = "Full name is required.";
  if (p.email && !isValidEmail(p.email)) errors.email = "Invalid email address.";
  if (p.phone && !isValidPhone(p.phone)) errors.phone = "Invalid phone number.";
  if (p.website && !isValidUrl(p.website)) errors.website = "Must be a valid URL (https://…).";
  if (p.linkedin && !isValidUrl(p.linkedin)) errors.linkedin = "Must be a valid URL (https://…).";
  if (p.github && !isValidUrl(p.github)) errors.github = "Must be a valid URL (https://…).";

  return result(errors);
}

export function validateExperience(e: Experience): ValidationResult {
  const errors: Record<string, string> = {};

  if (!e.company.trim()) errors.company = "Company name is required.";
  if (!e.title.trim()) errors.title = "Job title is required.";
  if (!e.startDate) errors.startDate = "Start date is required.";
  if (!e.current && !e.endDate) errors.endDate = "End date is required unless current.";

  return result(errors);
}

export function validateEducation(e: Education): ValidationResult {
  const errors: Record<string, string> = {};

  if (!e.institution.trim()) errors.institution = "Institution name is required.";
  if (!e.degree.trim()) errors.degree = "Degree is required.";

  return result(errors);
}

export function validateSkill(s: Skill): ValidationResult {
  const errors: Record<string, string> = {};

  if (!s.name.trim()) errors.name = "Skill name is required.";

  return result(errors);
}

export function validateProject(p: Project): ValidationResult {
  const errors: Record<string, string> = {};

  if (!p.name.trim()) errors.name = "Project name is required.";
  if (p.url && !isValidUrl(p.url)) errors.url = "Must be a valid URL (https://…).";

  return result(errors);
}

export function validateCertification(c: Certification): ValidationResult {
  const errors: Record<string, string> = {};

  if (!c.name.trim()) errors.name = "Certification name is required.";
  if (!c.issuer.trim()) errors.issuer = "Issuer is required.";
  if (c.url && !isValidUrl(c.url)) errors.url = "Must be a valid URL (https://…).";

  return result(errors);
}

export function validateLanguage(l: Language): ValidationResult {
  const errors: Record<string, string> = {};

  if (!l.name.trim()) errors.name = "Language name is required.";

  return result(errors);
}
