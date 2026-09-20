"use client";

import { useRef, useState } from "react";
import { useResume } from "@/store/ResumeContext";
import { importFromJSON, extractTextFromPDF, parsePDFText } from "@/lib/resume/importResume";

interface Props {
  onClose: () => void;
}

type Tab = "file" | "paste";

export function ImportModal({ onClose }: Props) {
  const { loadResume } = useResume();
  const [tab, setTab] = useState<Tab>("file");
  const [pasteText, setPasteText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPDF, setIsPDF] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const selectedFile = useRef<File | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    selectedFile.current = file;
    setFileName(file.name);
    setIsPDF(file.name.endsWith(".pdf"));
    setError("");
  }

  async function handleImport() {
    setError("");
    setLoading(true);
    try {
      if (tab === "paste") {
        const resume = importFromJSON(pasteText);
        loadResume(resume);
        onClose();
      } else {
        const file = selectedFile.current;
        if (!file) { setError("Please select a file."); setLoading(false); return; }

        if (file.name.endsWith(".json")) {
          const text = await file.text();
          const resume = importFromJSON(text);
          loadResume(resume);
          onClose();
        } else if (file.name.endsWith(".pdf")) {
          const text = await extractTextFromPDF(file);
          const resume = parsePDFText(text);
          loadResume(resume);
          onClose();
        } else {
          setError("Unsupported file type. Please upload a .json or .pdf file.");
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Import resume" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-panel modal-md">
        <div className="modal-header">
          <h2 className="modal-title">Import Resume</h2>
          <button type="button" className="btn btn-ghost btn-sm btn-icon" onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="modal-tabs" role="tablist">
          <button role="tab" aria-selected={tab === "file"} className={`modal-tab${tab === "file" ? " modal-tab--active" : ""}`} onClick={() => { setTab("file"); setError(""); }}>
            Upload file
          </button>
          <button role="tab" aria-selected={tab === "paste"} className={`modal-tab${tab === "paste" ? " modal-tab--active" : ""}`} onClick={() => { setTab("paste"); setError(""); }}>
            Paste JSON
          </button>
        </div>

        <div className="modal-body">
          {tab === "file" ? (
            <div className="import-file-area">
              <input
                ref={fileRef}
                type="file"
                accept=".json,.pdf"
                className="import-file-input"
                id="import-file"
                onChange={handleFileChange}
              />
              <label htmlFor="import-file" className="import-file-label">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span>{fileName || "Choose .json or .pdf"}</span>
                <span className="import-file-hint">Click to browse</span>
              </label>
              {isPDF && (
                <p className="import-warning">
                  PDF parsing is best-effort — review and correct results after import.
                </p>
              )}
            </div>
          ) : (
            <textarea
              className="import-textarea"
              placeholder='Paste your resume JSON here…'
              value={pasteText}
              onChange={(e) => setPasteText(e.target.value)}
              rows={10}
              spellCheck={false}
            />
          )}

          {error && <p className="import-error" role="alert">{error}</p>}
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>Cancel</button>
          <button type="button" className="btn btn-primary btn-sm" onClick={handleImport} disabled={loading}>
            {loading ? "Importing…" : "Import"}
          </button>
        </div>
      </div>
    </div>
  );
}
