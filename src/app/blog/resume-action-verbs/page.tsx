import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogStickyCTA } from "@/components/blog/BlogStickyCTA";

export const metadata: Metadata = {
  title: "185 Resume Action Verbs to Make Your Bullet Points Stand Out (2025)",
  description:
    "A complete list of strong resume action verbs organised by category — leadership, communication, technical, analytical, and more. Replace weak words and get more interviews.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/resume-action-verbs" },
  openGraph: {
    title: "185 Resume Action Verbs to Make Your Bullet Points Stand Out (2025)",
    description: "Strong resume action verbs organised by category. Replace weak words and get more interviews.",
    url: "https://resumebuilder.ramannagar.in/blog/resume-action-verbs",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "185 Resume Action Verbs to Make Your Bullet Points Stand Out (2025)",
  description: "A complete list of strong resume action verbs organised by category for 2025.",
  url: "https://resumebuilder.ramannagar.in/blog/resume-action-verbs",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" },
  publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" },
};

const VERB_CATEGORIES = [
  {
    category: "Leadership & Management",
    color: "#2563eb",
    verbs: ["Led", "Directed", "Managed", "Oversaw", "Supervised", "Spearheaded", "Championed", "Orchestrated", "Delegated", "Mentored", "Coached", "Guided", "Motivated", "Mobilised", "Recruited", "Hired", "Onboarded", "Restructured", "Transformed", "Established"],
  },
  {
    category: "Achievement & Impact",
    color: "#059669",
    verbs: ["Achieved", "Delivered", "Exceeded", "Surpassed", "Accelerated", "Boosted", "Drove", "Generated", "Grew", "Increased", "Improved", "Maximised", "Optimised", "Reduced", "Saved", "Doubled", "Tripled", "Outperformed", "Pioneered", "Launched"],
  },
  {
    category: "Communication & Collaboration",
    color: "#7c3aed",
    verbs: ["Presented", "Communicated", "Negotiated", "Persuaded", "Influenced", "Advised", "Consulted", "Liaised", "Collaborated", "Partnered", "Coordinated", "Facilitated", "Mediated", "Authored", "Wrote", "Edited", "Published", "Pitched", "Briefed", "Reported"],
  },
  {
    category: "Analysis & Research",
    color: "#d97706",
    verbs: ["Analysed", "Assessed", "Evaluated", "Audited", "Benchmarked", "Diagnosed", "Examined", "Forecasted", "Identified", "Investigated", "Mapped", "Measured", "Modelled", "Monitored", "Researched", "Reviewed", "Surveyed", "Tested", "Tracked", "Validated"],
  },
  {
    category: "Technical & Engineering",
    color: "#0891b2",
    verbs: ["Built", "Developed", "Engineered", "Architected", "Designed", "Coded", "Programmed", "Implemented", "Integrated", "Deployed", "Automated", "Configured", "Debugged", "Migrated", "Refactored", "Scaled", "Secured", "Optimised", "Maintained", "Upgraded"],
  },
  {
    category: "Project & Operations",
    color: "#dc2626",
    verbs: ["Managed", "Planned", "Executed", "Delivered", "Streamlined", "Standardised", "Consolidated", "Centralised", "Prioritised", "Scheduled", "Allocated", "Budgeted", "Forecasted", "Procured", "Sourced", "Negotiated", "Resolved", "Mitigated", "Monitored", "Reported"],
  },
  {
    category: "Creative & Design",
    color: "#db2777",
    verbs: ["Designed", "Created", "Conceptualised", "Crafted", "Produced", "Illustrated", "Visualised", "Prototyped", "Redesigned", "Rebranded", "Developed", "Directed", "Curated", "Styled", "Animated", "Photographed", "Edited", "Art-directed", "Storyboarded", "Launched"],
  },
  {
    category: "Sales & Marketing",
    color: "#ea580c",
    verbs: ["Sold", "Closed", "Prospected", "Converted", "Retained", "Upsold", "Cross-sold", "Grew", "Expanded", "Penetrated", "Positioned", "Marketed", "Promoted", "Campaigned", "Targeted", "Segmented", "Personalised", "Nurtured", "Acquired", "Reactivated"],
  },
  {
    category: "Training & Education",
    color: "#0f766e",
    verbs: ["Trained", "Taught", "Educated", "Instructed", "Facilitated", "Coached", "Mentored", "Developed", "Designed", "Delivered", "Assessed", "Evaluated", "Guided", "Supported", "Empowered", "Upskilled", "Onboarded", "Certified", "Accredited", "Advised"],
  },
];

