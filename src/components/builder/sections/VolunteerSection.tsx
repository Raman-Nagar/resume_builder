"use client";

import { useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { createVolunteer } from "@/lib/resume/helpers";
import type { VolunteerExperience } from "@/lib/resume/types";
import { formatDate } from "@/components/builder/preview/templateUtils";
import { SectionShell } from "./SectionShell";
import { EntryCard } from "./EntryCard";
import { FormField } from "../forms/FormField";
import { DateRangeFields } from "../forms/DateRangeFields";
import { DeleteConfirmDialog } from "../forms/DeleteConfirmDialog";

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

function VolunteerForm({ entry, onChange }: { entry: VolunteerExperience; onChange: (data: Partial<VolunteerExperience>) => void }) {
  return (
    <div className="rb-entry-form">
      <div className="rb-form-grid">
        <FormField id={`vol-role-${entry.id}`} label="Role" required>
          <input
            id={`vol-role-${entry.id}`}
            className="field-base input"
            type="text"
            placeholder="Volunteer Coordinator"
            value={entry.role}
            onChange={(e) => onChange({ role: e.target.value })}
          />
        </FormField>

        <FormField id={`vol-org-${entry.id}`} label="Organization" required>
          <input
            id={`vol-org-${entry.id}`}
            className="field-base input"
            type="text"
            placeholder="Red Cross"
            value={entry.organization}
            onChange={(e) => onChange({ organization: e.target.value })}
          />
        </FormField>

        <FormField id={`vol-location-${entry.id}`} label="Location" className="rb-field--full">
          <input
            id={`vol-location-${entry.id}`}
            className="field-base input"
            type="text"
            placeholder="San Francisco, CA"
            value={entry.location}
            onChange={(e) => onChange({ location: e.target.value })}
          />
        </FormField>

        <DateRangeFields
          idPrefix={`vol-${entry.id}`}
          startDate={entry.startDate}
          endDate={entry.endDate}
          current={entry.current}
          onStartChange={(v) => onChange({ startDate: v })}
          onEndChange={(v) => onChange({ endDate: v })}
          onCurrentChange={(v) => onChange({ current: v, endDate: v ? "" : entry.endDate })}
          currentLabel="I currently volunteer here"
        />

        <FormField id={`vol-desc-${entry.id}`} label="Description" className="rb-field--full">
          <textarea
            id={`vol-desc-${entry.id}`}
            className="field-base textarea"
            rows={3}
            placeholder="Describe your responsibilities and impact…"
            value={entry.description}
            onChange={(e) => onChange({ description: e.target.value })}
          />
        </FormField>
      </div>
    </div>
  );
}

export function VolunteerSection() {
  const { volunteer } = useResumeData();
  const dispatch = useResumeDispatch();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  function handleAdd() {
    const entry = createVolunteer();
    dispatch({ type: "ADD_VOLUNTEER", payload: entry });
    setExpandedId(entry.id);
  }

  function handleChange(id: string, data: Partial<VolunteerExperience>) {
    dispatch({ type: "UPDATE_VOLUNTEER", payload: { id, data } });
  }

  function handleDelete(id: string) {
    dispatch({ type: "DELETE_VOLUNTEER", payload: id });
    if (expandedId === id) setExpandedId(null);
    setDeleteId(null);
  }

  const deleteTarget = volunteer.find((v) => v.id === deleteId);

  return (
    <>
      <SectionShell
        title="Volunteer"
        description="Community involvement and unpaid work experience."
        onAdd={handleAdd}
        addLabel="Add volunteer role"
        isEmpty={volunteer.length === 0}
        emptyIcon={<HeartIcon />}
        emptyTitle="No volunteer experience added yet"
        emptyDescription="Volunteer work demonstrates initiative and values. Include organizations, roles, and your impact."
        emptyCta="+ Add Volunteer Role"
      >
        <div role="list" className="rb-entry-list">
          {volunteer.map((v) => (
            <EntryCard
              key={v.id}
              title={v.role || "Untitled role"}
              subtitle={v.organization || undefined}
              meta={v.current ? "Present" : v.endDate ? formatDate(v.endDate) : undefined}
              isExpanded={expandedId === v.id}
              onToggle={() => setExpandedId(expandedId === v.id ? null : v.id)}
              onDelete={() => setDeleteId(v.id)}
            >
              <VolunteerForm entry={v} onChange={(data) => handleChange(v.id, data)} />
            </EntryCard>
          ))}
        </div>
      </SectionShell>

      <DeleteConfirmDialog
        open={deleteId !== null}
        itemName={deleteTarget ? (deleteTarget.role || deleteTarget.organization || "this entry") : ""}
        onConfirm={() => deleteId && handleDelete(deleteId)}
        onCancel={() => setDeleteId(null)}
      />
    </>
  );
}
