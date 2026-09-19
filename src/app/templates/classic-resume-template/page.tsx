import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classic Resume Template — Free, ATS-Friendly",
  description:
    "Download a free classic resume template. Clean single-column layout, ATS-friendly, works for any industry. Customize and export as PDF instantly — no account required.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/templates/classic-resume-template" },
  openGraph: {
    title: "Classic Resume Template — Free, ATS-Friendly",
    description: "Free classic resume template. Single-column, ATS-friendly, instant PDF download.",
    url: "https://resumebuilder.ramannagar.in/templates/classic-resume-template",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Classic Resume Template",
  description:
    "A timeless single-column resume template designed for any industry. ATS-friendly, free to use, and exportable as PDF.",
  url: "https://resumebuilder.ramannagar.in/templates/classic-resume-template",
  isAccessibleForFree: true,
  creator: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" },
};

export default function ClassicTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.7 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
          <Link href="/" style={{ color: "#2563eb" }}>Home</Link>
          {" › "}
          <Link href="/#templates" style={{ color: "#2563eb" }}>Templates</Link>
          {" › "}
          <span>Classic</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Classic Resume Template</h1>
        <p style={{ fontSize: 18, color: "#475569", marginBottom: 32 }}>
          A timeless single-column layout trusted by professionals across every industry. Clean, readable, and fully ATS-compatible.
        </p>

        <Link
          href="/builder?template=classic"
          style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "14px 32px", borderRadius: 8, fontWeight: 600, textDecoration: "none", marginBottom: 48 }}
        >
          Use This Template — Free
        </Link>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Why choose the Classic template?</h2>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li>Single-column layout that every ATS can parse without errors</li>
          <li>Works for any industry — finance, healthcare, engineering, education</li>
          <li>Clean typography that hiring managers can scan in seconds</li>
          <li>Exports as a pixel-perfect PDF formatted for A4 and US Letter</li>
          <li>No account required — start editing immediately</li>
        </ul>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Who is this template for?</h2>
        <p style={{ marginBottom: 32 }}>
          The Classic template is ideal for professionals in traditional industries, recent graduates, and anyone applying to companies that use applicant tracking systems. Its straightforward structure ensures your resume is never rejected due to formatting issues.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>How to use this template</h2>
        <ol style={{ paddingLeft: 20, marginBottom: 40 }}>
          <li>Click <strong>Use This Template</strong> above to open the builder</li>
          <li>Fill in your personal details, work experience, education, and skills</li>
          <li>Preview your resume in real time as you type</li>
          <li>Click Download to export a high-quality PDF</li>
        </ol>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/templates/modern-resume-template" style={{ color: "#2563eb" }}>→ Modern Template</Link>
          <Link href="/templates/minimal-resume-template" style={{ color: "#2563eb" }}>→ Minimal Template</Link>
        </div>
      </main>
    </>
  );
}
