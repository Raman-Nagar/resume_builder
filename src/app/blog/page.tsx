import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume Tips & Career Advice Blog",
  description: "Free resume writing guides, ATS tips, and career advice. Learn how to write a resume that gets interviews in 2025.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog" },
  openGraph: {
    title: "Resume Tips & Career Advice Blog",
    description: "Free resume writing guides, ATS tips, and career advice for 2025.",
    url: "https://resumebuilder.ramannagar.in/blog",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Resume Tips & Career Advice",
  description: "Free resume writing guides, ATS tips, and career advice for 2025.",
  url: "https://resumebuilder.ramannagar.in/blog",
  publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" },
  blogPost: [
    { "@type": "BlogPosting", headline: "How to Write a Resume in 2025 — Step-by-Step Guide", url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-resume" },
    { "@type": "BlogPosting", headline: "10 ATS Resume Tips to Get Past the Bots in 2025", url: "https://resumebuilder.ramannagar.in/blog/ats-resume-tips" },
    { "@type": "BlogPosting", headline: "Best Resume Format in 2025", url: "https://resumebuilder.ramannagar.in/blog/best-resume-format-2025" },
    { "@type": "BlogPosting", headline: "20 Resume Summary Examples That Get Interviews in 2025", url: "https://resumebuilder.ramannagar.in/blog/resume-summary-examples" },
    { "@type": "BlogPosting", headline: "How to Write a Resume Skills Section in 2025", url: "https://resumebuilder.ramannagar.in/blog/resume-skills-section" },
    { "@type": "BlogPosting", headline: "How to List Education on a Resume in 2025", url: "https://resumebuilder.ramannagar.in/blog/how-to-list-education-on-a-resume" },
    { "@type": "BlogPosting", headline: "185 Resume Action Verbs to Make Your Bullet Points Stand Out", url: "https://resumebuilder.ramannagar.in/blog/resume-action-verbs" },
    { "@type": "BlogPosting", headline: "20 Resume Objective Examples for 2025", url: "https://resumebuilder.ramannagar.in/blog/resume-objective-examples" },
    { "@type": "BlogPosting", headline: "How to Write a Cover Letter in 2025", url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-cover-letter" },
  ],
};

const POSTS = [
  { href: "/blog/how-to-write-a-resume", title: "How to Write a Resume in 2025 — Step-by-Step Guide", description: "A complete walkthrough of every resume section — format, summary, experience, skills, and more.", readTime: "8 min read" },
  { href: "/blog/ats-resume-tips", title: "10 ATS Resume Tips to Get Past the Bots in 2025", description: "Over 98% of large companies use ATS to filter resumes. Here's how to make sure yours gets through.", readTime: "6 min read" },
  { href: "/blog/best-resume-format-2025", title: "Best Resume Format in 2025 — Which One Should You Use?", description: "Reverse-chronological, functional, or combination? Find out which format is right for your situation.", readTime: "7 min read" },
  { href: "/blog/resume-summary-examples", title: "20 Resume Summary Examples That Get Interviews in 2025", description: "Copy-paste resume summary examples for every industry and experience level.", readTime: "7 min read" },
  { href: "/blog/resume-skills-section", title: "How to Write a Resume Skills Section in 2025 (With Examples)", description: "What skills to include, how to format them, and examples for every industry.", readTime: "6 min read" },
  { href: "/blog/how-to-list-education-on-a-resume", title: "How to List Education on a Resume in 2025 (With Examples)", description: "What to include, where to put it, how to handle GPA, multiple degrees, and online courses.", readTime: "6 min read" },
  { href: "/blog/resume-action-verbs", title: "185 Resume Action Verbs to Make Your Bullet Points Stand Out (2025)", description: "Strong action verbs organised by category — leadership, technical, analytical, creative, and more.", readTime: "7 min read" },
  { href: "/blog/resume-objective-examples", title: "20 Resume Objective Examples for 2025 (Any Job or Experience Level)", description: "Copy-paste resume objective examples for students, career changers, and every industry.", readTime: "6 min read" },
  { href: "/blog/how-to-write-a-cover-letter", title: "How to Write a Cover Letter in 2025 — With Examples", description: "Step-by-step guide with a full example, common mistakes to avoid, and tips for graduates and career changers.", readTime: "8 min read" },
];

export default function BlogIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page">
      <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
        <Link href="/">Home</Link>
        <span>›</span>
        <span>Blog</span>
      </nav>

      <h1>Resume Tips &amp; Career Advice</h1>
      <p className="prose-page__lead">Practical guides to help you write a better resume, pass ATS systems, and land more interviews.</p>

      <div className="prose-article-list">
        {POSTS.map((post) => (
          <article key={post.href} className="prose-article">
            <h2><Link href={post.href}>{post.title}</Link></h2>
            <p>{post.description}</p>
            <div className="prose-article__footer">
              <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>{post.readTime}</span>
              <Link href={post.href}>Read article →</Link>
            </div>
          </article>
        ))}
      </div>

      <div className="prose-page__cta-box" style={{ marginTop: "var(--space-12)" }}>
        <p>Ready to build your resume?</p>
        <p>Apply what you&apos;ve learned with our free resume builder. No account required.</p>
        <Link href="/choose-template" className="btn btn-accent btn-md">Build My Resume — Free</Link>
      </div>
    </main>
    </>
  );
}
