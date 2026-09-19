import type { Metadata } from "next";
import { BuilderPageClient } from "./client";
import type { TemplateId } from "@/lib/resume/types";

export const metadata: Metadata = {
  title: "Resume Builder",
  description: "Create and edit your professional resume.",
  robots: { index: false, follow: false },
};

const VALID_TEMPLATES = new Set<TemplateId>(["classic", "modern", "minimal"]);

export default async function BuilderPage({
  searchParams,
}: {
  searchParams: Promise<{ template?: string }>;
}) {
  const { template } = await searchParams;
  const initialTemplate = VALID_TEMPLATES.has(template as TemplateId)
    ? (template as TemplateId)
    : undefined;
  return <BuilderPageClient initialTemplate={initialTemplate} />;
}
