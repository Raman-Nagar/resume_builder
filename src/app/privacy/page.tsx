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
      <p className="prose-page__meta">Last updated: June 2025</p>

      <h2>Data Storage</h2>
      <p>All resume data you enter is stored exclusively in your browser&apos;s <code>localStorage</code>. It never leaves your device and is never transmitted to any server.</p>

      <h2>PDF Generation</h2>
      <p>PDF export is performed entirely in your browser. No data is uploaded to generate your resume.</p>

      <h2>Analytics</h2>
      <p>We use Google Analytics to collect anonymous usage data (page views, session duration) and Microsoft Clarity to understand how users interact with the site through session recordings and heatmaps. No personally identifiable information is collected by either service. You can opt out via your browser&apos;s privacy settings or a browser extension.</p>

      <h2>Advertising</h2>
      <p>This site may display advertisements served by Google AdSense. Google and its partners may use cookies to serve ads based on your prior visits to this site or other sites on the internet. You can opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">aboutads.info</a>.</p>

      <h2>Cookies</h2>
      <p>We do not set any first-party cookies. Google Analytics, Google AdSense, and Microsoft Clarity may set third-party cookies to measure performance and serve relevant ads. For more information, see <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>, <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">How Google uses cookies in advertising</a>, and <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer">Microsoft&apos;s Privacy Statement</a>.</p>

      <h2>Children&apos;s Privacy</h2>
      <p>This service is not directed at children under the age of 13. We do not knowingly collect any personal information from children. If you believe a child has provided personal information through this site, please contact us and we will take steps to remove it.</p>

      <h2>Contact</h2>
      <p>Questions? Email us at <a href="mailto:ramannagar08082000@gmail.com">ramannagar08082000@gmail.com</a>.</p>

      <hr className="prose-page__divider" />
      <Link href="/terms">Terms of Use</Link>
    </main>
  );
}
