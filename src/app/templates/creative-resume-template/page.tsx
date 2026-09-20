import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Resume Template — Free, Colorful Design",
  description: "Download a free creative resume template. Colorful sidebar, skill chips, pill-shaped date badges. Stand out from the crowd. Customize and export as PDF — no account required.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/templates/creative-resume-template" },
  openGraph: { title: "Creative Resume Template — Free, Colorful Design", description: "Free creative resume template. Colorful sidebar with skill chips, instant PDF download.", url: "https://resumebuilder.ramannagar.in/templates/creative-resume-template", type: "website" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "CreativeWork", name: "Creative Resume Template", description: "A vibrant two-column resume template with a colorful sidebar, skill chips, and pill-shaped date badges. Free to use and exportable as PDF.", url: "https://resumebuilder.ramannagar.in/templates/creative-resume-template", isAccessibleForFree: true, creator: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" } };

export default function CreativeTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page prose-page--wide">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/templates">Templates</Link><span>›</span><span>Creative</span>
        </nav>

        <h1>Creative Resume Template</h1>
        <p className="prose-page__lead">A vibrant two-column layout with a bold colored sidebar, skill chips, and pill-shaped date badges. Perfect for designers, marketers, and anyone who wants their resume to stand out.</p>

        <Link href="/builder?template=creative" className="btn btn-accent btn-lg" style={{ marginBottom: "var(--space-12)", display: "inline-flex" }}>Use This Template — Free</Link>

        <h2>Why choose the Creative template?</h2>
        <ul>
          <li>Bold colored sidebar that adapts to your chosen accent color</li>
          <li>Skill chips give a modern, scannable view of your abilities</li>
          <li>Pill-shaped date badges add visual rhythm to your experience entries</li>
          <li>Two-column layout maximises space on a single page</li>
          <li>Exports as a pixel-perfect PDF formatted for A4 and US Letter</li>
          <li>No account required — start editing immediately</li>
        </ul>

        <h2>Who is this template for?</h2>
        <p>The Creative template is ideal for designers, marketers, content creators, UX professionals, and anyone in a creative or tech-forward field. The colorful sidebar and chip-style skills section make your resume visually distinctive while keeping the content well-organized.</p>

        <h2>How to use this template</h2>
        <ol>
          <li>Click <strong>Use This Template</strong> above to open the builder</li>
          <li>Fill in your personal details, work experience, education, and skills</li>
          <li>Pick an accent color — it drives the entire sidebar and highlight palette</li>
          <li>Preview your resume in real time as you type</li>
          <li>Click Download to export a high-quality PDF</li>
        </ol>

        <div className="prose-page__footer-links">
          <Link href="/templates/classic-resume-template">→ Classic Template</Link>
          <Link href="/templates/modern-resume-template">→ Modern Template</Link>
          <Link href="/templates/minimal-resume-template">→ Minimal Template</Link>
          <Link href="/templates/executive-resume-template">→ Executive Template</Link>
        </div>
      </main>
    </>
  );
}
