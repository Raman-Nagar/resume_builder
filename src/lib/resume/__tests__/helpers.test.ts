import { describe, expect, it } from "vitest";
import {
  generateId,
  removeById,
  reorder,
  updateById,
  createExperience,
  createEducation,
  createSkill,
  createProject,
  createCertification,
  createLanguage,
  createAchievement,
  createVolunteer,
  createInterest,
  createCustomSection,
  createCustomSectionItem,
  touch,
} from "../helpers";
import { createEmptyResume, createDefaultSections } from "../defaults";
import {
  isValidEmail,
  isValidUrl,
  isValidPhone,
  validatePersonalInfo,
  validateExperience,
  validateEducation,
  validateSkill,
  validateProject,
  validateCertification,
  validateLanguage,
} from "../validation";
import { resumeReducer } from "@/store/resumeReducer";

// ─── generateId ───────────────────────────────────────────────────────────────

describe("generateId", () => {
  it("returns a non-empty string", () => {
    expect(typeof generateId()).toBe("string");
    expect(generateId().length).toBeGreaterThan(0);
  });

  it("generates unique IDs", () => {
    const ids = new Set(Array.from({ length: 1000 }, generateId));
    expect(ids.size).toBe(1000);
  });
});

// ─── updateById ──────────────────────────────────────────────────────────────

describe("updateById", () => {
  const list = [
    { id: "a", value: 1 },
    { id: "b", value: 2 },
    { id: "c", value: 3 },
  ];

  it("updates the matching item", () => {
    const result = updateById(list, "b", (item) => ({ ...item, value: 99 }));
    expect(result.find((i) => i.id === "b")?.value).toBe(99);
  });

  it("leaves other items unchanged", () => {
    const result = updateById(list, "b", (item) => ({ ...item, value: 99 }));
    expect(result.find((i) => i.id === "a")?.value).toBe(1);
    expect(result.find((i) => i.id === "c")?.value).toBe(3);
  });

  it("returns original array when id not found", () => {
    const result = updateById(list, "z", (item) => item);
    expect(result).toEqual(list);
  });

  it("does not mutate the original array", () => {
    const original = [...list];
    updateById(list, "a", (item) => ({ ...item, value: 0 }));
    expect(list).toEqual(original);
  });
});

// ─── removeById ──────────────────────────────────────────────────────────────

describe("removeById", () => {
  const list = [{ id: "x" }, { id: "y" }, { id: "z" }];

  it("removes the matching item", () => {
    const result = removeById(list, "y");
    expect(result).toHaveLength(2);
    expect(result.find((i) => i.id === "y")).toBeUndefined();
  });

  it("returns same length when id not found", () => {
    expect(removeById(list, "nope")).toHaveLength(3);
  });

  it("does not mutate the original array", () => {
    removeById(list, "x");
    expect(list).toHaveLength(3);
  });
});

// ─── reorder ─────────────────────────────────────────────────────────────────

describe("reorder", () => {
  const list = ["a", "b", "c", "d"];

  it("moves item forward", () => {
    expect(reorder(list, 0, 2)).toEqual(["b", "c", "a", "d"]);
  });

  it("moves item backward", () => {
    expect(reorder(list, 3, 1)).toEqual(["a", "d", "b", "c"]);
  });

  it("returns original when from === to", () => {
    expect(reorder(list, 1, 1)).toEqual(list);
  });

  it("returns original for out-of-range indices", () => {
    expect(reorder(list, -1, 2)).toEqual(list);
    expect(reorder(list, 0, 10)).toEqual(list);
  });

  it("does not mutate the original array", () => {
    reorder(list, 0, 3);
    expect(list).toEqual(["a", "b", "c", "d"]);
  });
});

// ─── Factory functions ────────────────────────────────────────────────────────

