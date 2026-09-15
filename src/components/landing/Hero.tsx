import Link from "next/link";
import { ResumePreview } from "./ResumePreview";

const TRUST_ITEMS = [
  "Free to use",
  "No account required",
  "Data stays in your browser",
  "Download as PDF",
];

export function Hero() {
  return (
    <section className="lp-hero" aria-labelledby="hero-heading">
      <div className="lp-container lp-hero__inner">

        {/* Left — copy */}
        <div className="lp-hero__copy">
          <div className="lp-hero__eyebrow">
            <span className="lp-eyebrow-dot" aria-hidden="true" />
            Free · Private · Professional
          </div>

          <h1 id="hero-heading" className="lp-hero__headline">
            Build a resume<br />
            that gets noticed.
          </h1>

          <p className="lp-hero__subtext">
            Create, customize, and download a professional resume in minutes —
            no account needed, no data uploaded to any server.
          </p>

          <div className="lp-hero__actions">
            <Link href="/builder" className="btn btn-primary btn-lg lp-hero__cta-primary">
              Create My Resume
              <ArrowRight />
            </Link>
            <Link href="#templates" className="btn btn-secondary btn-lg">
              Explore Templates
            </Link>
          </div>

          <ul className="lp-trust-list" aria-label="Key benefits">
            {TRUST_ITEMS.map((label) => (
              <li key={label} className="lp-trust-item">
                <span className="lp-trust-icon" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — resume preview */}
        <div className="lp-hero__visual" aria-hidden="true">
          <div className="lp-hero__preview-glow" />
          <div className="lp-hero__preview-wrap">
            <ResumePreview variant="classic" />
          </div>
        </div>

      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
