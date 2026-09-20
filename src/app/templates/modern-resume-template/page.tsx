import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Modern Resume Template — Free, Two-Column Design",
  description: "Free modern resume template with a bold two-column layout. Perfect for tech, design, and creative roles. ATS-friendly, fully customizable, instant PDF download.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/templates/modern-resume-template" },
  openGraph: { title: "Modern Resume Template — Free, Two-Column Design", description: "Free modern two-column resume template. Great for tech roles. ATS-friendly, instant PDF.", url: "https://resumebuilder.ramannagar.in/templates/modern-resume-template", type: "website" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "CreativeWork", name: "Modern Resume Template", description: "A bold two-column resume template designed for tech, design, and creative professionals.", url: "https://resumebuilder.ramannagar.in/templates/modern-resume-template", isAccessibleForFree: true, creator: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" } };

export default function ModernTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page prose-page--wide">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/templates">Templates</Link><span>›</span><span>Modern</span>
        </nav>

        <h1>Modern Resume Template</h1>
        <p className="prose-page__lead">A bold two-column design with a sidebar for skills and contact info. Built for tech, design, and creative professionals who want to stand out.</p>

        <Link href="/builder?template=modern" className="btn btn-accent btn-lg" style={{ marginBottom: "var(--space-12)", display: "inline-flex" }}>Use This Template — Free</Link>

        <h2>Why choose the Modern template?</h2>
        <ul>
          <li>Two-column layout that maximises space and visual hierarchy</li>
          <li>Bold sidebar highlights your skills and contact details at a glance</li>
          <li>Ideal for software engineers, designers, product managers, and marketers</li>
          <li>Still fully ATS-compatible — no tables or graphics that confuse parsers</li>
          <li>Exports as a pixel-perfect PDF formatted for A4 and US Letter</li>
        </ul>

        <h2>Who is this template for?</h2>
        <p>The Modern template suits professionals in fast-moving industries like technology, startups, and creative agencies. The sidebar layout lets recruiters instantly see your top skills before reading your experience.</p>

        <h2>How to use this template</h2>
        <ol>
          <li>Click <strong>Use This Template</strong> above to open the builder</li>
          <li>Fill in your personal details, work experience, education, and skills</li>
          <li>Preview your resume in real time as you type</li>
          <li>Click Download to export a high-quality PDF</li>
        </ol>

        <div className="prose-page__footer-links">
          <Link href="/templates/classic-resume-template">→ Classic Template</Link>
          <Link href="/templates/minimal-resume-template">→ Minimal Template</Link>
        </div>
      </main>
    </>
  );
}
