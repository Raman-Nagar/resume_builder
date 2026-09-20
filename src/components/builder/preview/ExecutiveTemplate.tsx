import type { TemplateProps } from "./TemplateProps";
import {
  dateRange, formatDate, orderedVisible, groupSkills,
  resolveAccent, resolveFontSize, resolveFont, resolveFontSans, MARGIN_PX, clampDesign,
} from "./templateUtils";

export function ExecutiveTemplate({ resume }: TemplateProps) {
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

  const dark  = "#0f172a";
  const mid   = "#334155";
  const muted = "#64748b";
  const rule  = "#e2e8f0";

  const contactParts = [
    p.email,
    p.phone,
    p.location,
    p.website  ? p.website.replace(/^https?:\/\//, "")                                : "",
    p.linkedin ? p.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "in/") : "",
    p.github   ? p.github.replace(/^https?:\/\/(www\.)?github\.com\//, "github.com/") : "",
  ].filter(Boolean);

  function SectionHeading({ label }: { label: string }) {
    return (
      <div data-print-section style={{ display: "flex", alignItems: "center", gap: "0.7em", marginBottom: "0.75em" }}>
        <div style={{ width: "3px", alignSelf: "stretch", minHeight: "1.1em", backgroundColor: accent, borderRadius: "2px", flexShrink: 0 }} />
        <span style={{
          fontSize: fs * 0.65, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase" as const, color: dark, fontFamily: uiFont,
        }}>
          {label}
        </span>
        {design.showDividers && <div style={{ flex: 1, height: "1px", backgroundColor: rule }} />}
      </div>
    );
  }

  const bulletStyle: React.CSSProperties = {
    margin: "0.3em 0 0", paddingLeft: "1.2em",
    fontSize: fs * 0.82, lineHeight: 1.6, fontFamily: bodyFont, color: mid,
  };

  const sectionGap = `${mg * 0.8}px`;

  return (
    <div style={{
      fontFamily: bodyFont, fontSize: `${fs}px`, color: dark,
      backgroundColor: "#ffffff", width: "100%", boxSizing: "border-box",
    }}>

      {/* ── Colored header band ── */}
      <div style={{
        backgroundColor: accent,
        padding: `${mg * 1.1}px ${mg + 4}px ${mg * 0.9}px`,
        WebkitPrintColorAdjust: "exact", printColorAdjust: "exact",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1em" }}>
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontSize: fs * 2.1, fontWeight: 800, letterSpacing: "-0.03em",
              lineHeight: 1.05, color: "#ffffff", fontFamily: bodyFont, marginBottom: "0.2em",
            }}>
              {p.fullName || "Your Name"}
            </div>
            {p.headline && (
              <div style={{
                fontSize: fs * 0.95, fontWeight: 400, color: "rgba(255,255,255,0.82)",
                letterSpacing: "0.01em", fontFamily: uiFont, marginBottom: "0.6em",
              }}>
                {p.headline}
              </div>
            )}
            {contactParts.length > 0 && (
              <div style={{
                fontSize: fs * 0.72, color: "rgba(255,255,255,0.7)",
                fontFamily: uiFont, display: "flex", flexWrap: "wrap", gap: "0",
              }}>
                {contactParts.map((part, i) => (
                  <span key={i}>
                    {i > 0 && <span style={{ margin: "0 0.55em", opacity: 0.5 }}>·</span>}
                    {part}
                  </span>
                ))}
              </div>
            )}
          </div>
          {p.photo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.photo} alt="" style={{
              width: "4.5em", height: "4.5em", borderRadius: "50%",
              objectFit: "cover", flexShrink: 0,
              border: "2px solid rgba(255,255,255,0.4)",
            }} />
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: `${mg * 0.9}px ${mg + 4}px ${mg}px` }}>
        {sections.map((sec) => {
          switch (sec.key) {

            case "summary":
              if (!p.summary) return null;
              return (
                <div key="summary" style={{ marginBottom: sectionGap }}>
                  <SectionHeading label={sec.label} />
                  <div style={{ fontSize: fs * 0.86, lineHeight: 1.7, color: mid, fontFamily: bodyFont }}>{p.summary}</div>
                </div>
              );

            case "experience":
              if (!experience.length) return null;
              return (
                <div key="experience" style={{ marginBottom: sectionGap }}>
                  <SectionHeading label={sec.label} />
                  {experience.map((e, ei) => (
                    <div key={e.id} data-print-entry style={{ marginBottom: ei < experience.length - 1 ? "1em" : 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.15em" }}>
                        <span style={{ fontSize: fs * 0.93, fontWeight: 700, color: dark, fontFamily: uiFont }}>{e.title}</span>
                        <span data-print-date style={{ fontSize: fs * 0.75, color: muted, flexShrink: 0, fontFamily: uiFont }}>
                          {dateRange(e.startDate, e.endDate, e.current, fmt)}
                        </span>
                      </div>
                      <div style={{ fontSize: fs * 0.8, color: accent, fontWeight: 600, fontFamily: uiFont, marginBottom: "0.2em" }}>
                        {[e.company, e.location].filter(Boolean).join(" · ")}
                      </div>
                      {e.bullets.filter(Boolean).length > 0 && (
                        <ul style={bulletStyle}>
                          {e.bullets.filter(Boolean).map((b, i) => <li key={i} style={{ marginBottom: "0.2em" }}>{b}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              );

            case "education":
              if (!education.length) return null;
              return (
                <div key="education" style={{ marginBottom: sectionGap }}>
                  <SectionHeading label={sec.label} />
                  {education.map((e, ei) => (
                    <div key={e.id} data-print-entry style={{ marginBottom: ei < education.length - 1 ? "0.9em" : 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.15em" }}>
                        <span style={{ fontSize: fs * 0.93, fontWeight: 700, color: dark, fontFamily: uiFont }}>
                          {[e.degree, e.field].filter(Boolean).join(" in ")}
                        </span>
                        <span data-print-date style={{ fontSize: fs * 0.75, color: muted, flexShrink: 0, fontFamily: uiFont }}>
                          {dateRange(e.startDate, e.endDate, e.current, fmt)}
                        </span>
                      </div>
                      <div style={{ fontSize: fs * 0.8, color: accent, fontWeight: 600, fontFamily: uiFont }}>
                        {[e.institution, e.location, e.gpa ? `GPA ${e.gpa}` : ""].filter(Boolean).join(" · ")}
                      </div>
                      {e.bullets.filter(Boolean).length > 0 && (
                        <ul style={bulletStyle}>
                          {e.bullets.filter(Boolean).map((b, i) => <li key={i} style={{ marginBottom: "0.2em" }}>{b}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              );

            case "skills": {
              if (!skills.length) return null;
              const groups = groupSkills(skills);
              const cats = Object.keys(groups);
              return (
                <div key="skills" style={{ marginBottom: sectionGap }}>
                  <SectionHeading label={sec.label} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.35em" }}>
                    {cats.map((cat) => (
                      <div key={cat} style={{ display: "flex", gap: "0.6em", alignItems: "baseline", fontSize: fs * 0.84, fontFamily: uiFont }}>
                        {cats.length > 1 && (
                          <span style={{ color: accent, flexShrink: 0, minWidth: "7em", fontWeight: 600 }}>{cat}:</span>
                        )}
                        <span style={{ color: mid }}>{groups[cat].map((sk) => sk.name).join(", ")}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            case "projects":
              if (!projects.length) return null;
              return (
                <div key="projects" style={{ marginBottom: sectionGap }}>
                  <SectionHeading label={sec.label} />
                  {projects.map((proj, pi) => (
                    <div key={proj.id} data-print-entry style={{ marginBottom: pi < projects.length - 1 ? "0.9em" : 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.15em" }}>
                        <span style={{ fontSize: fs * 0.93, fontWeight: 700, color: dark, fontFamily: uiFont }}>{proj.name}</span>
                        {(proj.startDate || proj.current) && (
                          <span data-print-date style={{ fontSize: fs * 0.75, color: muted, flexShrink: 0, fontFamily: uiFont }}>
                            {dateRange(proj.startDate, proj.endDate, proj.current, fmt)}
                          </span>
                        )}
                      </div>
                      {proj.technologies.length > 0 && (
                        <div style={{ fontSize: fs * 0.78, color: accent, fontWeight: 600, fontFamily: uiFont, marginBottom: "0.15em" }}>
                          {proj.technologies.join(", ")}
                        </div>
                      )}
                      {proj.description && <div style={{ fontSize: fs * 0.84, lineHeight: 1.65, color: mid, fontFamily: bodyFont }}>{proj.description}</div>}
                      {proj.bullets.filter(Boolean).length > 0 && (
                        <ul style={bulletStyle}>
                          {proj.bullets.filter(Boolean).map((b, i) => <li key={i} style={{ marginBottom: "0.2em" }}>{b}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              );

            case "certifications":
              if (!certifications.length) return null;
              return (
                <div key="certifications" style={{ marginBottom: sectionGap }}>
                  <SectionHeading label={sec.label} />
                  {certifications.map((c, ci) => (
                    <div key={c.id} data-print-entry style={{ marginBottom: ci < certifications.length - 1 ? "0.6em" : 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em" }}>
                        <span style={{ fontSize: fs * 0.9, fontWeight: 700, color: dark, fontFamily: uiFont }}>{c.name}</span>
                        {c.issueDate && (
                          <span data-print-date style={{ fontSize: fs * 0.75, color: muted, flexShrink: 0, fontFamily: uiFont }}>
                            {formatDate(c.issueDate, fmt)}
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: fs * 0.8, color: accent, fontWeight: 600, fontFamily: uiFont }}>
                        {[c.issuer, c.credentialId].filter(Boolean).join(" · ")}
                      </div>
                    </div>
                  ))}
                </div>
              );

            case "languages":
              if (!languages.length) return null;
              return (
                <div key="languages" style={{ marginBottom: sectionGap }}>
                  <SectionHeading label={sec.label} />
                  <div style={{ fontSize: fs * 0.84, color: mid, fontFamily: uiFont, lineHeight: 1.6 }}>
                    {languages.map((l, i) => (
                      <span key={l.id}>
                        {i > 0 && <span style={{ color: rule, margin: "0 0.5em" }}>·</span>}
                        {l.name}{l.proficiency && <span style={{ color: muted }}> — {l.proficiency}</span>}
                      </span>
                    ))}
                  </div>
                </div>
              );

            case "achievements":
              if (!achievements.length) return null;
              return (
                <div key="achievements" style={{ marginBottom: sectionGap }}>
                  <SectionHeading label={sec.label} />
                  {achievements.map((a, ai) => (
                    <div key={a.id} data-print-entry style={{ marginBottom: ai < achievements.length - 1 ? "0.6em" : 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em" }}>
                        <span style={{ fontSize: fs * 0.9, fontWeight: 700, color: dark, fontFamily: uiFont }}>{a.title}</span>
                        {a.date && <span data-print-date style={{ fontSize: fs * 0.75, color: muted, flexShrink: 0, fontFamily: uiFont }}>{formatDate(a.date, fmt)}</span>}
                      </div>
                      {a.description && <div style={{ fontSize: fs * 0.84, lineHeight: 1.65, color: mid, fontFamily: bodyFont }}>{a.description}</div>}
                    </div>
                  ))}
                </div>
              );

            case "volunteer":
              if (!volunteer.length) return null;
              return (
                <div key="volunteer" style={{ marginBottom: sectionGap }}>
                  <SectionHeading label={sec.label} />
                  {volunteer.map((v, vi) => (
                    <div key={v.id} data-print-entry style={{ marginBottom: vi < volunteer.length - 1 ? "0.9em" : 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.15em" }}>
                        <span style={{ fontSize: fs * 0.93, fontWeight: 700, color: dark, fontFamily: uiFont }}>{v.role}</span>
                        <span data-print-date style={{ fontSize: fs * 0.75, color: muted, flexShrink: 0, fontFamily: uiFont }}>
                          {dateRange(v.startDate, v.endDate, v.current, fmt)}
                        </span>
                      </div>
                      <div style={{ fontSize: fs * 0.8, color: accent, fontWeight: 600, fontFamily: uiFont, marginBottom: "0.15em" }}>
                        {[v.organization, v.location].filter(Boolean).join(" · ")}
                      </div>
                      {v.description && <div style={{ fontSize: fs * 0.84, lineHeight: 1.65, color: mid, fontFamily: bodyFont }}>{v.description}</div>}
                    </div>
                  ))}
                </div>
              );

            case "interests":
              if (!interests.length) return null;
              return (
                <div key="interests" style={{ marginBottom: sectionGap }}>
                  <SectionHeading label={sec.label} />
                  <div style={{ fontSize: fs * 0.84, color: mid, fontFamily: uiFont, lineHeight: 1.6 }}>
                    {interests.map((item, i) => (
                      <span key={item.id}>
                        {i > 0 && <span style={{ color: rule, margin: "0 0.5em" }}>·</span>}
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              );

            case "custom":
              if (!customSections.length) return null;
              return customSections.map((cs) => (
                <div key={cs.id} style={{ marginBottom: sectionGap }}>
                  <SectionHeading label={cs.heading} />
                  {cs.items.map((item, ii) => (
                    <div key={item.id} data-print-entry style={{ marginBottom: ii < cs.items.length - 1 ? "0.7em" : 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em" }}>
                        <span style={{ fontSize: fs * 0.9, fontWeight: 700, color: dark, fontFamily: uiFont }}>{item.title}</span>
                        {item.date && <span data-print-date style={{ fontSize: fs * 0.75, color: muted, flexShrink: 0, fontFamily: uiFont }}>{item.date}</span>}
                      </div>
                      {item.subtitle && <div style={{ fontSize: fs * 0.8, color: accent, fontWeight: 600, fontFamily: uiFont }}>{item.subtitle}</div>}
                      {item.description && <div style={{ fontSize: fs * 0.84, lineHeight: 1.65, color: mid, fontFamily: bodyFont }}>{item.description}</div>}
                      {item.bullets.filter(Boolean).length > 0 && (
                        <ul style={bulletStyle}>
                          {item.bullets.filter(Boolean).map((b, i) => <li key={i} style={{ marginBottom: "0.2em" }}>{b}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ));

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
