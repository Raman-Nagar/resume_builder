"use client";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import type { ResumeSection, SectionKey } from "@/lib/resume/types";
import { SectionShell } from "./SectionShell";

// ─── Sortable row ─────────────────────────────────────────────────────────────

interface RowProps {
  section: ResumeSection;
  index: number;
  total: number;
  onToggle: (key: SectionKey) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

function SectionRow({ section, index, total, onToggle, onMoveUp, onMoveDown }: RowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.key });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`rb-sections-row${isDragging ? " rb-sections-row--dragging" : ""}${!section.visible ? " rb-sections-row--hidden" : ""}`}
      aria-label={`${section.label} section`}
    >
      {/* Drag handle */}
      <button
        type="button"
        className="rb-sections-row__handle"
        aria-label={`Drag to reorder ${section.label}`}
        {...attributes}
        {...listeners}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="9" cy="5" r="1" fill="currentColor" stroke="none"/>
          <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/>
          <circle cx="9" cy="19" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="5" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="19" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </button>

      {/* Label */}
      <span className="rb-sections-row__label">{section.label}</span>

      {/* Keyboard move controls */}
      <div className="rb-sections-row__kbd" aria-label={`Move ${section.label}`}>
        <button
          type="button"
          className="rb-sections-row__move"
          onClick={() => onMoveUp(index)}
          disabled={index === 0}
          aria-label={`Move ${section.label} up`}
          title="Move up"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </button>
        <button
          type="button"
          className="rb-sections-row__move"
          onClick={() => onMoveDown(index)}
          disabled={index === total - 1}
          aria-label={`Move ${section.label} down`}
          title="Move down"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
      </div>

      {/* Visibility toggle */}
      <button
        type="button"
        className={`rb-sections-row__vis${section.visible ? " rb-sections-row__vis--on" : ""}`}
        onClick={() => onToggle(section.key)}
        aria-label={section.visible ? `Hide ${section.label}` : `Show ${section.label}`}
        aria-pressed={section.visible}
        title={section.visible ? "Visible" : "Hidden"}
      >
        {section.visible ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
          </svg>
        )}
      </button>
    </div>
  );
}

// ─── Panel ────────────────────────────────────────────────────────────────────

export function SectionsPanel() {
  const { sections } = useResumeData();
  const dispatch = useResumeDispatch();

  // Sorted by order — single source of truth
  const ordered = [...sections].sort((a, b) => a.order - b.order);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const from = ordered.findIndex((s) => s.key === active.id);
    const to = ordered.findIndex((s) => s.key === over.id);
    if (from !== -1 && to !== -1) {
      dispatch({ type: "REORDER_SECTIONS", payload: { from, to } });
    }
  }

  function handleToggle(key: SectionKey) {
    const sec = sections.find((s) => s.key === key);
    if (sec) dispatch({ type: "SET_SECTION_VISIBILITY", payload: { key, visible: !sec.visible } });
  }

  function handleMoveUp(index: number) {
    if (index === 0) return;
    dispatch({ type: "REORDER_SECTIONS", payload: { from: index, to: index - 1 } });
  }

  function handleMoveDown(index: number) {
    if (index === ordered.length - 1) return;
    dispatch({ type: "REORDER_SECTIONS", payload: { from: index, to: index + 1 } });
  }

  return (
    <SectionShell
      title="Sections"
      description="Drag to reorder. Toggle visibility. Hidden sections stay in your data."
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={ordered.map((s) => s.key)}
          strategy={verticalListSortingStrategy}
        >
          <div className="rb-sections-list" role="list" aria-label="Resume section order">
            {ordered.map((section, index) => (
              <SectionRow
                key={section.key}
                section={section}
                index={index}
                total={ordered.length}
                onToggle={handleToggle}
                onMoveUp={handleMoveUp}
                onMoveDown={handleMoveDown}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
      <p className="rb-sections-hint">
        Use the arrow buttons to reorder with keyboard. Eye icon toggles visibility in the resume.
      </p>
    </SectionShell>
  );
}
