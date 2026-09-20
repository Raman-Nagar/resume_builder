import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogStickyCTA } from "@/components/blog/BlogStickyCTA";

export const metadata: Metadata = {
  title: "185 Resume Action Verbs to Make Your Bullet Points Stand Out (2025)",
  description: "A complete list of strong resume action verbs organised by category — leadership, communication, technical, analytical, and more.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/resume-action-verbs" },
  openGraph: { title: "185 Resume Action Verbs to Make Your Bullet Points Stand Out (2025)", description: "Strong resume action verbs organised by category.", url: "https://resumebuilder.ramannagar.in/blog/resume-action-verbs", type: "article" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "185 Resume Action Verbs to Make Your Bullet Points Stand Out (2025)", description: "A complete list of strong resume action verbs organised by category for 2025.", url: "https://resumebuilder.ramannagar.in/blog/resume-action-verbs", datePublished: "2025-01-01", dateModified: "2025-01-01", author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" }, publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" } };

const VERB_CATEGORIES = [
  { category: "Leadership & Management", color: "#2563eb", verbs: ["Led", "Directed", "Managed", "Oversaw", "Supervised", "Spearheaded", "Championed", "Orchestrated", "Delegated", "Mentored", "Coached", "Guided", "Motivated", "Mobilised", "Recruited", "Hired", "Onboarded", "Restructured", "Transformed", "Established"] },
  { category: "Achievement & Impact", color: "#059669", verbs: ["Achieved", "Delivered", "Exceeded", "Surpassed", "Accelerated", "Boosted", "Drove", "Generated", "Grew", "Increased", "Improved", "Maximised", "Optimised", "Reduced", "Saved", "Doubled", "Tripled", "Outperformed", "Pioneered", "Launched"] },
  { category: "Communication & Collaboration", color: "#7c3aed", verbs: ["Presented", "Communicated", "Negotiated", "Persuaded", "Influenced", "Advised", "Consulted", "Liaised", "Collaborated", "Partnered", "Coordinated", "Facilitated", "Mediated", "Authored", "Wrote", "Edited", "Published", "Pitched", "Briefed", "Reported"] },
  { category: "Analysis & Research", color: "#d97706", verbs: ["Analysed", "Assessed", "Evaluated", "Audited", "Benchmarked", "Diagnosed", "Examined", "Forecasted", "Identified", "Investigated", "Mapped", "Measured", "Modelled", "Monitored", "Researched", "Reviewed", "Surveyed", "Tested", "Tracked", "Validated"] },
  { category: "Technical & Engineering", color: "#0891b2", verbs: ["Built", "Developed", "Engineered", "Architected", "Designed", "Coded", "Programmed", "Implemented", "Integrated", "Deployed", "Automated", "Configured", "Debugged", "Migrated", "Refactored", "Scaled", "Secured", "Optimised", "Maintained", "Upgraded"] },
  { category: "Project & Operations", color: "#dc2626", verbs: ["Managed", "Planned", "Executed", "Delivered", "Streamlined", "Standardised", "Consolidated", "Centralised", "Prioritised", "Scheduled", "Allocated", "Budgeted", "Forecasted", "Procured", "Sourced", "Negotiated", "Resolved", "Mitigated", "Monitored", "Reported"] },
  { category: "Creative & Design", color: "#db2777", verbs: ["Designed", "Created", "Conceptualised", "Crafted", "Produced", "Illustrated", "Visualised", "Prototyped", "Redesigned", "Rebranded", "Developed", "Directed", "Curated", "Styled", "Animated", "Photographed", "Edited", "Art-directed", "Storyboarded", "Launched"] },
  { category: "Sales & Marketing", color: "#ea580c", verbs: ["Sold", "Closed", "Prospected", "Converted", "Retained", "Upsold", "Cross-sold", "Grew", "Expanded", "Penetrated", "Positioned", "Marketed", "Promoted", "Campaigned", "Targeted", "Segmented", "Personalised", "Nurtured", "Acquired", "Reactivated"] },
  { category: "Training & Education", color: "#0f766e", verbs: ["Trained", "Taught", "Educated", "Instructed", "Facilitated", "Coached", "Mentored", "Developed", "Designed", "Delivered", "Assessed", "Evaluated", "Guided", "Supported", "Empowered", "Upskilled", "Onboarded", "Certified", "Accredited", "Advised"] },
];

