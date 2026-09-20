import type { MetadataRoute } from "next";

const BASE_URL = "https://resumebuilder.ramannagar.in";
const NOW = new Date();

// Static content dates — update when content changes
const DATES = {
  home:       new Date("2025-06-01"),
  templates:  new Date("2025-06-01"),
  blog:       new Date("2025-06-01"),
  blogPosts:  new Date("2025-06-01"),
  legal:      new Date("2025-01-01"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: `${BASE_URL}/`,        lastModified: DATES.home,      changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/templates`, lastModified: DATES.templates, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`,    lastModified: DATES.blog,      changeFrequency: "weekly",  priority: 0.8 },

    // Template pages
    { url: `${BASE_URL}/templates/classic-resume-template`,   lastModified: DATES.templates, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/templates/modern-resume-template`,    lastModified: DATES.templates, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/templates/minimal-resume-template`,   lastModified: DATES.templates, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/templates/executive-resume-template`, lastModified: DATES.templates, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/templates/creative-resume-template`,  lastModified: DATES.templates, changeFrequency: "monthly", priority: 0.8 },

    // Blog posts
    { url: `${BASE_URL}/blog/how-to-write-a-resume`,             lastModified: DATES.blogPosts, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/ats-resume-tips`,                   lastModified: DATES.blogPosts, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog/best-resume-format-2025`,           lastModified: DATES.blogPosts, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog/resume-summary-examples`,           lastModified: DATES.blogPosts, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog/resume-skills-section`,             lastModified: DATES.blogPosts, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog/how-to-list-education-on-a-resume`, lastModified: DATES.blogPosts, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog/resume-action-verbs`,               lastModified: DATES.blogPosts, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog/resume-objective-examples`,         lastModified: DATES.blogPosts, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog/how-to-write-a-cover-letter`,       lastModified: DATES.blogPosts, changeFrequency: "monthly", priority: 0.7 },

    // Legal
    { url: `${BASE_URL}/privacy`, lastModified: DATES.legal, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`,   lastModified: DATES.legal, changeFrequency: "yearly", priority: 0.3 },
  ];
}