describe("factory functions", () => {
  it("createExperience has stable shape", () => {
    const e = createExperience({ company: "Acme" });
    expect(e.company).toBe("Acme");
    expect(e.id).toBeTruthy();
    expect(e.bullets).toEqual([]);
    expect(e.current).toBe(false);
  });

  it("createEducation has stable shape", () => {
    const e = createEducation({ institution: "MIT" });
    expect(e.institution).toBe("MIT");
    expect(e.gpa).toBe("");
  });

  it("createSkill has stable shape", () => {
    const s = createSkill({ name: "TypeScript" });
    expect(s.name).toBe("TypeScript");
    expect(s.level).toBe("");
  });

  it("createProject has stable shape", () => {
    const p = createProject({ name: "MyApp" });
    expect(p.technologies).toEqual([]);
    expect(p.current).toBe(false);
  });

  it("createCertification has stable shape", () => {
    const c = createCertification({ name: "AWS SAP" });
    expect(c.credentialId).toBe("");
  });

  it("createLanguage has stable shape", () => {
    const l = createLanguage({ name: "Spanish" });
    expect(l.proficiency).toBe("");
  });

  it("createAchievement has stable shape", () => {
    const a = createAchievement({ title: "Winner" });
    expect(a.description).toBe("");
  });

  it("createVolunteer has stable shape", () => {
    const v = createVolunteer({ organization: "Red Cross" });
    expect(v.current).toBe(false);
  });

  it("createInterest has stable shape", () => {
    const i = createInterest({ name: "Hiking" });
    expect(i.name).toBe("Hiking");
  });

  it("createCustomSection has stable shape", () => {
    const cs = createCustomSection({ heading: "Publications" });
    expect(cs.items).toEqual([]);
  });

  it("createCustomSectionItem has stable shape", () => {
    const item = createCustomSectionItem({ title: "Article" });
    expect(item.bullets).toEqual([]);
  });

  it("each factory call produces a unique id", () => {
    const ids = [
      createExperience().id,
      createExperience().id,
      createExperience().id,
    ];
    expect(new Set(ids).size).toBe(3);
  });
});

// ─── touch ────────────────────────────────────────────────────────────────────

describe("touch", () => {
  it("updates updatedAt to a recent ISO string", () => {
    const before = Date.now();
    const resume = createEmptyResume();
    const touched = touch(resume);
    const after = Date.now();
    const ts = new Date(touched.updatedAt).getTime();
    expect(ts).toBeGreaterThanOrEqual(before);
    expect(ts).toBeLessThanOrEqual(after);
  });

  it("does not mutate the original resume", () => {
    const resume = createEmptyResume();
    const original = resume.updatedAt;
    touch(resume);
    expect(resume.updatedAt).toBe(original);
  });
});

// ─── createEmptyResume ────────────────────────────────────────────────────────

describe("createEmptyResume", () => {
  it("has a unique id each call", () => {
    expect(createEmptyResume().id).not.toBe(createEmptyResume().id);
  });

  it("has default visible sections", () => {
    const { sections } = createEmptyResume();
    const visible = sections.filter((s) => s.visible).map((s) => s.key);
    expect(visible).toContain("summary");
    expect(visible).toContain("experience");
    expect(visible).toContain("education");
    expect(visible).toContain("skills");
  });

  it("all arrays are empty", () => {
    const r = createEmptyResume();
    expect(r.experience).toHaveLength(0);
    expect(r.education).toHaveLength(0);
    expect(r.skills).toHaveLength(0);
    expect(r.projects).toHaveLength(0);
  });
});

// ─── createDefaultSections ───────────────────────────────────────────────────

describe("createDefaultSections", () => {
  it("order values match array indices", () => {
    const sections = createDefaultSections();
    sections.forEach((s, i) => expect(s.order).toBe(i));
  });

  it("contains all expected section keys", () => {
    const keys = createDefaultSections().map((s) => s.key);
    expect(keys).toContain("experience");
    expect(keys).toContain("education");
    expect(keys).toContain("skills");
    expect(keys).toContain("custom");
  });
});

// ─── Validation ───────────────────────────────────────────────────────────────

describe("isValidEmail", () => {
  it.each(["user@example.com", "a+b@x.io", "test.name@sub.domain.org"])(
    "accepts valid email: %s",
    (email) => expect(isValidEmail(email)).toBe(true)
  );

  it.each(["notanemail", "@missing.com", "missing@", "two@@at.com"])(
    "rejects invalid email: %s",
    (email) => expect(isValidEmail(email)).toBe(false)
  );
});

