"use client";

import { BuilderShell } from "@/components/builder/BuilderShell";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import type { TemplateId } from "@/lib/resume/types";

interface Props {
  initialTemplate?: TemplateId;
}

export function BuilderPageClient({ initialTemplate }: Props) {
  return (
    <ErrorBoundary>
      <BuilderShell initialTemplate={initialTemplate} />
    </ErrorBoundary>
  );
}
