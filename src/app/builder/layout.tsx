import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Resume Builder",
  description: "Build and customize your professional resume.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/builder",
  },
};

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
