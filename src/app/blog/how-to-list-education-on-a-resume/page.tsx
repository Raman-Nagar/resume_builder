import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogStickyCTA } from "@/components/blog/BlogStickyCTA";

export const metadata: Metadata = {
  title: "How to List Education on a Resume in 2025 (With Examples)",
  description: "Learn exactly how to list education on a resume — what to include, where to put it, how to handle GPA, multiple degrees, unfinished degrees, and online courses.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/how-to-list-education-on-a-resume" },
  openGraph: { title: "How to List Education on a Resume in 2025 (With Examples)", description: "What to include in your education section and where to put it.", url: "https://resumebuilder.ramannagar.in/blog/how-to-list-education-on-a-resume", type: "article" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Article", headline: "How to List Education on a Resume in 2025 (With Examples)", description: "A complete guide to listing education on a resume in 2025.", url: "https://resumebuilder.ramannagar.in/blog/how-to-list-education-on-a-resume", datePublished: "2025-01-01", dateModified: "2025-01-01", author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" }, publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" } };

export default function HowToListEducationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>How to List Education on a Resume</span>
        </nav>

        <h1>How to List Education on a Resume in 2025</h1>
        <p className="prose-page__meta">Updated January 2025 · 6 min read</p>
        <p className="prose-page__lead">The education section is straightforward — but there are several common mistakes that can hurt your resume. This guide covers exactly what to include, how to format it, where to place it, and how to handle tricky situations like a low GPA, an unfinished degree, or online certifications.</p>

        <h2>What to include in your education section</h2>
        <p>For each degree, include:</p>
        <ul>
          <li><strong>Degree type and field of study</strong> — e.g. BSc Computer Science</li>
          <li><strong>Institution name</strong> — full name, no abbreviations</li>
          <li><strong>Location</strong> — city and country (or state)</li>
          <li><strong>Graduation year</strong> — or expected graduation year</li>
        </ul>

        <div className="prose-example prose-example--code">
          <p className="prose-example__label">Example</p>
          <p className="prose-example__text"><strong>BSc Computer Science</strong><br />University of Manchester · Manchester, UK<br />Sep 2019 – Jun 2022 · First Class Honours</p>
        </div>

        <h2>Where to put the education section</h2>
        <p><strong>Recent graduates and students:</strong> put education at the top, above work experience. Your degree is your strongest credential right now.</p>
        <p><strong>Professionals with 3+ years of experience:</strong> put education below work experience. Your career history is more relevant than where you studied.</p>

        <h2>Should you include your GPA?</h2>
        <p>Include your GPA if:</p>
        <ul>
          <li>It is 3.5 or above (on a 4.0 scale) — or a First / 2:1 in the UK system</li>
          <li>You graduated within the last 3 years</li>
          <li>The job posting specifically asks for it</li>
        </ul>
        <p>Leave it out if it is below 3.5, if you graduated more than 3–4 years ago, or if you are applying for a senior role.</p>

        <h2>Multiple degrees</h2>
        <p>List degrees in reverse chronological order — most recent first. You do not need to include your secondary school / high school once you have a university degree, unless you are a student with no other credentials.</p>

        <h2>Unfinished or incomplete degrees</h2>
        <ul>
          <li><strong>Still enrolled:</strong> list it with &quot;Expected graduation: [year]&quot;</li>
          <li><strong>Left without graduating:</strong> list the institution, dates attended, and the number of credits completed — e.g. &quot;Completed 90 of 120 credits towards BSc Economics&quot;</li>
        </ul>

        <h2>Online courses and certifications</h2>
        <p>Online courses from recognised providers (Google, Coursera, AWS, HubSpot) are worth including if directly relevant. Either add them to the education section or create a separate Certifications section.</p>

        <h2>Common education section mistakes</h2>
        <ul>
          <li><strong>Including high school when you have a degree</strong> — remove it</li>
          <li><strong>Listing a low GPA</strong> — if it is below 3.5, leave it out</li>
          <li><strong>Wrong order</strong> — most recent degree always goes first</li>
          <li><strong>Putting education above experience when you have 3+ years of work history</strong></li>
        </ul>

        <div className="prose-page__cta-box">
          <p>Add your education in our free resume builder</p>
          <p>Our builder formats your education section automatically. Choose a template and download as PDF — no account required.</p>
          <Link href="/choose-template" className="btn btn-accent btn-md">Build My Resume — Free</Link>
        </div>

        <RelatedPosts currentHref="/blog/how-to-list-education-on-a-resume" />
      </main>
      <BlogStickyCTA />
    </>
  );
}
