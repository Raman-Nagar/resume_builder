import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ClarityInit } from "@/components/ClarityInit";
import "./globals.css";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://resumebuilder.ramannagar.in/";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Free Resume Builder — Create a Professional Resume Online",
    template: "%s | Resume Builder",
  },
  description:
    "Build a professional resume in minutes with our free online resume builder. Choose from ATS-friendly templates, customize your design, and download as PDF — no account required.",
  keywords: [
    "free resume builder",
    "online resume builder",
    "professional resume builder",
    "ATS resume builder",
    "resume templates",
    "cv builder",
    "resume maker",
    "pdf resume",
  ],
  authors: [{ name: "Raman Nagar", url: "https://ramannagar.in" }],
  verification: {
    google: "847efaa3bf22d635",
  },
  openGraph: {
    type: "website",
    siteName: "Resume Builder",
    title: "Free Resume Builder — Create a Professional Resume Online",
    description:
      "Build a professional resume in minutes. Free, private, no sign-up required. ATS-friendly templates, live preview, and one-click PDF download.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Resume Builder — Create a Professional Resume Online",
    description:
      "Build a professional resume in minutes. Free, private, no sign-up required.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const SITE_URL = "https://resumebuilder.ramannagar.in";
const BUILD_DATE = new Date().toISOString().split("T")[0]; // YYYY-MM-DD, refreshed on each deploy

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Resume Builder",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Resume Builder",
  alternateName: ["Free Resume Builder", "Online Resume Maker", "ATS Resume Builder"],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "ResumeBuilder",
  operatingSystem: "Web",
  url: SITE_URL,
  downloadUrl: `${SITE_URL}/builder`,
  softwareVersion: "2.0",
  dateModified: BUILD_DATE,
  description:
    "Free online resume builder with ATS-friendly templates. Create, customize, and download a professional resume as PDF — no account required.",
  featureList: [
    "ATS-friendly resume templates",
    "Live preview",
    "One-click PDF download",
    "Import from JSON or PDF",
    "No account required",
    "Privacy-first — data stays in browser",
    "Classic, Modern, Minimal, Executive, and Creative templates",
    "Custom accent colors and fonts",
    "Undo / redo history",
  ],
  screenshot: `${SITE_URL}/og-image.png`,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Person",
    name: "Raman Nagar",
    url: "https://ramannagar.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light dark" />
        <meta name="author" content="Raman Nagar" />
        {/* Apply saved theme before first paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('rb-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body>
        {children}
        <ClarityInit />
        <GoogleAnalytics gaId="G-YSJBLHXQFW" />
      </body>
    </html>
  );
}
