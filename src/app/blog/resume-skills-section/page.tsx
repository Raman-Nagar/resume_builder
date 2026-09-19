import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Write a Resume Skills Section in 2025 (With Examples)",
  description:
    "Learn how to write a resume skills section that passes ATS and impresses recruiters. What skills to include, how to list them, and examples for every industry.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/resume-skills-section" },
  openGraph: {
    title: "How to Write a Resume Skills Section in 2025 (With Examples)",
    description: "What skills to put on a resume, how to list them, and examples for every industry.",
    url: "https://resumebuilder.ramannagar.in/blog/resume-skills-section",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Resume Skills Section in 2025 (With Examples)",
  description: "A complete guide to writing a resume skills section — what to include, how to format it, and examples for every industry.",
  url: "https://resumebuilder.ramannagar.in/blog/resume-skills-section",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" },
  publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" },
};

const SKILL_EXAMPLES = [
  {
    role: "Software Engineer",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS", "Git"],
  },
  {
    role: "Data Analyst",
    skills: ["Python", "SQL", "Tableau", "Power BI", "Excel", "R", "Google Analytics", "BigQuery"],
  },
  {
    role: "Marketing Manager",
    skills: ["SEO", "Google Ads", "HubSpot", "Content Strategy", "Email Marketing", "Google Analytics", "Copywriting", "A/B Testing"],
  },
  {
    role: "Graphic Designer",
    skills: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "After Effects", "Typography", "Brand Identity", "UI Design"],
  },
  {
    role: "Project Manager",
    skills: ["Agile", "Scrum", "Jira", "Confluence", "Risk Management", "Stakeholder Management", "MS Project", "PMP Certified"],
  },
];

export default function ResumeSkillsSectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 740, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.8 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
          <Link href="/" style={{ color: "#2563eb" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "#2563eb" }}>Blog</Link>{" › "}
          <span>Resume Skills Section</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>How to Write a Resume Skills Section in 2025</h1>
        <p style={{ color: "#64748b", fontSize: 14, marginBottom: 32 }}>Updated January 2025 · 6 min read</p>

        <p style={{ fontSize: 17, marginBottom: 32 }}>
          The skills section is one of the most important parts of your resume for passing ATS filters. Done right, it gets you past the bots and signals to recruiters exactly what you bring. Here is how to do it correctly.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Hard skills vs soft skills — what to include</h2>
        <p style={{ marginBottom: 16 }}>
          <strong>Hard skills</strong> are specific, teachable abilities — programming languages, tools, certifications, software. These are what ATS systems scan for and what recruiters verify. Always include them.
        </p>
        <p style={{ marginBottom: 32 }}>
          <strong>Soft skills</strong> like &quot;communication&quot;, &quot;leadership&quot;, and &quot;teamwork&quot; are vague and unverifiable in a skills list. Every candidate claims them. Instead of listing them, demonstrate them through your work experience bullet points — &quot;Led a cross-functional team of 8 to deliver a product launch 2 weeks ahead of schedule.&quot;
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>How to choose which skills to list</h2>
        <ol style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}>Read the job description carefully and highlight every skill mentioned</li>
          <li style={{ marginBottom: 8 }}>Cross-reference with your actual skills — only list what you can genuinely discuss in an interview</li>
          <li style={{ marginBottom: 8 }}>Use the exact wording from the job posting for ATS matching</li>
          <li style={{ marginBottom: 8 }}>Aim for 8–15 skills — too few looks thin, too many looks padded</li>
        </ol>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>How to format the skills section</h2>
        <p style={{ marginBottom: 16 }}>There are two common formats:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><strong>Simple list</strong> — skills separated by commas or listed as individual items. Best for ATS compatibility and most roles.</li>
          <li style={{ marginBottom: 8 }}><strong>Grouped by category</strong> — e.g. &quot;Frontend: React, TypeScript, CSS&quot; and &quot;Backend: Node.js, PostgreSQL&quot;. Better for technical roles with many skills across different areas.</li>
        </ul>
        <p style={{ marginBottom: 32 }}>
          Avoid rating your skills with stars or bars (e.g. ████░ Advanced). These look unprofessional, mean nothing to recruiters, and confuse ATS parsers.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 16 }}>Skills section examples by role</h2>

        {SKILL_EXAMPLES.map((ex) => (
          <div key={ex.role} style={{ marginBottom: 24, padding: "20px 24px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8 }}>
            <p style={{ fontWeight: 600, marginBottom: 12, color: "#2563eb" }}>{ex.role}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {ex.skills.map((skill) => (
                <span key={skill} style={{ backgroundColor: "#e0e7ff", color: "#3730a3", padding: "4px 12px", borderRadius: 20, fontSize: 14 }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Where to put the skills section</h2>
        <p style={{ marginBottom: 32 }}>
          For most professionals, place the skills section <strong>after your work experience</strong>. Your experience is more important and should come first. The exception is if you are a recent graduate or career changer — in that case, leading with skills can compensate for limited experience.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Should you include proficiency levels?</h2>
        <p style={{ marginBottom: 40 }}>
          Only if they add genuine value. &quot;Python (Advanced)&quot; is acceptable. Avoid visual rating systems. If you include levels, be honest — claiming &quot;Expert&quot; in something you only used briefly will surface in an interview.
        </p>

        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "24px 28px", marginBottom: 40 }}>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>Add your skills in our free resume builder</p>
          <p style={{ marginBottom: 16, color: "#475569" }}>Our builder lets you group skills by category and set proficiency levels — all ATS-friendly by default.</p>
          <Link href="/builder" style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>
            Build My Resume — Free
          </Link>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", borderTop: "1px solid #e2e8f0", paddingTop: 24 }}>
          <Link href="/blog/resume-summary-examples" style={{ color: "#2563eb" }}>→ Resume Summary Examples</Link>
          <Link href="/blog/ats-resume-tips" style={{ color: "#2563eb" }}>→ ATS Resume Tips</Link>
          <Link href="/blog/how-to-write-a-resume" style={{ color: "#2563eb" }}>→ How to Write a Resume</Link>
        </div>
      </main>
    </>
  );
}
