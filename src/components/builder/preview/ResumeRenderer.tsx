"use client";

import type { Resume } from "@/lib/resume/types";
import type { TemplateId, TemplateComponent } from "./TemplateProps";
import { ClassicTemplate } from "./ClassicTemplate";
import { ModernTemplate } from "./ModernTemplate";
import { MinimalTemplate } from "./MinimalTemplate";
import { ExecutiveTemplate } from "./ExecutiveTemplate";
import { CreativeTemplate } from "./CreativeTemplate";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

// ─── Template registry ────────────────────────────────────────────────────────
// To add a new template: import it and add an entry here. Nothing else changes.

const TEMPLATE_REGISTRY: Record<TemplateId, TemplateComponent> = {
  classic:   ClassicTemplate,
  modern:    ModernTemplate,
  minimal:   MinimalTemplate,
  executive: ExecutiveTemplate,
  creative:  CreativeTemplate,
};

const FALLBACK: TemplateComponent = ClassicTemplate;

// ─── Renderer ─────────────────────────────────────────────────────────────────

interface Props {
  resume: Resume;
}

function TemplateErrorFallback() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "400px",
      gap: "12px",
      padding: "40px",
      fontFamily: "system-ui, sans-serif",
      color: "#475569",
      textAlign: "center",
    }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      <p style={{ fontSize: "14px", lineHeight: 1.6, maxWidth: "280px" }}>
        Unable to render this template. Try switching to a different template in the Design panel.
      </p>
    </div>
  );
}

export function ResumeRenderer({ resume }: Props) {
  const Template = TEMPLATE_REGISTRY[resume.design.template] ?? FALLBACK;
  return (
    <ErrorBoundary fallback={<TemplateErrorFallback />}>
      <Template resume={resume} />
    </ErrorBoundary>
  );
}
