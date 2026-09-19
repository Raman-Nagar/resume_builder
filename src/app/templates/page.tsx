import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Resume Templates — ATS-Friendly Designs for 2025",
  description:
    "Choose from 3 free ATS-friendly resume templates — Classic, Modern, and Minimal. Customize and download as PDF instantly. No account required.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/templates" },
  openGraph: {
    title: "Free Resume Templates — ATS-Friendly Designs for 2025",
    description: "3 free ATS-friendly resume templates. Customize and download as PDF. No account required.",
    url: "https://resumebuilder.ramannagar.in/templates",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Resume Templates",
  description: "A collection of free ATS-friendly resume templates for 2025 — Classic, Modern, and Minimal.",
  url: "https://resumebuilder.ramannagar.in/templates",
  hasPart: [
    { "@type": "CreativeWork", name: "Classic Resume Template", url: "https://resumebuilder.ramannagar.in/templates/classic-resume-template" },
    { "@type": "CreativeWork", name: "Modern Resume Template", url: "https://resumebuilder.ramannagar.in/templates/modern-resume-template" },
    { "@type": "CreativeWork", name: "Minimal Resume Template", url: "https://resumebuilder.ramannagar.in/templates/minimal-resume-template" },
  ],
};

const TEMPLATES = [
  {
    href: "/templates/classic-resume-template",
    builderHref: "/builder?template=classic",
    name: "Classic",
    tag: "Most popular",
    description: "Timeless single-column layout. Works for any industry and passes every ATS system reliably.",
    bestFor: ["Finance & Banking", "Healthcare", "Engineering", "Education", "Government"],
    color: "#2563eb",
  },
  {
    href: "/templates/modern-resume-template",
    builderHref: "/builder?template=modern",
    name: "Modern",
    tag: "Great for tech",
    description: "Bold two-column design with a sidebar. Maximises space and highlights your skills at a glance.",
    bestFor: ["Software Engineering", "Product Management", "Design", "Marketing", "Startups"],
    color: "#7c3aed",
  },
  {
    href: "/templates/minimal-resume-template",
    builderHref: "/builder?template=minimal",
    name: "Minimal",
    tag: "Clean & elegant",
    description: "Typography-first layout that lets your content speak for itself. Understated and professional.",
    bestFor: ["Writing & Journalism", "Academia", "Consulting", "UX & Content", "Senior Executives"],
    color: "#0f172a",
  },
];

export default function TemplatesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.7 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
          <Link href="/" style={{ color: "#2563eb" }}>Home</Link>
          {" › "}
          <span>Templates</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Free Resume Templates for 2025</h1>
        <p style={{ fontSize: 18, color: "#475569", marginBottom: 48, maxWidth: 600 }}>
          Three professionally designed templates — all free, all ATS-friendly, all downloadable as PDF with no account required.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 64 }}>
          {TEMPLATES.map((t) => (
            <div key={t.name} style={{ border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              {/* Header bar */}
              <div style={{ backgroundColor: t.color, padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>{t.tag}</span>
                  <h2 style={{ fontSize: 24, fontWeight: 700, color: "white", margin: "4px 0 0" }}>{t.name} Template</h2>
                </div>
                <Link
                  href={t.builderHref}
                  style={{ display: "inline-block", backgroundColor: "white", color: t.color, padding: "10px 24px", borderRadius: 8, fontWeight: 600, textDecoration: "none", fontSize: 14, whiteSpace: "nowrap" }}
                >
                  Use This Template
                </Link>
              </div>

              {/* Body */}
              <div style={{ padding: "24px 28px", display: "flex", gap: 32, flexWrap: "wrap" }}>
                <div style={{ flex: 2, minWidth: 200 }}>
                  <p style={{ color: "#475569", marginBottom: 16 }}>{t.description}</p>
                  <Link href={t.href} style={{ color: "#2563eb", fontSize: 14 }}>
                    View full details →
                  </Link>
                </div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <p style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#94a3b8", marginBottom: 10 }}>Best for</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                    {t.bestFor.map((item) => (
                      <li key={item} style={{ fontSize: 14, color: "#475569", display: "flex", alignItems: "center", gap: 8 }}>
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

        {/* FAQ */}
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Frequently asked questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
          {[
            { q: "Are all templates free?", a: "Yes — every template is completely free. No subscription, no credit card, no account required." },
            { q: "Are the templates ATS-friendly?", a: "All three templates use clean semantic HTML with no tables, graphics, or multi-column layouts that confuse ATS parsers." },
            { q: "Can I switch templates after I start?", a: "Yes. You can switch between Classic, Modern, and Minimal at any time in the builder without losing your content." },
            { q: "What format can I download?", a: "You can download your resume as a high-quality PDF formatted for A4 paper, ready to send to recruiters." },
          ].map((faq) => (
            <div key={faq.q} style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: 20 }}>
              <p style={{ fontWeight: 600, marginBottom: 6 }}>{faq.q}</p>
              <p style={{ color: "#475569", fontSize: 15 }}>{faq.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "28px 32px", textAlign: "center" }}>
          <p style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Ready to build your resume?</p>
          <p style={{ color: "#475569", marginBottom: 20 }}>Pick any template and start editing — free, no account required.</p>
          <Link href="/choose-template" style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "14px 36px", borderRadius: 8, fontWeight: 600, textDecoration: "none", fontSize: 16 }}>
            Build My Resume — Free
          </Link>
        </div>

        {/* Internal links */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #e2e8f0", display: "flex", gap: 24, flexWrap: "wrap" }}>
          <Link href="/blog/how-to-write-a-resume" style={{ color: "#2563eb", fontSize: 14 }}>→ How to Write a Resume</Link>
          <Link href="/blog/ats-resume-tips" style={{ color: "#2563eb", fontSize: 14 }}>→ ATS Resume Tips</Link>
          <Link href="/blog/best-resume-format-2025" style={{ color: "#2563eb", fontSize: 14 }}>→ Best Resume Format 2025</Link>
        </div>
      </main>
    </>
  );
}
