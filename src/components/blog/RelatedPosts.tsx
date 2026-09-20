import Link from "next/link";

const ALL_POSTS = [
  { href: "/blog/how-to-write-a-resume", title: "How to Write a Resume in 2025", readTime: "8 min read", category: "Resume Guide" },
  { href: "/blog/ats-resume-tips", title: "10 ATS Resume Tips to Get Past the Bots", readTime: "6 min read", category: "ATS Tips" },
  { href: "/blog/best-resume-format-2025", title: "Best Resume Format in 2025", readTime: "7 min read", category: "Resume Guide" },
  { href: "/blog/resume-summary-examples", title: "20 Resume Summary Examples That Get Interviews", readTime: "7 min read", category: "Resume Tips" },
  { href: "/blog/resume-skills-section", title: "How to Write a Resume Skills Section", readTime: "6 min read", category: "Resume Tips" },
  { href: "/blog/resume-objective-examples", title: "20 Resume Objective Examples for 2025", readTime: "6 min read", category: "Resume Tips" },
  { href: "/blog/resume-action-verbs", title: "185 Resume Action Verbs for 2025", readTime: "7 min read", category: "Resume Tips" },
  { href: "/blog/how-to-list-education-on-a-resume", title: "How to List Education on a Resume", readTime: "6 min read", category: "Resume Guide" },
  { href: "/blog/how-to-write-a-cover-letter", title: "How to Write a Cover Letter in 2025", readTime: "8 min read", category: "Career Guide" },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Resume Guide": "#2563eb",
  "ATS Tips": "#059669",
  "Resume Tips": "#d97706",
  "Career Guide": "#7c3aed",
};

export function RelatedPosts({ currentHref }: { currentHref: string }) {
  const related = ALL_POSTS.filter((p) => p.href !== currentHref).slice(0, 3);
  return (
    <div className="related-posts">
      <p className="related-posts__label">Related Articles</p>
      <div className="related-posts__grid">
        {related.map((post) => (
          <Link key={post.href} href={post.href} className="related-posts__card">
            <span className="related-posts__category" style={{ color: CATEGORY_COLORS[post.category] ?? "var(--color-accent)" }}>
              {post.category}
            </span>
            <span className="related-posts__title">{post.title}</span>
            <span className="related-posts__read-time">{post.readTime}</span>
          </Link>
        ))}
      </div>
      <div className="related-posts__all">
        <Link href="/blog" className="prose-page a" style={{ color: "var(--color-accent)", fontSize: "var(--text-sm)" }}>View all articles →</Link>
      </div>
    </div>
  );
}
