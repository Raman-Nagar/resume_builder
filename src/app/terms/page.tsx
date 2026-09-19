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
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px", fontFamily: "sans-serif", lineHeight: 1.7, color: "#1e293b" }}>
      <Link href="/" style={{ color: "#2563eb", fontSize: 14 }}>← Back to Resume Builder</Link>

      <h1 style={{ marginTop: 32, fontSize: 36, fontWeight: 700 }}>Terms of Use</h1>
      <p style={{ color: "#64748b" }}>Last updated: January 2025</p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>1. Acceptance</h2>
      <p>By using resumebuilder.ramannagar.in you agree to these terms. If you do not agree, please stop using the service.</p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>2. Free Service</h2>
      <p>Resume Builder is provided free of charge. We reserve the right to modify, suspend, or discontinue the service at any time without notice.</p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>3. Your Content</h2>
      <p>All resume data you enter is stored exclusively in your own browser. We have no access to your content and take no responsibility for data lost due to browser storage being cleared.</p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>4. Acceptable Use</h2>
      <p>You agree not to misuse the service — including attempting to reverse-engineer, scrape, or disrupt the platform. The service is intended solely for creating personal resumes.</p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>5. Intellectual Property</h2>
      <p>The Resume Builder application, templates, and design are owned by Raman Nagar. You may not copy or redistribute the application itself. Resumes you create are entirely your own.</p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>6. Disclaimer of Warranties</h2>
      <p>The service is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the service will be uninterrupted, error-free, or suitable for any particular purpose.</p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>7. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, Raman Nagar shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>8. Changes to Terms</h2>
      <p>We may update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>9. Contact</h2>
      <p>Questions? Reach out at <a href="https://ramannagar.in" style={{ color: "#2563eb" }}>ramannagar.in</a>.</p>

      <p style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid #e2e8f0" }}>
        <Link href="/privacy" style={{ color: "#2563eb" }}>Privacy Policy</Link>
      </p>
    </main>
  );
}
