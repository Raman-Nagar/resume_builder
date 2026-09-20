import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classic Resume Template — Free, ATS-Friendly",
  description: "Download a free classic resume template. Clean single-column layout, ATS-friendly, works for any industry. Customize and export as PDF instantly — no account required.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/templates/classic-resume-template" },
  openGraph: { title: "Classic Resume Template — Free, ATS-Friendly", description: "Free classic resume template. Single-column, ATS-friendly, instant PDF download.", url: "https://resumebuilder.ramannagar.in/templates/classic-resume-template", type: "website" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "CreativeWork", name: "Classic Resume Template", description: "A timeless single-column resume template designed for any industry. ATS-friendly, free to use, and exportable as PDF.", url: "https://resumebuilder.ramannagar.in/templates/classic-resume-template", isAccessibleForFree: true, creator: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" } };

export default function ClassicTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page prose-page--wide">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/templates">Templates</Link><span>›</span><span>Classic</span>
        </nav>

        <h1>Classic Resume Template</h1>
        <p className="prose-page__lead">A timeless single-column layout trusted by professionals across every industry. Clean, readable, and fully ATS-compatible.</p>

        <Link href="/builder?template=classic" className="btn btn-accent btn-lg" style={{ marginBottom: "var(--space-12)", display: "inline-flex" }}>Use This Template — Free</Link>

        <h2>Why choose the Classic template?</h2>
        <ul>
          <li>Single-column layout that every ATS can parse without errors</li>
          <li>Works for any industry — finance, healthcare, engineering, education</li>
          <li>Clean typography that hiring managers can scan in seconds</li>
          <li>Exports as a pixel-perfect PDF formatted for A4 and US Letter</li>
          <li>No account required — start editing immediately</li>
        </ul>

        <h2>Who is this template for?</h2>
        <p>The Classic template is ideal for professionals in traditional industries, recent graduates, and anyone applying to companies that use applicant tracking systems. Its straightforward structure ensures your resume is never rejected due to formatting issues.</p>

        <h2>How to use this template</h2>
        <ol>
          <li>Click <strong>Use This Template</strong> above to open the builder</li>
          <li>Fill in your personal details, work experience, education, and skills</li>
          <li>Preview your resume in real time as you type</li>
          <li>Click Download to export a high-quality PDF</li>
        </ol>

        <div className="prose-page__footer-links">
          <Link href="/templates/modern-resume-template">→ Modern Template</Link>
          <Link href="/templates/minimal-resume-template">→ Minimal Template</Link>
        </div>
      </main>
    </>
  );
}
