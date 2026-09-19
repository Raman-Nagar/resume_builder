import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Modern Resume Template — Free, Two-Column Design",
  description:
    "Free modern resume template with a bold two-column layout. Perfect for tech, design, and creative roles. ATS-friendly, fully customizable, instant PDF download.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/templates/modern-resume-template" },
  openGraph: {
    title: "Modern Resume Template — Free, Two-Column Design",
    description: "Free modern two-column resume template. Great for tech roles. ATS-friendly, instant PDF.",
    url: "https://resumebuilder.ramannagar.in/templates/modern-resume-template",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Modern Resume Template",
  description:
    "A bold two-column resume template designed for tech, design, and creative professionals. ATS-friendly, free to use, and exportable as PDF.",
  url: "https://resumebuilder.ramannagar.in/templates/modern-resume-template",
  isAccessibleForFree: true,
  creator: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" },
};

export default function ModernTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.7 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
          <Link href="/" style={{ color: "#2563eb" }}>Home</Link>
          {" › "}
          <Link href="/#templates" style={{ color: "#2563eb" }}>Templates</Link>
          {" › "}
          <span>Modern</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Modern Resume Template</h1>
        <p style={{ fontSize: 18, color: "#475569", marginBottom: 32 }}>
          A bold two-column design with a sidebar for skills and contact info. Built for tech, design, and creative professionals who want to stand out.
        </p>

        <Link
          href="/builder?template=modern"
          style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "14px 32px", borderRadius: 8, fontWeight: 600, textDecoration: "none", marginBottom: 48 }}
        >
          Use This Template — Free
        </Link>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Why choose the Modern template?</h2>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li>Two-column layout that maximises space and visual hierarchy</li>
          <li>Bold sidebar highlights your skills and contact details at a glance</li>
          <li>Ideal for software engineers, designers, product managers, and marketers</li>
          <li>Still fully ATS-compatible — no tables or graphics that confuse parsers</li>
          <li>Exports as a pixel-perfect PDF formatted for A4 and US Letter</li>
        </ul>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Who is this template for?</h2>
        <p style={{ marginBottom: 32 }}>
          The Modern template suits professionals in fast-moving industries like technology, startups, and creative agencies. The sidebar layout lets recruiters instantly see your top skills before reading your experience.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>How to use this template</h2>
        <ol style={{ paddingLeft: 20, marginBottom: 40 }}>
          <li>Click <strong>Use This Template</strong> above to open the builder</li>
          <li>Fill in your personal details, work experience, education, and skills</li>
          <li>Preview your resume in real time as you type</li>
          <li>Click Download to export a high-quality PDF</li>
        </ol>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/templates/classic-resume-template" style={{ color: "#2563eb" }}>→ Classic Template</Link>
          <Link href="/templates/minimal-resume-template" style={{ color: "#2563eb" }}>→ Minimal Template</Link>
        </div>
      </main>
    </>
  );
}
