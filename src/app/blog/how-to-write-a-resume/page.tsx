import type { Metadata } from "next";
import Link from "next/link";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { BlogStickyCTA } from "@/components/blog/BlogStickyCTA";

export const metadata: Metadata = {
  title: "How to Write a Resume in 2025 — Step-by-Step Guide",
  description: "Learn how to write a professional resume in 2025. Complete step-by-step guide covering format, every section, wording, ATS tips, and real examples.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-resume" },
  openGraph: { title: "How to Write a Resume in 2025 — Step-by-Step Guide", description: "Complete step-by-step guide to writing a professional resume in 2025 — format, sections, examples, and ATS tips.", url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-resume", type: "article" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Write a Resume in 2025 — Step-by-Step Guide",
  description: "A complete step-by-step guide to writing a professional resume in 2025, covering format, every section, wording, and ATS optimisation.",
  url: "https://resumebuilder.ramannagar.in/blog/how-to-write-a-resume",
  datePublished: "2025-01-01",
  dateModified: "2025-06-01",
  wordCount: 2200,
  keywords: ["how to write a resume", "resume writing guide", "resume sections", "ATS resume", "professional resume 2025"],
  author: { "@type": "Person", name: "Raman Nagar", url: "https://ramannagar.in" },
  publisher: { "@type": "Organization", name: "Resume Builder", url: "https://resumebuilder.ramannagar.in/" },
  image: "https://resumebuilder.ramannagar.in/og-image.png",
};

