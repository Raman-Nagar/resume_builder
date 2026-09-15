"use client";

import { useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { createInterest } from "@/lib/resume/helpers";
import { SectionShell } from "./SectionShell";

export function InterestsSection() {
  const { interests } = useResumeData();
  const dispatch = useResumeDispatch();
  const [inputValue, setInputValue] = useState("");

  function addInterest(name: string) {
    const trimmed = name.trim();
    if (!trimmed) return;
    dispatch({ type: "ADD_INTEREST", payload: createInterest({ name: trimmed }) });
    setInputValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault();
      addInterest(inputValue);
    }
  }

  function handleBlur() {
    if (inputValue.trim()) addInterest(inputValue);
  }

  function remove(id: string) {
    dispatch({ type: "DELETE_INTEREST", payload: id });
  }

  return (
    <SectionShell
      title="Interests"
      description="Hobbies and personal interests that show your personality."
    >
      <div className="rb-skills-add-row">
        <input
          className="field-base input"
          type="text"
          value={inputValue}
          placeholder="Type an interest and press Enter…"
          aria-label="Add interest"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => addInterest(inputValue)}
          disabled={!inputValue.trim()}
          aria-label="Add interest"
        >
          Add
        </button>
      </div>

      {interests.length === 0 && (
        <p className="field-hint" style={{ textAlign: "center", padding: "var(--space-4) 0" }}>
          Type an interest above and press Enter. Hobbies can make your resume more memorable.
        </p>
      )}

      {interests.length > 0 && (
        <div className="rb-skills-chips" style={{ marginTop: "var(--space-2)" }}>
          {interests.map((item) => (
            <div key={item.id} className="rb-skill-chip-v2">
              <div className="rb-skill-chip-v2__main">
                <input
                  className="rb-skill-chip__input"
                  type="text"
                  value={item.name}
                  placeholder="Interest"
                  aria-label="Interest name"
                  onChange={(e) =>
                    dispatch({ type: "UPDATE_INTEREST", payload: { id: item.id, data: { name: e.target.value } } })
                  }
                />
                <button
                  type="button"
                  className="rb-skill-chip__remove"
                  onClick={() => remove(item.id)}
                  aria-label={`Remove ${item.name || "interest"}`}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
