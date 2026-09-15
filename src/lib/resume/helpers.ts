import type {
  Achievement,
  Certification,
  CustomSection,
  CustomSectionItem,
  Education,
  Experience,
  Interest,
  Language,
  Project,
  Resume,
  Skill,
  VolunteerExperience,
} from "./types";

// ─── ID generation ────────────────────────────────────────────────────────────

/** Generates a stable, collision-resistant ID without external deps. */
export function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

// ─── Entity helpers ───────────────────────────────────────────────────────────

/** Returns a new array with the item at `index` replaced by `updater(item)`. */
export function updateById<T extends { id: string }>(
  list: T[],
  id: string,
  updater: (item: T) => T
): T[] {
  return list.map((item) => (item.id === id ? updater(item) : item));
}

/** Returns a new array without the item matching `id`. */
export function removeById<T extends { id: string }>(
  list: T[],
  id: string
): T[] {
  return list.filter((item) => item.id !== id);
}

/**
 * Moves the item at `fromIndex` to `toIndex` (both 0-based).
 * Returns the original array if indices are out of range or equal.
 */
export function reorder<T>(list: T[], fromIndex: number, toIndex: number): T[] {
  if (
    fromIndex === toIndex ||
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= list.length ||
    toIndex >= list.length
  ) {
    return list;
  }
  const result = [...list];
  const [moved] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, moved);
  return result;
}

// ─── Default object factories ─────────────────────────────────────────────────

export function createExperience(partial: Partial<Experience> = {}): Experience {
  return {
    id: generateId(),
    company: "",
    title: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    bullets: [],
    ...partial,
  };
}

export function createEducation(partial: Partial<Education> = {}): Education {
  return {
    id: generateId(),
    institution: "",
    degree: "",
    field: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    gpa: "",
    bullets: [],
    ...partial,
  };
}

export function createSkill(partial: Partial<Skill> = {}): Skill {
  return {
    id: generateId(),
    name: "",
    level: "",
    category: "",
    ...partial,
  };
}

export function createProject(partial: Partial<Project> = {}): Project {
  return {
    id: generateId(),
    name: "",
    description: "",
    url: "",
    githubUrl: "",
    startDate: "",
    endDate: "",
    current: false,
    bullets: [],
    technologies: [],
    ...partial,
  };
}

export function createCertification(
  partial: Partial<Certification> = {}
): Certification {
  return {
    id: generateId(),
    name: "",
    issuer: "",
    issueDate: "",
    expiryDate: "",
    credentialId: "",
    url: "",
    ...partial,
  };
}

export function createLanguage(partial: Partial<Language> = {}): Language {
  return {
    id: generateId(),
    name: "",
    proficiency: "",
    ...partial,
  };
}

export function createAchievement(
  partial: Partial<Achievement> = {}
): Achievement {
  return {
    id: generateId(),
    title: "",
    description: "",
    date: "",
    ...partial,
  };
}

export function createVolunteer(
  partial: Partial<VolunteerExperience> = {}
): VolunteerExperience {
  return {
    id: generateId(),
    organization: "",
    role: "",
    location: "",
    startDate: "",
    endDate: "",
    current: false,
    description: "",
    ...partial,
  };
}

export function createInterest(partial: Partial<Interest> = {}): Interest {
  return {
    id: generateId(),
    name: "",
    ...partial,
  };
}

export function createCustomSectionItem(
  partial: Partial<CustomSectionItem> = {}
): CustomSectionItem {
  return {
    id: generateId(),
    title: "",
    subtitle: "",
    date: "",
    url: "",
    description: "",
    bullets: [],
    ...partial,
  };
}

export function createCustomSection(
  partial: Partial<CustomSection> = {}
): CustomSection {
  return {
    id: generateId(),
    heading: "Custom Section",
    items: [],
    ...partial,
  };
}

/** Stamps `updatedAt` on a resume without mutating the original. */
export function touch(resume: Resume): Resume {
  return { ...resume, updatedAt: new Date().toISOString() };
}
