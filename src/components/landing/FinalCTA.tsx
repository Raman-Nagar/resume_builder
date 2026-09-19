import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="lp-section lp-final-cta" aria-labelledby="final-cta-heading">
      <div className="lp-container">
        <div className="lp-final-cta__inner">
          <h2 id="final-cta-heading" className="lp-final-cta__headline">
            Your next opportunity starts<br className="lp-br-md" /> with a better resume.
          </h2>
          <p className="lp-final-cta__sub">
            Join thousands of job seekers who built their resume in minutes.
            Free, private, and ready to download.
          </p>
          <div className="lp-final-cta__actions">
            <Link href="/choose-template" className="btn btn-primary btn-lg lp-hero__cta-primary">
              Create My Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <p className="lp-final-cta__note">No account required · Free forever · Your data stays private</p>
        </div>
      </div>
    </section>
  );
}
