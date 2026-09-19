import type { TemplateProps } from "./TemplateProps";
import {
  dateRange, formatDate, orderedVisible, groupSkills,
  resolveAccent, resolveFontSize, resolveFont, resolveFontSans, MARGIN_PX, clampDesign,
} from "./templateUtils";

export function MinimalTemplate({ resume }: TemplateProps) {
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

  const ink   = "#0a0a0a";
  const dark  = "#1a1a1a";
  const mid   = "#3a3a3a";
  const muted = "#6b6b6b";
  const faint = "#9b9b9b";
  const rule  = "#d4d4d4";

  const contactParts = [
    p.email,
    p.phone,
    p.location,
    p.website  ? p.website.replace(/^https?:\/\//, "")                              : "",
    p.linkedin ? p.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "") : "",
    p.github   ? p.github.replace(/^https?:\/\/(www\.)?github\.com\//, "")         : "",
  ].filter(Boolean);

  // Section wrapper — label column + content column
  // data-print-section on the label keeps it from orphaning at page bottom
  function Section({ label, children, last }: { label: string; children: React.ReactNode; last?: boolean }) {
    return (
      <div data-print-section style={{
        display: "flex", gap: "2em",
        paddingTop: `${mg * 0.65}px`,
        paddingBottom: last ? 0 : `${mg * 0.65}px`,
        borderTop: design.showDividers ? `1px solid ${rule}` : "none",
      }}>
        <div style={{ minWidth: "8.5em", flexShrink: 0, paddingTop: "0.08em" }}>
          <span style={{ fontSize: fs * 0.64, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: accent, fontFamily: uiFont, lineHeight: 1.3 }}>
            {label}
          </span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
      </div>
    );
  }

  function Entry({ title, sub, date, description, bullets, technologies, last }: {
    title: string; sub?: string; date?: string; description?: string;
    bullets?: string[]; technologies?: string[]; last?: boolean;
  }) {
    return (
      <div data-print-entry style={{ marginBottom: last ? 0 : "0.85em" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1em", marginBottom: "0.08em" }}>
          <span style={{ fontSize: fs * 0.9, fontWeight: 600, color: dark, lineHeight: 1.25, fontFamily: uiFont, letterSpacing: "-0.01em" }}>
            {title}
          </span>
          {date && (
            <span data-print-date style={{ fontSize: fs * 0.74, color: faint, whiteSpace: "nowrap" as const, flexShrink: 0, fontFamily: uiFont, fontVariantNumeric: "tabular-nums" as const }}>
              {date}
            </span>
          )}
        </div>
        {sub && <div style={{ fontSize: fs * 0.78, color: muted, marginBottom: "0.2em", fontFamily: uiFont }}>{sub}</div>}
        {technologies && technologies.length > 0 && (
          <div style={{ fontSize: fs * 0.74, color: faint, marginBottom: "0.2em", fontFamily: uiFont }}>{technologies.join(" · ")}</div>
        )}
        {description && (
          <div style={{ fontSize: fs * 0.82, lineHeight: 1.65, color: mid, marginTop: "0.2em", fontFamily: bodyFont }}>{description}</div>
        )}
        {bullets && bullets.filter(Boolean).length > 0 && (
          <ul style={{ margin: "0.3em 0 0", paddingLeft: "1em", fontSize: fs * 0.8, lineHeight: 1.65, color: mid, fontFamily: bodyFont }}>
            {bullets.filter(Boolean).map((b, i) => <li key={i} style={{ marginBottom: "0.18em", paddingLeft: "0.2em" }}>{b}</li>)}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: bodyFont, fontSize: `${fs}px`, color: ink, lineHeight: 1.5,
      padding: `${mg + 8}px ${mg + 10}px`, backgroundColor: "#ffffff",
      width: "100%", boxSizing: "border-box",
    }}>
      {/* ── Header ── */}
      <div style={{ marginBottom: `${mg * 0.85}px`, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1em" }}>
        <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: fs * 1.9, fontWeight: 700, color: ink, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: "0.2em", fontFamily: bodyFont }}>
          {p.fullName || "Your Name"}
        </div>
        {p.headline && (
          <div style={{ fontSize: fs * 0.95, color: muted, fontWeight: 400, marginBottom: "0.55em", fontFamily: uiFont, letterSpacing: "0.005em" }}>
            {p.headline}
          </div>
        )}
        {contactParts.length > 0 && (
          <div style={{ fontSize: fs * 0.74, color: faint, fontFamily: uiFont, display: "flex", flexWrap: "wrap", lineHeight: 1.6 }}>
            {contactParts.map((part, i) => (
              <span key={i}>
                {i > 0 && <span style={{ color: rule, margin: "0 0.5em" }}>·</span>}
                {part}
              </span>
            ))}
          </div>
        )}
        </div>
        {p.photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.photo} alt="" style={{ width: "4em", height: "4em", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
        )}
      </div>

      {/* ── Sections ── */}
      {sections.map((sec, si) => {
        const isLast = si === sections.length - 1;
        switch (sec.key) {
          case "summary":
            if (!p.summary) return null;
            return (
              <Section key="summary" label={sec.label} last={isLast}>
                <div style={{ fontSize: fs * 0.86, lineHeight: 1.7, color: mid, fontFamily: bodyFont }}>{p.summary}</div>
              </Section>
            );
          case "experience":
            if (!experience.length) return null;
            return (
              <Section key="experience" label={sec.label} last={isLast}>
                {experience.map((e, ei) => (
                  <Entry key={e.id} title={e.title} sub={[e.company, e.location].filter(Boolean).join(", ")}
                    date={dateRange(e.startDate, e.endDate, e.current, fmt)} bullets={e.bullets} last={ei === experience.length - 1} />
                ))}
              </Section>
            );
          case "education":
            if (!education.length) return null;
            return (
              <Section key="education" label={sec.label} last={isLast}>
                {education.map((e, ei) => (
                  <Entry key={e.id} title={[e.degree, e.field].filter(Boolean).join(" in ")}
                    sub={[e.institution, e.location, e.gpa ? `GPA ${e.gpa}` : ""].filter(Boolean).join(", ")}
                    date={dateRange(e.startDate, e.endDate, e.current, fmt)} bullets={e.bullets} last={ei === education.length - 1} />
                ))}
              </Section>
            );
          case "skills": {
            if (!skills.length) return null;
            const groups = groupSkills(skills);
            const cats = Object.keys(groups);
            return (
              <Section key="skills" label={sec.label} last={isLast}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.3em" }}>
                  {cats.map((cat) => (
                    <div key={cat} style={{ fontSize: fs * 0.82, color: mid, fontFamily: uiFont, lineHeight: 1.5 }}>
                      {cats.length > 1 && <span style={{ color: faint, marginRight: "0.5em", fontWeight: 500 }}>{cat}:</span>}
                      {groups[cat].map((sk) => sk.name).join(", ")}
                    </div>
                  ))}
                </div>
              </Section>
            );
          }
          case "projects":
            if (!projects.length) return null;
            return (
              <Section key="projects" label={sec.label} last={isLast}>
                {projects.map((proj, pi) => (
                  <Entry key={proj.id} title={proj.name} technologies={proj.technologies}
                    date={(proj.startDate || proj.current) ? dateRange(proj.startDate, proj.endDate, proj.current, fmt) : undefined}
                    description={proj.description} bullets={proj.bullets} last={pi === projects.length - 1} />
                ))}
              </Section>
            );
          case "certifications":
            if (!certifications.length) return null;
            return (
              <Section key="certifications" label={sec.label} last={isLast}>
                {certifications.map((c, ci) => (
                  <Entry key={c.id} title={c.name} sub={[c.issuer, c.credentialId].filter(Boolean).join(" · ")}
                    date={c.issueDate ? formatDate(c.issueDate, fmt) : undefined} last={ci === certifications.length - 1} />
                ))}
              </Section>
            );
          case "languages":
            if (!languages.length) return null;
            return (
              <Section key="languages" label={sec.label} last={isLast}>
                <div style={{ fontSize: fs * 0.82, color: mid, fontFamily: uiFont, lineHeight: 1.6 }}>
                  {languages.map((l, i) => (
                    <span key={l.id}>
                      {i > 0 && <span style={{ color: rule, margin: "0 0.5em" }}>·</span>}
                      {l.name}{l.proficiency && <span style={{ color: faint }}> ({l.proficiency})</span>}
                    </span>
                  ))}
                </div>
              </Section>
            );
          case "achievements":
            if (!achievements.length) return null;
            return (
              <Section key="achievements" label={sec.label} last={isLast}>
                {achievements.map((a, ai) => (
                  <Entry key={a.id} title={a.title} date={a.date ? formatDate(a.date, fmt) : undefined}
                    description={a.description} last={ai === achievements.length - 1} />
                ))}
              </Section>
            );
          case "volunteer":
            if (!volunteer.length) return null;
            return (
              <Section key="volunteer" label={sec.label} last={isLast}>
                {volunteer.map((v, vi) => (
                  <Entry key={v.id} title={v.role} sub={[v.organization, v.location].filter(Boolean).join(", ")}
                    date={dateRange(v.startDate, v.endDate, v.current, fmt)} description={v.description} last={vi === volunteer.length - 1} />
                ))}
              </Section>
            );
          case "interests":
            if (!interests.length) return null;
            return (
              <Section key="interests" label={sec.label} last={isLast}>
                <div style={{ fontSize: fs * 0.82, color: mid, fontFamily: uiFont, lineHeight: 1.6 }}>
                  {interests.map((item, i) => (
                    <span key={item.id}>
                      {i > 0 && <span style={{ color: rule, margin: "0 0.5em" }}>·</span>}
                      {item.name}
                    </span>
                  ))}
                </div>
              </Section>
            );
          case "custom":
            if (!customSections.length) return null;
            return customSections.map((cs, csi) => (
              <Section key={cs.id} label={cs.heading} last={isLast && csi === customSections.length - 1}>
                {cs.items.map((item, ii) => (
                  <Entry key={item.id} title={item.title} sub={item.subtitle || undefined} date={item.date || undefined}
                    description={item.description} bullets={item.bullets} last={ii === cs.items.length - 1} />
                ))}
              </Section>
            ));
          default:
            return null;
        }
      })}
    </div>
  );
}
