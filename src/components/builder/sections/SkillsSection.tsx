"use client";

import { useRef, useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { createSkill } from "@/lib/resume/helpers";
import type { Skill } from "@/lib/resume/types";
import { SectionShell } from "./SectionShell";

// ─── Constants ────────────────────────────────────────────────────────────────

const LEVELS: Array<{ value: Skill["level"]; label: string; color: string }> = [
  { value: "",             label: "No level",     color: "var(--gray-300)" },
  { value: "beginner",     label: "Beginner",     color: "var(--green-500)" },
  { value: "intermediate", label: "Intermediate", color: "var(--amber-500)" },
  { value: "advanced",     label: "Advanced",     color: "var(--blue-500)" },
  { value: "expert",       label: "Expert",       color: "var(--gray-800)" },
];

const UNCATEGORIZED = "General";

// ─── SkillChip ────────────────────────────────────────────────────────────────

function SkillChip({
  skill,
  onUpdate,
  onDelete,
  autoFocus,
}: {
  skill: Skill;
  onUpdate: (data: Partial<Skill>) => void;
  onDelete: () => void;
  autoFocus?: boolean;
}) {
  const [showLevel, setShowLevel] = useState(false);
  const levelInfo = LEVELS.find((l) => l.value === skill.level) ?? LEVELS[0];

  return (
    <div className={`rb-skill-chip-v2${showLevel ? " rb-skill-chip-v2--expanded" : ""}`}>
      <div className="rb-skill-chip-v2__main">
        <span
          className="rb-skill-chip-v2__dot"
          style={{ backgroundColor: levelInfo.color }}
          aria-hidden="true"
        />
        <input
          className="rb-skill-chip__input"
          type="text"
          value={skill.name}
          placeholder="Skill name"
          aria-label="Skill name"
          autoFocus={autoFocus}
          onChange={(e) => onUpdate({ name: e.target.value })}
        />
        <button
          type="button"
          className="rb-skill-chip-v2__level-btn"
          onClick={() => setShowLevel((s) => !s)}
          aria-label={`Set level for ${skill.name || "skill"}`}
          title="Set proficiency level"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className="rb-skill-chip__remove"
          onClick={onDelete}
          aria-label={`Remove ${skill.name || "skill"}`}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {showLevel && (
        <div className="rb-skill-chip-v2__levels" role="group" aria-label="Proficiency level">
          {LEVELS.map((l) => (
            <button
              key={l.value}
              type="button"
              className={`rb-skill-level-btn${skill.level === l.value ? " rb-skill-level-btn--active" : ""}`}
              onClick={() => { onUpdate({ level: l.value }); setShowLevel(false); }}
              style={{ "--level-color": l.color } as React.CSSProperties}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── SkillGroup ───────────────────────────────────────────────────────────────

function SkillGroup({
  name,
  skills,
  allGroupNames,
  onRename,
  onDelete,
  onAddSkill,
  onUpdateSkill,
  onDeleteSkill,
  defaultExpanded,
}: {
  name: string;
  skills: Skill[];
  allGroupNames: string[];
  onRename: (newName: string) => void;
  onDelete: () => void;
  onAddSkill: () => void;
  onUpdateSkill: (id: string, data: Partial<Skill>) => void;
  onDeleteSkill: (id: string) => void;
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded ?? false);
  const [editing, setEditing] = useState(false);
  const [nameInput, setNameInput] = useState(name);
  const [nameError, setNameError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [newSkillId, setNewSkillId] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  function commitRename() {
    const trimmed = nameInput.trim();
    if (!trimmed) {
      setNameInput(name);
      setNameError("");
      setEditing(false);
      return;
    }
    if (trimmed !== name && allGroupNames.includes(trimmed)) {
      setNameError(`"${trimmed}" already exists`);
      return;
    }
    setNameError("");
    setEditing(false);
    if (trimmed !== name) onRename(trimmed);
  }

  function handleAddSkill() {
    onAddSkill();
    setExpanded(true);
    // The new skill id is set by parent; we track it via prop change
  }

  // When a new skill is added, track its id for autoFocus
  // We detect it by comparing skills length change externally via key
  const lastSkillId = skills.length > 0 ? skills[skills.length - 1].id : null;

  return (
    <div className={`rb-skill-group-card${expanded ? " rb-skill-group-card--expanded" : ""}`}>
      {/* Header */}
      <div className="rb-skill-group-card__header">
        <button
          type="button"
          className="rb-skill-group-card__toggle"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          aria-label={expanded ? `Collapse ${name}` : `Expand ${name}`}
        >
          <svg
            className="rb-skill-group-card__chevron"
            width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {editing ? (
          <div className="rb-skill-group-card__name-wrap">
            <input
              ref={nameRef}
              className={`rb-skill-group-card__name-input${nameError ? " rb-skill-group-card__name-input--error" : ""}`}
              type="text"
              value={nameInput}
              aria-label="Group name"
              onChange={(e) => { setNameInput(e.target.value); setNameError(""); }}
              onBlur={commitRename}
              onKeyDown={(e) => {
                if (e.key === "Enter") commitRename();
                if (e.key === "Escape") { setNameInput(name); setNameError(""); setEditing(false); }
              }}
              autoFocus
            />
            {nameError && <span className="rb-skill-group-card__name-error">{nameError}</span>}
          </div>
        ) : (
          <button
            type="button"
            className="rb-skill-group-card__name"
            onClick={() => { setEditing(true); setNameInput(name); }}
            title="Click to rename"
            aria-label={`Rename group ${name}`}
          >
            {name}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        )}

        {!expanded && skills.length > 0 && (
          <span className="rb-skill-group-card__preview">
            {skills.map((s) => s.name || "…").join(", ")}
          </span>
        )}

        <div className="rb-skill-group-card__actions">
          {confirmDelete ? (
            <>
              <span className="rb-skill-group-card__confirm-text">
                Delete{skills.length > 0 ? ` & ${skills.length} skill${skills.length > 1 ? "s" : ""}` : ""}?
              </span>
              <button
                type="button"
                className="btn btn-danger btn-xs"
                onClick={onDelete}
                aria-label="Confirm delete group"
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-xs"
                onClick={() => setConfirmDelete(false)}
                aria-label="Cancel delete"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              type="button"
              className="btn btn-ghost btn-sm btn-icon rb-entry-card__delete"
              onClick={() => skills.length > 0 ? setConfirmDelete(true) : onDelete()}
              aria-label={`Delete group ${name}`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                <path d="M10 11v6M14 11v6" />
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Expanded body */}
      {expanded && (
        <div className="rb-skill-group-card__body">
          {skills.length > 0 && (
            <div className="rb-skills-chips">
              {skills.map((s) => (
                <SkillChip
                  key={s.id}
                  skill={s}
                  autoFocus={s.id === lastSkillId && s.name === ""}
                  onUpdate={(data) => onUpdateSkill(s.id, data)}
                  onDelete={() => onDeleteSkill(s.id)}
                />
              ))}
            </div>
          )}
          <button
            type="button"
            className="rb-skill-group-card__add-skill"
            onClick={handleAddSkill}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
            Add skill
          </button>
        </div>
      )}
    </div>
  );
}

// ─── SkillsSection ────────────────────────────────────────────────────────────

export function SkillsSection() {
  const { skills } = useResumeData();
  const dispatch = useResumeDispatch();
  const [newGroupId, setNewGroupId] = useState<string | null>(null);

  // Derive sorted groups from skills array
  const groupMap = new Map<string, Skill[]>();
  for (const s of skills) {
    const cat = s.category || UNCATEGORIZED;
    if (!groupMap.has(cat)) groupMap.set(cat, []);
    groupMap.get(cat)!.push(s);
  }
  // Sort group names alphabetically, but keep UNCATEGORIZED last
  const groupNames = Array.from(groupMap.keys()).sort((a, b) => {
    if (a === UNCATEGORIZED) return 1;
    if (b === UNCATEGORIZED) return -1;
    return a.localeCompare(b);
  });

  function addGroup() {
    // Find a unique default name
    let n = 1;
    while (groupMap.has(`Group ${n}`)) n++;
    const name = `Group ${n}`;
    // Add a placeholder skill so the group exists in state
    const skill = createSkill({ name: "", category: name });
    dispatch({ type: "ADD_SKILL", payload: skill });
    setNewGroupId(name);
  }

  function renameGroup(from: string, to: string) {
    dispatch({ type: "RENAME_SKILL_CATEGORY", payload: { from, to } });
    if (newGroupId === from) setNewGroupId(to);
  }

  function deleteGroup(name: string) {
    dispatch({ type: "DELETE_SKILL_CATEGORY", payload: name });
    if (newGroupId === name) setNewGroupId(null);
  }

  function addSkillToGroup(category: string) {
    dispatch({ type: "ADD_SKILL", payload: createSkill({ name: "", category }) });
  }

  function updateSkill(id: string, data: Partial<Skill>) {
    dispatch({ type: "UPDATE_SKILL", payload: { id, data } });
  }

  function deleteSkill(id: string) {
    dispatch({ type: "DELETE_SKILL", payload: id });
  }

  const isEmpty = skills.length === 0;

  return (
    <SectionShell
      title="Skills"
      description="Organise skills into groups — each group appears as a labelled row in your resume."
      isEmpty={isEmpty}
      emptyIcon={
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l6.59-6.59a1 1 0 0 0 0-1.41L12 2z" />
          <path d="M7 7h.01" />
        </svg>
      }
      emptyTitle="No skills added yet"
      emptyDescription="Add a group to get started — e.g. Frontend, Backend, Tools."
      onAdd={addGroup}
      addLabel="Add group"
      emptyCta="Add first group"
    >
      <div className="rb-skills-board">
        {groupNames.map((name) => (
          <SkillGroup
            key={name}
            name={name}
            skills={groupMap.get(name)!}
            allGroupNames={groupNames}
            onRename={(newName) => renameGroup(name, newName)}
            onDelete={() => deleteGroup(name)}
            onAddSkill={() => addSkillToGroup(name)}
            onUpdateSkill={updateSkill}
            onDeleteSkill={deleteSkill}
            defaultExpanded={name === newGroupId}
          />
        ))}
      </div>

      <p className="field-hint">
        Click a group name to rename it · Click ∨ on a skill to set proficiency level
      </p>
    </SectionShell>
  );
}
