import Link from "next/link";

const LINKS = {
  Product: [
    { label: "Resume Builder", href: "/builder" },
    { label: "Templates", href: "#templates" },
    { label: "Features", href: "#features" },
  ],
  Resources: [
    { label: "FAQ", href: "#faq" },
    { label: "How it works", href: "#how-it-works" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Use", href: "#privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-container lp-footer__inner">
        <div className="lp-footer__brand-col">
          <Link href="/" className="lp-navbar__brand lp-footer__brand" aria-label="Resume Builder home">
            <span className="lp-navbar__logo-mark" aria-hidden="true" />
            <span className="lp-navbar__brand-name">Resume Builder</span>
          </Link>
          <p className="lp-footer__tagline">
            Build a professional resume in minutes.<br />
            Free, private, no sign-up required.
          </p>
        </div>

        <nav className="lp-footer__links" aria-label="Footer navigation">
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group} className="lp-footer__link-group">
              <div className="lp-footer__group-title">{group}</div>
              <ul className="lp-footer__link-list">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="lp-footer__link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="lp-footer__bottom">
        <div className="lp-container lp-footer__bottom-inner">
          <p className="lp-footer__copy">
            © {new Date().getFullYear()} Resume Builder. All rights reserved.
          </p>
          <p className="lp-footer__privacy-note">
            Your data never leaves your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}
