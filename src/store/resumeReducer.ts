import type {
  Achievement,
  Certification,
  CustomSection,
  CustomSectionItem,
  DesignSettings,
  Education,
  Experience,
  Interest,
  Language,
  PersonalInfo,
  Project,
  Resume,
  ResumeSettings,
  SectionKey,
  Skill,
  VolunteerExperience,
} from "@/lib/resume/types";
import {
  removeById,
  reorder,
  touch,
  updateById,
} from "@/lib/resume/helpers";

// ─── Action types ─────────────────────────────────────────────────────────────

export type ResumeAction =
  // Personal info & summary
  | { type: "SET_PERSONAL_INFO"; payload: Partial<PersonalInfo> }
  | { type: "SET_SUMMARY"; payload: string }
  // Experience
  | { type: "ADD_EXPERIENCE"; payload: Experience }
  | { type: "UPDATE_EXPERIENCE"; payload: { id: string; data: Partial<Experience> } }
  | { type: "DELETE_EXPERIENCE"; payload: string }
  | { type: "REORDER_EXPERIENCE"; payload: { from: number; to: number } }
  // Education
  | { type: "ADD_EDUCATION"; payload: Education }
  | { type: "UPDATE_EDUCATION"; payload: { id: string; data: Partial<Education> } }
  | { type: "DELETE_EDUCATION"; payload: string }
  | { type: "REORDER_EDUCATION"; payload: { from: number; to: number } }
  // Skills
  | { type: "ADD_SKILL"; payload: Skill }
  | { type: "UPDATE_SKILL"; payload: { id: string; data: Partial<Skill> } }
  | { type: "DELETE_SKILL"; payload: string }
  | { type: "REORDER_SKILLS"; payload: { from: number; to: number } }
  | { type: "RENAME_SKILL_CATEGORY"; payload: { from: string; to: string } }
  | { type: "DELETE_SKILL_CATEGORY"; payload: string }
  // Projects
  | { type: "ADD_PROJECT"; payload: Project }
  | { type: "UPDATE_PROJECT"; payload: { id: string; data: Partial<Project> } }
  | { type: "DELETE_PROJECT"; payload: string }
  | { type: "REORDER_PROJECTS"; payload: { from: number; to: number } }
  // Certifications
  | { type: "ADD_CERTIFICATION"; payload: Certification }
  | { type: "UPDATE_CERTIFICATION"; payload: { id: string; data: Partial<Certification> } }
  | { type: "DELETE_CERTIFICATION"; payload: string }
  // Languages
  | { type: "ADD_LANGUAGE"; payload: Language }
  | { type: "UPDATE_LANGUAGE"; payload: { id: string; data: Partial<Language> } }
  | { type: "DELETE_LANGUAGE"; payload: string }
  // Achievements
  | { type: "ADD_ACHIEVEMENT"; payload: Achievement }
  | { type: "UPDATE_ACHIEVEMENT"; payload: { id: string; data: Partial<Achievement> } }
  | { type: "DELETE_ACHIEVEMENT"; payload: string }
  // Volunteer
  | { type: "ADD_VOLUNTEER"; payload: VolunteerExperience }
  | { type: "UPDATE_VOLUNTEER"; payload: { id: string; data: Partial<VolunteerExperience> } }
  | { type: "DELETE_VOLUNTEER"; payload: string }
  // Interests
  | { type: "ADD_INTEREST"; payload: Interest }
  | { type: "UPDATE_INTEREST"; payload: { id: string; data: Partial<Interest> } }
  | { type: "DELETE_INTEREST"; payload: string }
  // Custom sections
  | { type: "ADD_CUSTOM_SECTION"; payload: CustomSection }
  | { type: "UPDATE_CUSTOM_SECTION"; payload: { id: string; data: Partial<CustomSection> } }
  | { type: "DELETE_CUSTOM_SECTION"; payload: string }
  | { type: "ADD_CUSTOM_SECTION_ITEM"; payload: { sectionId: string; item: CustomSectionItem } }
  | { type: "UPDATE_CUSTOM_SECTION_ITEM"; payload: { sectionId: string; itemId: string; data: Partial<CustomSectionItem> } }
  | { type: "DELETE_CUSTOM_SECTION_ITEM"; payload: { sectionId: string; itemId: string } }
  // Design & settings
  | { type: "SET_DESIGN"; payload: Partial<DesignSettings> }
  | { type: "SET_SETTINGS"; payload: Partial<ResumeSettings> }
  // Sections config
  | { type: "SET_SECTION_VISIBILITY"; payload: { key: SectionKey; visible: boolean } }
  | { type: "REORDER_SECTIONS"; payload: { from: number; to: number } }
  | { type: "SET_SECTION_LABEL"; payload: { key: SectionKey; label: string } }
  // Meta
  | { type: "SET_TITLE"; payload: string }
  | { type: "RESET_RESUME"; payload: Resume };

