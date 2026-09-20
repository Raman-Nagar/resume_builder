import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogStickyCTA } from "@/components/blog/BlogStickyCTA";

export const metadata: Metadata = {
  title: "How to Write a Cover Letter in 2025 — With Examples",
  description: "Learn how to write a cover letter that gets read in 2025. Step-by-step guide with examples, structure, and tips for every experience level.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-cover-letter" },
  openGraph: { title: "How to Write a Cover Letter in 2025 — With Examples", description: "Step-by-step guide to writing a cover letter in 2025.", url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-cover-letter", type: "article" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "How to Write a Cover Letter in 2025 — With Examples", description: "A step-by-step guide to writing a cover letter in 2025.", url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-cover-letter", datePublished: "2025-01-01", dateModified: "2025-01-01", author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" }, publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" } };

export default function HowToWriteCoverLetterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>How to Write a Cover Letter</span>
        </nav>

        <h1>How to Write a Cover Letter in 2025</h1>
        <p className="prose-page__meta">Updated January 2025 · 8 min read</p>
        <p className="prose-page__lead">A strong cover letter can be the difference between getting an interview and being ignored. In 2025, most candidates submit generic letters. A specific, well-structured cover letter immediately stands out.</p>

        <h2>Do you still need a cover letter in 2025?</h2>
        <p>Yes — when one is requested or when applying directly to a company. A tailored cover letter increases your chances of getting an interview. The key word is <strong>tailored</strong>. A generic letter is worse than no letter at all because it signals low effort.</p>

        <h2>Cover letter structure</h2>
        <p>A cover letter should have four parts:</p>
        <ol>
          <li><strong>Opening paragraph</strong> — who you are, what role you are applying for, and one compelling reason why you are a strong fit</li>
          <li><strong>Body paragraph 1</strong> — your most relevant experience and a specific achievement that maps to the job requirements</li>
          <li><strong>Body paragraph 2</strong> — why this specific company. Show you have done your research.</li>
          <li><strong>Closing paragraph</strong> — a clear call to action, your contact details, and a professional sign-off</li>
        </ol>

        <h2>Cover letter example — Software Engineer</h2>
        <div className="prose-example prose-example--quote">
          <p>Dear Hiring Manager,</p>
          <p>I am applying for the Senior Software Engineer role at Acme Corp. With 5 years of experience building high-traffic React applications and a track record of reducing load times by 40%, I am confident I can contribute immediately to your frontend team.</p>
          <p>At my current role at TechCo, I led the migration of a legacy jQuery codebase to React, cutting bug reports by 60% and improving developer velocity by 30%. I work closely with product and design to ship features that users actually want.</p>
          <p>I have followed Acme Corp&apos;s engineering blog for two years and was particularly impressed by your recent post on micro-frontend architecture. The problems you are solving at scale are exactly the kind of challenges I want to work on next.</p>
          <p>I would love to discuss how I can contribute to your team. You can reach me at [email] or [phone]. Thank you for your time.</p>
        </div>

        <h2>The biggest cover letter mistakes</h2>
        <ul>
          <li><strong>Repeating your resume</strong> — your cover letter should add context, not summarise what is already on your resume</li>
          <li><strong>Starting with &quot;I am writing to apply for...&quot;</strong> — this is the most common and most boring opening. Start with something specific.</li>
          <li><strong>Focusing on what you want</strong> — recruiters care about what you bring, not what you are looking for</li>
          <li><strong>Being too long</strong> — one page maximum, ideally 3–4 short paragraphs</li>
          <li><strong>Not customising it</strong> — a letter that could apply to any company will be ignored</li>
        </ul>

        <h2>Cover letter tips for different situations</h2>

        <h3>No experience / recent graduate</h3>
        <p>Focus on transferable skills from internships, university projects, or volunteer work. Lead with your strongest relevant project. Show enthusiasm for the specific company — research matters more when experience is thin.</p>

        <h3>Career change</h3>
        <p>Acknowledge the change directly and frame it as a strength. Explain why you are making the switch and how your previous experience gives you a unique perspective. Map your transferable skills explicitly to the job requirements.</p>

        <h3>Employment gap</h3>
        <p>Address it briefly and confidently — one sentence is enough. State it plainly and pivot immediately to what you bring now. Do not over-explain or apologise.</p>

        <div className="prose-page__cta-box">
          <p>Build the resume to go with your cover letter</p>
          <p>A strong cover letter needs an equally strong resume. Build yours free — no account required, download as PDF in minutes.</p>
          <Link href="/choose-template" className="btn btn-accent btn-md">Build My Resume — Free</Link>
        </div>

        <RelatedPosts currentHref="/blog/how-to-write-a-cover-letter" />
      </main>
      <BlogStickyCTA />
    </>
  );
}
