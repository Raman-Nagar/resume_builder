"use client";

import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { SectionShell } from "./SectionShell";

const MAX = 600;

export function SummarySection() {
  const { personalInfo } = useResumeData();
  const dispatch = useResumeDispatch();
  const len = personalInfo.summary.length;
  const pct = Math.min(len / MAX, 1);
  const over = len > MAX;

  return (
    <SectionShell
      title="Summary"
      description="A brief professional overview shown at the top of your resume."
    >
      <div className="rb-field rb-field--full">
        <div className="rb-summary-header">
          <label className="label" htmlFor="summary-text">Professional summary</label>
          <span
            className={`rb-char-counter${over ? " rb-char-counter--over" : ""}`}
            aria-live="polite"
            aria-label={over ? `${len} characters — ${len - MAX} over the ${MAX} character limit` : `${len} of ${MAX} characters`}
          >
            {len} / {MAX}
          </span>
        </div>
        <textarea
          id="summary-text"
          className={`field-base textarea rb-summary-textarea${over ? " field-error" : ""}`}
          rows={6}
          placeholder="Experienced software engineer with 8+ years building scalable web applications. Passionate about developer experience and clean architecture. Led teams of up to 6 engineers delivering products used by millions."
          value={personalInfo.summary}
          onChange={(e) => dispatch({ type: "SET_SUMMARY", payload: e.target.value })}
          aria-describedby={over ? "summary-over-limit summary-hint" : "summary-hint"}
          aria-invalid={over ? "true" : undefined}
        />
        {/* Progress bar */}
        <div className="rb-summary-progress" aria-hidden="true">
          <div
            className={`rb-summary-progress__fill${over ? " rb-summary-progress__fill--over" : ""}`}
            style={{ width: `${pct * 100}%` }}
          />
        </div>
        {over && (
          <p id="summary-over-limit" className="field-error-msg" role="alert">
            Summary is {len - MAX} character{len - MAX !== 1 ? "s" : ""} over the {MAX} character limit.
          </p>
        )}
        <p id="summary-hint" className="field-hint">
          Aim for 2–4 sentences · Focus on your strongest value proposition
        </p>
      </div>

      {/* Writing tips — progressive disclosure */}
      <details className="rb-tips">
        <summary className="rb-tips__trigger">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          Writing tips
        </summary>
        <ul className="rb-tips__list">
          <li>Start with your years of experience and primary expertise</li>
          <li>Mention 1–2 notable achievements with measurable impact</li>
          <li>End with what you&apos;re looking for or what you bring to a team</li>
          <li>Avoid first-person pronouns (I, me, my)</li>
          <li>Tailor it to the role you&apos;re applying for</li>
        </ul>
      </details>
    </SectionShell>
  );
}
