import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogStickyCTA } from "@/components/blog/BlogStickyCTA";

export const metadata: Metadata = {
  title: "20 Resume Summary Examples That Get Interviews in 2025",
  description:
    "Copy-paste resume summary examples for every industry and experience level. Learn how to write a professional summary that grabs recruiters in 2025.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/resume-summary-examples" },
  openGraph: {
    title: "20 Resume Summary Examples That Get Interviews in 2025",
    description: "Copy-paste resume summary examples for every industry. Learn what to write in your resume summary.",
    url: "https://resumebuilder.ramannagar.in/blog/resume-summary-examples",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "20 Resume Summary Examples That Get Interviews in 2025",
  description: "Copy-paste resume summary examples for every industry and experience level in 2025.",
  url: "https://resumebuilder.ramannagar.in/blog/resume-summary-examples",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" },
  publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" },
};

const EXAMPLES = [
  {
    role: "Software Engineer",
    text: "Software engineer with 5 years of experience building scalable web applications in React and Node.js. Reduced page load time by 40% at previous role. Seeking a senior engineering position at a product-led company.",
  },
  {
    role: "Product Manager",
    text: "Product manager with 6 years of experience launching B2B SaaS products. Led a team of 8 to ship a feature that increased retention by 22%. Passionate about data-driven product decisions.",
  },
  {
    role: "Data Analyst",
    text: "Data analyst with 3 years of experience turning raw data into actionable insights using Python, SQL, and Tableau. Built dashboards used by 200+ stakeholders across 4 departments.",
  },
  {
    role: "Marketing Manager",
    text: "Marketing manager with 7 years of experience in digital and content marketing. Grew organic traffic by 150% in 12 months through SEO and content strategy. Experienced in managing budgets up to $500K.",
  },
  {
    role: "Graphic Designer",
    text: "Graphic designer with 4 years of experience creating brand identities and digital assets for startups and agencies. Proficient in Figma, Illustrator, and Photoshop. Portfolio of 30+ completed brand projects.",
  },
  {
    role: "Recent Graduate",
    text: "Computer science graduate with hands-on experience in full-stack development through 3 internships. Built a final-year project used by 500+ students. Eager to contribute to a fast-moving engineering team.",
  },
  {
    role: "Career Changer",
    text: "Former teacher transitioning into UX design. Completed Google UX Design Certificate with a portfolio of 5 case studies. Brings strong communication and user empathy skills developed over 6 years in education.",
  },
  {
    role: "Project Manager",
    text: "PMP-certified project manager with 8 years of experience delivering complex infrastructure projects on time and under budget. Managed cross-functional teams of up to 25 people across 3 time zones.",
  },
  {
    role: "Sales Representative",
    text: "Sales representative with a consistent track record of exceeding quota by 120%+ over 4 years. Specialised in SaaS enterprise sales with an average deal size of $80K. Expert in Salesforce and consultative selling.",
  },
  {
    role: "Customer Support Lead",
    text: "Customer support lead with 5 years of experience managing teams of 10+ agents. Reduced average resolution time by 35% by implementing a new ticketing workflow. Passionate about building support cultures that scale.",
  },
];

export default function ResumeSummaryExamplesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: 740, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.8 }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
          <Link href="/" style={{ color: "#2563eb" }}>Home</Link>{" › "}
          <Link href="/blog" style={{ color: "#2563eb" }}>Blog</Link>{" › "}
          <span>Resume Summary Examples</span>
        </nav>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>20 Resume Summary Examples That Get Interviews in 2025</h1>
        <p style={{ color: "#64748b", fontSize: 14, marginBottom: 32 }}>Updated January 2025 · 7 min read</p>

        <p style={{ fontSize: 17, marginBottom: 32 }}>
          Your resume summary is the first thing a recruiter reads. You have 3–4 lines to convince them to keep reading. Below are 20 real examples across different roles and experience levels — copy, adapt, and make them your own.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>What makes a great resume summary?</h2>
        <ul style={{ paddingLeft: 20, marginBottom: 32 }}>
          <li>2–4 sentences maximum — recruiters won&apos;t read more</li>
          <li>Mention your job title, years of experience, and one specific achievement</li>
          <li>Include keywords from the job description for ATS matching</li>
          <li>End with what you&apos;re looking for or what you bring to the role</li>
          <li>Never use phrases like &quot;hard-working&quot;, &quot;team player&quot;, or &quot;passionate professional&quot;</li>
        </ul>

        <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 24 }}>Resume Summary Examples by Role</h2>

        {EXAMPLES.map((ex) => (
          <div key={ex.role} style={{ marginBottom: 28, padding: "20px 24px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8 }}>
            <p style={{ fontWeight: 600, marginBottom: 8, color: "#2563eb" }}>{ex.role}</p>
            <p style={{ margin: 0 }}>{ex.text}</p>
          </div>
        ))}

        <h2 style={{ fontSize: 22, fontWeight: 600, marginTop: 40, marginBottom: 12 }}>Resume summary vs objective — which should you use?</h2>
        <p style={{ marginBottom: 16 }}>
          A <strong>resume summary</strong> focuses on what you bring to the employer — your experience and achievements. A <strong>resume objective</strong> focuses on what you want from the job. In 2025, summaries are strongly preferred for anyone with work experience. Only use an objective if you are a student or making a significant career change.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 600, marginTop: 32, marginBottom: 12 }}>How long should a resume summary be?</h2>
        <p style={{ marginBottom: 40 }}>
          2–4 sentences or 3–5 lines of text. Any longer and recruiters will skip it. Any shorter and you&apos;re wasting prime resume real estate. Aim for a tight paragraph that could stand alone as a pitch.
        </p>

        <div style={{ backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8, padding: "24px 28px", marginBottom: 40 }}>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>Write your summary in our free resume builder</p>
          <p style={{ marginBottom: 16, color: "#475569" }}>Add your professional summary, choose a template, and download a PDF — no account required.</p>
          <Link href="/builder" style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>
            Build My Resume — Free
          </Link>
        </div>

        <RelatedPosts currentHref="/blog/resume-summary-examples" />
      </main>
      <BlogStickyCTA />
    </>
  );
}
