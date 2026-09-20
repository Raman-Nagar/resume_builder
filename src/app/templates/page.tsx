import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Resume Templates — ATS-Friendly Designs for 2025",
  description: "Choose from 5 free ATS-friendly resume templates — Classic, Modern, Minimal, Executive, and Creative. Customize and download as PDF instantly. No account required.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/templates" },
  openGraph: { title: "Free Resume Templates — ATS-Friendly Designs for 2025", description: "3 free ATS-friendly resume templates. Customize and download as PDF. No account required.", url: "https://resumebuilder.ramannagar.in/templates", type: "website" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Free Resume Templates", description: "A collection of free ATS-friendly resume templates for 2025 — Classic, Modern, Minimal, Executive, and Creative.", url: "https://resumebuilder.ramannagar.in/templates", hasPart: [{ "@type": "CreativeWork", name: "Classic Resume Template", url: "https://resumebuilder.ramannagar.in/templates/classic-resume-template" }, { "@type": "CreativeWork", name: "Modern Resume Template", url: "https://resumebuilder.ramannagar.in/templates/modern-resume-template" }, { "@type": "CreativeWork", name: "Minimal Resume Template", url: "https://resumebuilder.ramannagar.in/templates/minimal-resume-template" }, { "@type": "CreativeWork", name: "Executive Resume Template", url: "https://resumebuilder.ramannagar.in/templates/executive-resume-template" }, { "@type": "CreativeWork", name: "Creative Resume Template", url: "https://resumebuilder.ramannagar.in/templates/creative-resume-template" }] };

const TEMPLATES = [
  { href: "/templates/classic-resume-template",   builderHref: "/builder?template=classic",   name: "Classic",   tag: "Most popular",    description: "Timeless single-column layout. Works for any industry and passes every ATS system reliably.",                                    bestFor: ["Finance & Banking", "Healthcare", "Engineering", "Education", "Government"],                    color: "#2563eb" },
  { href: "/templates/modern-resume-template",    builderHref: "/builder?template=modern",    name: "Modern",    tag: "Great for tech",   description: "Bold two-column design with a sidebar. Maximises space and highlights your skills at a glance.",                              bestFor: ["Software Engineering", "Product Management", "Design", "Marketing", "Startups"],              color: "#7c3aed" },
  { href: "/templates/minimal-resume-template",   builderHref: "/builder?template=minimal",   name: "Minimal",   tag: "Clean & elegant",  description: "Typography-first layout that lets your content speak for itself. Understated and professional.",                             bestFor: ["Writing & Journalism", "Academia", "Consulting", "UX & Content", "Senior Executives"],       color: "#0f172a" },
  { href: "/templates/executive-resume-template", builderHref: "/builder?template=executive", name: "Executive", tag: "Senior roles",     description: "Commanding full-width colored header with a clean body. Built for senior professionals who want to make a strong impression.", bestFor: ["C-Suite & Directors", "Finance Leadership", "Operations", "Consulting", "Business Development"], color: "#1e3a5f" },
  { href: "/templates/creative-resume-template",  builderHref: "/builder?template=creative",  name: "Creative",  tag: "Stand out",        description: "Vibrant sidebar with skill chips and pill-shaped date badges. Eye-catching yet structured.",                                  bestFor: ["Design & UX", "Marketing", "Content Creation", "Advertising", "Tech Startups"],              color: "#0891b2" },
];

const FAQS = [
  { q: "Are all templates free?", a: "Yes — every template is completely free. No subscription, no credit card, no account required." },
  { q: "Are the templates ATS-friendly?", a: "All five templates use clean, semantic HTML that applicant tracking systems can parse reliably. We avoid tables and graphics that confuse ATS parsers." },
  { q: "Can I switch templates after I start?", a: "Yes. You can switch between Classic, Modern, Minimal, Executive, and Creative at any time in the builder without losing your content." },
  { q: "What format can I download?", a: "You can download your resume as a high-quality PDF formatted for A4 paper, ready to send to recruiters." },
];

export default function TemplatesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page prose-page--wide">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><span>Templates</span>
        </nav>

        <h1>Free Resume Templates for 2025</h1>
        <p className="prose-page__lead">Three professionally designed templates — all free, all ATS-friendly, all downloadable as PDF with no account required.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)", marginBottom: "var(--space-16)" }}>
          {TEMPLATES.map((t) => (
            <div key={t.name} className="tmpl-card">
              <div className="tmpl-card__header" style={{ backgroundColor: t.color }}>
                <div>
                  <div className="tmpl-card__header-tag">{t.tag}</div>
                  <h2>{t.name} Template</h2>
                </div>
                <Link href={t.builderHref} className="tmpl-card__header-btn" style={{ color: t.color }}>Use This Template</Link>
              </div>
              <div className="tmpl-card__body">
                <div className="tmpl-card__desc">
                  <p>{t.description}</p>
                  <Link href={t.href}>View full details →</Link>
                </div>
                <div className="tmpl-card__best-for">
                  <p className="tmpl-card__best-for-label">Best for</p>
                  <ul>
                    {t.bestFor.map((item) => (
                      <li key={item}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: t.color, flexShrink: 0, display: "inline-block" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2>Frequently asked questions</h2>
        <div className="prose-article-list" style={{ marginBottom: "var(--space-12)" }}>
          {FAQS.map((faq) => (
            <div key={faq.q} className="prose-article">
              <p><strong>{faq.q}</strong></p>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="prose-page__cta-box">
          <p>Ready to build your resume?</p>
          <p>Pick any template and start editing — free, no account required.</p>
          <Link href="/choose-template" className="btn btn-accent btn-lg">Build My Resume — Free</Link>
        </div>

        <div className="prose-page__footer-links">
          <Link href="/blog/how-to-write-a-resume">→ How to Write a Resume</Link>
          <Link href="/blog/ats-resume-tips">→ ATS Resume Tips</Link>
          <Link href="/blog/best-resume-format-2025">→ Best Resume Format 2025</Link>
        </div>
      </main>
    </>
  );
}
