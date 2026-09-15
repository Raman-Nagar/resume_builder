"use client";

import { useResumeData } from "@/store/ResumeContext";
import { ResumeCanvas } from "./preview/ResumeCanvas";

export function PreviewPanel() {
  const resume = useResumeData();

  return (
    <div className="rb-preview-panel" aria-label="Resume preview" role="region">
      <div className="rb-preview-panel__inner">
        <ResumeCanvas resume={resume} />
      </div>
    </div>
  );
}
