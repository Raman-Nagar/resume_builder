import type { Metadata } from "next";
import Link from "next/link";
import { ResumePreview } from "@/components/landing/ResumePreview";

export const metadata: Metadata = {
  title: "Choose a Template — Free Resume Builder",
  description: "Pick a template to start building your resume. Classic, Modern, or Minimal — all free, ATS-friendly, and downloadable as PDF.",
  robots: { index: false },
};

const TEMPLATES = [
  { id: "classic",   name: "Classic",   tag: "Most popular",    description: "Timeless single-column layout. Works for any industry and passes every ATS reliably.",                                    accent: "#2563eb" },
  { id: "modern",    name: "Modern",    tag: "Great for tech",   description: "Bold two-column design with a sidebar. Maximises space and highlights skills at a glance.",                              accent: "#7c3aed" },
  { id: "minimal",   name: "Minimal",   tag: "Clean & elegant",  description: "Typography-first layout that lets your content speak for itself. Understated and professional.",                             accent: "#0f172a" },
  { id: "executive", name: "Executive", tag: "Senior roles",     description: "Commanding full-width colored header. Built for senior professionals who want to make a strong impression.",              accent: "#1e3a5f" },
  { id: "creative",  name: "Creative",  tag: "Stand out",        description: "Vibrant sidebar with skill chips and pill-shaped date badges. Eye-catching yet structured.",                                  accent: "#0891b2" },
] as const;

export default function ChooseTemplatePage() {
  return (
    <main className="choose-tmpl">
      <div className="choose-tmpl__back">
        <Link href="/">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
          Back to home
        </Link>
      </div>

      <div className="choose-tmpl__heading">
        <h1>Choose a template</h1>
        <p>You can switch templates anytime inside the builder without losing your content.</p>
      </div>

      <div className="choose-tmpl__grid">
        {TEMPLATES.map((t) => (
          <Link key={t.id} href={`/builder?template=${t.id}`} className="choose-tmpl__card" aria-label={`Use ${t.name} template`}>
            <div className="choose-tmpl__preview">
              <div style={{ position: "absolute", top: 0, left: 0, width: 500, transform: "scale(0.666)", transformOrigin: "top left", pointerEvents: "none" }}>
                <ResumePreview variant={t.id} scale={1.5} />
              </div>
            </div>
            <div className="choose-tmpl__info">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="choose-tmpl__name">{t.name}</span>
                <span style={{ fontSize: "var(--text-xs)", fontWeight: "var(--weight-semibold)", letterSpacing: "0.06em", textTransform: "uppercase", color: t.accent, backgroundColor: `${t.accent}14`, padding: "3px 8px", borderRadius: "var(--radius-sm)" }}>{t.tag}</span>
              </div>
              <p className="choose-tmpl__desc">{t.description}</p>
              <div className="choose-tmpl__action">
                <span style={{ backgroundColor: t.accent }}>Use this template →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
