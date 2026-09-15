"use client";

import { useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { createAchievement } from "@/lib/resume/helpers";
import type { Achievement } from "@/lib/resume/types";
import { formatDate } from "@/components/builder/preview/templateUtils";
import { SectionShell } from "./SectionShell";
import { EntryCard } from "./EntryCard";
import { FormField } from "../forms/FormField";
import { DeleteConfirmDialog } from "../forms/DeleteConfirmDialog";

const TrophyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

function AchievementForm({ entry, onChange }: { entry: Achievement; onChange: (data: Partial<Achievement>) => void }) {
  return (
    <div className="rb-entry-form">
      <div className="rb-form-grid">
        <FormField id={`ach-title-${entry.id}`} label="Title" required className="rb-field--full">
          <input
            id={`ach-title-${entry.id}`}
            className="field-base input"
            type="text"
            placeholder="Hackathon Winner · Speaker at ReactConf · Employee of the Year"
            value={entry.title}
            onChange={(e) => onChange({ title: e.target.value })}
          />
        </FormField>

        <FormField id={`ach-date-${entry.id}`} label="Date">
          <input
            id={`ach-date-${entry.id}`}
            className="field-base input"
            type="month"
            value={entry.date}
            onChange={(e) => onChange({ date: e.target.value })}
          />
        </FormField>

        <FormField id={`ach-desc-${entry.id}`} label="Description" className="rb-field--full">
          <textarea
            id={`ach-desc-${entry.id}`}
            className="field-base textarea"
            rows={3}
            placeholder="Describe the achievement, its context, and why it matters…"
            value={entry.description}
            onChange={(e) => onChange({ description: e.target.value })}
          />
        </FormField>
      </div>
    </div>
  );
}

export function AchievementsSection() {
  const { achievements } = useResumeData();
  const dispatch = useResumeDispatch();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  function handleAdd() {
    const entry = createAchievement();
    dispatch({ type: "ADD_ACHIEVEMENT", payload: entry });
    setExpandedId(entry.id);
  }

  function handleChange(id: string, data: Partial<Achievement>) {
    dispatch({ type: "UPDATE_ACHIEVEMENT", payload: { id, data } });
  }

  function handleDelete(id: string) {
    dispatch({ type: "DELETE_ACHIEVEMENT", payload: id });
    if (expandedId === id) setExpandedId(null);
    setDeleteId(null);
  }

  const deleteTarget = achievements.find((a) => a.id === deleteId);

  return (
    <>
      <SectionShell
        title="Achievements"
        description="Awards, recognitions, and notable accomplishments."
        onAdd={handleAdd}
        addLabel="Add achievement"
        isEmpty={achievements.length === 0}
        emptyIcon={<TrophyIcon />}
        emptyTitle="No achievements added yet"
        emptyDescription="Awards, conference talks, hackathon wins, and press mentions all belong here. If you've been recognised for your work, show it."
        emptyCta="+ Add Achievement"
      >
        <div role="list" className="rb-entry-list">
          {achievements.map((a) => (
            <EntryCard
              key={a.id}
              title={a.title || "Untitled achievement"}
              subtitle={a.description ? a.description.slice(0, 60) + (a.description.length > 60 ? "…" : "") : undefined}
              meta={a.date ? formatDate(a.date) : undefined}
              isExpanded={expandedId === a.id}
              onToggle={() => setExpandedId(expandedId === a.id ? null : a.id)}
              onDelete={() => setDeleteId(a.id)}
            >
              <AchievementForm entry={a} onChange={(data) => handleChange(a.id, data)} />
            </EntryCard>
          ))}
        </div>
      </SectionShell>

      <DeleteConfirmDialog
        open={deleteId !== null}
        itemName={deleteTarget ? (deleteTarget.title || "this achievement") : ""}
        onConfirm={() => deleteId && handleDelete(deleteId)}
        onCancel={() => setDeleteId(null)}
      />
    </>
  );
}
