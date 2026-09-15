import type { Metadata } from "next";
import { BuilderPageClient } from "./client";

export const metadata: Metadata = {
  title: "Resume Builder",
  description: "Create and edit your professional resume.",
  robots: { index: false, follow: false },
};

export default function BuilderPage() {
  return <BuilderPageClient />;
}
