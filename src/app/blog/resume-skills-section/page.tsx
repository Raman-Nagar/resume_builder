import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogStickyCTA } from "@/components/blog/BlogStickyCTA";

export const metadata: Metadata = {
  title: "How to Write a Resume Skills Section in 2025 (With Examples)",
  description: "Learn how to write a resume skills section that passes ATS and impresses recruiters. What skills to include, how to list them, and examples for every industry.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/resume-skills-section" },
  openGraph: { title: "How to Write a Resume Skills Section in 2025 (With Examples)", description: "What skills to put on a resume and how to list them.", url: "https://resumebuilder.ramannagar.in/blog/resume-skills-section", type: "article" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "How to Write a Resume Skills Section in 2025 (With Examples)", description: "A complete guide to writing a resume skills section that passes ATS and impresses recruiters.", url: "https://resumebuilder.ramannagar.in/blog/resume-skills-section", datePublished: "2025-01-01", dateModified: "2025-06-01", wordCount: 1200, keywords: ["resume skills section", "skills for resume", "what skills to put on a resume", "resume skills 2025"], image: "https://resumebuilder.ramannagar.in/og-image.png", author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" }, publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" } };

const SKILL_EXAMPLES = [
  { role: "Software Engineer", skills: ["JavaScript", "TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS", "Git"] },
  { role: "Data Analyst", skills: ["Python", "SQL", "Tableau", "Power BI", "Excel", "R", "Google Analytics", "BigQuery"] },
  { role: "Marketing Manager", skills: ["SEO", "Google Ads", "HubSpot", "Content Strategy", "Email Marketing", "Google Analytics", "Copywriting", "A/B Testing"] },
  { role: "Graphic Designer", skills: ["Figma", "Adobe Illustrator", "Photoshop", "InDesign", "After Effects", "Typography", "Brand Identity", "UI Design"] },
  { role: "Project Manager", skills: ["Agile", "Scrum", "Jira", "Confluence", "Risk Management", "Stakeholder Management", "MS Project", "PMP Certified"] },
];

export default function ResumeSkillsSectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Resume Skills Section</span>
        </nav>

        <h1>How to Write a Resume Skills Section in 2025</h1>
        <p className="prose-page__meta">Updated January 2025 · 6 min read</p>
        <p className="prose-page__lead">The skills section is one of the most important parts of your resume for passing ATS filters. Done right, it gets you past the bots and signals to recruiters exactly what you bring.</p>

        <h2>Hard skills vs soft skills — what to include</h2>
        <p><strong>Hard skills</strong> are specific, teachable abilities — programming languages, tools, certifications, software. These are what ATS systems scan for and what recruiters verify. Always include them.</p>
        <p><strong>Soft skills</strong> like &quot;communication&quot; and &quot;leadership&quot; are vague and unverifiable in a skills list. Instead of listing them, demonstrate them through your work experience bullet points.</p>

        <h2>How to choose which skills to list</h2>
        <ol>
          <li>Read the job description carefully and highlight every skill mentioned</li>
          <li>Cross-reference with your actual skills — only list what you can genuinely discuss in an interview</li>
          <li>Use the exact wording from the job posting for ATS matching</li>
          <li>Aim for 8–15 skills — too few looks thin, too many looks padded</li>
        </ol>

        <h2>How to format the skills section</h2>
        <p>There are two common formats:</p>
        <ul>
          <li><strong>Simple list</strong> — skills separated by commas or listed as individual items. Best for ATS compatibility and most roles.</li>
          <li><strong>Grouped by category</strong> — e.g. &quot;Frontend: React, TypeScript, CSS&quot;. Better for technical roles with many skills across different areas.</li>
        </ul>
        <p>Avoid rating your skills with stars or bars. These look unprofessional, mean nothing to recruiters, and confuse ATS parsers.</p>

        <h2>Skills section examples by role</h2>
        {SKILL_EXAMPLES.map((ex) => (
          <div key={ex.role} className="prose-example">
            <p className="prose-example__label">{ex.role}</p>
            <div className="prose-chips">
              {ex.skills.map((skill) => <span key={skill} className="prose-chip">{skill}</span>)}
            </div>
          </div>
        ))}

        <h2>Where to put the skills section</h2>
        <p>For most professionals, place the skills section <strong>after your work experience</strong>. Your experience is more important and should come first. The exception is if you are a recent graduate or career changer — in that case, leading with skills can compensate for limited experience.</p>

        <h2>Should you include proficiency levels?</h2>
        <p>Only if they add genuine value. &quot;Python (Advanced)&quot; is acceptable. Avoid visual rating systems. If you include levels, be honest — claiming &quot;Expert&quot; in something you only used briefly will surface in an interview.</p>

        <div className="prose-page__cta-box">
          <p>Add your skills in our free resume builder</p>
          <p>Our builder lets you group skills by category and set proficiency levels — all ATS-friendly by default.</p>
          <Link href="/choose-template" className="btn btn-accent btn-md">Build My Resume — Free</Link>
        </div>

        <RelatedPosts currentHref="/blog/resume-skills-section" />
      </main>
      <BlogStickyCTA />
    </>
  );
}
