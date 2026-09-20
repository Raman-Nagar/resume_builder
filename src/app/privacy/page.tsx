import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Resume Builder privacy policy. Your resume data is stored only in your browser and never sent to any server.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="prose-page">
      <Link href="/">← Back to Resume Builder</Link>
      <h1>Privacy Policy</h1>
      <p className="prose-page__meta">Last updated: January 2025</p>

      <h2>Data Storage</h2>
      <p>All resume data you enter is stored exclusively in your browser&apos;s <code>localStorage</code>. It never leaves your device and is never transmitted to any server.</p>

      <h2>PDF Generation</h2>
      <p>PDF export is performed entirely in your browser. No data is uploaded to generate your resume.</p>

      <h2>Analytics</h2>
      <p>We use Google Analytics to collect anonymous usage data (page views, session duration). No personally identifiable information is collected. You can opt out via your browser&apos;s privacy settings or a browser extension.</p>

      <h2>Cookies</h2>
      <p>We do not set any first-party cookies. Google Analytics may set third-party cookies as described in <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</p>

      <h2>Contact</h2>
      <p>Questions? Reach out at <a href="https://ramannagar.in">ramannagar.in</a>.</p>

      <hr className="prose-page__divider" />
      <Link href="/terms">Terms of Use</Link>
    </main>
  );
}
