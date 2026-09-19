import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Minimal Resume Template — Free, Clean Typography",
  description:
    "Free minimal resume template with clean typography-first design. Perfect for creative fields, writers, and academics. ATS-friendly, fully customizable, instant PDF download.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/templates/minimal-resume-template" },
  openGraph: {
    title: "Minimal Resume Template — Free, Clean Typography",
    description: "Free minimal resume template. Clean, typography-first. Great for creative fields. Instant PDF.",
    url: "https://resumebuilder.ramannagar.in/templates/minimal-resume-template",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Minimal Resume Template",
  description:
    "A clean typography-first resume template ideal for creative fields, writers, and academics. ATS-friendly, free to use, and exportable as PDF.",
  url: "https://resumebuilder.ramannagar.in/templates/minimal-resume-template",
  isAccessibleForFree: true,
  creator: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" },
};

export default function MinimalTemplatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.7 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
          <Link href="/" style={{ color: "#2563eb" }}>Home</Link>
          {" › "}
          <Link href="/templates" style={{ color: "#2563eb" }}>Templates</Link>
          {" › "}
          <span>Minimal</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Minimal Resume Template</h1>
        <p style={{ fontSize: 18, color: "#475569", marginBottom: 32 }}>
          A clean, typography-first layout that lets your content speak for itself. Ideal for creative professionals, writers, academics, and anyone who values simplicity.
        </p>

        <Link
          href="/builder?template=minimal"
          style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "14px 32px", borderRadius: 8, fontWeight: 600, textDecoration: "none", marginBottom: 48 }}
        >
          Use This Template — Free
        </Link>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Why choose the Minimal template?</h2>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li>Typography-first design that puts your experience front and centre</li>
          <li>No distracting colours or graphics — pure content focus</li>
          <li>Perfect for writers, academics, consultants, and creative directors</li>
          <li>Fully ATS-compatible with clean semantic structure</li>
          <li>Exports as a pixel-perfect PDF formatted for A4 and US Letter</li>
        </ul>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Who is this template for?</h2>
        <p style={{ marginBottom: 32 }}>
          The Minimal template is best suited for professionals where the quality of writing matters most — journalists, academics, UX writers, consultants, and senior executives who prefer understated elegance over visual flair.
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
          <Link href="/templates/modern-resume-template" style={{ color: "#2563eb" }}>→ Modern Template</Link>
        </div>
      </main>
    </>
  );
}