export default function HowToWriteResumePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="prose-page">
        <nav aria-label="Breadcrumb" className="prose-page__breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/blog">Blog</Link><span>›</span><span>How to Write a Resume</span>
        </nav>

        <h1>How to Write a Resume in 2025 — Step-by-Step Guide</h1>
        <p className="prose-page__meta">Updated June 2025 · 12 min read</p>
        <p className="prose-page__lead">A resume is your first impression with a hiring manager — and in 2025, it needs to pass an applicant tracking system (ATS) before a human ever reads it. This guide walks through every section, every decision, and every common mistake so you can write a resume that actually gets interviews.</p>

        <h2>What is a resume?</h2>
        <p>A resume is a one- or two-page document that summarises your work experience, education, skills, and achievements. Its sole purpose is to get you an interview — not to tell your life story. Every word should earn its place.</p>
        <p>In the US and Canada the document is called a resume. In the UK, Ireland, and most of Europe it is called a CV (curriculum vitae). For most jobs below senior academic or research roles, the two terms are used interchangeably and the format is the same.</p>

        <h2>1. Choose the right resume format</h2>
        <p>There are three main resume formats. Choosing the wrong one is one of the most common mistakes job seekers make.</p>

        <h3>Reverse-chronological (recommended for most people)</h3>
        <p>Your most recent job appears first, followed by earlier roles in descending order. This is the format recruiters expect and the one ATS systems parse most reliably. Use it if you have a consistent work history in the same field.</p>

        <h3>Functional (skills-first)</h3>
        <p>Skills and competencies appear at the top, with work history minimised or listed without dates. This format is sometimes used by career changers or people with employment gaps. However, most ATS systems struggle to parse it correctly, and many recruiters are suspicious of it. Use it only as a last resort.</p>

        <h3>Combination (hybrid)</h3>
        <p>A skills summary appears at the top, followed by a full reverse-chronological work history. This works well for senior professionals or career changers who have transferable skills worth highlighting before the experience section.</p>

        <p><strong>Bottom line:</strong> Unless you have a specific reason not to, use reverse-chronological. It is what recruiters expect and what ATS handles best.</p>

        <h2>2. Set up your page layout</h2>
        <p>Before writing a single word, get the basics right:</p>
        <ul>
          <li><strong>Length:</strong> One page for under 10 years of experience. Two pages for 10–20 years. Never three pages unless you are an academic writing a CV.</li>
          <li><strong>Margins:</strong> 0.5–1 inch on all sides. Narrower than 0.5 inch looks cramped; wider than 1 inch wastes space.</li>
          <li><strong>Font:</strong> Arial, Calibri, Georgia, or Times New Roman at 10–12pt for body text. Your name can be 16–20pt.</li>
          <li><strong>File format:</strong> Save and send as PDF unless the job posting specifically asks for DOCX. PDF preserves your formatting on any device.</li>
          <li><strong>File name:</strong> Use <em>FirstName-LastName-Resume.pdf</em>, not <em>resume_final_v3.pdf</em>.</li>
        </ul>

        <h2>3. Write your contact information</h2>
        <p>Your contact section goes at the very top. Include:</p>
        <ul>
          <li>Full name (larger font, bold)</li>
          <li>Professional email address — firstname.lastname@gmail.com, not nicknames</li>
          <li>Phone number with country code if applying internationally</li>
          <li>City and country (you do not need your full street address)</li>
          <li>LinkedIn profile URL — customise it to linkedin.com/in/yourname</li>
          <li>GitHub, portfolio, or personal website if relevant to the role</li>
        </ul>
        <p>Do not include: date of birth, marital status, nationality, or a photo (unless applying in a country where photos are standard, such as Germany or Japan).</p>

        <h2>4. Write a professional summary</h2>
        <p>A professional summary is 2–4 sentences at the top of your resume that tell a recruiter who you are, what you do, and what you bring. It is the first thing most people read and the section most people write worst.</p>

        <h3>What to include</h3>
        <ul>
          <li>Your job title and years of experience</li>
          <li>Your main area of expertise or specialisation</li>
          <li>One or two concrete achievements or skills</li>
          <li>What kind of role or impact you are looking for (optional)</li>
        </ul>

        <h3>Example — weak summary</h3>
        <p><em>&quot;Hard-working and motivated professional with experience in marketing. Good communication skills and a team player who works well under pressure.&quot;</em></p>
        <p>This says nothing specific. Every candidate could write this.</p>

        <h3>Example — strong summary</h3>
        <p><em>&quot;Digital marketing manager with 6 years of experience growing B2B SaaS brands. Specialises in SEO and paid acquisition — grew organic traffic by 180% at previous company. Looking to bring data-driven growth strategies to a scaling product team.&quot;</em></p>
        <p>This is specific, quantified, and immediately tells the recruiter whether you are a fit.</p>

        <h2>5. Write your work experience section</h2>
        <p>This is the most important section of your resume. For each role, include:</p>
        <ul>
          <li>Job title</li>
          <li>Company name and location (city, country)</li>
          <li>Dates of employment (month and year — e.g. Jan 2022 – Mar 2024)</li>
          <li>3–6 bullet points describing your responsibilities and achievements</li>
        </ul>

        <h3>How to write strong bullet points</h3>
        <p>Every bullet point should follow this structure: <strong>Action verb + what you did + result or scale.</strong></p>
        <ul>
          <li><strong>Weak:</strong> Responsible for managing social media accounts</li>
          <li><strong>Strong:</strong> Managed 4 social media channels, growing combined following from 12k to 48k in 18 months</li>
        </ul>
        <ul>
          <li><strong>Weak:</strong> Helped with product launches</li>
          <li><strong>Strong:</strong> Coordinated cross-functional product launches for 3 major features, each shipped on schedule with zero critical post-launch bugs</li>
        </ul>
        <p>Quantify wherever you can — percentages, revenue figures, team sizes, time saved, users affected. If you cannot quantify, describe the scope or impact.</p>

        <h3>How many bullet points per role?</h3>
        <ul>
          <li>Current or most recent role: 4–6 bullets</li>
          <li>Previous roles: 2–4 bullets</li>
          <li>Roles older than 10 years: 1–2 bullets or omit entirely</li>
        </ul>

        <h3>Handling employment gaps</h3>
        <p>If you have a gap of a few months, you do not need to explain it. If the gap is longer than 6 months, briefly address it — either in your cover letter or with a short note in the experience section (e.g. &quot;Career break — full-time carer for family member&quot;). Recruiters are far more understanding about gaps than they were a decade ago.</p>

        <h2>6. Write your education section</h2>
        <p>List your highest degree first. For each qualification include:</p>
        <ul>
          <li>Degree type and field of study (e.g. B.Sc. Computer Science)</li>
          <li>Institution name and location</li>
          <li>Graduation year (or expected graduation year)</li>
          <li>GPA — only if above 3.5 and you graduated within the last 3 years</li>
          <li>Relevant coursework, thesis, or honours — only if directly relevant to the role</li>
        </ul>
        <p>If you have more than 5 years of work experience, keep the education section brief — one or two lines per qualification. Your experience matters more at that stage.</p>
        <p>If you are a recent graduate with limited work experience, put education above experience and expand it with relevant projects, coursework, and academic achievements.</p>

        <h2>7. Write your skills section</h2>
        <p>The skills section serves two purposes: it helps ATS match your resume to the job description, and it gives recruiters a quick snapshot of your technical abilities.</p>

        <h3>What to include</h3>
        <ul>
          <li>Hard skills: programming languages, software, tools, platforms, certifications</li>
          <li>Industry-specific skills: financial modelling, SEO, CAD, clinical research, etc.</li>
          <li>Languages: list proficiency level (e.g. Spanish — Professional working proficiency)</li>
        </ul>

        <h3>What to leave out</h3>
        <ul>
          <li>Soft skills like &quot;communication&quot;, &quot;leadership&quot;, or &quot;teamwork&quot; — demonstrate these through your bullet points instead</li>
          <li>Basic skills like &quot;Microsoft Word&quot; or &quot;email&quot; unless the job specifically requires them</li>
          <li>Skills you cannot back up in an interview</li>
        </ul>

        <h3>ATS keyword matching</h3>
        <p>Read the job description carefully and mirror its exact phrasing in your skills section. If the job says &quot;project management&quot;, use that phrase — not &quot;managing projects&quot;. ATS systems match strings literally. This is not dishonest — it is making sure your genuine skills are recognised.</p>

        <h2>8. Optional sections worth adding</h2>
        <p>Depending on your background and the role, these sections can strengthen your resume:</p>

        <h3>Projects</h3>
        <p>Especially valuable for software engineers, designers, and recent graduates. Include the project name, a one-line description, the technologies used, and a link to a live demo or GitHub repo if available.</p>

        <h3>Certifications</h3>
        <p>List the certification name, issuing organisation, and date. Relevant certifications (AWS, PMP, CFA, Google Analytics, etc.) can be a strong differentiator.</p>

        <h3>Volunteer work</h3>
        <p>Include if it is relevant to the role or demonstrates skills you want to highlight. Treat it like a work experience entry with bullet points.</p>

        <h3>Publications and presentations</h3>
        <p>Relevant for academic, research, or thought-leadership roles. List in reverse-chronological order.</p>

        <h3>Awards and achievements</h3>
        <p>Keep it brief — one or two lines per award with context (e.g. &quot;Employee of the Year, Acme Corp, 2023 — awarded to 1 of 200 employees&quot;).</p>

        <h2>9. Tailor your resume for every application</h2>
        <p>Sending the same resume to every job is one of the biggest mistakes job seekers make. Recruiters can tell when a resume is generic, and ATS systems will rank tailored resumes higher.</p>
        <p>For each application:</p>
        <ul>
          <li>Read the job description and identify the 5–8 most important requirements</li>
          <li>Make sure those requirements appear in your resume — in your summary, experience bullets, and skills section</li>
          <li>Adjust your professional summary to reflect the specific role</li>
          <li>Reorder your bullet points so the most relevant ones appear first</li>
        </ul>
        <p>This does not mean rewriting your entire resume each time. A 15-minute targeted edit per application makes a significant difference.</p>

        <h2>10. Common resume mistakes to avoid</h2>
        <ul>
          <li><strong>Using a photo</strong> — in the US, UK, and Canada, photos are not standard and can introduce unconscious bias</li>
          <li><strong>Using an unprofessional email</strong> — create a simple firstname.lastname@gmail.com if needed</li>
          <li><strong>Writing in first person</strong> — do not write &quot;I managed a team&quot;; write &quot;Managed a team&quot;</li>
          <li><strong>Using passive voice</strong> — &quot;was responsible for&quot; is weaker than &quot;managed&quot; or &quot;led&quot;</li>
          <li><strong>Listing duties instead of achievements</strong> — what you did matters less than what you accomplished</li>
          <li><strong>Inconsistent formatting</strong> — same date format, same bullet style, same font throughout</li>
          <li><strong>Spelling and grammar errors</strong> — proofread twice, then ask someone else to read it</li>
          <li><strong>Including references</strong> — &quot;References available on request&quot; wastes space; everyone knows this</li>
          <li><strong>Using tables or text boxes</strong> — ATS systems often cannot parse these correctly</li>
          <li><strong>Making it too long</strong> — if you are under 10 years of experience, one page is almost always enough</li>
        </ul>

        <h2>11. Proofread and finalise</h2>
        <p>Before sending your resume:</p>
        <ul>
          <li>Read it out loud — you will catch awkward phrasing you miss when reading silently</li>
          <li>Read it backwards sentence by sentence to catch spelling errors</li>
          <li>Check every date is correct and consistent in format</li>
          <li>Check every company name and job title is spelled correctly</li>
          <li>Open the PDF and check it looks right — formatting sometimes breaks between editors</li>
          <li>Ask a trusted friend or colleague to review it with fresh eyes</li>
        </ul>

        <h2>Resume writing checklist</h2>
        <ul>
          <li>☐ Correct format chosen (reverse-chronological for most people)</li>
          <li>☐ One page (or two for 10+ years experience)</li>
          <li>☐ Professional email address</li>
          <li>☐ LinkedIn URL included and customised</li>
          <li>☐ Professional summary is specific and quantified</li>
          <li>☐ Every bullet point starts with an action verb</li>
          <li>☐ At least 50% of bullets include a number or measurable result</li>
          <li>☐ Skills section mirrors keywords from the job description</li>
          <li>☐ No photos, tables, text boxes, or graphics</li>
          <li>☐ Consistent font, date format, and bullet style throughout</li>
          <li>☐ Saved and sent as PDF</li>
          <li>☐ File named FirstName-LastName-Resume.pdf</li>
          <li>☐ Proofread at least twice</li>
        </ul>

        <div className="prose-page__cta-box">
          <p>Ready to put this into practice?</p>
          <p>Use our free resume builder — choose a template, fill in your details, and download a polished PDF in minutes. No account required.</p>
          <Link href="/choose-template" className="btn btn-accent btn-md">Build My Resume — Free</Link>
        </div>

        <RelatedPosts currentHref="/blog/how-to-write-a-resume" />
      </main>
      <BlogStickyCTA />
    </>
  );
}
