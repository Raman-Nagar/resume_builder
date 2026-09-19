import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogStickyCTA } from "@/components/blog/BlogStickyCTA";

export const metadata: Metadata = {
  title: "How to List Education on a Resume in 2025 (With Examples)",
  description:
    "Learn exactly how to list education on a resume — what to include, where to put it, how to handle GPA, multiple degrees, unfinished degrees, and online courses.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/how-to-list-education-on-a-resume" },
  openGraph: {
    title: "How to List Education on a Resume in 2025 (With Examples)",
    description: "What to include in your education section, where to put it, and how to handle GPA, multiple degrees, and more.",
    url: "https://resumebuilder.ramannagar.in/blog/how-to-list-education-on-a-resume",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to List Education on a Resume in 2025 (With Examples)",
  description: "A complete guide to listing education on a resume in 2025 — format, placement, GPA, multiple degrees, and online courses.",
  url: "https://resumebuilder.ramannagar.in/blog/how-to-list-education-on-a-resume",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" },
  publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" },
};

export default function HowToListEducationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 740, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.8 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
          <Link href="/" style={{ color: "#2563eb" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "#2563eb" }}>Blog</Link>{" › "}
          <span>How to List Education on a Resume</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>How to List Education on a Resume in 2025</h1>
        <p style={{ color: "#64748b", fontSize: 14, marginBottom: 32 }}>Updated January 2025 · 6 min read</p>

        <p style={{ fontSize: 17, marginBottom: 32 }}>
          The education section is straightforward — but there are several common mistakes that can hurt your resume. This guide covers exactly what to include, how to format it, where to place it, and how to handle tricky situations like a low GPA, an unfinished degree, or online certifications.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>What to include in your education section</h2>
        <p style={{ marginBottom: 12 }}>For each degree, include:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
          <li><strong>Degree type and field of study</strong> — e.g. BSc Computer Science</li>
          <li><strong>Institution name</strong> — full name, no abbreviations</li>
          <li><strong>Location</strong> — city and country (or state)</li>
          <li><strong>Graduation year</strong> — or expected graduation year</li>
        </ul>
        <p style={{ marginBottom: 32 }}>
          That is the minimum. Everything else — GPA, honours, relevant coursework, dissertation — is optional and should only be included if it adds value.
        </p>

        {/* Example block */}
        <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "20px 24px", marginBottom: 40, fontFamily: "monospace", fontSize: 14, lineHeight: 1.9 }}>
          <p style={{ fontWeight: 700, marginBottom: 4, fontFamily: "sans-serif", fontSize: 13, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em" }}>Example</p>
          <p style={{ margin: 0 }}><strong>BSc Computer Science</strong></p>
          <p style={{ margin: 0 }}>University of Manchester · Manchester, UK</p>
          <p style={{ margin: 0, color: "#64748b" }}>Sep 2019 – Jun 2022 · First Class Honours</p>
        </div>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Where to put the education section</h2>
        <p style={{ marginBottom: 16 }}>
          <strong>Recent graduates and students:</strong> put education at the top, above work experience. Your degree is your strongest credential right now.
        </p>
        <p style={{ marginBottom: 32 }}>
          <strong>Professionals with 3+ years of experience:</strong> put education below work experience. Your career history is more relevant than where you studied.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Should you include your GPA?</h2>
        <p style={{ marginBottom: 16 }}>Include your GPA if:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          <li>It is 3.5 or above (on a 4.0 scale) — or a First / 2:1 in the UK system</li>
          <li>You graduated within the last 3 years</li>
          <li>The job posting specifically asks for it</li>
        </ul>
        <p style={{ marginBottom: 32 }}>
          Leave it out if it is below 3.5, if you graduated more than 3–4 years ago, or if you are applying for a senior role. A mediocre GPA draws attention to itself — omitting it is always an option.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Multiple degrees</h2>
        <p style={{ marginBottom: 32 }}>
          List degrees in reverse chronological order — most recent first. If you have both a master&apos;s and a bachelor&apos;s, the master&apos;s goes first. You do not need to include your secondary school / high school once you have a university degree, unless you are a student with no other credentials.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Unfinished or incomplete degrees</h2>
        <p style={{ marginBottom: 16 }}>If you started a degree but did not finish it, you have two options:</p>
        <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
          <li style={{ marginBottom: 8 }}><strong>Still enrolled:</strong> list it with &quot;Expected graduation: [year]&quot;</li>
          <li style={{ marginBottom: 8 }}><strong>Left without graduating:</strong> list the institution, dates attended, and the number of credits completed — e.g. &quot;Completed 90 of 120 credits towards BSc Economics&quot;</li>
        </ul>
        <p style={{ marginBottom: 32 }}>
          Never omit it entirely if you attended for more than a year — the gap in your timeline will raise more questions than the incomplete degree.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Online courses and certifications</h2>
        <p style={{ marginBottom: 16 }}>
          Online courses from recognised providers (Google, Coursera, AWS, HubSpot, etc.) are worth including — especially if they are directly relevant to the role. You have two options for where to put them:
        </p>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li style={{ marginBottom: 8 }}><strong>Add to the education section</strong> — works well if you have few formal qualifications</li>
          <li style={{ marginBottom: 8 }}><strong>Create a separate Certifications section</strong> — better if you have several and want to highlight them prominently</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Relevant coursework</h2>
        <p style={{ marginBottom: 32 }}>
          Only list relevant coursework if you are a student or recent graduate with limited work experience, and the courses directly map to the job requirements. List 3–5 courses maximum. Once you have 2+ years of work experience, drop this — your experience speaks louder.
        </p>

        <h2 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Common education section mistakes</h2>
        <ul style={{ paddingLeft: 20, marginBottom: 40 }}>
          <li style={{ marginBottom: 8 }}><strong>Including high school when you have a degree</strong> — remove it, it takes up space and signals inexperience</li>
          <li style={{ marginBottom: 8 }}><strong>Listing a low GPA</strong> — if it is below 3.5, leave it out</li>
          <li style={{ marginBottom: 8 }}><strong>Wrong order</strong> — most recent degree always goes first</li>
          <li style={{ marginBottom: 8 }}><strong>Abbreviating your degree</strong> — write &quot;Bachelor of Science&quot; or &quot;BSc&quot;, not &quot;B.S.&quot; — be consistent with the rest of your resume</li>
          <li style={{ marginBottom: 8 }}><strong>Putting education above experience when you have 3+ years of work history</strong> — your career is more relevant than your degree at that point</li>
        </ul>

        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "24px 28px", marginBottom: 40 }}>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>Add your education in our free resume builder</p>
          <p style={{ marginBottom: 16, color: "#475569" }}>Our builder formats your education section automatically. Choose a template and download as PDF — no account required.</p>
          <Link href="/choose-template" style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>
            Build My Resume — Free
          </Link>
        </div>

        <RelatedPosts currentHref="/blog/how-to-list-education-on-a-resume" />
      </main>
      <BlogStickyCTA />
    </>
  );
}
