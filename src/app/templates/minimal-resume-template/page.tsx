import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minimal Resume Template — Free, Clean Typography",
  description: "Free minimal resume template with clean typography-first design. Perfect for creative fields, writers, and academics. ATS-friendly, fully customizable, instant PDF download.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/templates/minimal-resume-template" },
  openGraph: { title: "Minimal Resume Template — Free, Clean Typography", description: "Free minimal resume template. Clean, typography-first. Great for creative fields. Instant PDF.", url: "https://resumebuilder.ramannagar.in/templates/minimal-resume-template", type: "website" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "CreativeWork", name: "Minimal Resume Template", description: "A clean typography-first resume template ideal for creative fields, writers, and academics.", url: "https://resumebuilder.ramannagar.in/templates/minimal-resume-template", isAccessibleForFree: true, creator: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" } };

export default function MinimalTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page prose-page--wide">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/templates">Templates</Link><span>›</span><span>Minimal</span>
        </nav>

        <h1>Minimal Resume Template</h1>
        <p className="prose-page__lead">A clean, typography-first layout that lets your content speak for itself. Ideal for creative professionals, writers, academics, and anyone who values simplicity.</p>

        <Link href="/builder?template=minimal" className="btn btn-accent btn-lg" style={{ marginBottom: "var(--space-12)", display: "inline-flex" }}>Use This Template — Free</Link>

        <h2>Why choose the Minimal template?</h2>
        <ul>
          <li>Typography-first design that puts your experience front and centre</li>
          <li>No distracting colours or graphics — pure content focus</li>
          <li>Perfect for writers, academics, consultants, and creative directors</li>
          <li>Fully ATS-compatible with clean semantic structure</li>
          <li>Exports as a pixel-perfect PDF formatted for A4 and US Letter</li>
        </ul>

        <h2>Who is this template for?</h2>
        <p>The Minimal template is best suited for professionals where the quality of writing matters most — journalists, academics, UX writers, consultants, and senior executives who prefer understated elegance over visual flair.</p>

        <h2>How to use this template</h2>
        <ol>
          <li>Click <strong>Use This Template</strong> above to open the builder</li>
          <li>Fill in your personal details, work experience, education, and skills</li>
          <li>Preview your resume in real time as you type</li>
          <li>Click Download to export a high-quality PDF</li>
        </ol>

        <div className="prose-page__footer-links">
          <Link href="/templates/classic-resume-template">→ Classic Template</Link>
          <Link href="/templates/modern-resume-template">→ Modern Template</Link>
        </div>
      </main>
    </>
  );
}
