import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";

export const metadata: Metadata = {
  title: "How to Write a Cover Letter in 2025 — With Examples",
  description:
    "Learn how to write a cover letter that gets read in 2025. Step-by-step guide with examples, structure, and tips for every experience level.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-cover-letter" },
  openGraph: {
    title: "How to Write a Cover Letter in 2025 — With Examples",
    description: "Step-by-step guide to writing a cover letter in 2025. Structure, examples, and tips for every level.",
    url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-cover-letter",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Cover Letter in 2025 — With Examples",
  description: "A step-by-step guide to writing a cover letter in 2025, including structure, examples, and tips for every experience level.",
  url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-cover-letter",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" },
  publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" },
};

export default function HowToWriteCoverLetterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 740, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.8 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
          <Link href="/" style={{ color: "#2563eb" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "#2563eb" }}>Blog</Link>{" › "}
          <span>How to Write a Cover Letter</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>How to Write a Cover Letter in 2025</h1>
        <p style={{ color: "#64748b", fontSize: 14, marginBottom: 32 }}>Updated January 2025 · 8 min read</p>

        <p style={{ fontSize: 17, marginBottom: 32 }}>
          A strong cover letter can be the difference between getting an interview and being ignored — even when your resume is good. In 2025, most candidates submit generic letters. A specific, well-structured cover letter immediately stands out. Here is exactly how to write one.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Do you still need a cover letter in 2025?</h2>
        <p style={{ marginBottom: 32 }}>
          Yes — when one is requested or when applying directly to a company. Studies consistently show that a tailored cover letter increases your chances of getting an interview. The key word is <strong>tailored</strong>. A generic letter is worse than no letter at all because it signals low effort.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Cover letter structure</h2>
        <p style={{ marginBottom: 16 }}>A cover letter should have four parts:</p>
        <ol style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 12 }}><strong>Opening paragraph</strong> — who you are, what role you are applying for, and one compelling reason why you are a strong fit</li>
          <li style={{ marginBottom: 12 }}><strong>Body paragraph 1</strong> — your most relevant experience and a specific achievement that maps to the job requirements</li>
          <li style={{ marginBottom: 12 }}><strong>Body paragraph 2</strong> — why this specific company, not just any company. Show you have done your research.</li>
          <li style={{ marginBottom: 12 }}><strong>Closing paragraph</strong> — a clear call to action, your contact details, and a professional sign-off</li>
        </ol>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Cover letter example — Software Engineer</h2>
        <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "24px 28px", marginBottom: 32, fontStyle: "italic", color: "#334155" }}>
          <p style={{ marginBottom: 16 }}>Dear Hiring Manager,</p>
          <p style={{ marginBottom: 16 }}>
            I am applying for the Senior Software Engineer role at Acme Corp. With 5 years of experience building high-traffic React applications and a track record of reducing load times by 40%, I am confident I can contribute immediately to your frontend team.
          </p>
          <p style={{ marginBottom: 16 }}>
            At my current role at TechCo, I led the migration of a legacy jQuery codebase to React, cutting bug reports by 60% and improving developer velocity by 30%. I work closely with product and design to ship features that users actually want, not just features that are technically interesting.
          </p>
          <p style={{ marginBottom: 16 }}>
            I have followed Acme Corp&apos;s engineering blog for two years and was particularly impressed by your recent post on micro-frontend architecture. The problems you are solving at scale are exactly the kind of challenges I want to work on next.
          </p>
          <p style={{ marginBottom: 0 }}>
            I would love to discuss how I can contribute to your team. You can reach me at <span style={{ color: "#2563eb" }}>[email]</span> or <span style={{ color: "#2563eb" }}>[phone]</span>.<br />
            Thank you for your time.
          </p>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>The biggest cover letter mistakes</h2>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><strong>Repeating your resume</strong> — your cover letter should add context, not summarise what is already on your resume</li>
          <li style={{ marginBottom: 8 }}><strong>Starting with &quot;I am writing to apply for...&quot;</strong> — this is the most common opening and the most boring. Start with something specific.</li>
          <li style={{ marginBottom: 8 }}><strong>Focusing on what you want</strong> — recruiters care about what you bring, not what you are looking for</li>
          <li style={{ marginBottom: 8 }}><strong>Being too long</strong> — one page maximum, ideally 3–4 short paragraphs</li>
          <li style={{ marginBottom: 8 }}><strong>Not customising it</strong> — a letter that could apply to any company will be ignored</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Cover letter tips for different situations</h2>

        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>No experience / recent graduate</h3>
        <p style={{ marginBottom: 24 }}>
          Focus on transferable skills from internships, university projects, or volunteer work. Lead with your strongest relevant project and what you learned. Show enthusiasm for the specific company — research matters more when experience is thin.
        </p>

        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Career change</h3>
        <p style={{ marginBottom: 24 }}>
          Acknowledge the change directly and frame it as a strength. Explain why you are making the switch and how your previous experience gives you a unique perspective. Map your transferable skills explicitly to the job requirements.
        </p>

        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Employment gap</h3>
        <p style={{ marginBottom: 40 }}>
          Address it briefly and confidently — one sentence is enough. Whether it was caregiving, health, travel, or upskilling, state it plainly and pivot immediately to what you bring now. Do not over-explain or apologise.
        </p>

        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "24px 28px", marginBottom: 40 }}>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>Build the resume to go with your cover letter</p>
          <p style={{ marginBottom: 16, color: "#475569" }}>A strong cover letter needs an equally strong resume. Build yours free — no account required, download as PDF in minutes.</p>
          <Link href="/builder" style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>
            Build My Resume — Free
          </Link>
        </div>

        <RelatedPosts currentHref="/blog/how-to-write-a-cover-letter" />
      </main>
    </>
  );
}
