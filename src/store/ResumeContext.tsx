"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import type { Resume } from "@/lib/resume/types";
import { type ResumeAction } from "./resumeReducer";
import { useAutosave, type SaveStatus } from "@/hooks/useAutosave";

// ─── Context shape ────────────────────────────────────────────────────────────

interface ResumeContextValue {
  resume: Resume;
  dispatch: React.Dispatch<ResumeAction>;
  saveStatus: SaveStatus;
  /** Replace the active resume entirely (e.g. load from storage or template). */
  loadResume: (resume: Resume) => void;
}

const ResumeContext = createContext<ResumeContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

interface ResumeProviderProps {
  children: ReactNode;
  resume: Resume;
  dispatch: React.Dispatch<ResumeAction>;
  loadResume: (resume: Resume) => void;
}

export function ResumeProvider({ children, resume, dispatch, loadResume }: ResumeProviderProps) {
  const saveStatus = useAutosave(resume);

  return (
    <ResumeContext.Provider value={{ resume, dispatch, saveStatus, loadResume }}>
      {children}
    </ResumeContext.Provider>
  );
}

// ─── Hooks ────────────────────────────────────────────────────────────────────

export function useResume(): ResumeContextValue {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used inside <ResumeProvider>");
  return ctx;
}

/** Convenience hook — returns only the resume object. */
export function useResumeData(): Resume {
  return useResume().resume;
}

/** Convenience hook — returns only dispatch. */
export function useResumeDispatch(): React.Dispatch<ResumeAction> {
  return useResume().dispatch;
}
