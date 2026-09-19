"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ResumeProvider } from "@/store/ResumeContext";
import { useUndoRedo } from "@/hooks/useUndoRedo";
import { usePrint } from "@/hooks/usePrint";
import { useAutosave } from "@/hooks/useAutosave";
import { SAMPLE_RESUME } from "@/lib/resume/sample";
import { createEmptyResume } from "@/lib/resume/defaults";
import { loadResume as loadFromStorage } from "@/lib/resume/storage";
import { BuilderToolbar } from "./BuilderToolbar";
import { EditorPanel } from "./EditorPanel";
import { PreviewPanel } from "./PreviewPanel";
import { WelcomeScreen } from "./WelcomeScreen";
import { StorageBanner } from "./StorageBanner";
import type { EditorSection } from "./EditorNav";
import type { Resume } from "@/lib/resume/types";

// ─── First-use detection ──────────────────────────────────────────────────────

function isFirstUse(resume: Resume): boolean {
  return (
    !resume.personalInfo.fullName.trim() &&
    resume.experience.length === 0 &&
    resume.education.length === 0 &&
    resume.skills.length === 0
  );
}

// ─── Public export ────────────────────────────────────────────────────────────

interface Props {
  initialResume?: Resume;
}

export function BuilderShell({ initialResume }: Props) {
  const seed = useMemo(() => {
    try {
      return initialResume ?? loadFromStorage() ?? createEmptyResume();
    } catch {
      return createEmptyResume();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { resume, dispatch, undo, redo, canUndo, canRedo } = useUndoRedo(seed);
  const { triggerPrint } = usePrint();
  const saveStatus = useAutosave(resume);

  const loadResume = useCallback(
    (r: Resume) => dispatch({ type: "RESET_RESUME", payload: r }),
    [dispatch]
  );

  const [welcomed, setWelcomed] = useState(() => !isFirstUse(seed));
  const [activeSection, setActiveSection] = useState<EditorSection>("personal");
  const [mobileView, setMobileView] = useState<"edit" | "preview">("edit");

  // Keyboard shortcuts
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key === "z" && !e.shiftKey) { e.preventDefault(); undo(); }
      if (mod && (e.key === "y" || (e.key === "z" && e.shiftKey))) { e.preventDefault(); redo(); }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [undo, redo]);

  const handleTitleChange = useCallback(
    (title: string) => dispatch({ type: "SET_TITLE", payload: title }),
    [dispatch]
  );

  const handleStartBlank = useCallback(() => setWelcomed(true), []);

  const handleLoadSample = useCallback(() => {
    loadResume({ ...SAMPLE_RESUME, id: resume.id });
    setWelcomed(true);
  }, [loadResume, resume.id]);

  const handlePreviewToggle = useCallback(
    () => setMobileView((v) => (v === "edit" ? "preview" : "edit")),
    []
  );

  const handleDownload = useCallback(() => {
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "download_pdf", {
        event_category: "engagement",
        event_label: resume.design.template,
      });
    }
    triggerPrint();
  }, [triggerPrint, resume.design.template]);

  return (
    <ResumeProvider resume={resume} dispatch={dispatch} loadResume={loadResume}>
      <div className="rb-shell">
        <StorageBanner />

        {!welcomed ? (
          <WelcomeScreen onStartBlank={handleStartBlank} onLoadSample={handleLoadSample} />
        ) : (
          <>
            <BuilderToolbar
              title={resume.title}
              saveStatus={saveStatus}
              canUndo={canUndo}
              canRedo={canRedo}
              onUndo={undo}
              onRedo={redo}
              onTitleChange={handleTitleChange}
              onPreviewToggle={handlePreviewToggle}
              isPreviewOpen={mobileView === "preview"}
              onDownload={handleDownload}
            />

            <div className="rb-workspace">
              <div
                className={`rb-workspace__editor${mobileView === "preview" ? " rb-workspace__editor--hidden-mobile" : ""}`}
              >
                <EditorPanel
                  activeSection={activeSection}
                  onSectionChange={setActiveSection}
                />
              </div>

              <div
                className={`rb-workspace__preview${mobileView === "edit" ? " rb-workspace__preview--hidden-mobile" : ""}`}
              >
                <PreviewPanel />
              </div>
            </div>

            <nav className="rb-mobile-tabs" aria-label="View switcher">
              <button
                type="button"
                className={`rb-mobile-tabs__btn${mobileView === "edit" ? " rb-mobile-tabs__btn--active" : ""}`}
                onClick={() => setMobileView("edit")}
                aria-pressed={mobileView === "edit"}
                aria-label="Edit resume"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Edit
              </button>
              <button
                type="button"
                className={`rb-mobile-tabs__btn${mobileView === "preview" ? " rb-mobile-tabs__btn--active" : ""}`}
                onClick={() => setMobileView("preview")}
                aria-pressed={mobileView === "preview"}
                aria-label="Preview resume"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Preview
              </button>
            </nav>
          </>
        )}
      </div>
    </ResumeProvider>
  );
}
