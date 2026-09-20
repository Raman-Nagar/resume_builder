import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Resume Builder. Free to use, no account required, no warranties.",
  alternates: { canonical: "https://resumebuilder.ramannagar.in/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="prose-page">
      <Link href="/">← Back to Resume Builder</Link>
      <h1>Terms of Use</h1>
      <p className="prose-page__meta">Last updated: January 2025</p>

      <h2>1. Acceptance</h2>
      <p>By using resumebuilder.ramannagar.in you agree to these terms. If you do not agree, please stop using the service.</p>

      <h2>2. Free Service</h2>
      <p>Resume Builder is provided free of charge. We reserve the right to modify, suspend, or discontinue the service at any time without notice.</p>

      <h2>3. Your Content</h2>
      <p>All resume data you enter is stored exclusively in your own browser. We have no access to your content and take no responsibility for data lost due to browser storage being cleared.</p>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to misuse the service — including attempting to reverse-engineer, scrape, or disrupt the platform. The service is intended solely for creating personal resumes.</p>

      <h2>5. Intellectual Property</h2>
      <p>The Resume Builder application, templates, and design are owned by Raman Nagar. You may not copy or redistribute the application itself. Resumes you create are entirely your own.</p>

      <h2>6. Disclaimer of Warranties</h2>
      <p>The service is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the service will be uninterrupted, error-free, or suitable for any particular purpose.</p>

      <h2>7. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, Raman Nagar shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>

      <h2>8. Changes to Terms</h2>
      <p>We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>

      <h2>9. Contact</h2>
      <p>Questions? Reach out at <a href="https://ramannagar.in">ramannagar.in</a>.</p>

      <hr className="prose-page__divider" />
      <Link href="/privacy">Privacy Policy</Link>
    </main>
  );
}
