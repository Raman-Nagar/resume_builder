import type { TemplateProps } from "./TemplateProps";
import {
  dateRange, formatDate, orderedVisible, groupSkills,
  resolveAccent, resolveFontSize, resolveFont, resolveFontSans, MARGIN_PX, clampDesign,
} from "./templateUtils";

function IconEmail()    { return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>; }
function IconPhone()    { return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>; }
function IconLocation() { return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>; }
function IconLink()     { return <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>; }
function IconLinkedIn() { return <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>; }
function IconGitHub()   { return <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>; }

// ─── Sub-components hoisted outside render ────────────────────────────────────

interface MainHeadingProps {
  label: string;
  accent: string;
  uiFont: string;
  fs: number;
  showDividers: boolean;
}
function MainHeading({ label, accent, uiFont, fs, showDividers }: MainHeadingProps) {
  return (
    <div data-print-section style={{ display: "flex", alignItems: "center", gap: "0.6em", marginBottom: "0.65em" }}>
      <div style={{ width: "3px", height: "1em", backgroundColor: accent, borderRadius: "2px", flexShrink: 0 }} />
      <span style={{ fontSize: fs * 0.7, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#0f172a", fontFamily: uiFont }}>
        {label}
      </span>
      {showDividers && <div style={{ flex: 1, height: "1px", backgroundColor: "#e2e8f0" }} />}
    </div>
  );
}

interface SidebarHeadingProps {
  label: string;
  accent: string;
  uiFont: string;
  fs: number;
  sidebarFaint: string;
}
function SidebarHeading({ label, accent, uiFont, fs, sidebarFaint }: SidebarHeadingProps) {
  return (
    <div style={{
      fontSize: fs * 0.6, fontWeight: 700, letterSpacing: "0.1em",
      textTransform: "uppercase" as const, color: accent,
      marginBottom: "0.55em", marginTop: "1.4em", fontFamily: uiFont,
      paddingBottom: "0.35em", borderBottom: `1px solid ${sidebarFaint}44`,
    }}>
      {label}
    </div>
  );
}

interface MainEntryProps {
  title: string;
  org?: string;
  date?: string;
  location?: string;
  description?: string;
  bullets?: string[];
  technologies?: string[];
  uiFont: string;
  bodyFont: string;
  fs: number;
}
function MainEntry({ title, org, date, location, description, bullets, technologies, uiFont, bodyFont, fs }: MainEntryProps) {
  return (
    <div data-print-entry style={{ marginBottom: "0.9em" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75em", marginBottom: "0.1em" }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: fs * 0.9, fontWeight: 700, color: "#0f172a", lineHeight: 1.25, fontFamily: uiFont }}>
            {title}
          </div>
          {(org || location) && (
            <div style={{ fontSize: fs * 0.78, color: "#475569", marginTop: "0.1em", fontFamily: uiFont }}>
              {[org, location].filter(Boolean).join(" · ")}
            </div>
          )}
          {technologies && technologies.length > 0 && (
            <div style={{ fontSize: fs * 0.72, color: "#64748b", marginTop: "0.15em", fontFamily: uiFont }}>
              {technologies.join(", ")}
            </div>
          )}
        </div>
        {date && (
          <div data-print-date style={{
            fontSize: fs * 0.72, color: "#64748b", whiteSpace: "nowrap" as const, flexShrink: 0,
            fontFamily: uiFont, paddingTop: "0.15em",
          }}>
            {date}
          </div>
        )}
      </div>
      {description && (
        <div style={{ fontSize: fs * 0.82, lineHeight: 1.6, color: "#334155", marginTop: "0.3em", fontFamily: bodyFont }}>
          {description}
        </div>
      )}
      {bullets && bullets.filter(Boolean).length > 0 && (
        <ul style={{ margin: "0.3em 0 0", paddingLeft: "1.1em", fontSize: fs * 0.8, lineHeight: 1.6, color: "#334155", fontFamily: bodyFont }}>
          {bullets.filter(Boolean).map((b, i) => <li key={i} style={{ marginBottom: "0.2em" }}>{b}</li>)}
        </ul>
      )}
    </div>
  );
}

// ─── Template ─────────────────────────────────────────────────────────────────

export function ModernTemplate({ resume }: TemplateProps) {
  const {
    personalInfo: p,
    experience, education, skills, projects,
    certifications, languages, achievements,
    volunteer, interests, customSections,
    settings,
  } = resume;
  const design = clampDesign(resume.design);

  const accent   = resolveAccent(design);
  const mg       = MARGIN_PX[design.pageMargin] ?? 40;
  const fmt      = settings.dateFormat;
  const fs       = resolveFontSize(design);
  const bodyFont = resolveFont(design);
  const uiFont   = resolveFontSans(design);
  const sections = orderedVisible(resume);

  const sidebarKeys      = new Set(["skills", "languages"]);
  const mainSections     = sections.filter((s) => !sidebarKeys.has(s.key));
  const visibleSkills    = sections.find((s) => s.key === "skills");
  const visibleLanguages = sections.find((s) => s.key === "languages");

  const sidebarBg    = "#1e2a3a";
  const sidebarText  = "#e8edf2";
  const sidebarMid   = "#94a3b8";
  const sidebarFaint = "#5a7090";

  const initials = p.fullName.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "?";
  const levelDots: Record<string, number> = { beginner: 1, intermediate: 2, advanced: 4, expert: 5 };

  type ContactItem = { icon: React.ReactElement; text: string };
  const contactItems: ContactItem[] = [
    p.email    ? { icon: <IconEmail />,    text: p.email } : null,
    p.phone    ? { icon: <IconPhone />,    text: p.phone } : null,
    p.location ? { icon: <IconLocation />, text: p.location } : null,
    p.website  ? { icon: <IconLink />,     text: p.website.replace(/^https?:\/\//, "") } : null,
    p.linkedin ? { icon: <IconLinkedIn />, text: p.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "") } : null,
    p.github   ? { icon: <IconGitHub />,   text: p.github.replace(/^https?:\/\/(www\.)?github\.com\//, "") } : null,
  ].filter((item): item is ContactItem => item !== null);

  function renderMainSection(sec: ReturnType<typeof orderedVisible>[number]) {
    const blockGap = `${mg * 0.8}px`;
    const sharedProps = { uiFont, bodyFont, fs };
    switch (sec.key) {
      case "summary":
        if (!p.summary) return null;
        return (
          <div key="summary" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} accent={accent} uiFont={uiFont} fs={fs} showDividers={design.showDividers} />
            <div style={{ fontSize: fs * 0.84, lineHeight: 1.65, color: "#334155", fontFamily: bodyFont }}>{p.summary}</div>
          </div>
        );
      case "experience":
        if (!experience.length) return null;
        return (
          <div key="experience" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} accent={accent} uiFont={uiFont} fs={fs} showDividers={design.showDividers} />
            {experience.map((e) => (
              <MainEntry key={e.id} title={e.title} org={e.company} location={e.location}
                date={dateRange(e.startDate, e.endDate, e.current, fmt)} bullets={e.bullets} {...sharedProps} />
            ))}
          </div>
        );
      case "education":
        if (!education.length) return null;
        return (
          <div key="education" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} accent={accent} uiFont={uiFont} fs={fs} showDividers={design.showDividers} />
            {education.map((e) => (
              <MainEntry key={e.id} title={[e.degree, e.field].filter(Boolean).join(" in ")}
                org={e.institution} location={e.gpa ? `GPA ${e.gpa}` : undefined}
                date={dateRange(e.startDate, e.endDate, e.current, fmt)} bullets={e.bullets} {...sharedProps} />
            ))}
          </div>
        );
      case "projects":
        if (!projects.length) return null;
        return (
          <div key="projects" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} accent={accent} uiFont={uiFont} fs={fs} showDividers={design.showDividers} />
            {projects.map((proj) => (
              <MainEntry key={proj.id} title={proj.name} technologies={proj.technologies}
                date={(proj.startDate || proj.current) ? dateRange(proj.startDate, proj.endDate, proj.current, fmt) : undefined}
                description={proj.description} bullets={proj.bullets} {...sharedProps} />
            ))}
          </div>
        );
      case "certifications":
        if (!certifications.length) return null;
        return (
          <div key="certifications" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} accent={accent} uiFont={uiFont} fs={fs} showDividers={design.showDividers} />
            {certifications.map((c) => (
              <MainEntry key={c.id} title={c.name} org={[c.issuer, c.credentialId].filter(Boolean).join(" · ")}
                date={c.issueDate ? formatDate(c.issueDate, fmt) : undefined} {...sharedProps} />
            ))}
          </div>
        );
      case "achievements":
        if (!achievements.length) return null;
        return (
          <div key="achievements" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} accent={accent} uiFont={uiFont} fs={fs} showDividers={design.showDividers} />
            {achievements.map((a) => (
              <MainEntry key={a.id} title={a.title} date={a.date ? formatDate(a.date, fmt) : undefined} description={a.description} {...sharedProps} />
            ))}
          </div>
        );
      case "volunteer":
        if (!volunteer.length) return null;
        return (
          <div key="volunteer" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} accent={accent} uiFont={uiFont} fs={fs} showDividers={design.showDividers} />
            {volunteer.map((v) => (
              <MainEntry key={v.id} title={v.role} org={v.organization} location={v.location}
                date={dateRange(v.startDate, v.endDate, v.current, fmt)} description={v.description} {...sharedProps} />
            ))}
          </div>
        );
      case "interests":
        if (!interests.length) return null;
        return (
          <div key="interests" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} accent={accent} uiFont={uiFont} fs={fs} showDividers={design.showDividers} />
            <div style={{ fontSize: fs * 0.8, color: "#475569", fontFamily: uiFont, lineHeight: 1.6 }}>
              {interests.map((item, i) => (
                <span key={item.id}>
                  {i > 0 && <span style={{ color: "#cbd5e1", margin: "0 0.4em" }}>·</span>}
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        );
      case "custom":
        if (!customSections.length) return null;
        return customSections.map((cs) => (
          <div key={cs.id} style={{ marginBottom: blockGap }}>
            <MainHeading label={cs.heading} accent={accent} uiFont={uiFont} fs={fs} showDividers={design.showDividers} />
            {cs.items.map((item) => (
              <MainEntry key={item.id} title={item.title} org={item.subtitle} date={item.date || undefined}
                description={item.description} bullets={item.bullets} {...sharedProps} />
            ))}
          </div>
        ));
      default:
        return null;
    }
  }

  return (
    <div style={{
      fontFamily: uiFont, fontSize: `${fs}px`, color: "#1e293b", lineHeight: 1.45,
      display: "flex", backgroundColor: "#ffffff", width: "100%", boxSizing: "border-box",
    }}>
      {/* ── Sidebar ── */}
      <div
        data-print-sidebar-bg
        style={{
          width: "33%", backgroundColor: sidebarBg,
          padding: `${mg}px ${Math.round(mg * 0.8)}px`,
          flexShrink: 0, boxSizing: "border-box", display: "flex", flexDirection: "column",
          WebkitPrintColorAdjust: "exact", printColorAdjust: "exact",
        }}
      >
        <div style={{
          width: "3.4em", height: "3.4em", borderRadius: "50%", backgroundColor: accent,
          color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: fs * 1.1, fontWeight: 700, marginBottom: "0.85em", flexShrink: 0, letterSpacing: "-0.02em",
          overflow: "hidden",
        }}>
          {p.photo
            // eslint-disable-next-line @next/next/no-img-element
            ? <img src={p.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : initials
          }
        </div>
        <div style={{ fontSize: fs * 1.2, fontWeight: 700, color: "#f8fafc", lineHeight: 1.2, marginBottom: "0.25em", letterSpacing: "-0.01em", fontFamily: bodyFont }}>
          {p.fullName || "Your Name"}
        </div>
        {p.headline && (
          <div style={{ fontSize: fs * 0.78, color: sidebarMid, lineHeight: 1.4, marginBottom: "1.2em" }}>
            {p.headline}
          </div>
        )}
        {contactItems.length > 0 && (
          <>
            <SidebarHeading label="Contact" accent={accent} uiFont={uiFont} fs={fs} sidebarFaint={sidebarFaint} />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.45em" }}>
              {contactItems.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.55em", fontSize: fs * 0.72, color: sidebarText, lineHeight: 1.45, wordBreak: "break-all" as const }}>
                  {design.showIcons && <span style={{ color: sidebarFaint, flexShrink: 0, marginTop: "0.1em" }}>{item.icon}</span>}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </>
        )}
        {visibleSkills && skills.length > 0 && (() => {
          const groups = groupSkills(skills);
          const cats = Object.keys(groups);
          return (
            <>
              <SidebarHeading label={visibleSkills.label} accent={accent} uiFont={uiFont} fs={fs} sidebarFaint={sidebarFaint} />
              {cats.map((cat) => (
                <div key={cat} style={{ marginBottom: "0.7em" }}>
                  {cats.length > 1 && (
                    <div style={{ fontSize: fs * 0.62, fontWeight: 600, color: sidebarFaint, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "0.35em" }}>
                      {cat}
                    </div>
                  )}
                  {groups[cat].map((sk) => (
                    <div key={sk.id} style={{ marginBottom: "0.4em" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.2em" }}>
                        <span style={{ fontSize: fs * 0.74, color: sidebarText }}>{sk.name}</span>
                        {sk.level && (
                          <span style={{ display: "flex", gap: "2px" }}>
                            {[1,2,3,4,5].map((n) => (
                              <span key={n} style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: n <= (levelDots[sk.level] ?? 3) ? accent : "rgba(255,255,255,0.15)" }} />
                            ))}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </>
          );
        })()}
        {visibleLanguages && languages.length > 0 && (
          <>
            <SidebarHeading label={visibleLanguages.label} accent={accent} uiFont={uiFont} fs={fs} sidebarFaint={sidebarFaint} />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4em" }}>
              {languages.map((l) => (
                <div key={l.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: fs * 0.74, color: sidebarText }}>{l.name}</span>
                  {l.proficiency && <span style={{ fontSize: fs * 0.66, color: sidebarFaint, fontStyle: "italic" }}>{l.proficiency}</span>}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Main ── */}
      <div style={{ flex: 1, padding: `${mg}px ${Math.round(mg * 0.9)}px`, boxSizing: "border-box", minWidth: 0 }}>
        {mainSections.map((sec) => renderMainSection(sec))}
      </div>
    </div>
  );
}
