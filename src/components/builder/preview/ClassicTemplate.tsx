import type { TemplateProps } from "./TemplateProps";
import {
  dateRange, formatDate, orderedVisible, groupSkills,
  resolveFontSize, resolveFont, resolveFontSans, MARGIN_PX,
} from "./templateUtils";

export function ClassicTemplate({ resume }: TemplateProps) {
  const {
    personalInfo: p,
    experience, education, skills, projects,
    certifications, languages, achievements,
    volunteer, interests, customSections,
    design, settings,
  } = resume;

  const mg       = MARGIN_PX[design.pageMargin] ?? 40;
  const fmt      = settings.dateFormat;
  const fs       = resolveFontSize(design);
  const bodyFont = resolveFont(design);
  const uiFont   = resolveFontSans(design);
  const sections = orderedVisible(resume);

  const ink    = "#0f0f0f";
  const dark   = "#1a1a1a";
  const mid    = "#404040";
  const muted  = "#6b6b6b";
  const border = "#d0d0d0";

  const contactParts = [
    p.email,
    p.phone,
    p.location,
    p.website  ? p.website.replace(/^https?:\/\//, "")                                : "",
    p.linkedin ? p.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "in/") : "",
    p.github   ? p.github.replace(/^https?:\/\/(www\.)?github\.com\//, "github.com/") : "",
  ].filter(Boolean);

  // Section heading — break-after:avoid keeps it glued to the first entry
  function SectionHeading({ label }: { label: string }) {
    return (
      <div data-print-section style={{ marginBottom: "0.55em" }}>
        <div style={{
          fontSize: fs * 0.66,
          lineHeight: 1.2,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase" as const,
          fontFamily: uiFont,
          color: dark,
          paddingBottom: "0.4em",
          borderBottom: `1.5px solid ${ink}`,
        }}>
          {label}
        </div>
      </div>
    );
  }

  const bulletStyle: React.CSSProperties = {
    margin: "0.3em 0 0",
    paddingLeft: "1.2em",
    fontSize: fs * 0.82,
    lineHeight: 1.6,
    fontFamily: bodyFont,
    color: mid,
  };

  const bodyStyle: React.CSSProperties = {
    fontSize: fs * 0.84,
    lineHeight: 1.65,
    fontFamily: bodyFont,
    color: mid,
  };

  const sectionGap = `${mg * 0.75}px`;

  return (
    <div style={{
      fontFamily: bodyFont,
      fontSize: `${fs}px`,
      color: ink,
      lineHeight: 1.45,
      padding: `${mg}px ${mg + 4}px`,
      backgroundColor: "#ffffff",
      width: "100%",
      boxSizing: "border-box",
    }}>

      {/* ── Header ── */}
      <div style={{ marginBottom: "1em" }}>
        <div style={{
          fontSize: fs * 1.75,
          lineHeight: 1.1,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          fontFamily: bodyFont,
          color: dark,
          marginBottom: "0.2em",
        }}>
          {p.fullName || "Your Name"}
        </div>
        {p.headline && (
          <div style={{
            fontSize: fs * 0.9,
            lineHeight: 1.35,
            fontFamily: uiFont,
            color: mid,
            marginBottom: "0.45em",
            fontWeight: 400,
            letterSpacing: "0.005em",
          }}>
            {p.headline}
          </div>
        )}
        {contactParts.length > 0 && (
          <div style={{
            fontSize: fs * 0.74,
            lineHeight: 1.5,
            fontFamily: uiFont,
            color: muted,
            display: "flex",
            flexWrap: "wrap",
            gap: "0 0",
          }}>
            {contactParts.map((part, i) => (
              <span key={i}>
                {i > 0 && <span style={{ color: border, margin: "0 0.5em" }}>·</span>}
                {part}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Divider rule */}
      <div style={{ height: "1px", backgroundColor: ink, marginBottom: `${mg * 0.7}px`, opacity: 0.85 }} />

      {/* ── Sections ── */}
      {sections.map((sec) => {
        switch (sec.key) {

          case "summary":
            if (!p.summary) return null;
            return (
              <div key="summary" style={{ marginBottom: sectionGap }}>
                <SectionHeading label={sec.label} />
                <div style={bodyStyle}>{p.summary}</div>
              </div>
            );

          case "experience":
            if (!experience.length) return null;
            return (
              <div key="experience" style={{ marginBottom: sectionGap }}>
                <SectionHeading label={sec.label} />
                {experience.map((e, ei) => (
                  // data-print-entry on the whole card keeps title+company+first bullet together
                  <div key={e.id} data-print-entry style={{ marginBottom: ei < experience.length - 1 ? "0.9em" : 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.18em" }}>
                      <span style={{ fontSize: fs * 0.92, lineHeight: 1.25, fontWeight: 700, fontFamily: uiFont, color: dark }}>
                        {e.title}
                      </span>
                      <span data-print-date style={{ fontSize: fs * 0.76, lineHeight: 1.3, fontFamily: uiFont, color: muted, flexShrink: 0 }}>
                        {dateRange(e.startDate, e.endDate, e.current, fmt)}
                      </span>
                    </div>
                    <div style={{ fontSize: fs * 0.82, lineHeight: 1.3, fontFamily: uiFont, color: mid, marginBottom: "0.18em" }}>
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.18em" }}>
                      <span style={{ fontSize: fs * 0.92, lineHeight: 1.25, fontWeight: 700, fontFamily: uiFont, color: dark }}>
                        {[e.degree, e.field].filter(Boolean).join(" in ")}
                      </span>
                      <span data-print-date style={{ fontSize: fs * 0.76, lineHeight: 1.3, fontFamily: uiFont, color: muted, flexShrink: 0 }}>
                        {dateRange(e.startDate, e.endDate, e.current, fmt)}
                      </span>
                    </div>
                    <div style={{ fontSize: fs * 0.82, lineHeight: 1.3, fontFamily: uiFont, color: mid, marginBottom: "0.18em" }}>
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
                <div style={{ display: "flex", flexDirection: "column", gap: "0.3em" }}>
                  {cats.map((cat) => (
                    <div key={cat} style={{ display: "flex", gap: "0.6em", alignItems: "baseline", fontSize: fs * 0.84, fontFamily: uiFont }}>
                      {cats.length > 1 && (
                        <span style={{ color: muted, flexShrink: 0, minWidth: "6.5em", fontWeight: 600 }}>{cat}:</span>
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.18em" }}>
                      <span style={{ fontSize: fs * 0.92, lineHeight: 1.25, fontWeight: 700, fontFamily: uiFont, color: dark }}>
                        {proj.name}
                      </span>
                      {(proj.startDate || proj.current) && (
                        <span data-print-date style={{ fontSize: fs * 0.76, lineHeight: 1.3, fontFamily: uiFont, color: muted, flexShrink: 0 }}>
                          {dateRange(proj.startDate, proj.endDate, proj.current, fmt)}
                        </span>
                      )}
                    </div>
                    {proj.technologies.length > 0 && (
                      <div style={{ fontSize: fs * 0.82, lineHeight: 1.3, fontFamily: uiFont, color: mid, marginBottom: "0.18em" }}>
                        {proj.technologies.join(", ")}
                      </div>
                    )}
                    {proj.description && <div style={{ ...bodyStyle, marginBottom: "0.2em" }}>{proj.description}</div>}
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.18em" }}>
                      <span style={{ fontSize: fs * 0.92, lineHeight: 1.25, fontWeight: 700, fontFamily: uiFont, color: dark }}>
                        {c.name}
                      </span>
                      {c.issueDate && (
                        <span data-print-date style={{ fontSize: fs * 0.76, lineHeight: 1.3, fontFamily: uiFont, color: muted, flexShrink: 0 }}>
                          {[formatDate(c.issueDate, fmt), c.expiryDate ? formatDate(c.expiryDate, fmt) : ""].filter(Boolean).join(" – ")}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: fs * 0.82, lineHeight: 1.3, fontFamily: uiFont, color: mid }}>
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
                <div style={{ ...bodyStyle, fontFamily: uiFont }}>
                  {languages.map((l) => [l.name, l.proficiency].filter(Boolean).join(" — ")).join("  ·  ")}
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.18em" }}>
                      <span style={{ fontSize: fs * 0.92, lineHeight: 1.25, fontWeight: 700, fontFamily: uiFont, color: dark }}>
                        {a.title}
                      </span>
                      {a.date && (
                        <span data-print-date style={{ fontSize: fs * 0.76, lineHeight: 1.3, fontFamily: uiFont, color: muted, flexShrink: 0 }}>
                          {formatDate(a.date, fmt)}
                        </span>
                      )}
                    </div>
                    {a.description && <div style={bodyStyle}>{a.description}</div>}
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.18em" }}>
                      <span style={{ fontSize: fs * 0.92, lineHeight: 1.25, fontWeight: 700, fontFamily: uiFont, color: dark }}>
                        {v.role}
                      </span>
                      <span data-print-date style={{ fontSize: fs * 0.76, lineHeight: 1.3, fontFamily: uiFont, color: muted, flexShrink: 0 }}>
                        {dateRange(v.startDate, v.endDate, v.current, fmt)}
                      </span>
                    </div>
                    <div style={{ fontSize: fs * 0.82, lineHeight: 1.3, fontFamily: uiFont, color: mid, marginBottom: "0.18em" }}>
                      {[v.organization, v.location].filter(Boolean).join(" · ")}
                    </div>
                    {v.description && <div style={bodyStyle}>{v.description}</div>}
                  </div>
                ))}
              </div>
            );

          case "interests":
            if (!interests.length) return null;
            return (
              <div key="interests" style={{ marginBottom: sectionGap }}>
                <SectionHeading label={sec.label} />
                <div style={{ ...bodyStyle, fontFamily: uiFont }}>
                  {interests.map((i) => i.name).join("  ·  ")}
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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.18em" }}>
                      <span style={{ fontSize: fs * 0.92, lineHeight: 1.25, fontWeight: 700, fontFamily: uiFont, color: dark }}>
                        {item.title}
                      </span>
                      {item.date && (
                        <span data-print-date style={{ fontSize: fs * 0.76, lineHeight: 1.3, fontFamily: uiFont, color: muted, flexShrink: 0 }}>
                          {item.date}
                        </span>
                      )}
                    </div>
                    {item.subtitle && (
                      <div style={{ fontSize: fs * 0.82, lineHeight: 1.3, fontFamily: uiFont, color: mid }}>{item.subtitle}</div>
                    )}
                    {item.description && <div style={bodyStyle}>{item.description}</div>}
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
  );
}
