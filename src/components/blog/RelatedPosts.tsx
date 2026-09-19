import Link from "next/link";

const ALL_POSTS = [
  { href: "/blog/how-to-write-a-resume", title: "How to Write a Resume in 2025", readTime: "8 min read", category: "Resume Guide" },
  { href: "/blog/ats-resume-tips", title: "10 ATS Resume Tips to Get Past the Bots", readTime: "6 min read", category: "ATS Tips" },
  { href: "/blog/best-resume-format-2025", title: "Best Resume Format in 2025", readTime: "7 min read", category: "Resume Guide" },
  { href: "/blog/resume-summary-examples", title: "20 Resume Summary Examples That Get Interviews", readTime: "7 min read", category: "Resume Tips" },
  { href: "/blog/resume-skills-section", title: "How to Write a Resume Skills Section", readTime: "6 min read", category: "Resume Tips" },
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
    <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid #e2e8f0" }}>
      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#94a3b8", marginBottom: 20 }}>
        Related Articles
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
        {related.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: 10, padding: "16px 20px", border: "1px solid #e2e8f0", borderRadius: 8, backgroundColor: "#f8fafc" }}
          >
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: CATEGORY_COLORS[post.category] ?? "#2563eb" }}>
              {post.category}
            </span>
            <span style={{ fontSize: 15, fontWeight: 600, color: "#1e293b", lineHeight: 1.4 }}>
              {post.title}
            </span>
            <span style={{ fontSize: 12, color: "#94a3b8" }}>{post.readTime}</span>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <Link href="/blog" style={{ fontSize: 14, color: "#2563eb" }}>View all articles →</Link>
      </div>
    </div>
  );
}
