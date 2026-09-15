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

export const metadata: Metadata = {
  title: "Free Resume Builder — Create a Professional Resume Online",
  description:
    "Build a professional resume in minutes with our free online resume builder. ATS-friendly templates, live preview, and one-click PDF download. No account required.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
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
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
