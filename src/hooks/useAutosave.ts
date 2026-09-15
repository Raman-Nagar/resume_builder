"use client";

import { useEffect, useRef, useState } from "react";
import type { Resume } from "@/lib/resume/types";
import { saveResume } from "@/lib/resume/storage";

export type SaveStatus = "saved" | "saving" | "error";

const DEBOUNCE_MS = 600;

/**
 * Debounced autosave hook.
 *
 * Watches `resume.updatedAt` — only re-runs when the resume actually changes,
 * not on every render. Writes to localStorage via the storage utility after
 * DEBOUNCE_MS. Returns the current save status for the UI indicator.
 * Never throws — storage errors are caught and surfaced as "error".
 */
export function useAutosave(resume: Resume): SaveStatus {
  const [status, setStatus] = useState<SaveStatus>("saved");
  const prevUpdatedAt = useRef(resume.updatedAt);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Skip the initial mount — nothing has changed yet
    if (resume.updatedAt === prevUpdatedAt.current) return;
    prevUpdatedAt.current = resume.updatedAt;

    if (timerRef.current) clearTimeout(timerRef.current);
    setStatus("saving");

    timerRef.current = setTimeout(() => {
      try {
        saveResume(resume);
        setStatus("saved");
      } catch {
        setStatus("error");
      }
    }, DEBOUNCE_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // resume object identity changes on every dispatch; compare by updatedAt only
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resume.updatedAt]);

  return status;
}
