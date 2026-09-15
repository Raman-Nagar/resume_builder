const PRIVACY_POINTS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "No account required",
    description: "Start building immediately. We never ask for your email or personal details.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "Stored locally in your browser",
    description: "Your resume data lives in localStorage — on your device, under your control.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="1" y1="1" x2="23" y2="23" />
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
        <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
    title: "Zero server uploads",
    description: "Nothing is ever sent to our servers. The PDF is generated entirely in your browser.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      </svg>
    ),
    title: "Delete anytime",
    description: "Clear your resume data instantly from browser settings or with one click in the app.",
  },
];

export function PrivacySection() {
  return (
    <section className="lp-section lp-section--dark" aria-labelledby="privacy-heading">
      <div className="lp-container">
        <div className="lp-privacy-inner">
          <div className="lp-privacy-copy">
            <p className="lp-overline lp-overline--light">Privacy first</p>
            <h2 id="privacy-heading" className="lp-section-title lp-section-title--light" style={{ marginBottom: "var(--space-4)" }}>
              Your resume stays<br />in your browser.
            </h2>
            <p className="lp-section-subtitle lp-section-subtitle--light">
              We built this tool with a simple principle: your personal career data
              belongs to you. No tracking, no accounts, no cloud storage.
            </p>
          </div>

          <div className="lp-privacy-points">
            {PRIVACY_POINTS.map((p) => (
              <div key={p.title} className="lp-privacy-point">
                <div className="lp-privacy-point__icon">{p.icon}</div>
                <div>
                  <div className="lp-privacy-point__title">{p.title}</div>
                  <div className="lp-privacy-point__desc">{p.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
