import type { TemplateProps } from "./TemplateProps";
import {
  dateRange, formatDate, orderedVisible, groupSkills,
  resolveAccent, resolveFontSize, resolveFont, resolveFontSans, MARGIN_PX, clampDesign,
} from "./templateUtils";

export function CreativeTemplate({ resume }: TemplateProps) {
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

  // Sidebar always stays in the accent color family
  const sidebarBg   = accent;
  const sidebarText = "#ffffff";
  const sidebarMid  = "rgba(255,255,255,0.75)";
  const sidebarFaint= "rgba(255,255,255,0.45)";

  const dark  = "#111827";
  const mid   = "#374151";
  const muted = "#6b7280";
  const rule  = "#e5e7eb";

  // Sidebar sections: contact + skills + languages + interests
  const sidebarKeys = new Set(["skills", "languages", "interests"]);
  const mainSections = sections.filter((s) => !sidebarKeys.has(s.key));
  const visibleSkills    = sections.find((s) => s.key === "skills");
  const visibleLanguages = sections.find((s) => s.key === "languages");
  const visibleInterests = sections.find((s) => s.key === "interests");

  const initials = p.fullName.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "?";

  function SidebarLabel({ label }: { label: string }) {
    return (
      <div style={{
        fontSize: fs * 0.6, fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase" as const, color: sidebarFaint,
        marginBottom: "0.5em", marginTop: "1.3em", fontFamily: uiFont,
        paddingBottom: "0.3em",
        borderBottom: design.showDividers ? `1px solid ${sidebarFaint}` : "none",
      }}>
        {label}
      </div>
    );
  }

  function MainHeading({ label }: { label: string }) {
    return (
      <div data-print-section style={{ marginBottom: "0.7em" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6em" }}>
          <span style={{
            fontSize: fs * 0.66, fontWeight: 700, letterSpacing: "0.09em",
            textTransform: "uppercase" as const, color: accent, fontFamily: uiFont,
          }}>
            {label}
          </span>
          {design.showDividers && <div style={{ flex: 1, height: "2px", backgroundColor: accent, opacity: 0.2, borderRadius: "1px" }} />}
        </div>
      </div>
    );
  }

  const bulletStyle: React.CSSProperties = {
    margin: "0.3em 0 0", paddingLeft: "1.1em",
    fontSize: fs * 0.8, lineHeight: 1.6, fontFamily: bodyFont, color: mid,
  };

  const blockGap = `${mg * 0.8}px`;

  function renderMainSection(sec: ReturnType<typeof orderedVisible>[number]) {
    switch (sec.key) {
      case "summary":
        if (!p.summary) return null;
        return (
          <div key="summary" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} />
            <div style={{ fontSize: fs * 0.86, lineHeight: 1.7, color: mid, fontFamily: bodyFont }}>{p.summary}</div>
          </div>
        );

      case "experience":
        if (!experience.length) return null;
        return (
          <div key="experience" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} />
            {experience.map((e, ei) => (
              <div key={e.id} data-print-entry style={{ marginBottom: ei < experience.length - 1 ? "1em" : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75em", marginBottom: "0.1em" }}>
                  <div>
                    <div style={{ fontSize: fs * 0.92, fontWeight: 700, color: dark, fontFamily: uiFont }}>{e.title}</div>
                    <div style={{ fontSize: fs * 0.78, color: accent, fontWeight: 600, fontFamily: uiFont, marginTop: "0.05em" }}>
                      {[e.company, e.location].filter(Boolean).join(" · ")}
                    </div>
                  </div>
                  <div data-print-date style={{
                    fontSize: fs * 0.72, color: "#ffffff", whiteSpace: "nowrap" as const,
                    flexShrink: 0, fontFamily: uiFont,
                    backgroundColor: accent, borderRadius: "999px",
                    padding: "0.15em 0.65em", marginTop: "0.1em",
                    WebkitPrintColorAdjust: "exact", printColorAdjust: "exact",
                  }}>
                    {dateRange(e.startDate, e.endDate, e.current, fmt)}
                  </div>
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
          <div key="education" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} />
            {education.map((e, ei) => (
              <div key={e.id} data-print-entry style={{ marginBottom: ei < education.length - 1 ? "0.9em" : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75em" }}>
                  <div>
                    <div style={{ fontSize: fs * 0.92, fontWeight: 700, color: dark, fontFamily: uiFont }}>
                      {[e.degree, e.field].filter(Boolean).join(" in ")}
                    </div>
                    <div style={{ fontSize: fs * 0.78, color: accent, fontWeight: 600, fontFamily: uiFont }}>
                      {[e.institution, e.location, e.gpa ? `GPA ${e.gpa}` : ""].filter(Boolean).join(" · ")}
                    </div>
                  </div>
                  <div data-print-date style={{
                    fontSize: fs * 0.72, color: "#ffffff", whiteSpace: "nowrap" as const,
                    flexShrink: 0, fontFamily: uiFont,
                    backgroundColor: accent, borderRadius: "999px",
                    padding: "0.15em 0.65em", marginTop: "0.1em",
                    WebkitPrintColorAdjust: "exact", printColorAdjust: "exact",
                  }}>
                    {dateRange(e.startDate, e.endDate, e.current, fmt)}
                  </div>
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

      case "projects":
        if (!projects.length) return null;
        return (
          <div key="projects" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} />
            {projects.map((proj, pi) => (
              <div key={proj.id} data-print-entry style={{ marginBottom: pi < projects.length - 1 ? "0.9em" : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75em" }}>
                  <div>
                    <div style={{ fontSize: fs * 0.92, fontWeight: 700, color: dark, fontFamily: uiFont }}>{proj.name}</div>
                    {proj.technologies.length > 0 && (
                      <div style={{ fontSize: fs * 0.74, color: muted, fontFamily: uiFont, marginTop: "0.05em" }}>
                        {proj.technologies.join(" · ")}
                      </div>
                    )}
                  </div>
                  {(proj.startDate || proj.current) && (
                    <div data-print-date style={{
                      fontSize: fs * 0.72, color: "#ffffff", whiteSpace: "nowrap" as const,
                      flexShrink: 0, fontFamily: uiFont,
                      backgroundColor: accent, borderRadius: "999px",
                      padding: "0.15em 0.65em", marginTop: "0.1em",
                      WebkitPrintColorAdjust: "exact", printColorAdjust: "exact",
                    }}>
                      {dateRange(proj.startDate, proj.endDate, proj.current, fmt)}
                    </div>
                  )}
                </div>
                {proj.description && <div style={{ fontSize: fs * 0.84, lineHeight: 1.65, color: mid, fontFamily: bodyFont, marginTop: "0.25em" }}>{proj.description}</div>}
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
          <div key="certifications" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} />
            {certifications.map((c, ci) => (
              <div key={c.id} data-print-entry style={{ marginBottom: ci < certifications.length - 1 ? "0.6em" : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em" }}>
                  <div>
                    <div style={{ fontSize: fs * 0.9, fontWeight: 700, color: dark, fontFamily: uiFont }}>{c.name}</div>
                    {(c.issuer || c.credentialId) && (
                      <div style={{ fontSize: fs * 0.78, color: accent, fontWeight: 600, fontFamily: uiFont }}>{[c.issuer, c.credentialId].filter(Boolean).join(" · ")}</div>
                    )}
                  </div>
                  {c.issueDate && (
                    <span data-print-date style={{ fontSize: fs * 0.75, color: muted, flexShrink: 0, fontFamily: uiFont }}>
                      {formatDate(c.issueDate, fmt)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        );

      case "achievements":
        if (!achievements.length) return null;
        return (
          <div key="achievements" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} />
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
          <div key="volunteer" style={{ marginBottom: blockGap }}>
            <MainHeading label={sec.label} />
            {volunteer.map((v, vi) => (
              <div key={v.id} data-print-entry style={{ marginBottom: vi < volunteer.length - 1 ? "0.9em" : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75em" }}>
                  <div>
                    <div style={{ fontSize: fs * 0.92, fontWeight: 700, color: dark, fontFamily: uiFont }}>{v.role}</div>
                    <div style={{ fontSize: fs * 0.78, color: accent, fontWeight: 600, fontFamily: uiFont }}>
                      {[v.organization, v.location].filter(Boolean).join(" · ")}
                    </div>
                  </div>
                  <div data-print-date style={{
                    fontSize: fs * 0.72, color: "#ffffff", whiteSpace: "nowrap" as const,
                    flexShrink: 0, fontFamily: uiFont,
                    backgroundColor: accent, borderRadius: "999px",
                    padding: "0.15em 0.65em", marginTop: "0.1em",
                    WebkitPrintColorAdjust: "exact", printColorAdjust: "exact",
                  }}>
                    {dateRange(v.startDate, v.endDate, v.current, fmt)}
                  </div>
                </div>
                {v.description && <div style={{ fontSize: fs * 0.84, lineHeight: 1.65, color: mid, fontFamily: bodyFont, marginTop: "0.25em" }}>{v.description}</div>}
              </div>
            ))}
          </div>
        );

      case "custom":
        if (!customSections.length) return null;
        return customSections.map((cs) => (
          <div key={cs.id} style={{ marginBottom: blockGap }}>
            <MainHeading label={cs.heading} />
            {cs.items.map((item, ii) => (
              <div key={item.id} data-print-entry style={{ marginBottom: ii < cs.items.length - 1 ? "0.7em" : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em" }}>
                  <span style={{ fontSize: fs * 0.9, fontWeight: 700, color: dark, fontFamily: uiFont }}>{item.title}</span>
                  {item.date && <span data-print-date style={{ fontSize: fs * 0.75, color: muted, flexShrink: 0, fontFamily: uiFont }}>{item.date}</span>}
                </div>
                {item.subtitle && <div style={{ fontSize: fs * 0.78, color: accent, fontWeight: 600, fontFamily: uiFont }}>{item.subtitle}</div>}
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
  }

  return (
    <div style={{
      fontFamily: uiFont, fontSize: `${fs}px`, color: dark,
      display: "flex", backgroundColor: "#ffffff", width: "100%", boxSizing: "border-box",
    }}>
      {/* ── Sidebar ── */}
      <div
        data-print-sidebar-bg
        style={{
          width: "30%", backgroundColor: sidebarBg,
          padding: `${mg * 1.1}px ${Math.round(mg * 0.75)}px ${mg}px`,
          flexShrink: 0, boxSizing: "border-box",
          WebkitPrintColorAdjust: "exact", printColorAdjust: "exact",
        }}
      >
        {/* Avatar */}
        <div style={{
          width: "3.8em", height: "3.8em", borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.2)",
          color: sidebarText, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: fs * 1.15, fontWeight: 700, marginBottom: "0.9em",
          flexShrink: 0, letterSpacing: "-0.02em", overflow: "hidden",
          border: "2px solid rgba(255,255,255,0.35)",
        }}>
          {p.photo
            // eslint-disable-next-line @next/next/no-img-element
            ? <img src={p.photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : initials
          }
        </div>

        {/* Name + headline */}
        <div style={{ fontSize: fs * 1.25, fontWeight: 800, color: sidebarText, lineHeight: 1.15, marginBottom: "0.2em", letterSpacing: "-0.02em", fontFamily: bodyFont }}>
          {p.fullName || "Your Name"}
        </div>
        {p.headline && (
          <div style={{ fontSize: fs * 0.78, color: sidebarMid, lineHeight: 1.4, marginBottom: "1.1em", fontFamily: uiFont }}>
            {p.headline}
          </div>
        )}

        {/* Contact */}
        {[p.email, p.phone, p.location,
          p.website  ? p.website.replace(/^https?:\/\//, "")                                : "",
          p.linkedin ? p.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "in/") : "",
          p.github   ? p.github.replace(/^https?:\/\/(www\.)?github\.com\//, "github.com/") : "",
        ].filter(Boolean).length > 0 && (
          <>
            <SidebarLabel label="Contact" />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4em" }}>
              {[p.email, p.phone, p.location,
                p.website  ? p.website.replace(/^https?:\/\//, "")                                : "",
                p.linkedin ? p.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "in/") : "",
                p.github   ? p.github.replace(/^https?:\/\/(www\.)?github\.com\//, "github.com/") : "",
              ].filter(Boolean).map((item, i) => (
                <div key={i} style={{ fontSize: fs * 0.72, color: sidebarMid, lineHeight: 1.45, wordBreak: "break-all" as const, fontFamily: uiFont }}>
                  {item}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Skills as chips */}
        {visibleSkills && skills.length > 0 && (() => {
          const groups = groupSkills(skills);
          const cats = Object.keys(groups);
          return (
            <>
              <SidebarLabel label={visibleSkills.label} />
              {cats.map((cat) => (
                <div key={cat} style={{ marginBottom: "0.65em" }}>
                  {cats.length > 1 && (
                    <div style={{ fontSize: fs * 0.6, fontWeight: 600, color: sidebarFaint, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "0.35em", fontFamily: uiFont }}>
                      {cat}
                    </div>
                  )}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3em" }}>
                    {groups[cat].map((sk) => (
                      <span key={sk.id} style={{
                        fontSize: fs * 0.68, color: sidebarText, fontFamily: uiFont,
                        backgroundColor: "rgba(255,255,255,0.18)", borderRadius: "999px",
                        padding: "0.2em 0.6em", lineHeight: 1.4,
                        WebkitPrintColorAdjust: "exact", printColorAdjust: "exact",
                      }}>
                        {sk.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </>
          );
        })()}

        {/* Languages */}
        {visibleLanguages && languages.length > 0 && (
          <>
            <SidebarLabel label={visibleLanguages.label} />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35em" }}>
              {languages.map((l) => (
                <div key={l.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: fs * 0.74, color: sidebarText, fontFamily: uiFont }}>{l.name}</span>
                  {l.proficiency && <span style={{ fontSize: fs * 0.66, color: sidebarFaint, fontStyle: "italic", fontFamily: uiFont }}>{l.proficiency}</span>}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Interests */}
        {visibleInterests && interests.length > 0 && (
          <>
            <SidebarLabel label={visibleInterests.label} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3em" }}>
              {interests.map((item) => (
                <span key={item.id} style={{
                  fontSize: fs * 0.68, color: sidebarText, fontFamily: uiFont,
                  backgroundColor: "rgba(255,255,255,0.18)", borderRadius: "999px",
                  padding: "0.2em 0.6em", lineHeight: 1.4,
                  WebkitPrintColorAdjust: "exact", printColorAdjust: "exact",
                }}>
                  {item.name}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Main ── */}
      <div style={{ flex: 1, padding: `${mg * 1.1}px ${Math.round(mg * 0.9)}px ${mg}px`, boxSizing: "border-box", minWidth: 0 }}>
        {/* Decorative rule under name area */}
        <div style={{ height: "3px", backgroundColor: accent, opacity: 0.15, borderRadius: "2px", marginBottom: `${mg * 0.8}px`, WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }} />
        {mainSections.map((sec) => renderMainSection(sec))}
      </div>
    </div>
  );
}
