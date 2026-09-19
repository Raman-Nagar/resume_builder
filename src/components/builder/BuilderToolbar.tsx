"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ResumePreview } from "@/components/landing/ResumePreview";
import type { SaveStatus } from "@/hooks/useAutosave";
import type { TemplateId } from "@/lib/resume/types";

interface Props {
  title: string;
  saveStatus: SaveStatus;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onTitleChange: (title: string) => void;
  onPreviewToggle: () => void;
  isPreviewOpen: boolean;
  onDownload: () => void;
  currentTemplate: TemplateId;
  onTemplateChange: (t: TemplateId) => void;
}

export function BuilderToolbar({
  title,
  saveStatus,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onTitleChange,
  onPreviewToggle,
  isPreviewOpen,
  onDownload,
  currentTemplate,
  onTemplateChange,
}: Props) {
  return (
    <header className="rb-toolbar" role="banner">
      {/* Brand */}
      <Link href="/" className="rb-toolbar__brand" aria-label="Resume Builder home">
        <span className="lp-navbar__logo-mark" aria-hidden="true" />
        <span className="rb-toolbar__brand-name">Resume Builder</span>
      </Link>

      {/* Title */}
      <div className="rb-toolbar__title-wrap">
        <input
          className="rb-toolbar__title-input"
          type="text"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          aria-label="Resume title"
          placeholder="Untitled Resume"
          spellCheck={false}
        />
        <SaveIndicator status={saveStatus} />
      </div>

      {/* Actions */}
      <div className="rb-toolbar__actions">
        {/* Template switcher */}
        <TemplateSwitcher current={currentTemplate} onChange={onTemplateChange} />

        {/* Undo / Redo */}
        <div className="rb-toolbar__action-group" role="group" aria-label="History">
          <button
            type="button"
            className="btn btn-ghost btn-sm btn-icon"
            onClick={onUndo}
            disabled={!canUndo}
            aria-label="Undo"
            title="Undo (⌘Z)"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 7v6h6" />
              <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
            </svg>
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-sm btn-icon"
            onClick={onRedo}
            disabled={!canRedo}
            aria-label="Redo"
            title="Redo (⌘⇧Z)"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 7v6h-6" />
              <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13" />
            </svg>
          </button>
        </div>

        {/* Preview toggle — mobile only */}
        <button
          type="button"
          className="btn btn-secondary btn-sm rb-toolbar__preview-btn"
          onClick={onPreviewToggle}
          aria-label={isPreviewOpen ? "Back to editor" : "Preview resume"}
          aria-pressed={isPreviewOpen}
        >
          {isPreviewOpen ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Edit
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Preview
            </>
          )}
        </button>

        {/* Download PDF */}
        <button
          type="button"
          className="btn btn-primary btn-sm"
          aria-label="Download resume as PDF"
          title="Opens the print dialog — choose 'Save as PDF' as the destination"
          onClick={onDownload}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span className="rb-toolbar__download-label">Download PDF</span>
        </button>
      </div>
    </header>
  );
}

// ─── Template switcher ───────────────────────────────────────────────────────

const TEMPLATES: { id: TemplateId; label: string; tag: string; accent: string }[] = [
  { id: "classic", label: "Classic", tag: "Most popular", accent: "#2563eb" },
  { id: "modern",  label: "Modern",  tag: "Great for tech", accent: "#7c3aed" },
  { id: "minimal", label: "Minimal", tag: "Clean & elegant", accent: "#0f172a" },
];

function TemplateSwitcher({ current, onChange }: { current: TemplateId; onChange: (t: TemplateId) => void }) {
  const [open, setOpen] = useState(false);
  const [alignRight, setAlignRight] = useState(false);
  const [measured, setMeasured] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) { setMeasured(false); setAlignRight(false); return; }
    // Measure after paint to detect overflow
    const frame = requestAnimationFrame(() => {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        setAlignRight(rect.right > window.innerWidth - 16);
      }
      setMeasured(true);
    });
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const active = TEMPLATES.find((t) => t.id === current) ?? TEMPLATES[0];

  return (
    <div ref={ref} className="rb-tmpl-switcher">
      <button
        type="button"
        className={`btn btn-ghost btn-sm rb-tmpl-switcher__btn${open ? " rb-tmpl-switcher__btn--open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Template: ${active.label}`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
        <span className="rb-tmpl-switcher__label">{active.label}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="rb-tmpl-switcher__chevron">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          ref={dropdownRef}
          className="rb-tmpl-switcher__dropdown"
          style={{
            ...(alignRight ? { left: "auto", right: 0 } : undefined),
            visibility: measured ? "visible" : "hidden",
          }}
          role="listbox"
          aria-label="Choose template"
        >
          <div className="rb-tmpl-switcher__dropdown-heading">Switch template</div>
          <div className="rb-tmpl-switcher__cards">
            {TEMPLATES.map((t) => {
              const isActive = t.id === current;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  className={`rb-tmpl-switcher__card${isActive ? " rb-tmpl-switcher__card--active" : ""}`}
                  style={{ "--tmpl-accent": t.accent } as React.CSSProperties}
                  onClick={() => { onChange(t.id); setOpen(false); }}
                >
                  <div className="rb-tmpl-switcher__preview">
                    <div className="rb-tmpl-switcher__preview-scaler">
                      <ResumePreview variant={t.id} />
                    </div>
                    {isActive && (
                      <div className="rb-tmpl-switcher__check" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="rb-tmpl-switcher__card-name">{t.label}</div>
                  <div className="rb-tmpl-switcher__card-tag">{t.tag}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Save indicator ───────────────────────────────────────────────────────────

function SaveIndicator({ status }: { status: SaveStatus }) {
  return (
    <span className={`rb-save-indicator rb-save-indicator--${status}`} aria-live="polite" aria-atomic="true">
      {status === "saving" && (
        <>
          <span className="rb-save-indicator__dot" aria-hidden="true" />
          <span>Saving…</span>
        </>
      )}
      {status === "saved" && (
        <>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Saved</span>
        </>
      )}
      {status === "error" && (
        <>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>Unable to save</span>
        </>
      )}
    </span>
  );
}
