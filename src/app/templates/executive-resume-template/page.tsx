import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Executive Resume Template — Free, Professional Design",
  description: "Download a free executive resume template. Bold colored header, professional layout, ATS-friendly. Customize and export as PDF instantly — no account required.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/templates/executive-resume-template" },
  openGraph: { title: "Executive Resume Template — Free, Professional Design", description: "Free executive resume template. Bold colored header, ATS-friendly, instant PDF download.", url: "https://resumebuilder.ramannagar.in/templates/executive-resume-template", type: "website" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "CreativeWork", name: "Executive Resume Template", description: "A bold professional resume template with a full-width colored header band. ATS-friendly, free to use, and exportable as PDF.", url: "https://resumebuilder.ramannagar.in/templates/executive-resume-template", isAccessibleForFree: true, creator: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" } };

export default function ExecutiveTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page prose-page--wide">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/templates">Templates</Link><span>›</span><span>Executive</span>
        </nav>

        <h1>Executive Resume Template</h1>
        <p className="prose-page__lead">A bold, commanding layout with a full-width colored header. Designed for senior professionals who want to make a strong first impression while staying ATS-compatible.</p>

        <Link href="/builder?template=executive" className="btn btn-accent btn-lg" style={{ marginBottom: "var(--space-12)", display: "inline-flex" }}>Use This Template — Free</Link>

        <h2>Why choose the Executive template?</h2>
        <ul>
          <li>Full-width colored header band makes your name and title instantly memorable</li>
          <li>Accent-colored company names draw the eye to your career progression</li>
          <li>Clean single-column body keeps ATS parsing error-free</li>
          <li>Works across all industries — finance, consulting, operations, leadership roles</li>
          <li>Exports as a pixel-perfect PDF formatted for A4 and US Letter</li>
          <li>No account required — start editing immediately</li>
        </ul>

        <h2>Who is this template for?</h2>
        <p>The Executive template is ideal for senior managers, directors, VPs, and C-suite professionals. The bold header communicates authority and confidence, while the structured body ensures your experience and achievements are easy to scan.</p>

        <h2>How to use this template</h2>
        <ol>
          <li>Click <strong>Use This Template</strong> above to open the builder</li>
          <li>Fill in your personal details, work experience, education, and skills</li>
          <li>Choose an accent color to match your personal brand</li>
          <li>Preview your resume in real time as you type</li>
          <li>Click Download to export a high-quality PDF</li>
        </ol>

        <div className="prose-page__footer-links">
          <Link href="/templates/classic-resume-template">→ Classic Template</Link>
          <Link href="/templates/modern-resume-template">→ Modern Template</Link>
          <Link href="/templates/minimal-resume-template">→ Minimal Template</Link>
          <Link href="/templates/creative-resume-template">→ Creative Template</Link>
        </div>
      </main>
    </>
  );
}
