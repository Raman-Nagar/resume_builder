type ResumeVariant = "classic" | "modern" | "minimal" | "executive" | "creative";

interface ResumePreviewProps {
  variant?: ResumeVariant;
  scale?: number;
}

export function ResumePreview({ variant = "classic", scale }: ResumePreviewProps) {
  if (variant === "modern")    return <ModernResume    scale={scale} />;
  if (variant === "minimal")   return <MinimalResume   scale={scale} />;
  if (variant === "executive") return <ExecutiveResume scale={scale} />;
  if (variant === "creative")  return <CreativeResume  scale={scale} />;
  return <ClassicResume scale={scale} />;
}

/* ─── Shared tokens ──────────────────────────────────────── */
const C = {
  ink:     "#0f172a",
  body:    "#334155",
  muted:   "#64748b",
  faint:   "#94a3b8",
  border:  "#e2e8f0",
  surface: "#f1f5f9",
  accent:  "#2563eb",
  white:   "#ffffff",
  dark:    "#1e293b",
};

/* ─── Classic ─────────────────────────────────────────────── */
function ClassicResume({ scale }: { scale?: number }) {
  const fs = (scale ?? 1) * 7.5;
  const s = {
    sheet:   { fontFamily: "'Georgia','Times New Roman',serif", fontSize: `${fs}px`, color: C.ink, lineHeight: 1.45, padding: "2.6em", backgroundColor: C.white, width: "100%", boxSizing: "border-box" as const },
    header:  { marginBottom: "1em" },
    name:    { fontSize: "2.1em", fontWeight: 700, letterSpacing: "-0.02em", color: C.ink, lineHeight: 1.1, marginBottom: "0.18em" },
    title:   { fontSize: "0.9em", color: C.muted, marginBottom: "0.4em", fontFamily: "sans-serif" },
    contact: { display: "flex", flexWrap: "wrap" as const, gap: "0.25em 0", fontSize: "0.74em", color: C.muted, fontFamily: "sans-serif" },
    dot:     { color: C.border, margin: "0 0.5em" },
    secTitle:{ fontSize: "0.66em", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: C.ink, paddingBottom: "0.4em", borderBottom: `1.5px solid ${C.accent}`, marginBottom: "0.65em", fontFamily: "sans-serif" },
    rule:    { height: "1px", backgroundColor: C.accent, marginBottom: `${fs * 0.7}px`, opacity: 0.85 },
    section: { marginBottom: "1.15em" },
    entry:   { marginBottom: "0.85em" },
    row:     { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.5em", marginBottom: "0.18em" },
    role:    { fontSize: "0.92em", fontWeight: 700, color: C.ink, fontFamily: "sans-serif" },
    org:     { fontSize: "0.82em", color: C.muted, fontFamily: "sans-serif", marginBottom: "0.18em" },
    date:    { fontSize: "0.76em", color: C.muted, whiteSpace: "nowrap" as const, fontFamily: "sans-serif", flexShrink: 0 },
    body:    { fontSize: "0.83em", lineHeight: 1.6, color: C.body },
    bullets: { margin: "0.3em 0 0", paddingLeft: "1.2em", fontSize: "0.82em", color: C.body, lineHeight: 1.6 },
    tags:    { display: "flex", flexWrap: "wrap" as const, gap: "0.3em 0.4em", marginTop: "0.3em" },
    tag:     { fontSize: "0.72em", fontFamily: "sans-serif", backgroundColor: C.surface, color: C.body, padding: "0.22em 0.6em", borderRadius: "3px", border: `1px solid ${C.border}` },
  };
  return (
    <div style={s.sheet}>
      <div style={s.header}>
        <div style={s.name}>Alexandra Chen</div>
        <div style={s.title}>Senior Product Designer</div>
        <div style={s.contact}>
          <span>alexandra.chen@email.com</span><span style={s.dot}>·</span>
          <span>+1 (415) 555-0192</span><span style={s.dot}>·</span>
          <span>San Francisco, CA</span>
        </div>
      </div>
      <div style={s.rule} />
      <div style={s.section}>
        <div style={s.secTitle}>Professional Summary</div>
        <div style={s.body}>Product designer with 7+ years crafting intuitive digital experiences for B2B SaaS. Led design systems at two Series B startups, reducing handoff time by 40%.</div>
      </div>
      <div style={s.section}>
        <div style={s.secTitle}>Work Experience</div>
        <div style={s.entry}>
          <div style={s.row}>
            <div><div style={s.role}>Lead Product Designer</div></div>
            <div style={s.date}>Jan 2021 – Present</div>
          </div>
          <div style={s.org}>Meridian Software · San Francisco, CA</div>
          <ul style={s.bullets}><li>Redesigned core dashboard, increasing engagement by 34%</li><li>Built component library used across 6 product teams</li></ul>
        </div>
        <div style={s.entry}>
          <div style={s.row}>
            <div><div style={s.role}>Product Designer</div></div>
            <div style={s.date}>Mar 2018 – Dec 2020</div>
          </div>
          <div style={s.org}>Vantage Analytics · New York, NY</div>
          <ul style={s.bullets}><li>Designed flows for data visualization platform (50k+ users)</li></ul>
        </div>
      </div>
      <div style={s.section}>
        <div style={s.secTitle}>Education</div>
        <div style={s.row}>
          <div style={s.role}>B.F.A. Interaction Design</div>
          <div style={s.date}>2014 – 2018</div>
        </div>
        <div style={s.org}>California College of the Arts</div>
      </div>
      <div style={s.section}>
        <div style={s.secTitle}>Skills</div>
        <div style={{ fontSize: "0.84em", color: C.body, fontFamily: "sans-serif" }}>
          {["Figma","Prototyping","Design Systems","User Research","Accessibility","Framer"].map((t, i) => (
            <span key={t}>{i > 0 && <span style={s.dot}>·</span>}{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Modern ──────────────────────────────────────────────── */
function ModernResume({ scale }: { scale?: number }) {
  const fs = (scale ?? 1) * 7.5;
  const sidebar: React.CSSProperties = { width: "34%", backgroundColor: C.dark, padding: "2em 1.4em", flexShrink: 0, display: "flex", flexDirection: "column", boxSizing: "border-box" };
  const main:    React.CSSProperties = { flex: 1, padding: "2em 1.5em", boxSizing: "border-box", minWidth: 0 };
  const s = {
    sheet:      { fontFamily: "sans-serif", fontSize: `${fs}px`, color: C.ink, lineHeight: 1.45, display: "flex", backgroundColor: C.white, width: "100%", boxSizing: "border-box" as const },
    avatar:     { width: "3em", height: "3em", borderRadius: "50%", backgroundColor: C.accent, color: C.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1em", fontWeight: 700, marginBottom: "0.8em", flexShrink: 0 } as React.CSSProperties,
    sName:      { fontSize: "1.1em", fontWeight: 700, color: C.white, marginBottom: "0.2em" },
    sRole:      { fontSize: "0.75em", color: C.faint, marginBottom: "1.4em" },
    sSecTitle:  { fontSize: "0.62em", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase" as const, color: C.accent, marginBottom: "0.5em", marginTop: "1.2em" },
    sContact:   { fontSize: "0.72em", color: "#cbd5e1", lineHeight: 1.7 },
    skillRow:   { marginBottom: "0.5em" },
    skillName:  { fontSize: "0.72em", color: "#e2e8f0", marginBottom: "0.2em" },
    skillBar:   { height: "3px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px", overflow: "hidden" },
    mSecTitle:  { fontSize: "0.72em", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: C.accent, marginBottom: "0.5em", paddingBottom: "0.3em", borderBottom: `1.5px solid ${C.accent}22` },
    block:      { marginBottom: "1.2em" },
    entry:      { marginBottom: "0.8em" },
    row:        { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5em", marginBottom: "0.2em" },
    role:       { fontSize: "0.88em", fontWeight: 700, color: C.ink },
    org:        { fontSize: "0.78em", color: C.muted, marginTop: "0.1em" },
    date:       { fontSize: "0.72em", color: C.muted, whiteSpace: "nowrap" as const, flexShrink: 0 },
    body:       { fontSize: "0.82em", lineHeight: 1.6, color: C.body },
    bullets:    { margin: "0.3em 0 0", paddingLeft: "1.1em", fontSize: "0.8em", color: C.body, lineHeight: 1.55 },
  };
  const skills = [["TypeScript", 95], ["React", 90], ["Node.js", 85], ["PostgreSQL", 75], ["AWS", 70]] as [string, number][];
  return (
    <div style={s.sheet}>
      <div style={sidebar}>
        <div style={s.avatar}>AC</div>
        <div style={s.sName}>Alex Carter</div>
        <div style={s.sRole}>Software Engineer</div>
        <div style={s.sSecTitle}>Contact</div>
        <div style={s.sContact}><div>alex@email.com</div><div>+1 (628) 555-0147</div><div>Austin, TX</div><div>github.com/acarter</div></div>
        <div style={s.sSecTitle}>Skills</div>
        {skills.map(([name, pct]) => (
          <div key={name} style={s.skillRow}>
            <div style={s.skillName}>{name}</div>
            <div style={s.skillBar}><div style={{ height: "100%", width: `${pct}%`, backgroundColor: C.accent, borderRadius: "2px" }} /></div>
          </div>
        ))}
      </div>
      <div style={main}>
        <div style={s.block}>
          <div style={s.mSecTitle}>Summary</div>
          <div style={s.body}>Full-stack engineer with 5 years building scalable web applications. Specializes in React ecosystems and cloud-native architectures.</div>
        </div>
        <div style={s.block}>
          <div style={s.mSecTitle}>Experience</div>
          <div style={s.entry}>
            <div style={s.row}><div style={s.role}>Senior Engineer · Cloudbase Inc.</div><div style={s.date}>2022–Present</div></div>
            <ul style={s.bullets}><li>Architected microservices handling 2M+ daily requests</li><li>Reduced API latency by 60% through caching strategy</li></ul>
          </div>
          <div style={s.entry}>
            <div style={s.row}><div style={s.role}>Engineer · Stackr Labs</div><div style={s.date}>2019–2022</div></div>
            <ul style={s.bullets}><li>Built real-time collaboration features for SaaS platform</li></ul>
          </div>
        </div>
        <div style={s.block}>
          <div style={s.mSecTitle}>Education</div>
          <div style={s.role}>B.S. Computer Science</div>
          <div style={s.org}>University of Texas · 2015–2019</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Executive ──────────────────────────────────────────── */
function ExecutiveResume({ scale }: { scale?: number }) {
  const fs = (scale ?? 1) * 7.5;
  const navy = "#1e3a5f";
  const s = {
    sheet:    { fontFamily: "'Georgia','Times New Roman',serif", fontSize: `${fs}px`, color: C.ink, lineHeight: 1.45, backgroundColor: C.white, width: "100%", boxSizing: "border-box" as const },
    hero:     { backgroundColor: navy, color: C.white, padding: "2em 2.6em 1.6em" },
    name:     { fontSize: "2em", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "0.2em" },
    title:    { fontSize: "0.88em", color: "#93c5fd", marginBottom: "0.7em", fontFamily: "sans-serif", letterSpacing: "0.04em" },
    contact:  { display: "flex", flexWrap: "wrap" as const, gap: "0 0", fontSize: "0.72em", color: "#bfdbfe", fontFamily: "sans-serif" },
    dot:      { margin: "0 0.6em", opacity: 0.5 },
    body:     { padding: "1.8em 2.6em" },
    secTitle: { fontSize: "0.64em", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: navy, borderBottom: `2px solid ${navy}`, paddingBottom: "0.35em", marginBottom: "0.7em", fontFamily: "sans-serif" },
    section:  { marginBottom: "1.2em" },
    entry:    { marginBottom: "0.8em" },
    row:      { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.5em", marginBottom: "0.15em" },
    role:     { fontSize: "0.9em", fontWeight: 700, color: C.ink, fontFamily: "sans-serif" },
    org:      { fontSize: "0.8em", color: C.muted, fontFamily: "sans-serif", marginBottom: "0.15em" },
    date:     { fontSize: "0.74em", color: C.muted, whiteSpace: "nowrap" as const, fontFamily: "sans-serif", flexShrink: 0 },
    bodyText: { fontSize: "0.82em", lineHeight: 1.6, color: C.body },
    bullets:  { margin: "0.3em 0 0", paddingLeft: "1.2em", fontSize: "0.81em", color: C.body, lineHeight: 1.6 },
  };
  return (
    <div style={s.sheet}>
      <div style={s.hero}>
        <div style={s.name}>Margaret Holloway</div>
        <div style={s.title}>Chief Operating Officer</div>
        <div style={s.contact}>
          <span>m.holloway@email.com</span><span style={s.dot}>·</span>
          <span>+1 (212) 555-0174</span><span style={s.dot}>·</span>
          <span>New York, NY</span><span style={s.dot}>·</span>
          <span>linkedin.com/in/mholloway</span>
        </div>
      </div>
      <div style={s.body}>
        <div style={s.section}>
          <div style={s.secTitle}>Executive Summary</div>
          <div style={s.bodyText}>Operations executive with 15+ years leading cross-functional teams at Fortune 500 companies. Delivered $120M in cost savings through process transformation and strategic vendor consolidation.</div>
        </div>
        <div style={s.section}>
          <div style={s.secTitle}>Experience</div>
          <div style={s.entry}>
            <div style={s.row}><div style={s.role}>Chief Operating Officer</div><div style={s.date}>2019 – Present</div></div>
            <div style={s.org}>Apex Global Solutions · New York, NY</div>
            <ul style={s.bullets}><li>Scaled operations from 400 to 1,200 employees across 8 countries</li><li>Reduced operational costs by 22% through supply chain restructuring</li></ul>
          </div>
          <div style={s.entry}>
            <div style={s.row}><div style={s.role}>VP of Operations</div><div style={s.date}>2014 – 2019</div></div>
            <div style={s.org}>Meridian Capital Group · Boston, MA</div>
            <ul style={s.bullets}><li>Led $45M ERP implementation across 12 business units</li></ul>
          </div>
        </div>
        <div style={s.section}>
          <div style={s.secTitle}>Education</div>
          <div style={s.row}><div style={s.role}>MBA, Harvard Business School</div><div style={s.date}>2006 – 2008</div></div>
          <div style={s.row}><div style={{ fontSize: "0.82em", color: C.muted, fontFamily: "sans-serif" }}>B.S. Economics, Yale University</div><div style={s.date}>2002 – 2006</div></div>
        </div>
      </div>
    </div>
  );
}

/* ─── Creative ────────────────────────────────────────────── */
function CreativeResume({ scale }: { scale?: number }) {
  const fs = (scale ?? 1) * 7.5;
  const teal = "#0891b2";
  const sidebar: React.CSSProperties = { width: "32%", backgroundColor: "#0c4a6e", padding: "2em 1.3em", flexShrink: 0, display: "flex", flexDirection: "column", boxSizing: "border-box" };
  const main: React.CSSProperties = { flex: 1, padding: "2em 1.5em", boxSizing: "border-box", minWidth: 0 };
  const s = {
    sheet:     { fontFamily: "sans-serif", fontSize: `${fs}px`, color: C.ink, lineHeight: 1.45, display: "flex", backgroundColor: C.white, width: "100%", boxSizing: "border-box" as const },
    avatar:    { width: "3.2em", height: "3.2em", borderRadius: "50%", backgroundColor: teal, color: C.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1em", fontWeight: 700, marginBottom: "0.9em", flexShrink: 0 } as React.CSSProperties,
    sName:     { fontSize: "1.05em", fontWeight: 700, color: C.white, marginBottom: "0.15em" },
    sRole:     { fontSize: "0.72em", color: "#7dd3fc", marginBottom: "1.3em" },
    sLabel:    { fontSize: "0.6em", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: teal, marginBottom: "0.5em", marginTop: "1.1em" },
    sContact:  { fontSize: "0.7em", color: "#bae6fd", lineHeight: 1.8 },
    chip:      { display: "inline-block", fontSize: "0.68em", backgroundColor: "rgba(8,145,178,0.25)", color: "#7dd3fc", padding: "0.2em 0.55em", borderRadius: "999px", margin: "0.15em 0.15em 0 0" },
    mSecTitle: { fontSize: "0.7em", fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase" as const, color: teal, marginBottom: "0.55em", paddingBottom: "0.3em", borderBottom: `1.5px solid ${teal}33` },
    block:     { marginBottom: "1.1em" },
    entry:     { marginBottom: "0.75em" },
    row:       { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.4em", marginBottom: "0.15em" },
    role:      { fontSize: "0.86em", fontWeight: 700, color: C.ink },
    org:       { fontSize: "0.76em", color: C.muted, marginTop: "0.08em" },
    pill:      { fontSize: "0.68em", color: C.white, backgroundColor: teal, padding: "0.15em 0.55em", borderRadius: "999px", whiteSpace: "nowrap" as const, flexShrink: 0 },
    body:      { fontSize: "0.81em", lineHeight: 1.6, color: C.body },
    bullets:   { margin: "0.3em 0 0", paddingLeft: "1.1em", fontSize: "0.79em", color: C.body, lineHeight: 1.55 },
  };
  return (
    <div style={s.sheet}>
      <div style={sidebar}>
        <div style={s.avatar}>SC</div>
        <div style={s.sName}>Sofia Cruz</div>
        <div style={s.sRole}>Brand & UX Designer</div>
        <div style={s.sLabel}>Contact</div>
        <div style={s.sContact}><div>sofia@email.com</div><div>+1 (305) 555-0162</div><div>Miami, FL</div><div>behance.net/sofiacruz</div></div>
        <div style={s.sLabel}>Skills</div>
        <div>{["Figma","Illustrator","After Effects","Webflow","Branding","Motion","Prototyping"].map(sk => <span key={sk} style={s.chip}>{sk}</span>)}</div>
        <div style={s.sLabel}>Languages</div>
        <div style={{ fontSize: "0.7em", color: "#bae6fd", lineHeight: 1.8 }}><div>English — Native</div><div>Spanish — Fluent</div></div>
      </div>
      <div style={main}>
        <div style={s.block}>
          <div style={s.mSecTitle}>About</div>
          <div style={s.body}>Creative designer with 6 years building brand identities and digital experiences for agencies and startups. Passionate about motion design and design systems.</div>
        </div>
        <div style={s.block}>
          <div style={s.mSecTitle}>Experience</div>
          <div style={s.entry}>
            <div style={s.row}><div style={s.role}>Senior Brand Designer</div><div style={s.pill}>2021–Present</div></div>
            <div style={s.org}>Neon Studio · Miami, FL</div>
            <ul style={s.bullets}><li>Led rebrands for 12 clients, avg. 40% uplift in brand recall</li><li>Built motion design system adopted across all client work</li></ul>
          </div>
          <div style={s.entry}>
            <div style={s.row}><div style={s.role}>UX Designer</div><div style={s.pill}>2018–2021</div></div>
            <div style={s.org}>Pixel & Co. · New York, NY</div>
            <ul style={s.bullets}><li>Designed end-to-end flows for 3 mobile app launches</li></ul>
          </div>
        </div>
        <div style={s.block}>
          <div style={s.mSecTitle}>Education</div>
          <div style={s.role}>B.F.A. Graphic Design</div>
          <div style={s.org}>Parsons School of Design · 2014–2018</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Minimal ─────────────────────────────────────────────── */
function MinimalResume({ scale }: { scale?: number }) {
  const fs = (scale ?? 1) * 7.5;
  const s = {
    sheet:    { fontFamily: "sans-serif", fontSize: `${fs}px`, color: C.ink, lineHeight: 1.5, padding: "2.6em", backgroundColor: C.white, width: "100%", boxSizing: "border-box" as const },
    header:   { marginBottom: `${fs * 0.85}px` },
    name:     { fontSize: "1.9em", fontWeight: 700, color: C.ink, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: "0.2em" },
    headline: { fontSize: "0.95em", color: C.muted, marginBottom: "0.55em" },
    contact:  { display: "flex", flexWrap: "wrap" as const, fontSize: "0.74em", color: "#9b9b9b", lineHeight: 1.6 },
    dot:      { color: "#d4d4d4", margin: "0 0.5em" },
    section:  { display: "flex", gap: "2em", paddingTop: `${fs * 0.65}px`, paddingBottom: `${fs * 0.65}px`, borderTop: "1px solid #d4d4d4" },
    label:    { minWidth: "8.5em", flexShrink: 0, fontSize: "0.64em", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: C.accent, paddingTop: "0.08em" },
    content:  { flex: 1, minWidth: 0 },
    entry:    { marginBottom: "0.85em" },
    eRow:     { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.5em", marginBottom: "0.08em" },
    role:     { fontSize: "0.9em", fontWeight: 600, color: C.ink },
    org:      { fontSize: "0.78em", color: C.muted, marginBottom: "0.2em" },
    date:     { fontSize: "0.74em", color: "#9b9b9b", whiteSpace: "nowrap" as const, flexShrink: 0 },
    bullets:  { margin: "0.3em 0 0", paddingLeft: "1em", fontSize: "0.8em", color: C.body, lineHeight: 1.65 },
    skills:   { fontSize: "0.82em", color: C.body },
  };
  return (
    <div style={s.sheet}>
      <div style={s.header}>
        <div style={s.name}>Jordan Rivera</div>
        <div style={s.headline}>Marketing Director</div>
        <div style={s.contact}>
          <span>jordan@email.com</span><span style={s.dot}>·</span>
          <span>+1 (312) 555-0183</span><span style={s.dot}>·</span>
          <span>Chicago, IL</span>
        </div>
      </div>
      <div style={s.section}>
        <div style={s.label}>Experience</div>
        <div style={s.content}>
          <div style={s.entry}>
            <div style={s.eRow}><span style={s.role}>VP of Marketing</span><span style={s.date}>2020–Present</span></div>
            <div style={s.org}>Luminary Brands</div>
            <ul style={s.bullets}><li>Grew organic traffic 3× through content strategy overhaul</li><li>Managed $4M annual marketing budget across 8 channels</li></ul>
          </div>
          <div style={{ ...s.entry, marginBottom: 0 }}>
            <div style={s.eRow}><span style={s.role}>Marketing Manager</span><span style={s.date}>2017–2020</span></div>
            <div style={s.org}>Nexus Media</div>
            <ul style={s.bullets}><li>Launched 20+ campaigns with avg. 28% conversion lift</li></ul>
          </div>
        </div>
      </div>
      <div style={s.section}>
        <div style={s.label}>Education</div>
        <div style={s.content}>
          <div style={s.eRow}><span style={{ fontSize: "0.85em" }}>MBA, Kellogg School of Management</span><span style={s.date}>2015–2017</span></div>
          <div style={s.eRow}><span style={{ fontSize: "0.85em" }}>B.A. Communications, Northwestern</span><span style={s.date}>2011–2015</span></div>
        </div>
      </div>
      <div style={{ ...s.section, borderBottom: "none" }}>
        <div style={s.label}>Skills</div>
        <div style={{ ...s.content, ...s.skills }}>
          {["Brand Strategy","SEO/SEM","Analytics","Copywriting","HubSpot","Figma"].map((sk, i) => (
            <span key={sk}>{i > 0 && <span style={s.dot}>·</span>}{sk}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
