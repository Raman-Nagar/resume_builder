"use client";

import { useRef, useState } from "react";

interface Props {
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
  label?: string;
  id?: string;
}

export function TagInput({ tags, onChange, placeholder = "Type and press Enter…", label, id = "tag-input" }: Props) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function addTag(raw: string) {
    const trimmed = raw.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onChange([...tags, trimmed]);
    }
    setInputValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault();
      addTag(inputValue);
    }
    if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      onChange(tags.slice(0, -1));
    }
  }

  function handleBlur() {
    if (inputValue.trim()) addTag(inputValue);
  }

  return (
    <div className="rb-tag-input-wrapper">
      {label && <label className="label" htmlFor={id}>{label}</label>}
      <div
        className="rb-tag-input"
        onClick={() => inputRef.current?.focus()}
        role="group"
        aria-label={label ?? "Tags"}
      >
        {tags.map((tag) => (
          <span key={tag} className="rb-tag">
            {tag}
            <button
              type="button"
              className="rb-tag__remove"
              onClick={(e) => { e.stopPropagation(); onChange(tags.filter((t) => t !== tag)); }}
              aria-label={`Remove ${tag}`}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          id={id}
          className="rb-tag-input__field"
          type="text"
          value={inputValue}
          placeholder={tags.length === 0 ? placeholder : ""}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
      </div>
      <p className="field-hint">Press Enter or comma to add · Backspace to remove last</p>
    </div>
  );
}
