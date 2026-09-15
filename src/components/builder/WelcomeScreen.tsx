"use client";

interface Props {
  onStartBlank: () => void;
  onLoadSample: () => void;
}

export function WelcomeScreen({ onStartBlank, onLoadSample }: Props) {
  return (
    <div className="rb-welcome" aria-label="Get started">
      <div className="rb-welcome__inner">
        {/* Logo mark */}
        <div className="rb-welcome__logo" aria-hidden="true">
          <span className="lp-navbar__logo-mark" />
        </div>

        <h1 className="rb-welcome__heading">Build your resume</h1>
        <p className="rb-welcome__sub">
          Start with a blank canvas or explore a polished sample to see what&apos;s possible.
        </p>

        <div className="rb-welcome__cards">
          {/* Blank */}
          <button
            type="button"
            className="rb-welcome__card"
            onClick={onStartBlank}
            aria-label="Start from scratch with a blank resume"
          >
            <div className="rb-welcome__card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
            </div>
            <div className="rb-welcome__card-body">
              <span className="rb-welcome__card-title">Start from scratch</span>
              <span className="rb-welcome__card-desc">
                A blank resume, ready for your own content.
              </span>
            </div>
            <svg className="rb-welcome__card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Sample */}
          <button
            type="button"
            className="rb-welcome__card rb-welcome__card--featured"
            onClick={onLoadSample}
            aria-label="Load a sample resume for Alex Morgan, Senior Frontend Developer"
          >
            <div className="rb-welcome__card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div className="rb-welcome__card-body">
              <span className="rb-welcome__card-title">
                Use a sample resume
                <span className="rb-welcome__card-badge">Recommended</span>
              </span>
              <span className="rb-welcome__card-desc">
                Alex Morgan · Senior Frontend Developer — fully populated and ready to customise.
              </span>
            </div>
            <svg className="rb-welcome__card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <p className="rb-welcome__footnote">
          Your resume is saved locally in your browser — nothing is sent to a server.
        </p>
      </div>
    </div>
  );
}
