import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    site: "@resumebuilder",
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

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Resume Builder",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

// JSON-LD structured data for SoftwareApplication
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Resume Builder",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online resume builder with ATS-friendly templates. Create, customize, and download a professional resume as PDF — no account required.",
  url: BASE_URL,
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
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
