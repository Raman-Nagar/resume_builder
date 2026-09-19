import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Resume Builder privacy policy. Your resume data is stored only in your browser and never sent to any server.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "60px 24px",
        fontFamily: "sans-serif",
        lineHeight: 1.7,
        color: "#1e293b",
      }}
    >
      <Link href="/" style={{ color: "#2563eb", fontSize: 14 }}>
        ← Back to Resume Builder
      </Link>

      <h1 style={{ marginTop: 32, fontSize: 36, fontWeight: 700 }}>Privacy Policy</h1>
      <p style={{ color: "#64748b" }}>Last updated: January 2025</p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>Data Storage</h2>
      <p>
        All resume data you enter is stored exclusively in your browser&apos;s{" "}
        <code>localStorage</code>. It never leaves your device and is never transmitted to any
        server.
      </p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>PDF Generation</h2>
      <p>PDF export is performed entirely in your browser. No data is uploaded to generate your resume.</p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>Analytics</h2>
      <p>
        We use Google Analytics to collect anonymous usage data (page views, session duration). No
        personally identifiable information is collected. You can opt out via your browser&apos;s
        privacy settings or a browser extension.
      </p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>Cookies</h2>
      <p>
        We do not set any first-party cookies. Google Analytics may set third-party cookies as
        described in{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2563eb" }}
        >
          Google&apos;s Privacy Policy
        </a>
        .
      </p>

      <h2 style={{ marginTop: 32, fontSize: 22, fontWeight: 600 }}>Contact</h2>
      <p>
        Questions? Reach out at{" "}
        <a href="https://ramannagar.in" style={{ color: "#2563eb" }}>
          ramannagar.in
        </a>
        .
      </p>

      <p style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid #e2e8f0" }}>
        <Link href="/terms" style={{ color: "#2563eb" }}>Terms of Use</Link>
      </p>
    </main>
  );
}
