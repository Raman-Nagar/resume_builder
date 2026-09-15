import Link from "next/link";

export function Navbar() {
  return (
    <header className="lp-navbar">
      <div className="lp-container lp-navbar__inner">
        <Link href="/" className="lp-navbar__brand" aria-label="Resume Builder home">
          <span className="lp-navbar__logo-mark" aria-hidden="true" />
          <span className="lp-navbar__brand-name">Resume Builder</span>
        </Link>

        <nav className="lp-navbar__nav" aria-label="Main navigation">
          <Link href="#templates" className="lp-navbar__link">Templates</Link>
          <Link href="#features" className="lp-navbar__link">Features</Link>
          <Link href="#faq" className="lp-navbar__link">FAQ</Link>
        </nav>

        <div className="lp-navbar__actions">
          <Link href="/builder" className="btn btn-primary btn-sm">
            Create Resume
          </Link>
        </div>
      </div>
    </header>
  );
}
