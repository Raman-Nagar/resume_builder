"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // global-error renders outside the Next.js router — Link and useRouter are unavailable.
  // eslint-disable-next-line @next/next/no-location-assign-relative-destination
  const goHome = () => { window.location.href = "/"; };

  return (
    <html lang="en">
      <body>
        <div className="rb-error-boundary">
          <div className="rb-error-boundary__inner">
            <div className="rb-error-boundary__icon" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h2 className="rb-error-boundary__title">Something went wrong</h2>
            <p className="rb-error-boundary__message">
              An unexpected error occurred. Your resume data is safe in your browser.
            </p>
            <div className="rb-error-boundary__actions">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={reset}
              >
                Try again
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={goHome}
              >
                Go home
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
