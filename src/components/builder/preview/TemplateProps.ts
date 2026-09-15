import type { Resume, TemplateId } from "@/lib/resume/types";

export type { TemplateId };

export interface TemplateProps {
  resume: Resume;
}

export type TemplateComponent = React.ComponentType<TemplateProps>;
