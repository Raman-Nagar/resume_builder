"use client";

import { useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { createCertification } from "@/lib/resume/helpers";
import { validateCertification } from "@/lib/resume/validation";
import type { Certification } from "@/lib/resume/types";
import { formatDate } from "@/components/builder/preview/templateUtils";
import { SectionShell } from "./SectionShell";
import { EntryCard } from "./EntryCard";
import { FormField } from "../forms/FormField";
import { DeleteConfirmDialog } from "../forms/DeleteConfirmDialog";

const BadgeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

function CertForm({ entry, onChange }: { entry: Certification; onChange: (data: Partial<Certification>) => void }) {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const v = validateCertification(entry);
  const err = (f: string) => touched[f] ? v.errors[f] : undefined;
  const blur = (f: string) => setTouched((t) => ({ ...t, [f]: true }));

  return (
    <div className="rb-entry-form">
      <div className="rb-form-grid">
        <FormField id={`cert-name-${entry.id}`} label="Certification name" required error={err("name")} className="rb-field--full">
          <input
            id={`cert-name-${entry.id}`}
            className={`field-base input${err("name") ? " field-error" : ""}`}
            type="text"
            placeholder="AWS Certified Solutions Architect"
            value={entry.name}
            onChange={(e) => onChange({ name: e.target.value })}
            onBlur={() => blur("name")}
          />
        </FormField>

        <FormField id={`cert-issuer-${entry.id}`} label="Issuing organization" required error={err("issuer")} className="rb-field--full">
          <input
            id={`cert-issuer-${entry.id}`}
            className={`field-base input${err("issuer") ? " field-error" : ""}`}
            type="text"
            placeholder="Amazon Web Services"
            value={entry.issuer}
            onChange={(e) => onChange({ issuer: e.target.value })}
            onBlur={() => blur("issuer")}
          />
        </FormField>

        <FormField id={`cert-issue-${entry.id}`} label="Issue date">
          <input
            id={`cert-issue-${entry.id}`}
            className="field-base input"
            type="month"
            value={entry.issueDate}
            onChange={(e) => onChange({ issueDate: e.target.value })}
          />
        </FormField>

        <FormField id={`cert-expiry-${entry.id}`} label="Expiration date" hint="Leave blank if no expiry">
          <input
            id={`cert-expiry-${entry.id}`}
            className="field-base input"
            type="month"
            value={entry.expiryDate}
            onChange={(e) => onChange({ expiryDate: e.target.value })}
          />
        </FormField>

        <FormField id={`cert-cred-${entry.id}`} label="Credential ID" hint="Optional">
          <input
            id={`cert-cred-${entry.id}`}
            className="field-base input"
            type="text"
            placeholder="ABC-123-XYZ"
            value={entry.credentialId}
            onChange={(e) => onChange({ credentialId: e.target.value })}
          />
        </FormField>

        <FormField id={`cert-url-${entry.id}`} label="Credential URL" error={err("url")}>
          <input
            id={`cert-url-${entry.id}`}
            className={`field-base input${err("url") ? " field-error" : ""}`}
            type="url"
            placeholder="https://verify.example.com/cert/123"
            value={entry.url}
            onChange={(e) => onChange({ url: e.target.value })}
            onBlur={() => blur("url")}
          />
        </FormField>
      </div>
    </div>
  );
}

export function CertificationsSection() {
  const { certifications } = useResumeData();
  const dispatch = useResumeDispatch();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  function handleAdd() {
    const entry = createCertification();
    dispatch({ type: "ADD_CERTIFICATION", payload: entry });
    setExpandedId(entry.id);
  }

  function handleChange(id: string, data: Partial<Certification>) {
    dispatch({ type: "UPDATE_CERTIFICATION", payload: { id, data } });
  }

  function handleDelete(id: string) {
    dispatch({ type: "DELETE_CERTIFICATION", payload: id });
    if (expandedId === id) setExpandedId(null);
    setDeleteId(null);
  }

  const deleteTarget = certifications.find((c) => c.id === deleteId);

  return (
    <>
      <SectionShell
        title="Certifications"
        description="Professional certifications and licenses."
        onAdd={handleAdd}
        addLabel="Add certification"
        isEmpty={certifications.length === 0}
        emptyIcon={<BadgeIcon />}
        emptyTitle="No certifications added yet"
        emptyDescription="Certifications validate your expertise and stand out to recruiters. Add any professional licences or completed courses."
        emptyCta="+ Add Certification"
      >
        <div role="list" className="rb-entry-list">
          {certifications.map((c) => (
            <EntryCard
              key={c.id}
              title={c.name || "Untitled certification"}
              subtitle={c.issuer || undefined}
              meta={c.issueDate ? formatDate(c.issueDate) : undefined}
              isExpanded={expandedId === c.id}
              onToggle={() => setExpandedId(expandedId === c.id ? null : c.id)}
              onDelete={() => setDeleteId(c.id)}
            >
              <CertForm entry={c} onChange={(data) => handleChange(c.id, data)} />
            </EntryCard>
          ))}
        </div>
      </SectionShell>

      <DeleteConfirmDialog
        open={deleteId !== null}
        itemName={deleteTarget ? (deleteTarget.name || "this certification") : ""}
        onConfirm={() => deleteId && handleDelete(deleteId)}
        onCancel={() => setDeleteId(null)}
      />
    </>
  );
}
