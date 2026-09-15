"use client";

import { useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { DEFAULT_DESIGN } from "@/lib/resume/defaults";
import { clampDesign } from "@/components/builder/preview/templateUtils";
import type {
  AccentColor, DesignSettings, FontFamily, FontSize, PageMargin, TemplateId,
} from "@/lib/resume/types";
import { SectionShell } from "./SectionShell";

// ─── Option tables ────────────────────────────────────────────────────────────

const TEMPLATES: Array<{ id: TemplateId; label: string; desc: string }> = [
  { id: "classic", label: "Classic", desc: "Traditional · ATS-safe" },
  { id: "modern",  label: "Modern",  desc: "Two-column · Sidebar" },
  { id: "minimal", label: "Minimal", desc: "Editorial · Whitespace" },
];

const ACCENT_PRESETS: Array<{ value: AccentColor; hex: string; label: string }> = [
  { value: "black",    hex: "#1a1a1a", label: "Black" },
  { value: "navy",     hex: "#1e3a5f", label: "Navy" },
  { value: "blue",     hex: "#2563eb", label: "Blue" },
  { value: "green",    hex: "#166534", label: "Green" },
  { value: "purple",   hex: "#6b21a8", label: "Purple" },
  { value: "burgundy", hex: "#881337", label: "Burgundy" },
];

const FONTS: Array<{ value: FontFamily; label: string; stack: string; specimen: string }> = [
  { value: "inter",        label: "Inter",         stack: "'Inter', sans-serif",    specimen: "Aa" },
  { value: "georgia",      label: "Georgia",        stack: "'Georgia', serif",       specimen: "Aa" },
  { value: "lato",         label: "Lato",           stack: "'Lato', sans-serif",     specimen: "Aa" },
  { value: "source-serif", label: "Source Serif",   stack: "'Source Serif 4', serif",specimen: "Aa" },
  { value: "playfair",     label: "Playfair",       stack: "'Playfair Display', serif",specimen: "Aa" },
];

const FONT_SIZES: Array<{ value: FontSize; label: string; hint: string }> = [
  { value: "compact", label: "Compact", hint: "11.5px" },
  { value: "normal",  label: "Normal",  hint: "13px" },
  { value: "large",   label: "Large",   hint: "14.5px" },
];

const SPACINGS: Array<{ value: PageMargin; label: string; hint: string }> = [
  { value: "compact",     label: "Compact",     hint: "Tight" },
  { value: "normal",      label: "Normal",      hint: "Balanced" },
  { value: "comfortable", label: "Comfortable", hint: "Airy" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function DesignSection() {
  const { design } = useResumeData();
  const dispatch = useResumeDispatch();
  // hexInput is only used while the user is actively typing in the hex text field
  const [hexInput, setHexInput] = useState<string | null>(null);
  // When not editing, show the design value directly
  const displayHex = hexInput ?? design.customAccentColor ?? "#2563eb";

  function set(data: Partial<DesignSettings>) {
    const next = clampDesign({ ...design, ...data });
    dispatch({ type: "SET_DESIGN", payload: next });
  }

  function handleCustomHexCommit(raw: string) {
    const val = raw.startsWith("#") ? raw : `#${raw}`;
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
      set({ accentColor: "custom", customAccentColor: val });
    }
    setHexInput(null); // exit editing mode
  }

  function handleReset() {
    setHexInput(null);
    dispatch({ type: "SET_DESIGN", payload: { ...DEFAULT_DESIGN } });
  }

  // Warn when large+comfortable would be clamped
  const wouldClamp = design.fontSize === "large" && design.pageMargin === "comfortable";

  return (
    <SectionShell
      title="Design"
      description="Customize the look of your resume. Changes appear instantly in the preview."
    >

      {/* ── Template ── */}
      <fieldset className="rb-design-group">
        <legend className="rb-design-group__label">Template</legend>
        <div className="rb-template-picker">
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`rb-template-option${design.template === t.id ? " rb-template-option--active" : ""}`}
              onClick={() => set({ template: t.id })}
              aria-pressed={design.template === t.id}
            >
              <div className="rb-template-option__thumb" aria-hidden="true">
                {t.id === "classic" && <ClassicThumb accent={design.accentColor} />}
                {t.id === "modern"  && <ModernThumb  accent={design.accentColor} />}
                {t.id === "minimal" && <MinimalThumb accent={design.accentColor} />}
              </div>
              <div className="rb-template-option__name">{t.label}</div>
              <div className="rb-template-option__desc">{t.desc}</div>
            </button>
          ))}
        </div>
      </fieldset>

      {/* ── Accent color ── */}
      <fieldset className="rb-design-group">
        <legend className="rb-design-group__label">Accent color</legend>
        <div className="rb-color-picker" role="group" aria-label="Accent color presets">
          {ACCENT_PRESETS.map((c) => (
            <button
              key={c.value}
              type="button"
              className={`rb-color-swatch${design.accentColor === c.value ? " rb-color-swatch--active" : ""}`}
              style={{ backgroundColor: c.hex }}
              onClick={() => set({ accentColor: c.value })}
              aria-label={`${c.label}${design.accentColor === c.value ? " (selected)" : ""}`}
              aria-pressed={design.accentColor === c.value}
            />
          ))}
          {/* Custom swatch */}
          <button
            type="button"
            className={`rb-color-swatch rb-color-swatch--custom${design.accentColor === "custom" ? " rb-color-swatch--active" : ""}`}
            style={{ backgroundColor: design.customAccentColor || "#2563eb" }}
            onClick={() => set({ accentColor: "custom", customAccentColor: design.customAccentColor || "#2563eb" })}
            aria-label={`Custom color${design.accentColor === "custom" ? " (selected)" : ""}`}
            aria-pressed={design.accentColor === "custom"}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </button>
        </div>

        {/* Custom hex input — shown when custom is active */}
        {design.accentColor === "custom" && (
          <div className="rb-custom-color-row">
            <input
              type="color"
              className="rb-color-native"
              value={design.customAccentColor || "#2563eb"}
              aria-label="Pick custom color with color picker"
              onChange={(e) => {
                setHexInput(e.target.value);
                set({ accentColor: "custom", customAccentColor: e.target.value });
              }}
            />
            <input
              type="text"
              className="rb-hex-input field-base"
              value={displayHex}
              maxLength={7}
              aria-label="Custom color hex value"
              placeholder="#000000"
              onChange={(e) => setHexInput(e.target.value)}
              onFocus={(e) => setHexInput(e.target.value)}
              onBlur={(e) => handleCustomHexCommit(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") handleCustomHexCommit(displayHex); }}
            />
          </div>
        )}
      </fieldset>

      {/* ── Font ── */}
      <fieldset className="rb-design-group">
        <legend className="rb-design-group__label">Font</legend>
        <div className="rb-font-picker">
          {FONTS.map((f) => (
            <button
              key={f.value}
              type="button"
              className={`rb-font-option${design.font === f.value ? " rb-font-option--active" : ""}`}
              onClick={() => set({ font: f.value })}
              aria-pressed={design.font === f.value}
            >
              <span className="rb-font-option__specimen" style={{ fontFamily: f.stack }} aria-hidden="true">
                {f.specimen}
              </span>
              <span className="rb-font-option__label">{f.label}</span>
            </button>
          ))}
        </div>
      </fieldset>

      {/* ── Font size ── */}
      <fieldset className="rb-design-group">
        <legend className="rb-design-group__label">Font size</legend>
        <div className="rb-segmented rb-segmented--full" role="group" aria-label="Font size">
          {FONT_SIZES.map((s) => (
            <button
              key={s.value}
              type="button"
              className={`rb-segmented__btn${design.fontSize === s.value ? " rb-segmented__btn--active" : ""}`}
              onClick={() => set({ fontSize: s.value })}
              aria-pressed={design.fontSize === s.value}
              aria-label={`${s.label} — ${s.hint}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* ── Spacing ── */}
      <fieldset className="rb-design-group">
        <legend className="rb-design-group__label">
          Spacing
          {wouldClamp && (
            <span className="rb-design-warn" role="alert" aria-live="polite">
              Large + Comfortable clamped to Normal
            </span>
          )}
        </legend>
        <div className="rb-segmented rb-segmented--full" role="group" aria-label="Page spacing">
          {SPACINGS.map((s) => (
            <button
              key={s.value}
              type="button"
              className={`rb-segmented__btn${design.pageMargin === s.value ? " rb-segmented__btn--active" : ""}`}
              onClick={() => set({ pageMargin: s.value })}
              aria-pressed={design.pageMargin === s.value}
              aria-label={`${s.label} — ${s.hint}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* ── Options ── */}
      <div className="rb-design-group">
        <div className="rb-design-group__label" aria-hidden="true">Options</div>
        <div className="rb-design-toggles">
          <label className="toggle-wrapper">
            <span className="toggle">
              <input type="checkbox" checked={design.showDividers} onChange={(e) => set({ showDividers: e.target.checked })} />
              <span className="toggle-track" />
            </span>
            <span className="toggle-label">Section dividers</span>
          </label>
          <label className="toggle-wrapper">
            <span className="toggle">
              <input type="checkbox" checked={design.showIcons} onChange={(e) => set({ showIcons: e.target.checked })} />
              <span className="toggle-track" />
            </span>
            <span className="toggle-label">Contact icons</span>
          </label>
        </div>
      </div>

      {/* ── Reset ── */}
      <div className="rb-design-group">
        <button type="button" className="rb-design-reset" onClick={handleReset}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
          </svg>
          Reset to defaults
        </button>
      </div>

    </SectionShell>
  );
}

// ─── Template thumbnails ──────────────────────────────────────────────────────

const THUMB_ACCENT: Record<string, string> = {
  black: "#1a1a1a", navy: "#1e3a5f", blue: "#2563eb",
  green: "#166534", purple: "#6b21a8", burgundy: "#881337", custom: "#2563eb",
};

function ClassicThumb({ accent }: { accent: string }) {
  const a = THUMB_ACCENT[accent] ?? THUMB_ACCENT.navy;
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="80" height="100" fill="#fafafa"/>
      <rect x="8" y="9" width="42" height="5" rx="1" fill="#111"/>
      <rect x="8" y="17" width="28" height="2.5" rx="1" fill="#888"/>
      <rect x="8" y="22" width="52" height="1.5" rx="0.5" fill="#bbb"/>
      <rect x="8" y="26" width="64" height="1.5" fill="#111"/>
      <rect x="8" y="32" width="18" height="2" rx="0.5" fill={a}/>
      <rect x="8" y="35" width="64" height="0.75" fill="#ccc"/>
      <rect x="8" y="39" width="30" height="2" rx="0.5" fill="#222"/>
      <rect x="8" y="43" width="22" height="1.5" rx="0.5" fill="#888"/>
      <rect x="10" y="47" width="54" height="1.5" rx="0.5" fill="#ccc"/>
      <rect x="10" y="50" width="48" height="1.5" rx="0.5" fill="#ccc"/>
      <rect x="8" y="57" width="22" height="2" rx="0.5" fill={a}/>
      <rect x="8" y="60" width="64" height="0.75" fill="#ccc"/>
      <rect x="8" y="64" width="28" height="2" rx="0.5" fill="#222"/>
      <rect x="8" y="68" width="20" height="1.5" rx="0.5" fill="#888"/>
      <rect x="10" y="72" width="50" height="1.5" rx="0.5" fill="#ccc"/>
      <rect x="10" y="75" width="44" height="1.5" rx="0.5" fill="#ccc"/>
    </svg>
  );
}

function ModernThumb({ accent }: { accent: string }) {
  const a = THUMB_ACCENT[accent] ?? THUMB_ACCENT.navy;
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="80" height="100" fill="#fafafa"/>
      <rect width="27" height="100" fill="#1c2333"/>
      <circle cx="13.5" cy="12" r="5" fill={a}/>
      <rect x="4" y="20" width="19" height="2.5" rx="0.5" fill="#f8fafc"/>
      <rect x="4" y="24" width="14" height="1.5" rx="0.5" fill="#94a3b8"/>
      <rect x="4" y="30" width="12" height="1.5" rx="0.5" fill={a}/>
      <rect x="4" y="33" width="19" height="1.5" rx="0.5" fill="#64748b"/>
      <rect x="4" y="36" width="16" height="1.5" rx="0.5" fill="#64748b"/>
      <rect x="4" y="39" width="18" height="1.5" rx="0.5" fill="#64748b"/>
      <rect x="4" y="46" width="10" height="1.5" rx="0.5" fill={a}/>
      {[51,56,61,66].map((y, i) => (
        <g key={i}>
          <rect x="4" y={y} width="12" height="1.5" rx="0.5" fill="#94a3b8"/>
          {[0,1,2,3,4].map((d) => (
            <circle key={d} cx={18 + d * 2} cy={y + 0.75} r="0.7" fill={d < 4 - i ? a : `${a}44`}/>
          ))}
        </g>
      ))}
      <rect x="31" y="9" width="3" height="2.5" rx="0.5" fill={a}/>
      <rect x="36" y="10" width="16" height="1.5" rx="0.5" fill="#0f172a"/>
      <rect x="36" y="13" width="37" height="0.5" fill="#e2e8f0"/>
      <rect x="31" y="17" width="24" height="2" rx="0.5" fill="#0f172a"/>
      <rect x="31" y="21" width="18" height="1.5" rx="0.5" fill="#475569"/>
      <rect x="31" y="25" width="34" height="1.5" rx="0.5" fill="#ccc"/>
      <rect x="31" y="28" width="30" height="1.5" rx="0.5" fill="#ccc"/>
      <rect x="31" y="35" width="3" height="2.5" rx="0.5" fill={a}/>
      <rect x="36" y="36" width="18" height="1.5" rx="0.5" fill="#0f172a"/>
      <rect x="36" y="39" width="37" height="0.5" fill="#e2e8f0"/>
      <rect x="31" y="43" width="22" height="2" rx="0.5" fill="#0f172a"/>
      <rect x="31" y="47" width="16" height="1.5" rx="0.5" fill="#475569"/>
      <rect x="31" y="51" width="34" height="1.5" rx="0.5" fill="#ccc"/>
    </svg>
  );
}

function MinimalThumb({ accent }: { accent: string }) {
  const a = THUMB_ACCENT[accent] ?? THUMB_ACCENT.navy;
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="80" height="100" fill="#fafafa"/>
      <rect x="8" y="8" width="48" height="7" rx="1" fill="#0a0a0a"/>
      <rect x="8" y="18" width="30" height="2" rx="0.5" fill="#888"/>
      <rect x="8" y="23" width="56" height="1.5" rx="0.5" fill="#bbb"/>
      <rect x="8" y="30" width="64" height="0.75" fill="#d4d4d4"/>
      <rect x="8" y="34" width="12" height="1.5" rx="0.5" fill={a}/>
      <rect x="26" y="34" width="28" height="1.5" rx="0.5" fill="#222"/>
      <rect x="26" y="38" width="20" height="1.5" rx="0.5" fill="#888"/>
      <rect x="26" y="42" width="38" height="1.5" rx="0.5" fill="#ccc"/>
      <rect x="26" y="45" width="34" height="1.5" rx="0.5" fill="#ccc"/>
      <rect x="8" y="52" width="64" height="0.75" fill="#d4d4d4"/>
      <rect x="8" y="56" width="14" height="1.5" rx="0.5" fill={a}/>
      <rect x="26" y="56" width="24" height="1.5" rx="0.5" fill="#222"/>
      <rect x="26" y="60" width="18" height="1.5" rx="0.5" fill="#888"/>
      <rect x="26" y="64" width="36" height="1.5" rx="0.5" fill="#ccc"/>
      <rect x="8" y="71" width="64" height="0.75" fill="#d4d4d4"/>
      <rect x="8" y="75" width="10" height="1.5" rx="0.5" fill={a}/>
      <rect x="26" y="75" width="44" height="1.5" rx="0.5" fill="#888"/>
    </svg>
  );
}