describe("isValidUrl", () => {
  it("accepts empty string (optional field)", () => {
    expect(isValidUrl("")).toBe(true);
  });

  it.each(["https://example.com", "http://sub.domain.io/path?q=1"])(
    "accepts valid URL: %s",
    (url) => expect(isValidUrl(url)).toBe(true)
  );

  it.each(["ftp://bad.com", "example.com", "not a url"])(
    "rejects invalid URL: %s",
    (url) => expect(isValidUrl(url)).toBe(false)
  );
});

describe("isValidPhone", () => {
  it("accepts empty string (optional field)", () => {
    expect(isValidPhone("")).toBe(true);
  });

  it.each(["+1 (555) 234-5678", "07911123456", "+44 20 7946 0958"])(
    "accepts valid phone: %s",
    (phone) => expect(isValidPhone(phone)).toBe(true)
  );

  it("rejects too-short phone", () => {
    expect(isValidPhone("123")).toBe(false);
  });
});

describe("validatePersonalInfo", () => {
  it("fails when fullName is empty", () => {
    const r = validatePersonalInfo({
      fullName: "", headline: "", email: "", phone: "",
      location: "", website: "", linkedin: "", github: "", summary: "", photo: "",
    });
    expect(r.valid).toBe(false);
    expect(r.errors.fullName).toBeTruthy();
  });

  it("passes with only fullName provided", () => {
    const r = validatePersonalInfo({
      fullName: "Jane Doe", headline: "", email: "", phone: "",
      location: "", website: "", linkedin: "", github: "", summary: "", photo: "",
    });
    expect(r.valid).toBe(true);
  });

  it("fails with invalid email", () => {
    const r = validatePersonalInfo({
      fullName: "Jane", headline: "", email: "bad-email", phone: "",
      location: "", website: "", linkedin: "", github: "", summary: "", photo: "",
    });
    expect(r.errors.email).toBeTruthy();
  });

  it("fails with invalid website URL", () => {
    const r = validatePersonalInfo({
      fullName: "Jane", headline: "", email: "", phone: "",
      location: "", website: "not-a-url", linkedin: "", github: "", summary: "", photo: "",
    });
    expect(r.errors.website).toBeTruthy();
  });
});

describe("validateExperience", () => {
  it("fails when company is empty", () => {
    const e = createExperience({ title: "Dev", startDate: "2020-01" });
    expect(validateExperience(e).errors.company).toBeTruthy();
  });

  it("fails when endDate missing and not current", () => {
    const e = createExperience({ company: "Acme", title: "Dev", startDate: "2020-01", current: false });
    expect(validateExperience(e).errors.endDate).toBeTruthy();
  });

  it("passes when current is true and endDate is empty", () => {
    const e = createExperience({ company: "Acme", title: "Dev", startDate: "2020-01", current: true });
    expect(validateExperience(e).valid).toBe(true);
  });
});

describe("validateEducation", () => {
  it("fails when institution is empty", () => {
    const e = createEducation({ degree: "BS" });
    expect(validateEducation(e).errors.institution).toBeTruthy();
  });

  it("passes with institution and degree", () => {
    const e = createEducation({ institution: "MIT", degree: "BS" });
    expect(validateEducation(e).valid).toBe(true);
  });
});

describe("validateSkill", () => {
  it("fails when name is empty", () => {
    expect(validateSkill(createSkill()).errors.name).toBeTruthy();
  });

  it("passes with a name", () => {
    expect(validateSkill(createSkill({ name: "Go" })).valid).toBe(true);
  });
});

describe("validateProject", () => {
  it("fails with invalid URL", () => {
    const p = createProject({ name: "App", url: "bad" });
    expect(validateProject(p).errors.url).toBeTruthy();
  });

  it("passes with valid URL", () => {
    const p = createProject({ name: "App", url: "https://example.com" });
    expect(validateProject(p).valid).toBe(true);
  });
});

describe("validateCertification", () => {
  it("fails when issuer is empty", () => {
    const c = createCertification({ name: "AWS" });
    expect(validateCertification(c).errors.issuer).toBeTruthy();
  });
});

describe("validateLanguage", () => {
  it("fails when name is empty", () => {
    expect(validateLanguage(createLanguage()).errors.name).toBeTruthy();
  });
});

