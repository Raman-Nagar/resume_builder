"use client";

import { useId, useRef, useCallback, useState } from "react";
import { reorder } from "@/lib/resume/helpers";

interface Props {
  bullets: string[];
  onChange: (bullets: string[]) => void;
  placeholder?: string;
}

function makeId() {
  return Math.random().toString(36).slice(2, 9);
}

export function BulletListEditor({ bullets, onChange, placeholder = "Add a bullet point…" }: Props) {
  const listRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const hintId = `bullet-hint-${uid}`;

  // Stable IDs per bullet slot — kept in sync with bullets array length
  const [ids, setIds] = useState<string[]>(() => bullets.map(() => makeId()));

  // Ensure ids array stays same length as bullets (handles external bullets changes)
  const syncedIds = ids.length === bullets.length
    ? ids
    : bullets.map((_, i) => ids[i] ?? makeId());

  // Auto-resize textarea to fit content — called as ref callback on each render
  const autoResize = useCallback((el: HTMLTextAreaElement | null) => {
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  function update(index: number, value: string) {
    const next = [...bullets];
    next[index] = value;
    onChange(next);
  }

  function remove(index: number) {
    setIds((prev) => prev.filter((_, i) => i !== index));
    onChange(bullets.filter((_, i) => i !== index));
  }

  function add() {
    const newId = makeId();
    setIds((prev) => [...prev, newId]);
    onChange([...bullets, ""]);
    setTimeout(() => {
      const inputs = listRef.current?.querySelectorAll<HTMLTextAreaElement>("textarea");
      inputs?.[inputs.length - 1]?.focus();
    }, 30);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>, index: number) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const newId = makeId();
      const next = [...bullets];
      next.splice(index + 1, 0, "");
      setIds((prev) => {
        const copy = [...prev];
        copy.splice(index + 1, 0, newId);
        return copy;
      });
      onChange(next);
      setTimeout(() => {
        const inputs = listRef.current?.querySelectorAll<HTMLTextAreaElement>("textarea");
        inputs?.[index + 1]?.focus();
      }, 30);
    }
    if (e.key === "Backspace" && bullets[index] === "" && bullets.length > 1) {
      e.preventDefault();
      remove(index);
      setTimeout(() => {
        const inputs = listRef.current?.querySelectorAll<HTMLTextAreaElement>("textarea");
        inputs?.[Math.max(0, index - 1)]?.focus();
      }, 30);
    }
    if (e.altKey && e.key === "ArrowUp" && index > 0) {
      e.preventDefault();
      setIds((prev) => reorder(prev, index, index - 1));
      onChange(reorder(bullets, index, index - 1));
    }
    if (e.altKey && e.key === "ArrowDown" && index < bullets.length - 1) {
      e.preventDefault();
      setIds((prev) => reorder(prev, index, index + 1));
      onChange(reorder(bullets, index, index + 1));
    }
  }

  return (
    <div className="rb-bullet-editor" ref={listRef}>
      <div className="rb-bullet-editor__label">
        Bullet points
        <span className="rb-bullet-editor__hint" id={hintId}>Enter for new line · Alt+↑↓ to reorder · Backspace on empty to remove</span>
      </div>

      {bullets.length === 0 ? (
        <button type="button" className="rb-bullet-editor__empty" onClick={add}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add bullet point
        </button>
      ) : (
        <div className="rb-bullet-editor__list">
          {bullets.map((b, i) => (
            <div key={syncedIds[i]} className="rb-bullet-editor__row">
              <span className="rb-bullet-editor__dot" aria-hidden="true">•</span>
              <textarea
                className="rb-bullet-editor__input"
                value={b}
                placeholder={placeholder}
                rows={1}
                ref={autoResize}
                onChange={(e) => {
                  autoResize(e.target);
                  update(i, e.target.value);
                }}
                onKeyDown={(e) => handleKeyDown(e, i)}
                aria-label={`Bullet point ${i + 1}`}
                aria-describedby={hintId}
              />
              <button
                type="button"
                className="rb-bullet-editor__remove"
                onClick={() => remove(i)}
                aria-label={`Remove bullet ${i + 1}`}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
          <button type="button" className="rb-bullet-editor__add" onClick={add}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
            Add bullet
          </button>
        </div>
      )}
    </div>
  );
}