const WEAK_STRONG = [
  { weak: "Responsible for managing a team", strong: "Led a cross-functional team of 8 engineers" },
  { weak: "Helped with customer support", strong: "Resolved 50+ customer queries daily with a 97% CSAT score" },
  { weak: "Worked on improving sales", strong: "Grew quarterly revenue by 34% through targeted outreach campaigns" },
  { weak: "Was involved in product launches", strong: "Launched 3 product features that increased retention by 18%" },
  { weak: "Did data analysis", strong: "Analysed 2M+ rows of transaction data to identify $400K in cost savings" },
];

const AVOID_VERBS = ["Responsible for", "Helped with", "Assisted in", "Worked on", "Was involved in", "Participated in", "Contributed to", "Tasked with", "Handled", "Did"];

export default function ResumeActionVerbsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>Resume Action Verbs</span>
        </nav>

        <h1>185 Resume Action Verbs to Make Your Bullet Points Stand Out</h1>
        <p className="prose-page__meta">Updated January 2025 · 7 min read</p>
        <p className="prose-page__lead">Starting every bullet with a strong action verb makes your experience sound more impactful, more specific, and more credible. Below are 185 action verbs organised by category.</p>

        <h2>Why action verbs matter</h2>
        <p>Weak bullet points start with passive phrases like &quot;responsible for&quot; or &quot;helped with&quot;. Strong action verbs fix this immediately. Compare these examples:</p>

        <div className="prose-compare">
          {WEAK_STRONG.map((ex) => (
            <>
              <div key={`bad-${ex.weak}`} className="prose-compare__bad">✗ {ex.weak}</div>
              <div key={`good-${ex.strong}`} className="prose-compare__good">✓ {ex.strong}</div>
            </>
          ))}
        </div>

        <h2>185 Action Verbs by Category</h2>
        {VERB_CATEGORIES.map((cat) => (
          <div key={cat.category} style={{ marginBottom: "var(--space-8)" }}>
            <h3 style={{ color: cat.color }}>{cat.category}</h3>
            <div className="prose-chips">
              {cat.verbs.map((verb) => <span key={verb} className="prose-chip">{verb}</span>)}
            </div>
          </div>
        ))}

        <h2>Rules for using action verbs on a resume</h2>
        <ol>
          <li><strong>Start every bullet point with a verb</strong> — never start with &quot;I&quot; or a noun</li>
          <li><strong>Use past tense for previous roles</strong> — &quot;Led&quot;, &quot;Built&quot;, &quot;Grew&quot;</li>
          <li><strong>Use present tense for your current role</strong> — &quot;Lead&quot;, &quot;Build&quot;, &quot;Grow&quot;</li>
          <li><strong>Vary your verbs</strong> — don&apos;t start 5 bullets in a row with &quot;Managed&quot;</li>
          <li><strong>Follow the verb with a result</strong> — &quot;Reduced churn by 20%&quot; beats &quot;Reduced churn&quot;</li>
        </ol>

        <h2>Verbs to avoid</h2>
        <p>These phrases are overused, vague, or passive. Replace them with specific verbs from the lists above:</p>
        <div className="prose-chips">
          {AVOID_VERBS.map((v) => <span key={v} className="prose-chip prose-chip--bad">{v}</span>)}
        </div>

        <div className="prose-page__cta-box">
          <p>Put these verbs to work in your resume</p>
          <p>Use our free resume builder to write strong bullet points with action verbs. Choose a template and download as PDF — no account required.</p>
          <Link href="/choose-template" className="btn btn-accent btn-md">Build My Resume — Free</Link>
        </div>

        <RelatedPosts currentHref="/blog/resume-action-verbs" />
      </main>
      <BlogStickyCTA />
    </>
  );
}
