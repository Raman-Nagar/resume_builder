"use client";

import { useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { createExperience } from "@/lib/resume/helpers";
import { validateExperience } from "@/lib/resume/validation";
import type { Experience } from "@/lib/resume/types";
import { formatDate } from "@/components/builder/preview/templateUtils";
import { SectionShell } from "./SectionShell";
import { EntryCard } from "./EntryCard";
import { FormField } from "../forms/FormField";
import { DateRangeFields } from "../forms/DateRangeFields";
import { BulletListEditor } from "../forms/BulletListEditor";
import { DeleteConfirmDialog } from "../forms/DeleteConfirmDialog";

const BriefcaseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

function ExperienceForm({ entry, onChange }: { entry: Experience; onChange: (data: Partial<Experience>) => void }) {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const v = validateExperience(entry);
  const err = (f: string) => touched[f] ? v.errors[f] : undefined;
  const blur = (f: string) => setTouched((t) => ({ ...t, [f]: true }));

  return (
    <div className="rb-entry-form">
      <div className="rb-form-grid">
        <FormField id={`exp-title-${entry.id}`} label="Job title" required error={err("title")}>
          <input
            id={`exp-title-${entry.id}`}
            className={`field-base input${err("title") ? " field-error" : ""}`}
            type="text"
            placeholder="Senior Software Engineer"
            value={entry.title}
            onChange={(e) => onChange({ title: e.target.value })}
            onBlur={() => blur("title")}
          />
        </FormField>

        <FormField id={`exp-company-${entry.id}`} label="Company" required error={err("company")}>
          <input
            id={`exp-company-${entry.id}`}
            className={`field-base input${err("company") ? " field-error" : ""}`}
            type="text"
            placeholder="Acme Corp"
            value={entry.company}
            onChange={(e) => onChange({ company: e.target.value })}
            onBlur={() => blur("company")}
          />
        </FormField>

        <FormField id={`exp-location-${entry.id}`} label="Location" className="rb-field--full">
          <input
            id={`exp-location-${entry.id}`}
            className="field-base input"
            type="text"
            placeholder="San Francisco, CA · Remote"
            value={entry.location}
            onChange={(e) => onChange({ location: e.target.value })}
          />
        </FormField>

        <DateRangeFields
          idPrefix={`exp-${entry.id}`}
          startDate={entry.startDate}
          endDate={entry.endDate}
          current={entry.current}
          onStartChange={(v) => onChange({ startDate: v })}
          onEndChange={(v) => onChange({ endDate: v })}
          onCurrentChange={(v) => onChange({ current: v, endDate: v ? "" : entry.endDate })}
          currentLabel="I currently work here"
          startError={err("startDate")}
          endError={err("endDate")}
        />
      </div>

      <BulletListEditor
        bullets={entry.bullets}
        onChange={(bullets) => onChange({ bullets })}
        placeholder="Describe an achievement or responsibility…"
      />
    </div>
  );
}

export function ExperienceSection() {
  const { experience } = useResumeData();
  const dispatch = useResumeDispatch();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  function handleAdd() {
    const entry = createExperience();
    dispatch({ type: "ADD_EXPERIENCE", payload: entry });
    setExpandedId(entry.id);
  }

  function handleChange(id: string, data: Partial<Experience>) {
    dispatch({ type: "UPDATE_EXPERIENCE", payload: { id, data } });
  }

  function handleDuplicate(entry: Experience) {
    const dupe = createExperience({ ...entry });
    dispatch({ type: "ADD_EXPERIENCE", payload: dupe });
    setExpandedId(dupe.id);
  }

  function handleDelete(id: string) {
    dispatch({ type: "DELETE_EXPERIENCE", payload: id });
    if (expandedId === id) setExpandedId(null);
    setDeleteId(null);
  }

  const deleteTarget = experience.find((e) => e.id === deleteId);

  return (
    <>
      <SectionShell
        title="Experience"
        description="List your work history, most recent first."
        onAdd={handleAdd}
        addLabel="Add position"
        isEmpty={experience.length === 0}
        emptyIcon={<BriefcaseIcon />}
        emptyTitle="No experience added yet"
        emptyDescription="Your work history is the heart of your resume. Add your most recent role first — include your title, company, and key achievements."
        emptyCta="+ Add Experience"
      >
        <div role="list" className="rb-entry-list">
          {experience.map((e, idx) => (
            <EntryCard
              key={e.id}
              title={e.title || "Untitled position"}
              subtitle={e.company || undefined}
              meta={e.current ? "Present" : e.endDate ? formatDate(e.endDate) : undefined}
              isExpanded={expandedId === e.id}
              onToggle={() => setExpandedId(expandedId === e.id ? null : e.id)}
              onMoveUp={idx > 0 ? () => dispatch({ type: "REORDER_EXPERIENCE", payload: { from: idx, to: idx - 1 } }) : undefined}
              onMoveDown={idx < experience.length - 1 ? () => dispatch({ type: "REORDER_EXPERIENCE", payload: { from: idx, to: idx + 1 } }) : undefined}
              onDuplicate={() => handleDuplicate(e)}
              onDelete={() => setDeleteId(e.id)}
            >
              <ExperienceForm entry={e} onChange={(data) => handleChange(e.id, data)} />
            </EntryCard>
          ))}
        </div>
      </SectionShell>

      <DeleteConfirmDialog
        open={deleteId !== null}
        itemName={deleteTarget ? (deleteTarget.title || deleteTarget.company || "this position") : ""}
        onConfirm={() => deleteId && handleDelete(deleteId)}
        onCancel={() => setDeleteId(null)}
      />
    </>
  );
}
