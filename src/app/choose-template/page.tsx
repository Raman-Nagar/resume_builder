import type { Metadata } from "next";
import Link from "next/link";
import { ResumePreview } from "@/components/landing/ResumePreview";

export const metadata: Metadata = {
  title: "Choose a Template — Free Resume Builder",
  description: "Pick a template to start building your resume. Classic, Modern, or Minimal — all free, ATS-friendly, and downloadable as PDF.",
  robots: { index: false },
};

const TEMPLATES = [
  {
    id: "classic",
    name: "Classic",
    tag: "Most popular",
    description: "Timeless single-column layout. Works for any industry and passes every ATS reliably.",
    accent: "#2563eb",
  },
  {
    id: "modern",
    name: "Modern",
    tag: "Great for tech",
    description: "Bold two-column design with a sidebar. Maximises space and highlights skills at a glance.",
    accent: "#7c3aed",
  },
  {
    id: "minimal",
    name: "Minimal",
    tag: "Clean & elegant",
    description: "Typography-first layout that lets your content speak for itself. Understated and professional.",
    accent: "#0f172a",
  },
] as const;

export default function ChooseTemplatePage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc", display: "flex", flexDirection: "column", alignItems: "center", padding: "48px 24px 80px", fontFamily: "sans-serif" }}>

      {/* Back */}
      <div style={{ width: "100%", maxWidth: 960, marginBottom: 32 }}>
        <Link href="/" style={{ fontSize: 14, color: "#64748b", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
          Back to home
        </Link>
      </div>

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#0f172a", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
          Choose a template
        </h1>
        <p style={{ fontSize: 16, color: "#64748b", margin: 0 }}>
          You can switch templates anytime inside the builder without losing your content.
        </p>
      </div>

      {/* Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, width: "100%", maxWidth: 960 }}>
        {TEMPLATES.map((t) => (
          <Link
            key={t.id}
            href={`/builder?template=${t.id}`}
            style={{ textDecoration: "none", display: "flex", flexDirection: "column", borderRadius: 12, border: "2px solid #e2e8f0", backgroundColor: "#ffffff", overflow: "hidden", transition: "border-color 0.15s, box-shadow 0.15s", cursor: "pointer" }}
            aria-label={`Use ${t.name} template`}
          >
            {/* Preview */}
            <div style={{ position: "relative", backgroundColor: "#f1f5f9", overflow: "hidden", height: 200 }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: 794, transform: "scale(0.38)", transformOrigin: "top left", pointerEvents: "none" }}>
                <ResumePreview variant={t.id} />
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 17, fontWeight: 700, color: "#0f172a" }}>{t.name}</span>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: t.accent, backgroundColor: `${t.accent}14`, padding: "3px 8px", borderRadius: 4 }}>
                  {t.tag}
                </span>
              </div>
              <p style={{ fontSize: 14, color: "#64748b", margin: 0, lineHeight: 1.6 }}>{t.description}</p>
              <div style={{ marginTop: "auto", paddingTop: 16 }}>
                <span style={{ display: "block", textAlign: "center", backgroundColor: t.accent, color: "#ffffff", padding: "10px 0", borderRadius: 8, fontSize: 14, fontWeight: 600 }}>
                  Use this template →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
}
