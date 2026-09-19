import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogStickyCTA } from "@/components/blog/BlogStickyCTA";

export const metadata: Metadata = {
  title: "How to Write a Resume in 2025 — Step-by-Step Guide",
  description:
    "Learn how to write a professional resume in 2025. Step-by-step guide covering format, sections, wording, and ATS tips. Free resume builder included.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-resume" },
  openGraph: {
    title: "How to Write a Resume in 2025 — Step-by-Step Guide",
    description: "Step-by-step guide to writing a professional resume in 2025. ATS tips, format advice, and free builder.",
    url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-resume",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Resume in 2025 — Step-by-Step Guide",
  description: "A complete step-by-step guide to writing a professional resume in 2025, including format, sections, wording, and ATS optimisation tips.",
  url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-resume",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" },
  publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" },
};

export default function HowToWriteResumePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 740, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.8 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
          <Link href="/" style={{ color: "#2563eb" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "#2563eb" }}>Blog</Link>
          {" › "}
          <span>How to Write a Resume</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>How to Write a Resume in 2025</h1>
        <p style={{ color: "#64748b", fontSize: 14, marginBottom: 32 }}>Updated January 2025 · 8 min read</p>

        <p style={{ fontSize: 17, marginBottom: 32 }}>
          A resume is your first impression with a hiring manager. In 2025, it also needs to pass an applicant tracking system (ATS) before a human ever sees it. This guide walks you through every section, in order, so you can write a resume that gets interviews.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>1. Choose the right format</h2>
        <p style={{ marginBottom: 16 }}>
          Most professionals should use a <strong>reverse-chronological format</strong> — your most recent job first. It is the most familiar format for recruiters and the easiest for ATS to parse.
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 24 }}>
          <li><strong>Reverse-chronological</strong> — best for most people with work experience</li>
          <li><strong>Functional</strong> — skills-first, used for career changers (ATS often struggles with this)</li>
          <li><strong>Combination</strong> — hybrid of both, good for senior professionals</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>2. Write a strong summary</h2>
        <p style={{ marginBottom: 24 }}>
          A 2–3 sentence professional summary at the top tells recruiters who you are and what you bring. Include your job title, years of experience, and one key achievement. Avoid generic phrases like &quot;hard-working team player.&quot;
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>3. List your work experience</h2>
        <p style={{ marginBottom: 16 }}>For each role, include:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 24 }}>
          <li>Job title, company name, location, and dates (month + year)</li>
          <li>3–5 bullet points per role using action verbs</li>
          <li>Quantified achievements where possible — &quot;increased sales by 30%&quot; beats &quot;responsible for sales&quot;</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>4. Education section</h2>
        <p style={{ marginBottom: 24 }}>
          List your highest degree first. Include institution name, degree, field of study, and graduation year. If you graduated within the last 3 years, you can include your GPA if it is above 3.5.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>5. Skills section</h2>
        <p style={{ marginBottom: 24 }}>
          List hard skills relevant to the job — programming languages, tools, certifications. Mirror the exact keywords from the job description to pass ATS filters. Avoid listing soft skills like &quot;communication&quot; — demonstrate them through your bullet points instead.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>6. Keep it to one page</h2>
        <p style={{ marginBottom: 24 }}>
          For most professionals with under 10 years of experience, one page is the standard. Senior professionals with 15+ years may use two pages. Never pad your resume to fill space.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>7. Proofread carefully</h2>
        <p style={{ marginBottom: 40 }}>
          A single typo can cost you an interview. Read your resume backwards (last word to first) to catch spelling errors. Ask a friend to review it. Use consistent formatting — same font, same bullet style, same date format throughout.
        </p>

        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "24px 28px", marginBottom: 40 }}>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>Ready to build your resume?</p>
          <p style={{ marginBottom: 16, color: "#475569" }}>Use our free resume builder to apply everything in this guide. Choose a template, fill in your details, and download a PDF in minutes.</p>
          <Link href="/builder" style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>
            Build My Resume — Free
          </Link>
        </div>

        <RelatedPosts currentHref="/blog/how-to-write-a-resume" />
      </main>
      <BlogStickyCTA />
    </>
  );
}
