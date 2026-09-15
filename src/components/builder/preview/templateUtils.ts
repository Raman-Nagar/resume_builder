import type { Resume, ResumeSection, DesignSettings, Skill } from "@/lib/resume/types";

export function formatDate(d: string, fmt: Resume["settings"]["dateFormat"] = "MMM YYYY"): string {
  if (!d) return "";
  const [year, month] = d.split("-");
  if (!month) return year;
  const m = parseInt(month, 10);
  if (fmt === "MM/YYYY") return `${month}/${year}`;
  if (fmt === "YYYY") return year;
  const names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${names[m - 1]} ${year}`;
}

export function dateRange(
  start: string,
  end: string,
  current: boolean,
  fmt?: Resume["settings"]["dateFormat"]
): string {
  const s = formatDate(start, fmt);
  const e = current ? "Present" : formatDate(end, fmt);
  if (!s && !e) return "";
  if (!s) return e;
  if (!e) return s;
  return `${s} – ${e}`;
}

/** Returns sections sorted by order, filtered to only visible ones. */
export function orderedVisible(resume: Resume): ResumeSection[] {
  return [...resume.sections]
    .sort((a, b) => a.order - b.order)
    .filter((s) => s.visible);
}

/** Groups a skill list by category. Uncategorised skills use the key "General". Categories are sorted alphabetically. */
export function groupSkills(list: Skill[]): Record<string, Skill[]> {
  const grouped = list.reduce<Record<string, Skill[]>>((acc, sk) => {
    const cat = sk.category || "General";
    (acc[cat] ??= []).push(sk);
    return acc;
  }, {});
  return Object.fromEntries(Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b)));
}

// ─── Accent color ─────────────────────────────────────────────────────────────

export const ACCENT_HEX: Record<string, string> = {
  black:    "#1a1a1a",
  navy:     "#1e3a5f",
  blue:     "#2563eb",
  green:    "#166534",
  purple:   "#6b21a8",
  burgundy: "#881337",
  custom:   "#2563eb", // fallback only; use resolveAccent()
};

/** Single source of truth for accent color resolution. */
export function resolveAccent(design: DesignSettings): string {
  if (design.accentColor === "custom") {
    const hex = design.customAccentColor?.trim();
    return /^#[0-9a-fA-F]{6}$/.test(hex) ? hex : "#2563eb";
  }
  return ACCENT_HEX[design.accentColor] ?? ACCENT_HEX.navy;
}

// ─── Font size ────────────────────────────────────────────────────────────────

export const FONT_SIZE_PX: Record<string, number> = {
  compact: 11.5,
  normal:  13,
  large:   14.5,
};

export function resolveFontSize(design: DesignSettings): number {
  return FONT_SIZE_PX[design.fontSize] ?? 13;
}

// ─── Page margin ──────────────────────────────────────────────────────────────

export const MARGIN_PX: Record<string, number> = {
  compact:     28,
  normal:      40,
  comfortable: 54,
};

// ─── Font stacks ─────────────────────────────────────────────────────────────

export const FONT_STACK: Record<string, string> = {
  inter:        "'Inter', 'Helvetica Neue', Arial, sans-serif",
  georgia:      "'Georgia', 'Times New Roman', serif",
  lato:         "'Lato', 'Helvetica Neue', Arial, sans-serif",
  "source-serif":"'Source Serif 4', 'Georgia', serif",
  playfair:     "'Playfair Display', 'Georgia', serif",
};

export const FONT_STACK_SANS: Record<string, string> = {
  inter:        "'Inter', 'Helvetica Neue', Arial, sans-serif",
  georgia:      "'Helvetica Neue', Arial, sans-serif",
  lato:         "'Lato', 'Helvetica Neue', Arial, sans-serif",
  "source-serif":"'Helvetica Neue', Arial, sans-serif",
  playfair:     "'Helvetica Neue', Arial, sans-serif",
};

/** Resolve primary body font stack. */
export function resolveFont(design: DesignSettings): string {
  return FONT_STACK[design.font] ?? FONT_STACK.inter;
}

/** Resolve secondary (UI/label) font stack — always sans-serif. */
export function resolveFontSans(design: DesignSettings): string {
  return FONT_STACK_SANS[design.font] ?? FONT_STACK_SANS.inter;
}

// ─── Validation guard ─────────────────────────────────────────────────────────

/**
 * Clamp design settings to prevent unusable combinations.
 * Large font + comfortable spacing would overflow A4 badly.
 */
export function clampDesign(design: DesignSettings): DesignSettings {
  if (design.fontSize === "large" && design.pageMargin === "comfortable") {
    return { ...design, pageMargin: "normal" };
  }
  return design;
}
