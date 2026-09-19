import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogStickyCTA } from "@/components/blog/BlogStickyCTA";

export const metadata: Metadata = {
  title: "10 ATS Resume Tips to Get Past the Bots in 2025",
  description:
    "Learn how to make your resume ATS-friendly in 2025. 10 proven tips to pass applicant tracking systems and get your resume seen by real hiring managers.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/ats-resume-tips" },
  openGraph: {
    title: "10 ATS Resume Tips to Get Past the Bots in 2025",
    description: "10 proven tips to make your resume ATS-friendly and get seen by hiring managers.",
    url: "https://resumebuilder.ramannagar.in/blog/ats-resume-tips",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "10 ATS Resume Tips to Get Past the Bots in 2025",
  description: "10 proven tips to make your resume pass applicant tracking systems (ATS) and reach human hiring managers.",
  url: "https://resumebuilder.ramannagar.in/blog/ats-resume-tips",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" },
  publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" },
};

const TIPS = [
  { title: "Use standard section headings", body: "ATS systems look for headings like \"Work Experience\", \"Education\", and \"Skills\". Avoid creative labels like \"My Journey\" or \"Where I've Been\" — the system won't recognise them." },
  { title: "Mirror keywords from the job description", body: "Copy exact phrases from the job posting into your resume. If the job says \"project management\", use that exact phrase — not \"managing projects\". ATS matches strings literally." },
  { title: "Avoid tables and columns", body: "Many ATS parsers read left-to-right, top-to-bottom. Tables and multi-column layouts scramble the reading order, causing your experience to appear garbled or be skipped entirely." },
  { title: "Use a standard font", body: "Stick to Arial, Calibri, Georgia, or Times New Roman. Decorative fonts may not render correctly in ATS systems and can cause parsing errors." },
  { title: "Submit as PDF or DOCX", body: "Most modern ATS accept PDF. If the job posting specifies DOCX, use that. Never submit as an image (JPG/PNG) — ATS cannot read text from images." },
  { title: "Spell out acronyms once", body: "Write \"Search Engine Optimisation (SEO)\" the first time, then use the acronym. ATS may search for either form, so including both ensures a match." },
  { title: "Include a skills section", body: "A dedicated skills section makes it easy for ATS to extract your competencies. List tools, technologies, and certifications as individual items, not in paragraph form." },
  { title: "Use standard date formats", body: "Write dates as \"Jan 2022 – Mar 2024\" or \"01/2022 – 03/2024\". Inconsistent or ambiguous date formats confuse ATS parsers and can misorder your experience." },
  { title: "Avoid headers and footers", body: "Some ATS systems ignore content in headers and footers entirely. Put your name and contact information in the main body of the document." },
  { title: "Keep formatting simple", body: "No graphics, no logos, no text boxes, no special characters as bullet points. Use plain round bullets (•). The simpler the formatting, the more reliably ATS can parse your content." },
];

export default function AtsResumeTipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 740, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.8 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
          <Link href="/" style={{ color: "#2563eb" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "#2563eb" }}>Blog</Link>
          {" › "}
          <span>ATS Resume Tips</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>10 ATS Resume Tips to Get Past the Bots in 2025</h1>
        <p style={{ color: "#64748b", fontSize: 14, marginBottom: 32 }}>Updated January 2025 · 6 min read</p>

        <p style={{ fontSize: 17, marginBottom: 40 }}>
          Over 98% of Fortune 500 companies use applicant tracking systems (ATS) to filter resumes before a human ever reads them. If your resume isn&apos;t optimised for ATS, it may never reach a hiring manager — no matter how qualified you are. Here are 10 tips to make sure yours gets through.
        </p>

        {TIPS.map((tip, i) => (
          <div key={i} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>{i + 1}. {tip.title}</h2>
            <p>{tip.body}</p>
          </div>
        ))}

        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "24px 28px", marginBottom: 40 }}>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>All our templates are ATS-friendly by default</p>
          <p style={{ marginBottom: 16, color: "#475569" }}>Every template in our free resume builder uses clean semantic HTML — no tables, no columns, no graphics. Just content that every ATS can read.</p>
          <Link href="/choose-template" style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>
            Build My ATS Resume — Free
          </Link>
        </div>

        <RelatedPosts currentHref="/blog/ats-resume-tips" />
      </main>
      <BlogStickyCTA />
    </>
  );
}
