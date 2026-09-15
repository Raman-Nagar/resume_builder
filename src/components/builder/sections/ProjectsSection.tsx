"use client";

import { useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { createProject } from "@/lib/resume/helpers";
import { validateProject } from "@/lib/resume/validation";
import type { Project } from "@/lib/resume/types";
import { SectionShell } from "./SectionShell";
import { EntryCard } from "./EntryCard";
import { FormField } from "../forms/FormField";
import { DateRangeFields } from "../forms/DateRangeFields";
import { BulletListEditor } from "../forms/BulletListEditor";
import { TagInput } from "../forms/TagInput";
import { DeleteConfirmDialog } from "../forms/DeleteConfirmDialog";

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

function ProjectForm({ entry, onChange }: { entry: Project; onChange: (data: Partial<Project>) => void }) {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const v = validateProject(entry);
  const err = (f: string) => touched[f] ? v.errors[f] : undefined;
  const blur = (f: string) => setTouched((t) => ({ ...t, [f]: true }));

  return (
    <div className="rb-entry-form">
      <div className="rb-form-grid">
        <FormField id={`proj-name-${entry.id}`} label="Project name" required error={err("name")} className="rb-field--full">
          <input
            id={`proj-name-${entry.id}`}
            className={`field-base input${err("name") ? " field-error" : ""}`}
            type="text"
            placeholder="My Awesome Project"
            value={entry.name}
            onChange={(e) => onChange({ name: e.target.value })}
            onBlur={() => blur("name")}
          />
        </FormField>

        <FormField id={`proj-desc-${entry.id}`} label="Description" className="rb-field--full">
          <textarea
            id={`proj-desc-${entry.id}`}
            className="field-base textarea"
            rows={2}
            placeholder="Brief description of what the project does and its impact…"
            value={entry.description}
            onChange={(e) => onChange({ description: e.target.value })}
          />
        </FormField>

        <FormField id={`proj-url-${entry.id}`} label="Project URL" error={err("url")}>
          <input
            id={`proj-url-${entry.id}`}
            className={`field-base input${err("url") ? " field-error" : ""}`}
            type="url"
            placeholder="https://myproject.com"
            value={entry.url}
            onChange={(e) => onChange({ url: e.target.value })}
            onBlur={() => blur("url")}
          />
        </FormField>

        <FormField id={`proj-github-${entry.id}`} label="GitHub URL">
          <input
            id={`proj-github-${entry.id}`}
            className="field-base input"
            type="url"
            placeholder="https://github.com/you/project"
            value={entry.githubUrl}
            onChange={(e) => onChange({ githubUrl: e.target.value })}
          />
        </FormField>

        <DateRangeFields
          idPrefix={`proj-${entry.id}`}
          startDate={entry.startDate}
          endDate={entry.endDate}
          current={entry.current}
          onStartChange={(v) => onChange({ startDate: v })}
          onEndChange={(v) => onChange({ endDate: v })}
          onCurrentChange={(v) => onChange({ current: v, endDate: v ? "" : entry.endDate })}
          currentLabel="Ongoing project"
        />
      </div>

      <TagInput
        id={`proj-tech-${entry.id}`}
        label="Technologies"
        tags={entry.technologies}
        onChange={(technologies) => onChange({ technologies })}
        placeholder="React, TypeScript, Node.js…"
      />

      <BulletListEditor
        bullets={entry.bullets}
        onChange={(bullets) => onChange({ bullets })}
        placeholder="Describe a key feature, challenge solved, or metric…"
      />
    </div>
  );
}

export function ProjectsSection() {
  const { projects } = useResumeData();
  const dispatch = useResumeDispatch();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  function handleAdd() {
    const entry = createProject();
    dispatch({ type: "ADD_PROJECT", payload: entry });
    setExpandedId(entry.id);
  }

  function handleChange(id: string, data: Partial<Project>) {
    dispatch({ type: "UPDATE_PROJECT", payload: { id, data } });
  }

  function handleDuplicate(entry: Project) {
    const dupe = createProject({ ...entry });
    dispatch({ type: "ADD_PROJECT", payload: dupe });
    setExpandedId(dupe.id);
  }

  function handleDelete(id: string) {
    dispatch({ type: "DELETE_PROJECT", payload: id });
    if (expandedId === id) setExpandedId(null);
    setDeleteId(null);
  }

  const deleteTarget = projects.find((p) => p.id === deleteId);

  return (
    <>
      <SectionShell
        title="Projects"
        description="Personal, open-source, or notable work projects."
        onAdd={handleAdd}
        addLabel="Add project"
        isEmpty={projects.length === 0}
        emptyIcon={<CodeIcon />}
        emptyTitle="No projects added yet"
        emptyDescription="Side projects and open-source work show initiative. Add anything you've built — even small tools or experiments count."
        emptyCta="+ Add Project"
      >
        <div role="list" className="rb-entry-list">
          {projects.map((p, idx) => (
            <EntryCard
              key={p.id}
              title={p.name || "Untitled project"}
              subtitle={p.technologies.slice(0, 4).join(", ") || undefined}
              meta={p.url ? p.url.replace(/^https?:\/\//, "") : undefined}
              isExpanded={expandedId === p.id}
              onToggle={() => setExpandedId(expandedId === p.id ? null : p.id)}
              onMoveUp={idx > 0 ? () => dispatch({ type: "REORDER_PROJECTS", payload: { from: idx, to: idx - 1 } }) : undefined}
              onMoveDown={idx < projects.length - 1 ? () => dispatch({ type: "REORDER_PROJECTS", payload: { from: idx, to: idx + 1 } }) : undefined}
              onDuplicate={() => handleDuplicate(p)}
              onDelete={() => setDeleteId(p.id)}
            >
              <ProjectForm entry={p} onChange={(data) => handleChange(p.id, data)} />
            </EntryCard>
          ))}
        </div>
      </SectionShell>

      <DeleteConfirmDialog
        open={deleteId !== null}
        itemName={deleteTarget ? (deleteTarget.name || "this project") : ""}
        onConfirm={() => deleteId && handleDelete(deleteId)}
        onCancel={() => setDeleteId(null)}
      />
    </>
  );
}
