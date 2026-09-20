import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogStickyCTA } from "@/components/blog/BlogStickyCTA";

export const metadata: Metadata = {
  title: "How to Write a Resume in 2025 — Step-by-Step Guide",
  description: "Learn how to write a professional resume in 2025. Step-by-step guide covering format, sections, wording, and ATS tips. Free resume builder included.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-resume" },
  openGraph: { title: "How to Write a Resume in 2025 — Step-by-Step Guide", description: "Step-by-step guide to writing a professional resume in 2025.", url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-resume", type: "article" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "How to Write a Resume in 2025 — Step-by-Step Guide", description: "A complete step-by-step guide to writing a professional resume in 2025.", url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-resume", datePublished: "2025-01-01", dateModified: "2025-01-01", author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" }, publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" } };

export default function HowToWriteResumePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>How to Write a Resume</span>
        </nav>

        <h1>How to Write a Resume in 2025</h1>
        <p className="prose-page__meta">Updated January 2025 · 8 min read</p>
        <p className="prose-page__lead">A resume is your first impression with a hiring manager. In 2025, it also needs to pass an applicant tracking system (ATS) before a human ever sees it. This guide walks you through every section so you can write a resume that gets interviews.</p>

        <h2>1. Choose the right format</h2>
        <p>Most professionals should use a <strong>reverse-chronological format</strong> — your most recent job first. It is the most familiar format for recruiters and the easiest for ATS to parse.</p>
        <ul>
          <li><strong>Reverse-chronological</strong> — best for most people with work experience</li>
          <li><strong>Functional</strong> — skills-first, used for career changers (ATS often struggles with this)</li>
          <li><strong>Combination</strong> — hybrid of both, good for senior professionals</li>
        </ul>

        <h2>2. Write a strong summary</h2>
        <p>A 2–3 sentence professional summary at the top tells recruiters who you are and what you bring. Include your job title, years of experience, and one key achievement. Avoid generic phrases like &quot;hard-working team player.&quot;</p>

        <h2>3. List your work experience</h2>
        <p>For each role, include:</p>
        <ul>
          <li>Job title, company name, location, and dates (month + year)</li>
          <li>3–5 bullet points per role using action verbs</li>
          <li>Quantified achievements where possible — &quot;increased sales by 30%&quot; beats &quot;responsible for sales&quot;</li>
        </ul>

        <h2>4. Education section</h2>
        <p>List your highest degree first. Include institution name, degree, field of study, and graduation year. If you graduated within the last 3 years, you can include your GPA if it is above 3.5.</p>

        <h2>5. Skills section</h2>
        <p>List hard skills relevant to the job — programming languages, tools, certifications. Mirror the exact keywords from the job description to pass ATS filters. Avoid listing soft skills like &quot;communication&quot; — demonstrate them through your bullet points instead.</p>

        <h2>6. Keep it to one page</h2>
        <p>For most professionals with under 10 years of experience, one page is the standard. Senior professionals with 15+ years may use two pages. Never pad your resume to fill space.</p>

        <h2>7. Proofread carefully</h2>
        <p>A single typo can cost you an interview. Read your resume backwards to catch spelling errors. Ask a friend to review it. Use consistent formatting — same font, same bullet style, same date format throughout.</p>

        <div className="prose-page__cta-box">
          <p>Ready to build your resume?</p>
          <p>Use our free resume builder to apply everything in this guide. Choose a template, fill in your details, and download a PDF in minutes.</p>
          <Link href="/choose-template" className="btn btn-accent btn-md">Build My Resume — Free</Link>
        </div>

        <RelatedPosts currentHref="/blog/how-to-write-a-resume" />
      </main>
      <BlogStickyCTA />
    </>
  );
}
