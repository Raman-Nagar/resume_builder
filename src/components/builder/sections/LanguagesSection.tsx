"use client";

import { useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { createLanguage } from "@/lib/resume/helpers";
import type { Language } from "@/lib/resume/types";
import { SectionShell } from "./SectionShell";
import { DeleteConfirmDialog } from "../forms/DeleteConfirmDialog";

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const PROFICIENCY_OPTIONS: Array<{ value: Language["proficiency"]; label: string; desc: string }> = [
  { value: "",             label: "Select level",      desc: "" },
  { value: "elementary",  label: "Elementary",         desc: "Basic words and phrases" },
  { value: "limited",     label: "Limited working",    desc: "Simple conversations" },
  { value: "professional",label: "Professional",       desc: "Work-level fluency" },
  { value: "full",        label: "Full professional",  desc: "Complex discussions" },
  { value: "native",      label: "Native / Bilingual", desc: "Mother tongue" },
];

export function LanguagesSection() {
  const { languages } = useResumeData();
  const dispatch = useResumeDispatch();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  function update(id: string, data: Partial<Language>) {
    dispatch({ type: "UPDATE_LANGUAGE", payload: { id, data } });
  }

  function handleDelete(id: string) {
    dispatch({ type: "DELETE_LANGUAGE", payload: id });
    setDeleteId(null);
  }

  const deleteTarget = languages.find((l) => l.id === deleteId);

  return (
    <>
      <SectionShell
        title="Languages"
        description="Languages you speak and your proficiency level."
        onAdd={() => dispatch({ type: "ADD_LANGUAGE", payload: createLanguage() })}
        addLabel="Add language"
        isEmpty={languages.length === 0}
        emptyIcon={<GlobeIcon />}
        emptyTitle="No languages added yet"
        emptyDescription="Speaking more than one language is a genuine differentiator. Add each language and your proficiency level."
        emptyCta="+ Add Language"
      >
        <div className="rb-language-list" role="list">
          {languages.map((l) => {
            const profInfo = PROFICIENCY_OPTIONS.find((o) => o.value === l.proficiency);
            const nameId = `lang-name-${l.id}`;
            const levelId = `lang-level-${l.id}`;
            return (
              <div key={l.id} className="rb-language-card" role="listitem">
                <div className="rb-language-card__fields">
                  <div className="rb-field">
                    <label className="label" htmlFor={nameId}>Language</label>
                    <input
                      id={nameId}
                      className="field-base input rb-language-card__name"
                      type="text"
                      value={l.name}
                      placeholder="e.g. Spanish"
                      onChange={(e) => update(l.id, { name: e.target.value })}
                    />
                  </div>
                  <div className="rb-language-card__level-wrap">
                    <div className="rb-field">
                      <label className="label" htmlFor={levelId}>Proficiency</label>
                      <select
                        id={levelId}
                        className="field-base select"
                        value={l.proficiency}
                        onChange={(e) => update(l.id, { proficiency: e.target.value as Language["proficiency"] })}
                      >
                        {PROFICIENCY_OPTIONS.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>
                    {profInfo?.desc && (
                      <span className="rb-language-card__desc">{profInfo.desc}</span>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm btn-icon rb-entry-card__delete"
                  onClick={() => setDeleteId(l.id)}
                  aria-label={`Remove ${l.name || "language"}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6M14 11v6" />
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </SectionShell>

      <DeleteConfirmDialog
        open={deleteId !== null}
        itemName={deleteTarget ? (deleteTarget.name || "this language") : ""}
        onConfirm={() => deleteId && handleDelete(deleteId)}
        onCancel={() => setDeleteId(null)}
      />
    </>
  );
}
