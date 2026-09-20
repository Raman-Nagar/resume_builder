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
        <p className="prose-page__meta">Updated June 2025 · 10 min read</p>
        <p className="prose-page__lead">A strong cover letter can be the difference between getting an interview and being ignored. In 2025, most candidates submit generic letters. A specific, well-structured cover letter immediately stands out.</p>

        <h2>Do you still need a cover letter in 2025?</h2>
        <p>Yes — when one is requested or when applying directly to a company. Research consistently shows that a tailored cover letter increases interview rates. The key word is <strong>tailored</strong>. A generic letter copied from a template is worse than no letter at all because it signals low effort and poor attention to detail.</p>
        <p>When cover letters are optional, include one anyway. It is an opportunity your competition may skip.</p>

        <h2>Cover letter format and length</h2>
        <ul>
          <li><strong>Length:</strong> 3–4 short paragraphs, no more than one page</li>
          <li><strong>Font:</strong> Same font as your resume — Arial, Calibri, or Georgia at 10–12pt</li>
          <li><strong>Format:</strong> Plain text or simple formatting — no graphics, no tables</li>
          <li><strong>File:</strong> PDF, named FirstName-LastName-CoverLetter.pdf</li>
          <li><strong>Salutation:</strong> &quot;Dear [Hiring Manager&apos;s Name]&quot; if you know it; &quot;Dear Hiring Manager&quot; if you do not. Never &quot;To Whom It May Concern&quot;.</li>
        </ul>
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

        <h2>Cover letter example — Marketing Manager</h2>
        <div className="prose-example prose-example--quote">
          <p>Dear Sarah Johnson,</p>
          <p>I am applying for the Marketing Manager role at Bloom Digital. With 6 years of experience growing B2B SaaS brands through content and paid acquisition, I have a track record that maps directly to what you are looking for — I grew organic traffic by 180% at my current company and managed a £400K annual paid media budget.</p>
          <p>At TechFlow, I built the content marketing function from scratch, growing the blog from zero to 80K monthly visitors in 18 months. I also led a rebrand that increased inbound lead quality by 35%, measured by SQL conversion rate. I am comfortable owning both strategy and execution.</p>
          <p>I have followed Bloom Digital&apos;s work for two years — particularly your approach to product-led growth content. The way your team uses the product itself as a distribution channel is something I have been experimenting with and would love to develop further in this role.</p>
          <p>I would welcome the chance to discuss how I can contribute. I am available for a call any time this week. Thank you for your consideration.</p>
        </div>

        <h2>How to open a cover letter (without &quot;I am writing to apply for...&quot;)</h2>
        <p>The opening sentence is the most important. Most candidates start with &quot;I am writing to apply for the position of...&quot; — which is the most boring possible opening. Try one of these approaches instead:</p>
        <ul>
          <li><strong>Lead with a specific achievement:</strong> &quot;In my last role, I grew organic traffic by 180% in 12 months — and I believe I can do the same for [Company].&quot;</li>
          <li><strong>Lead with a connection to the company:</strong> &quot;I have used [Product] for two years and have a clear view of where the onboarding experience could be stronger — which is exactly what drew me to this UX role.&quot;</li>
          <li><strong>Lead with the role and your strongest credential:</strong> &quot;As a PMP-certified project manager with 8 years delivering complex infrastructure projects, I was immediately drawn to the Senior PM role at [Company].&quot;</li>
        </ul>

        <h2>Cover letter checklist</h2>
        <ul>
          <li>☐ Addressed to a specific person where possible</li>
          <li>☐ Opening sentence is specific — not &quot;I am writing to apply for...&quot;</li>
          <li>☐ Mentions the specific company name and role</li>
          <li>☐ Includes at least one quantified achievement</li>
          <li>☐ Shows genuine knowledge of the company</li>
          <li>☐ Does not repeat the resume word for word</li>
          <li>☐ 3–4 paragraphs, one page maximum</li>
          <li>☐ Ends with a clear call to action</li>
          <li>☐ Proofread — no typos, no wrong company name</li>
          <li>☐ Saved as PDF, named correctly</li>
        </ul>

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
