import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume Tips & Career Advice Blog",
  description:
    "Free resume writing guides, ATS tips, and career advice. Learn how to write a resume that gets interviews in 2025.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog" },
  openGraph: {
    title: "Resume Tips & Career Advice Blog",
    description: "Free resume writing guides, ATS tips, and career advice for 2025.",
    url: "https://resumebuilder.ramannagar.in/blog",
    type: "website",
  },
};

const POSTS = [
  {
    href: "/blog/how-to-write-a-resume",
    title: "How to Write a Resume in 2025 — Step-by-Step Guide",
    description: "A complete walkthrough of every resume section — format, summary, experience, skills, and more.",
    readTime: "8 min read",
  },
  {
    href: "/blog/ats-resume-tips",
    title: "10 ATS Resume Tips to Get Past the Bots in 2025",
    description: "Over 98% of large companies use ATS to filter resumes. Here's how to make sure yours gets through.",
    readTime: "6 min read",
  },
  {
    href: "/blog/best-resume-format-2025",
    title: "Best Resume Format in 2025 — Which One Should You Use?",
    description: "Reverse-chronological, functional, or combination? Find out which format is right for your situation.",
    readTime: "7 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <main style={{ maxWidth: 740, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", color: "#1e293b", lineHeight: 1.7 }}>
      <nav aria-label="Breadcrumb" style={{ fontSize: 14, marginBottom: 32, color: "#64748b" }}>
        <Link href="/" style={{ color: "#2563eb" }}>Home</Link>
        {" › "}
        <span>Blog</span>
      </nav>

      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Resume Tips & Career Advice</h1>
      <p style={{ color: "#475569", marginBottom: 48 }}>
        Practical guides to help you write a better resume, pass ATS systems, and land more interviews.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {POSTS.map((post) => (
          <article key={post.href} style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: 32 }}>
            <Link href={post.href} style={{ textDecoration: "none", color: "inherit" }}>
              <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, color: "#1e293b" }}>{post.title}</h2>
            </Link>
            <p style={{ color: "#475569", marginBottom: 8 }}>{post.description}</p>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <span style={{ fontSize: 13, color: "#94a3b8" }}>{post.readTime}</span>
              <Link href={post.href} style={{ fontSize: 14, color: "#2563eb" }}>Read article →</Link>
            </div>
          </article>
        ))}
      </div>

      <div style={{ marginTop: 48, padding: "24px 28px", backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 8 }}>
        <p style={{ fontWeight: 600, marginBottom: 8 }}>Ready to build your resume?</p>
        <p style={{ color: "#475569", marginBottom: 16 }}>Apply what you&apos;ve learned with our free resume builder. No account required.</p>
        <Link href="/builder" style={{ display: "inline-block", backgroundColor: "#2563eb", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>
          Build My Resume — Free
        </Link>
      </div>
    </main>
  );
}
