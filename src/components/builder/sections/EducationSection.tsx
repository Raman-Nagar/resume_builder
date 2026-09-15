"use client";

import { useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { createEducation } from "@/lib/resume/helpers";
import { validateEducation } from "@/lib/resume/validation";
import type { Education } from "@/lib/resume/types";
import { formatDate } from "@/components/builder/preview/templateUtils";
import { SectionShell } from "./SectionShell";
import { EntryCard } from "./EntryCard";
import { FormField } from "../forms/FormField";
import { DateRangeFields } from "../forms/DateRangeFields";
import { BulletListEditor } from "../forms/BulletListEditor";
import { DeleteConfirmDialog } from "../forms/DeleteConfirmDialog";

const GraduationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

function EducationForm({ entry, onChange }: { entry: Education; onChange: (data: Partial<Education>) => void }) {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const v = validateEducation(entry);
  const err = (f: string) => touched[f] ? v.errors[f] : undefined;
  const blur = (f: string) => setTouched((t) => ({ ...t, [f]: true }));

  return (
    <div className="rb-entry-form">
      <div className="rb-form-grid">
        <FormField id={`edu-degree-${entry.id}`} label="Degree" required error={err("degree")}>
          <input
            id={`edu-degree-${entry.id}`}
            className={`field-base input${err("degree") ? " field-error" : ""}`}
            type="text"
            placeholder="Bachelor of Science"
            value={entry.degree}
            onChange={(e) => onChange({ degree: e.target.value })}
            onBlur={() => blur("degree")}
          />
        </FormField>

        <FormField id={`edu-field-${entry.id}`} label="Field of study">
          <input
            id={`edu-field-${entry.id}`}
            className="field-base input"
            type="text"
            placeholder="Computer Science"
            value={entry.field}
            onChange={(e) => onChange({ field: e.target.value })}
          />
        </FormField>

        <FormField id={`edu-institution-${entry.id}`} label="Institution" required error={err("institution")} className="rb-field--full">
          <input
            id={`edu-institution-${entry.id}`}
            className={`field-base input${err("institution") ? " field-error" : ""}`}
            type="text"
            placeholder="Massachusetts Institute of Technology"
            value={entry.institution}
            onChange={(e) => onChange({ institution: e.target.value })}
            onBlur={() => blur("institution")}
          />
        </FormField>

        <FormField id={`edu-location-${entry.id}`} label="Location">
          <input
            id={`edu-location-${entry.id}`}
            className="field-base input"
            type="text"
            placeholder="Cambridge, MA"
            value={entry.location}
            onChange={(e) => onChange({ location: e.target.value })}
          />
        </FormField>

        <FormField id={`edu-gpa-${entry.id}`} label="GPA" hint="Optional">
          <input
            id={`edu-gpa-${entry.id}`}
            className="field-base input"
            type="text"
            placeholder="3.8 / 4.0"
            value={entry.gpa}
            onChange={(e) => onChange({ gpa: e.target.value })}
          />
        </FormField>

        <DateRangeFields
          idPrefix={`edu-${entry.id}`}
          startDate={entry.startDate}
          endDate={entry.endDate}
          current={entry.current}
          onStartChange={(v) => onChange({ startDate: v })}
          onEndChange={(v) => onChange({ endDate: v })}
          onCurrentChange={(v) => onChange({ current: v, endDate: v ? "" : entry.endDate })}
          currentLabel="I currently study here"
        />
      </div>

      <BulletListEditor
        bullets={entry.bullets}
        onChange={(bullets) => onChange({ bullets })}
        placeholder="Relevant coursework, honors, activities…"
      />
    </div>
  );
}

export function EducationSection() {
  const { education } = useResumeData();
  const dispatch = useResumeDispatch();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  function handleAdd() {
    const entry = createEducation();
    dispatch({ type: "ADD_EDUCATION", payload: entry });
    setExpandedId(entry.id);
  }

  function handleChange(id: string, data: Partial<Education>) {
    dispatch({ type: "UPDATE_EDUCATION", payload: { id, data } });
  }

  function handleDuplicate(entry: Education) {
    const dupe = createEducation({ ...entry });
    dispatch({ type: "ADD_EDUCATION", payload: dupe });
    setExpandedId(dupe.id);
  }

  function handleDelete(id: string) {
    dispatch({ type: "DELETE_EDUCATION", payload: id });
    if (expandedId === id) setExpandedId(null);
    setDeleteId(null);
  }

  const deleteTarget = education.find((e) => e.id === deleteId);

  return (
    <>
      <SectionShell
        title="Education"
        description="Degrees, diplomas, and relevant coursework."
        onAdd={handleAdd}
        addLabel="Add education"
        isEmpty={education.length === 0}
        emptyIcon={<GraduationIcon />}
        emptyTitle="No education added yet"
        emptyDescription="Add your degrees, diplomas, or relevant coursework. Even bootcamps and online programmes are worth including."
        emptyCta="+ Add Education"
      >
        <div role="list" className="rb-entry-list">
          {education.map((e, idx) => (
            <EntryCard
              key={e.id}
              title={e.degree ? `${e.degree}${e.field ? ` in ${e.field}` : ""}` : "Untitled degree"}
              subtitle={e.institution || undefined}
              meta={e.current ? "Present" : e.endDate ? formatDate(e.endDate) : undefined}
              isExpanded={expandedId === e.id}
              onToggle={() => setExpandedId(expandedId === e.id ? null : e.id)}
              onMoveUp={idx > 0 ? () => dispatch({ type: "REORDER_EDUCATION", payload: { from: idx, to: idx - 1 } }) : undefined}
              onMoveDown={idx < education.length - 1 ? () => dispatch({ type: "REORDER_EDUCATION", payload: { from: idx, to: idx + 1 } }) : undefined}
              onDuplicate={() => handleDuplicate(e)}
              onDelete={() => setDeleteId(e.id)}
            >
              <EducationForm entry={e} onChange={(data) => handleChange(e.id, data)} />
            </EntryCard>
          ))}
        </div>
      </SectionShell>

      <DeleteConfirmDialog
        open={deleteId !== null}
        itemName={deleteTarget ? (deleteTarget.institution || deleteTarget.degree || "this entry") : ""}
        onConfirm={() => deleteId && handleDelete(deleteId)}
        onCancel={() => setDeleteId(null)}
      />
    </>
  );
}
