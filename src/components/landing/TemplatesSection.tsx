import Link from "next/link";
import { ResumePreview } from "./ResumePreview";

const TEMPLATES = [
  {
    id: "classic",
    name: "Classic",
    description: "Timeless single-column layout. Works for any industry.",
    variant: "classic" as const,
  },
  {
    id: "modern",
    name: "Modern",
    description: "Two-column design with a bold sidebar. Great for tech roles.",
    variant: "modern" as const,
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Clean typography-first layout. Ideal for creative fields.",
    variant: "minimal" as const,
  },
];

export function TemplatesSection() {
  return (
    <section id="templates" className="lp-section lp-section--subtle" aria-labelledby="templates-heading">
      <div className="lp-container">
        <div className="lp-section-header">
          <p className="lp-overline">Templates</p>
          <h2 id="templates-heading" className="lp-section-title">
            Three premium designs.<br className="lp-br-md" /> All ATS-friendly.
          </h2>
          <p className="lp-section-subtitle">
            Every template is crafted to look great on screen and print perfectly as a PDF.
          </p>
        </div>

        <div className="lp-templates-grid">
          {TEMPLATES.map((t) => (
            <div key={t.id} className="lp-template-card">
              <div className="lp-template-preview">
                <div className="lp-template-preview__scaler">
                  <ResumePreview variant={t.variant} />
                </div>
              </div>
              <div className="lp-template-info">
                <div className="lp-template-name">{t.name}</div>
                <div className="lp-template-desc">{t.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="lp-templates-cta">
          <Link href="/builder" className="btn btn-primary btn-lg">
            Create your resume
          </Link>
          <p className="lp-templates-cta-note">Free · No sign-up required</p>
        </div>
      </div>
    </section>
  );
}