const WEAK_STRONG: { weak: string; strong: string }[] = [
  { weak: "Responsible for managing a team", strong: "Led a cross-functional team of 8 engineers" },
  { weak: "Helped with customer support", strong: "Resolved 50+ customer queries daily with a 97% CSAT score" },
  { weak: "Worked on improving sales", strong: "Grew quarterly revenue by 34% through targeted outreach campaigns" },
  { weak: "Was involved in product launches", strong: "Launched 3 product features that increased retention by 18%" },
  { weak: "Did data analysis", strong: "Analysed 2M+ rows of transaction data to identify $400K in cost savings" },
];

export default function ResumeActionVerbsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 740, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.8 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
          <Link href="/" style={{ color: "#2563eb" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "#2563eb" }}>Blog</Link>{" › "}
          <span>Resume Action Verbs</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>185 Resume Action Verbs to Make Your Bullet Points Stand Out</h1>
        <p style={{ color: "#64748b", fontSize: 14, marginBottom: 32 }}>Updated January 2025 · 7 min read</p>

        <p style={{ fontSize: 17, marginBottom: 32 }}>
          The words you use in your resume bullet points matter. Starting every bullet with a strong action verb makes your experience sound more impactful, more specific, and more credible. Below are 185 action verbs organised by category — pick the ones that match what you actually did.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>Why action verbs matter</h2>
        <p style={{ marginBottom: 16 }}>
          Weak bullet points start with passive phrases like &quot;responsible for&quot;, &quot;helped with&quot;, or &quot;was involved in&quot;. These bury your contribution and make it hard for recruiters to understand what you actually did. Strong action verbs fix this immediately.
        </p>
        <p style={{ marginBottom: 32 }}>
          Compare these examples:
        </p>

        <div style={{ marginBottom: 40 }}>
          {WEAK_STRONG.map((ex) => (
            <div key={ex.weak} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
              <div style={{ padding: "12px 16px", backgroundColor: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, fontSize: 14, color: "#7f1d1d" }}>
                ✗ {ex.weak}
              </div>
              <div style={{ padding: "12px 16px", backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, fontSize: 14, color: "#14532d" }}>
                ✓ {ex.strong}
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>185 Action Verbs by Category</h2>
        <p style={{ color: "#64748b", marginBottom: 32, fontSize: 15 }}>Use the category that best matches the type of work you did in each role.</p>

        {VERB_CATEGORIES.map((cat) => (
          <div key={cat.category} style={{ marginBottom: 36 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 14, color: cat.color }}>{cat.category}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {cat.verbs.map((verb) => (
                <span key={verb} style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 20, padding: "4px 14px", fontSize: 14, color: "#334155" }}>
                  {verb}
                </span>
              ))}
            </div>
          </div>
        ))}

        <h2 style={{ fontSize: 22, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Rules for using action verbs on a resume</h2>
        <ol style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><strong>Start every bullet point with a verb</strong> — never start with &quot;I&quot; or a noun</li>
          <li style={{ marginBottom: 8 }}><strong>Use past tense for previous roles</strong> — &quot;Led&quot;, &quot;Built&quot;, &quot;Grew&quot;</li>
          <li style={{ marginBottom: 8 }}><strong>Use present tense for your current role</strong> — &quot;Lead&quot;, &quot;Build&quot;, &quot;Grow&quot;</li>
          <li style={{ marginBottom: 8 }}><strong>Vary your verbs</strong> — don&apos;t start 5 bullets in a row with &quot;Managed&quot;</li>
          <li style={{ marginBottom: 8 }}><strong>Follow the verb with a result</strong> — &quot;Reduced churn by 20%&quot; beats &quot;Reduced churn&quot;</li>
        </ol>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Verbs to avoid</h2>
        <p style={{ marginBottom: 16 }}>These phrases are overused, vague, or passive. Replace them with specific verbs from the lists above:</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
          {["Responsible for", "Helped with", "Assisted in", "Worked on", "Was involved in", "Participated in", "Contributed to", "Tasked with", "Handled", "Did"].map((v) => (
            <span key={v} style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca", borderRadius: 20, padding: "4px 14px", fontSize: 14, color: "#991b1b" }}>
              {v}
            </span>
          ))}
        </div>

        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "24px 28px", marginBottom: 40 }}>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>Put these verbs to work in your resume</p>
          <p style={{ marginBottom: 16, color: "#475569" }}>Use our free resume builder to write strong bullet points with action verbs. Choose a template and download as PDF — no account required.</p>
          <Link href="/builder" style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>
            Build My Resume — Free
          </Link>
        </div>

        <RelatedPosts currentHref="/blog/resume-action-verbs" />
      </main>
      <BlogStickyCTA />
    </>
  );
}