// ─── Reducer ──────────────────────────────────────────────────────────────────

export function resumeReducer(state: Resume, action: ResumeAction): Resume {
  switch (action.type) {
    // ── Personal info ──────────────────────────────────────────────────────
    case "SET_PERSONAL_INFO":
      return touch({ ...state, personalInfo: { ...state.personalInfo, ...action.payload } });

    case "SET_SUMMARY":
      return touch({ ...state, personalInfo: { ...state.personalInfo, summary: action.payload } });

    // ── Experience ─────────────────────────────────────────────────────────
    case "ADD_EXPERIENCE":
      return touch({ ...state, experience: [...state.experience, action.payload] });

    case "UPDATE_EXPERIENCE":
      return touch({
        ...state,
        experience: updateById(state.experience, action.payload.id, (e) => ({
          ...e,
          ...action.payload.data,
        })),
      });

    case "DELETE_EXPERIENCE":
      return touch({ ...state, experience: removeById(state.experience, action.payload) });

    case "REORDER_EXPERIENCE":
      return touch({
        ...state,
        experience: reorder(state.experience, action.payload.from, action.payload.to),
      });

    // ── Education ──────────────────────────────────────────────────────────
    case "ADD_EDUCATION":
      return touch({ ...state, education: [...state.education, action.payload] });

    case "UPDATE_EDUCATION":
      return touch({
        ...state,
        education: updateById(state.education, action.payload.id, (e) => ({
          ...e,
          ...action.payload.data,
        })),
      });

    case "DELETE_EDUCATION":
      return touch({ ...state, education: removeById(state.education, action.payload) });

    case "REORDER_EDUCATION":
      return touch({
        ...state,
        education: reorder(state.education, action.payload.from, action.payload.to),
      });

    // ── Skills ─────────────────────────────────────────────────────────────
    case "ADD_SKILL":
      return touch({ ...state, skills: [...state.skills, action.payload] });

    case "UPDATE_SKILL":
      return touch({
        ...state,
        skills: updateById(state.skills, action.payload.id, (s) => ({
          ...s,
          ...action.payload.data,
        })),
      });

    case "DELETE_SKILL":
      return touch({ ...state, skills: removeById(state.skills, action.payload) });

    case "REORDER_SKILLS":
      return touch({
        ...state,
        skills: reorder(state.skills, action.payload.from, action.payload.to),
      });

    case "RENAME_SKILL_CATEGORY":
      return touch({
        ...state,
        skills: state.skills.map((s) =>
          s.category === action.payload.from ? { ...s, category: action.payload.to } : s
        ),
      });

    case "DELETE_SKILL_CATEGORY":
      return touch({
        ...state,
        skills: state.skills.filter((s) => s.category !== action.payload),
      });

    // ── Projects ───────────────────────────────────────────────────────────
    case "ADD_PROJECT":
      return touch({ ...state, projects: [...state.projects, action.payload] });

    case "UPDATE_PROJECT":
      return touch({
        ...state,
        projects: updateById(state.projects, action.payload.id, (p) => ({
          ...p,
          ...action.payload.data,
        })),
      });

    case "DELETE_PROJECT":
      return touch({ ...state, projects: removeById(state.projects, action.payload) });

    case "REORDER_PROJECTS":
      return touch({
        ...state,
        projects: reorder(state.projects, action.payload.from, action.payload.to),
      });

    // ── Certifications ─────────────────────────────────────────────────────
    case "ADD_CERTIFICATION":
      return touch({ ...state, certifications: [...state.certifications, action.payload] });

    case "UPDATE_CERTIFICATION":
      return touch({
        ...state,
        certifications: updateById(state.certifications, action.payload.id, (c) => ({
          ...c,
          ...action.payload.data,
        })),
      });

    case "DELETE_CERTIFICATION":
      return touch({ ...state, certifications: removeById(state.certifications, action.payload) });

    // ── Languages ──────────────────────────────────────────────────────────
    case "ADD_LANGUAGE":
      return touch({ ...state, languages: [...state.languages, action.payload] });

    case "UPDATE_LANGUAGE":
      return touch({
        ...state,
        languages: updateById(state.languages, action.payload.id, (l) => ({
          ...l,
          ...action.payload.data,
        })),
      });

    case "DELETE_LANGUAGE":
      return touch({ ...state, languages: removeById(state.languages, action.payload) });

    // ── Achievements ───────────────────────────────────────────────────────
    case "ADD_ACHIEVEMENT":
      return touch({ ...state, achievements: [...state.achievements, action.payload] });

    case "UPDATE_ACHIEVEMENT":
      return touch({
        ...state,
        achievements: updateById(state.achievements, action.payload.id, (a) => ({
          ...a,
          ...action.payload.data,
        })),
      });

    case "DELETE_ACHIEVEMENT":
      return touch({ ...state, achievements: removeById(state.achievements, action.payload) });

    // ── Volunteer ──────────────────────────────────────────────────────────
    case "ADD_VOLUNTEER":
      return touch({ ...state, volunteer: [...state.volunteer, action.payload] });

    case "UPDATE_VOLUNTEER":
      return touch({
        ...state,
        volunteer: updateById(state.volunteer, action.payload.id, (v) => ({
          ...v,
          ...action.payload.data,
        })),
      });

    case "DELETE_VOLUNTEER":
      return touch({ ...state, volunteer: removeById(state.volunteer, action.payload) });

    // ── Interests ──────────────────────────────────────────────────────────
    case "ADD_INTEREST":
      return touch({ ...state, interests: [...state.interests, action.payload] });

    case "UPDATE_INTEREST":
      return touch({
        ...state,
        interests: updateById(state.interests, action.payload.id, (i) => ({
          ...i,
          ...action.payload.data,
        })),
      });

    case "DELETE_INTEREST":
      return touch({ ...state, interests: removeById(state.interests, action.payload) });

    // ── Custom sections ────────────────────────────────────────────────────
    case "ADD_CUSTOM_SECTION":
      return touch({ ...state, customSections: [...state.customSections, action.payload] });

    case "UPDATE_CUSTOM_SECTION":
      return touch({
        ...state,
        customSections: updateById(state.customSections, action.payload.id, (cs) => ({
          ...cs,
          ...action.payload.data,
        })),
      });

    case "DELETE_CUSTOM_SECTION":
      return touch({ ...state, customSections: removeById(state.customSections, action.payload) });

    case "ADD_CUSTOM_SECTION_ITEM":
      return touch({
        ...state,
        customSections: updateById(
          state.customSections,
          action.payload.sectionId,
          (cs) => ({ ...cs, items: [...cs.items, action.payload.item] })
        ),
      });

    case "UPDATE_CUSTOM_SECTION_ITEM":
      return touch({
        ...state,
        customSections: updateById(
          state.customSections,
          action.payload.sectionId,
          (cs) => ({
            ...cs,
            items: updateById(cs.items, action.payload.itemId, (item) => ({
              ...item,
              ...action.payload.data,
            })),
          })
        ),
      });

    case "DELETE_CUSTOM_SECTION_ITEM":
      return touch({
        ...state,
        customSections: updateById(
          state.customSections,
          action.payload.sectionId,
          (cs) => ({
            ...cs,
            items: removeById(cs.items, action.payload.itemId),
          })
        ),
      });

    // ── Design & settings ──────────────────────────────────────────────────
    case "SET_DESIGN":
      return touch({ ...state, design: { ...state.design, ...action.payload } });

    case "SET_SETTINGS":
      return touch({ ...state, settings: { ...state.settings, ...action.payload } });

    // ── Section config ─────────────────────────────────────────────────────
    case "SET_SECTION_VISIBILITY":
      return touch({
        ...state,
        sections: state.sections.map((s) =>
          s.key === action.payload.key ? { ...s, visible: action.payload.visible } : s
        ),
      });

    case "REORDER_SECTIONS": {
      const reordered = reorder(state.sections, action.payload.from, action.payload.to).map(
        (s, i) => ({ ...s, order: i })
      );
      return touch({ ...state, sections: reordered });
    }

    case "SET_SECTION_LABEL":
      return touch({
        ...state,
        sections: state.sections.map((s) =>
          s.key === action.payload.key ? { ...s, label: action.payload.label } : s
        ),
      });

    // ── Meta ───────────────────────────────────────────────────────────────
    case "SET_TITLE":
      return touch({ ...state, title: action.payload });

    case "RESET_RESUME":
      return action.payload;

    default:
      return state;
  }
}
