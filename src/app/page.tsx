import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { TemplatesSection } from "@/components/landing/TemplatesSection";
import { PrivacySection } from "@/components/landing/PrivacySection";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Testimonials } from "@/components/landing/Testimonials";

export const metadata: Metadata = {
  title: "Free Resume Builder — Create a Professional Resume Online",
  description:
    "Build a professional resume in minutes with our free online resume builder. ATS-friendly templates, live preview, and one-click PDF download. No account required.",
  alternates: {
    canonical: "https://resumebuilder.ramannagar.in/",
  },
  openGraph: {
    url: "https://resumebuilder.ramannagar.in/",
    title: "Free Resume Builder — Create a Professional Resume Online",
    description: "Build a professional resume in minutes. ATS-friendly templates, live preview, one-click PDF download. Free, no account required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Resume Builder — Create a Professional Resume Online",
    description: "Build a professional resume in minutes. Free, private, no sign-up required.",
  },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://resumebuilder.ramannagar.in/" },
  ],
};

const jsonLdHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Build a Professional Resume Online",
  description: "Create a professional, ATS-friendly resume in minutes using Resume Builder — free, no account required.",
  totalTime: "PT15M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Choose a template", text: "Pick from Classic, Modern, Minimal, Executive, or Creative — each designed to impress hiring managers and pass ATS screening." },
    { "@type": "HowToStep", position: 2, name: "Add your information", text: "Fill in your experience, education, skills, and more using the structured editor. Your data saves automatically." },
    { "@type": "HowToStep", position: 3, name: "Download your resume", text: "Export a pixel-perfect PDF in one click. Ready to send to recruiters or attach to job applications." },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Is the resume builder free?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free. There are no hidden fees, premium tiers, or paywalls. Every template and feature is available at no cost." } },
    { "@type": "Question", name: "Do I need to create an account?", acceptedAnswer: { "@type": "Answer", text: "No account required. Open the builder and start immediately. Your resume is saved automatically in your browser's local storage." } },
    { "@type": "Question", name: "Can I switch templates after I start?", acceptedAnswer: { "@type": "Answer", text: "Yes. You can switch between Classic, Modern, Minimal, Executive, and Creative at any time in the builder without losing your content." } },
    { "@type": "Question", name: "Are the templates ATS-friendly?", acceptedAnswer: { "@type": "Answer", text: "All five templates use clean, semantic HTML that applicant tracking systems can parse reliably. No tables or graphics that confuse ATS parsers." } },
    { "@type": "Question", name: "Where is my resume data stored?", acceptedAnswer: { "@type": "Answer", text: "Your data is stored exclusively in your browser's localStorage. It never leaves your device and is never sent to any server." } },
  ],
};

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <TemplatesSection />
        <PrivacySection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
    </>
  );
}
