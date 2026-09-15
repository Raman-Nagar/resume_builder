"use client";

import { useRef, useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { validatePersonalInfo } from "@/lib/resume/validation";
import { SectionShell } from "./SectionShell";
import { FormField } from "../forms/FormField";

export function PersonalSection() {
  const { personalInfo: p } = useResumeData();
  const dispatch = useResumeDispatch();
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [photoError, setPhotoError] = useState<string | null>(null);
  const photoRef = useRef<HTMLInputElement>(null);

  function set(field: string, value: string) {
    dispatch({ type: "SET_PERSONAL_INFO", payload: { [field]: value } });
  }

  function blur(field: string) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  const validation = validatePersonalInfo(p);

  function err(field: string) {
    return touched[field] ? validation.errors[field] : undefined;
  }

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    // Cap at 500KB — base64 encoding inflates by ~33%, and localStorage quota is ~5MB
    if (file.size > 500 * 1024) {
      setPhotoError("Photo must be under 500 KB to avoid storage limits.");
      e.target.value = "";
      return;
    }
    setPhotoError(null);
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (typeof ev.target?.result === "string") {
        set("photo", ev.target.result);
      }
    };
    reader.readAsDataURL(file);
  }

  const photoValue = p.photo ?? "";

  return (
    <SectionShell
      title="Personal Information"
      description="This information appears at the top of your resume."
    >
      {/* Photo */}
      <div className="rb-photo-row">
        <button
          type="button"
          className="rb-photo-btn"
          onClick={() => photoRef.current?.click()}
          aria-label="Upload profile photo"
        >
          {photoValue ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photoValue} alt="Profile" className="rb-photo-preview" />
          ) : (
            <div className="rb-photo-placeholder" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>
          )}
          <div className="rb-photo-overlay" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </button>
        <input
          ref={photoRef}
          type="file"
          accept="image/*"
          className="rb-photo-input"
          tabIndex={-1}
          aria-hidden="true"
          onChange={handlePhoto}
        />
        <div className="rb-photo-meta">
          <div className="rb-photo-meta__title">Profile photo</div>
          <div className="rb-photo-meta__hint">Optional · JPG, PNG, WebP · Max 500 KB</div>
          {photoError && (
            <p className="field-error-msg" role="alert">{photoError}</p>
          )}
          {photoValue && (
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              style={{ marginTop: "4px", color: "var(--color-error)" }}
              onClick={() => set("photo", "")}
            >
              Remove photo
            </button>
          )}
        </div>
      </div>

      <div className="rb-form-grid rb-form-grid--two-col">
        <FormField id="pi-fullName" label="Full name" required error={err("fullName")} className="rb-field--full">
          <input
            id="pi-fullName"
            className={`field-base input${err("fullName") ? " field-error" : ""}`}
            type="text"
            placeholder="Jane Doe"
            value={p.fullName}
            onChange={(e) => set("fullName", e.target.value)}
            onBlur={() => blur("fullName")}
            autoComplete="name"
            aria-describedby={err("fullName") ? "pi-fullName-error" : undefined}
          />
        </FormField>

        <FormField id="pi-headline" label="Professional headline" className="rb-field--full">
          <input
            id="pi-headline"
            className="field-base input"
            type="text"
            placeholder="Senior Software Engineer at Acme Corp"
            value={p.headline}
            onChange={(e) => set("headline", e.target.value)}
          />
        </FormField>

        <FormField id="pi-email" label="Email" error={err("email")}>
          <input
            id="pi-email"
            className={`field-base input${err("email") ? " field-error" : ""}`}
            type="email"
            placeholder="jane@example.com"
            value={p.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => blur("email")}
            autoComplete="email"
          />
        </FormField>

        <FormField id="pi-phone" label="Phone" error={err("phone")}>
          <input
            id="pi-phone"
            className={`field-base input${err("phone") ? " field-error" : ""}`}
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={p.phone}
            onChange={(e) => set("phone", e.target.value)}
            onBlur={() => blur("phone")}
            autoComplete="tel"
          />
        </FormField>

        <FormField id="pi-location" label="Location" className="rb-field--full">
          <input
            id="pi-location"
            className="field-base input"
            type="text"
            placeholder="San Francisco, CA"
            value={p.location}
            onChange={(e) => set("location", e.target.value)}
          />
        </FormField>

        <FormField id="pi-website" label="Website" error={err("website")}>
          <input
            id="pi-website"
            className={`field-base input${err("website") ? " field-error" : ""}`}
            type="url"
            placeholder="https://yoursite.com"
            value={p.website}
            onChange={(e) => set("website", e.target.value)}
            onBlur={() => blur("website")}
          />
        </FormField>

        <FormField id="pi-linkedin" label="LinkedIn" error={err("linkedin")}>
          <input
            id="pi-linkedin"
            className={`field-base input${err("linkedin") ? " field-error" : ""}`}
            type="url"
            placeholder="https://linkedin.com/in/you"
            value={p.linkedin}
            onChange={(e) => set("linkedin", e.target.value)}
            onBlur={() => blur("linkedin")}
          />
        </FormField>

        <FormField id="pi-github" label="GitHub" error={err("github")}>
          <input
            id="pi-github"
            className={`field-base input${err("github") ? " field-error" : ""}`}
            type="url"
            placeholder="https://github.com/you"
            value={p.github}
            onChange={(e) => set("github", e.target.value)}
            onBlur={() => blur("github")}
          />
        </FormField>
      </div>
    </SectionShell>
  );
}
