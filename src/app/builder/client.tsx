"use client";

import { BuilderShell } from "@/components/builder/BuilderShell";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

export function BuilderPageClient() {
  return (
    <ErrorBoundary>
      <BuilderShell />
    </ErrorBoundary>
  );
}
