import type { Resume } from "./types";
import { createDefaultSections } from "./defaults";
import { generateId } from "./helpers";

function id() {
  return generateId();
}

export const SAMPLE_RESUME: Resume = {
  id: "sample-resume-alex-morgan",
  title: "Alex Morgan — Senior Frontend Developer",
  personalInfo: {
    fullName: "Alex Morgan",
    headline: "Senior Frontend Developer",
    email: "alex.morgan@example.com",
    phone: "+1 (415) 867-5309",
    location: "Austin, TX",
    website: "https://alexmorgan.dev",
    linkedin: "https://linkedin.com/in/alexmorgandev",
    github: "https://github.com/alexmorgandev",
    summary:
      "Senior Frontend Developer with 7+ years of experience building fast, accessible, and delightful web products. Specialise in React ecosystems, design systems, and performance optimisation. Comfortable owning features end-to-end — from Figma handoff to production deployment. Passionate about developer experience and mentoring early-career engineers.",
    photo: "",
  },
  experience: [
    {
      id: id(),
      company: "Vercel",
      title: "Senior Frontend Engineer",
      location: "Remote",
      startDate: "2022-01",
      endDate: "",
      current: true,
      bullets: [
        "Led the redesign of the Vercel Dashboard's deployment detail page, reducing time-to-insight by 40% based on user research sessions.",
        "Built a real-time log streaming UI using Server-Sent Events and React, handling 10k+ concurrent connections without degrading performance.",
        "Established the team's component library (50+ components) with Radix UI primitives, cutting design-to-code time by 35%.",
        "Championed Core Web Vitals improvements across the marketing site — LCP improved from 3.8 s to 1.2 s, boosting organic search ranking.",
        "Mentored 2 mid-level engineers through weekly code reviews and pair-programming sessions.",
      ],
    },
    {
      id: id(),
      company: "Shopify",
      title: "Frontend Developer",
      location: "Toronto, ON (Remote)",
      startDate: "2019-04",
      endDate: "2021-12",
      current: false,
      bullets: [
        "Contributed to Polaris, Shopify's open-source design system — authored 8 new components and wrote the accessibility guidelines adopted by 200+ internal teams.",
        "Rebuilt the checkout address form with React Hook Form and Zod, reducing form-related support tickets by 28%.",
        "Migrated a 120k-line JavaScript codebase to TypeScript over 6 months with zero production regressions.",
        "Collaborated with the Payments team to integrate Apple Pay and Google Pay, increasing mobile checkout conversion by 12%.",
      ],
    },
    {
      id: id(),
      company: "Clearbit",
      title: "Junior Frontend Developer",
      location: "San Francisco, CA",
      startDate: "2017-06",
      endDate: "2019-03",
      current: false,
      bullets: [
        "Built interactive data visualisation dashboards using D3.js and React, used daily by 500+ B2B customers.",
        "Implemented a dark-mode theming system using CSS custom properties — shipped in under 2 weeks.",
        "Wrote end-to-end tests with Cypress, increasing test coverage from 12% to 68% over one quarter.",
      ],
    },
  ],
  education: [
    {
      id: id(),
      institution: "University of Texas at Austin",
      degree: "Bachelor of Science",
      field: "Computer Science",
      location: "Austin, TX",
      startDate: "2013-08",
      endDate: "2017-05",
      current: false,
      gpa: "3.7",
      bullets: [
        "Specialisation in Human-Computer Interaction.",
        "Teaching assistant for CS 371 — Introduction to Web Development (2 semesters).",
      ],
    },
  ],
  skills: [
    { id: id(), name: "React", level: "expert", category: "Frontend" },
    { id: id(), name: "TypeScript", level: "expert", category: "Frontend" },
    { id: id(), name: "Next.js", level: "expert", category: "Frontend" },
    { id: id(), name: "CSS / Tailwind", level: "expert", category: "Frontend" },
    { id: id(), name: "Node.js", level: "advanced", category: "Backend" },
    { id: id(), name: "GraphQL", level: "advanced", category: "Backend" },
    { id: id(), name: "Figma", level: "advanced", category: "Design" },
    { id: id(), name: "Vitest / Testing Library", level: "advanced", category: "Testing" },
    { id: id(), name: "Cypress", level: "intermediate", category: "Testing" },
    { id: id(), name: "AWS (CloudFront, S3, Lambda)", level: "intermediate", category: "Infrastructure" },
  ],
  projects: [
    {
      id: id(),
      name: "Palette UI",
      description:
        "Open-source React component library with 60+ accessible, themeable components. Used by 1.4k+ developers on GitHub.",
      url: "https://palette-ui.dev",
      githubUrl: "https://github.com/alexmorgandev/palette-ui",
      startDate: "2021-03",
      endDate: "",
      current: true,
      bullets: [
        "Built on Radix UI primitives with full WAI-ARIA compliance and keyboard navigation.",
        "Automated visual regression testing with Chromatic — catches UI regressions before every merge.",
        "Published to npm; 8k weekly downloads and featured in the React Newsletter.",
      ],
      technologies: ["React", "TypeScript", "Radix UI", "Tailwind CSS", "Storybook"],
    },
    {
      id: id(),
      name: "Speedlane",
      description:
        "Browser extension that audits Core Web Vitals on any page and surfaces actionable recommendations in a side panel.",
      url: "https://speedlane.dev",
      githubUrl: "https://github.com/alexmorgandev/speedlane",
      startDate: "2020-09",
      endDate: "2021-08",
      current: false,
      bullets: [
        "Built with Plasmo framework; works across Chrome, Edge, and Brave.",
        "Integrates the Lighthouse API to generate per-element performance traces.",
        "2,200+ active users; 4.8 ★ rating on the Chrome Web Store.",
      ],
      technologies: ["TypeScript", "React", "Plasmo", "Lighthouse API", "Chrome Extensions API"],
    },
  ],
  certifications: [
    {
      id: id(),
      name: "Meta Frontend Developer Professional Certificate",
      issuer: "Meta / Coursera",
      issueDate: "2022-11",
      expiryDate: "",
      credentialId: "META-FE-2022-AM",
      url: "https://coursera.org/verify/META-FE-2022-AM",
    },
    {
      id: id(),
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      issueDate: "2021-07",
      expiryDate: "2024-07",
      credentialId: "AWS-CCP-2021-AM",
      url: "https://aws.amazon.com/certification/",
    },
  ],
  languages: [
    { id: id(), name: "English", proficiency: "native" },
    { id: id(), name: "French", proficiency: "professional" },
    { id: id(), name: "Japanese", proficiency: "elementary" },
  ],
  achievements: [
    {
      id: id(),
      title: "Speaker — CSSConf EU 2023",
      description:
        'Delivered "The Hidden Cost of Layout Shifts" to 800+ attendees, covering real-world CLS debugging techniques and tooling.',
      date: "2023-05",
    },
    {
      id: id(),
      title: "Vercel Hackathon — 1st Place",
      description:
        "Won first place out of 120 teams for building an AI-powered accessibility linter that integrates directly into VS Code.",
      date: "2023-02",
    },
  ],
  volunteer: [
    {
      id: id(),
      organization: "freeCodeCamp Austin",
      role: "Volunteer Instructor",
      location: "Austin, TX",
      startDate: "2020-01",
      endDate: "",
      current: true,
      description:
        "Run monthly workshops on HTML, CSS, and JavaScript fundamentals for career-changers. 300+ students mentored to date.",
    },
  ],
  interests: [
    { id: id(), name: "Typography & type design" },
    { id: id(), name: "Mechanical keyboards" },
    { id: id(), name: "Trail running" },
    { id: id(), name: "Specialty coffee" },
  ],
  customSections: [],
  sections: createDefaultSections().map((s) => ({
    ...s,
    visible: ["summary", "experience", "education", "skills", "projects", "certifications", "languages"].includes(s.key),
  })),
  design: {
    template: "modern",
    font: "inter",
    accentColor: "blue",
    customAccentColor: "#2563eb",
    fontSize: "normal",
    pageMargin: "normal",
    showIcons: true,
    showDividers: true,
  },
  settings: {
    language: "en",
    dateFormat: "MMM YYYY",
    pageSize: "A4",
  },
  createdAt: "2024-03-01T09:00:00.000Z",
  updatedAt: "2024-09-15T11:20:00.000Z",
};
