"use client";

import { useEffect, useRef, useState } from "react";
import { useResumeData } from "@/store/ResumeContext";
import { scoreResume, type ResumeScore as Score } from "@/lib/resume/score";

const LEVEL_COLOR: Record<Score["level"], string> = {
  weak:   "#ef4444",
  fair:   "#f97316",
  good:   "#eab308",
  strong: "#22c55e",
};

const LEVEL_LABEL: Record<Score["level"], string> = {
  weak:   "Weak",
  fair:   "Fair",
  good:   "Good",
  strong: "Strong",
};

// SVG ring — r=16, circumference ≈ 100.5
const R = 16;
const CIRC = 2 * Math.PI * R;

export function ResumeScoreBadge() {
  const resume = useResumeData();
  const score = scoreResume(resume);
  const [open, setOpen] = useState(false);
  const [measured, setMeasured] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) { setMeasured(false); return; }
    const frame = requestAnimationFrame(() => setMeasured(true));
    function onMouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const color = LEVEL_COLOR[score.level];
  const dash = (score.total / 100) * CIRC;
  const pending = score.items.filter((i) => !i.done);
  const done = score.items.filter((i) => i.done);

  return (
    <div ref={ref} className="rb-score">
      <button
        type="button"
        className={`rb-score__btn${open ? " rb-score__btn--open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`Resume score: ${score.total} out of 100 — ${LEVEL_LABEL[score.level]}`}
        title="Resume score"
      >
        {/* Mini ring */}
        <svg width="28" height="28" viewBox="0 0 36 36" aria-hidden="true">
          <circle cx="18" cy="18" r={R} fill="none" stroke="var(--color-border)" strokeWidth="3" />
          <circle
            cx="18" cy="18" r={R}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeDasharray={`${dash} ${CIRC}`}
            strokeLinecap="round"
            transform="rotate(-90 18 18)"
            style={{ transition: "stroke-dasharray 0.4s ease" }}
          />
          <text x="18" y="22" textAnchor="middle" fontSize="9" fontWeight="700" fill={color} fontFamily="sans-serif">
            {score.total}
          </text>
        </svg>
        <span className="rb-score__label">{LEVEL_LABEL[score.level]}</span>
      </button>

      {open && (
        <div
          ref={dropdownRef}
          className="rb-score__dropdown"
          style={{ visibility: measured ? "visible" : "hidden" }}
          role="dialog"
          aria-label="Resume score details"
        >
          {/* Header */}
          <div className="rb-score__header">
            {/* Large ring */}
            <svg width="72" height="72" viewBox="0 0 36 36" aria-hidden="true">
              <circle cx="18" cy="18" r={R} fill="none" stroke="var(--color-border)" strokeWidth="2.5" />
              <circle
                cx="18" cy="18" r={R}
                fill="none"
                stroke={color}
                strokeWidth="2.5"
                strokeDasharray={`${dash} ${CIRC}`}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
                style={{ transition: "stroke-dasharray 0.4s ease" }}
              />
              <text x="18" y="16" textAnchor="middle" fontSize="7" fontWeight="700" fill={color} fontFamily="sans-serif">
                {score.total}
              </text>
              <text x="18" y="22" textAnchor="middle" fontSize="4" fill="var(--color-text-muted)" fontFamily="sans-serif">
                / 100
              </text>
            </svg>
            <div>
              <div className="rb-score__level" style={{ color }}>{LEVEL_LABEL[score.level]}</div>
              <div className="rb-score__sublabel">
                {pending.length === 0
                  ? "Perfect score! 🎉"
                  : `${pending.length} improvement${pending.length > 1 ? "s" : ""} left`}
              </div>
            </div>
          </div>

          {/* Pending items */}
          {pending.length > 0 && (
            <div className="rb-score__section">
              <div className="rb-score__section-title">To improve</div>
              {pending.map((item) => (
                <div key={item.id} className="rb-score__item rb-score__item--pending">
                  <span className="rb-score__item-icon" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </span>
                  <div className="rb-score__item-body">
                    <span className="rb-score__item-label">{item.label}</span>
                    <span className="rb-score__item-tip">{item.tip}</span>
                  </div>
                  <span className="rb-score__item-pts">+{item.points}</span>
                </div>
              ))}
            </div>
          )}

          {/* Done items */}
          {done.length > 0 && (
            <div className="rb-score__section">
              <div className="rb-score__section-title">Completed</div>
              {done.map((item) => (
                <div key={item.id} className="rb-score__item rb-score__item--done">
                  <span className="rb-score__item-icon" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="rb-score__item-label">{item.label}</span>
                  <span className="rb-score__item-pts">{item.points}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