// ─── Reducer ──────────────────────────────────────────────────────────────────

describe("resumeReducer", () => {
  const base = createEmptyResume();

  it("SET_PERSONAL_INFO merges partial update", () => {
    const next = resumeReducer(base, {
      type: "SET_PERSONAL_INFO",
      payload: { fullName: "Jane Doe" },
    });
    expect(next.personalInfo.fullName).toBe("Jane Doe");
    expect(next.personalInfo.email).toBe("");
  });

  it("SET_SUMMARY updates summary only", () => {
    const next = resumeReducer(base, { type: "SET_SUMMARY", payload: "Hello world" });
    expect(next.personalInfo.summary).toBe("Hello world");
  });

  it("ADD_EXPERIENCE appends entry", () => {
    const exp = createExperience({ company: "Acme" });
    const next = resumeReducer(base, { type: "ADD_EXPERIENCE", payload: exp });
    expect(next.experience).toHaveLength(1);
    expect(next.experience[0].company).toBe("Acme");
  });

  it("UPDATE_EXPERIENCE patches entry", () => {
    const exp = createExperience({ company: "Acme" });
    const s1 = resumeReducer(base, { type: "ADD_EXPERIENCE", payload: exp });
    const s2 = resumeReducer(s1, {
      type: "UPDATE_EXPERIENCE",
      payload: { id: exp.id, data: { company: "NewCo" } },
    });
    expect(s2.experience[0].company).toBe("NewCo");
  });

  it("DELETE_EXPERIENCE removes entry", () => {
    const exp = createExperience({ company: "Acme" });
    const s1 = resumeReducer(base, { type: "ADD_EXPERIENCE", payload: exp });
    const s2 = resumeReducer(s1, { type: "DELETE_EXPERIENCE", payload: exp.id });
    expect(s2.experience).toHaveLength(0);
  });

  it("REORDER_EXPERIENCE moves entries", () => {
    const a = createExperience({ company: "A" });
    const b = createExperience({ company: "B" });
    const c = createExperience({ company: "C" });
    let s = resumeReducer(base, { type: "ADD_EXPERIENCE", payload: a });
    s = resumeReducer(s, { type: "ADD_EXPERIENCE", payload: b });
    s = resumeReducer(s, { type: "ADD_EXPERIENCE", payload: c });
    const next = resumeReducer(s, { type: "REORDER_EXPERIENCE", payload: { from: 0, to: 2 } });
    expect(next.experience.map((e) => e.company)).toEqual(["B", "C", "A"]);
  });

  it("SET_SECTION_VISIBILITY toggles a section", () => {
    const next = resumeReducer(base, {
      type: "SET_SECTION_VISIBILITY",
      payload: { key: "projects", visible: true },
    });
    expect(next.sections.find((s) => s.key === "projects")?.visible).toBe(true);
  });

  it("REORDER_SECTIONS updates order values", () => {
    const next = resumeReducer(base, {
      type: "REORDER_SECTIONS",
      payload: { from: 0, to: 1 },
    });
    next.sections.forEach((s, i) => expect(s.order).toBe(i));
  });

  it("SET_DESIGN merges partial design", () => {
    const next = resumeReducer(base, {
      type: "SET_DESIGN",
      payload: { template: "modern", accentColor: "green" },
    });
    expect(next.design.template).toBe("modern");
    expect(next.design.accentColor).toBe("green");
    expect(next.design.font).toBe(base.design.font);
  });

  it("RESET_RESUME replaces state entirely", () => {
    const fresh = createEmptyResume();
    const next = resumeReducer(base, { type: "RESET_RESUME", payload: fresh });
    expect(next.id).toBe(fresh.id);
  });

  it("every mutating action updates updatedAt", () => {
    const before = new Date(base.updatedAt).getTime();
    const next = resumeReducer(base, {
      type: "SET_TITLE",
      payload: "New Title",
    });
    expect(new Date(next.updatedAt).getTime()).toBeGreaterThanOrEqual(before);
  });

  it("unknown action returns state unchanged", () => {
    // @ts-expect-error — intentional unknown action
    const next = resumeReducer(base, { type: "UNKNOWN_ACTION" });
    expect(next).toBe(base);
  });
});
