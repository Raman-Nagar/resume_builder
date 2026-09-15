"use client";

import { useState } from "react";
import { useResumeData, useResumeDispatch } from "@/store/ResumeContext";
import { createCustomSection, createCustomSectionItem } from "@/lib/resume/helpers";
import type { CustomSection, CustomSectionItem } from "@/lib/resume/types";
import { SectionShell } from "./SectionShell";
import { EntryCard } from "./EntryCard";
import { FormField } from "../forms/FormField";
import { BulletListEditor } from "../forms/BulletListEditor";
import { DeleteConfirmDialog } from "../forms/DeleteConfirmDialog";

const PlusSquareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

function CustomItemForm({
  item,
  onChange,
}: {
  item: CustomSectionItem;
  onChange: (data: Partial<CustomSectionItem>) => void;
}) {
  return (
    <div className="rb-entry-form">
      <div className="rb-form-grid">
        <FormField id={`ci-title-${item.id}`} label="Title" required className="rb-field--full">
          <input
            id={`ci-title-${item.id}`}
            className="field-base input"
            type="text"
            placeholder="Publication title, award name, talk title…"
            value={item.title}
            onChange={(e) => onChange({ title: e.target.value })}
          />
        </FormField>

        <FormField id={`ci-subtitle-${item.id}`} label="Subtitle / Organization">
          <input
            id={`ci-subtitle-${item.id}`}
            className="field-base input"
            type="text"
            placeholder="Publisher, venue, organization…"
            value={item.subtitle}
            onChange={(e) => onChange({ subtitle: e.target.value })}
          />
        </FormField>

        <FormField id={`ci-date-${item.id}`} label="Date">
          <input
            id={`ci-date-${item.id}`}
            className="field-base input"
            type="text"
            placeholder="Jan 2024"
            value={item.date}
            onChange={(e) => onChange({ date: e.target.value })}
          />
        </FormField>

        <FormField id={`ci-url-${item.id}`} label="Link" hint="Optional" className="rb-field--full">
          <input
            id={`ci-url-${item.id}`}
            className="field-base input"
            type="url"
            placeholder="https://…"
            value={item.url}
            onChange={(e) => onChange({ url: e.target.value })}
          />
        </FormField>

        <FormField id={`ci-desc-${item.id}`} label="Description" className="rb-field--full">
          <textarea
            id={`ci-desc-${item.id}`}
            className="field-base textarea"
            rows={3}
            placeholder="Describe this item…"
            value={item.description}
            onChange={(e) => onChange({ description: e.target.value })}
          />
        </FormField>
      </div>

      <BulletListEditor
        bullets={item.bullets}
        onChange={(bullets) => onChange({ bullets })}
        placeholder="Add a detail or highlight…"
      />
    </div>
  );
}

function CustomSectionBlock({ section }: { section: CustomSection }) {
  const dispatch = useResumeDispatch();
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);
  const [deleteSelf, setDeleteSelf] = useState(false);

  function addItem() {
    const item = createCustomSectionItem();
    dispatch({ type: "ADD_CUSTOM_SECTION_ITEM", payload: { sectionId: section.id, item } });
    setExpandedItemId(item.id);
  }

  function updateItem(itemId: string, data: Partial<CustomSectionItem>) {
    dispatch({ type: "UPDATE_CUSTOM_SECTION_ITEM", payload: { sectionId: section.id, itemId, data } });
  }

  function deleteItem(itemId: string) {
    dispatch({ type: "DELETE_CUSTOM_SECTION_ITEM", payload: { sectionId: section.id, itemId } });
    if (expandedItemId === itemId) setExpandedItemId(null);
    setDeleteItemId(null);
  }

  function deleteSection() {
    dispatch({ type: "DELETE_CUSTOM_SECTION", payload: section.id });
    setDeleteSelf(false);
  }

  const deleteItemTarget = section.items.find((i) => i.id === deleteItemId);

  return (
    <div className="rb-custom-section-block">
      <div className="rb-custom-section-block__header">
        <label className="rb-custom-section-block__title-label" htmlFor={`cs-heading-${section.id}`}>
          Section heading
        </label>
        <input
          id={`cs-heading-${section.id}`}
          className="rb-custom-section-block__title-input"
          type="text"
          value={section.heading}
          onChange={(e) =>
            dispatch({ type: "UPDATE_CUSTOM_SECTION", payload: { id: section.id, data: { heading: e.target.value } } })
          }
        />
        <div className="rb-custom-section-block__actions">
          <button type="button" className="btn btn-ghost btn-sm" onClick={addItem}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
            Add item
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-sm btn-icon rb-entry-card__delete"
            onClick={() => setDeleteSelf(true)}
            aria-label={`Delete ${section.heading} section`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </button>
        </div>
      </div>

      {section.items.length > 0 && (
        <div className="rb-custom-section-block__items">
          <div role="list" className="rb-entry-list">
            {section.items.map((item) => (
              <EntryCard
                key={item.id}
                title={item.title || "Untitled item"}
                subtitle={item.subtitle || undefined}
                meta={item.date || undefined}
                isExpanded={expandedItemId === item.id}
                onToggle={() => setExpandedItemId(expandedItemId === item.id ? null : item.id)}
                onDelete={() => setDeleteItemId(item.id)}
              >
                <CustomItemForm
                  item={item}
                  onChange={(data) => updateItem(item.id, data)}
                />
              </EntryCard>
            ))}
          </div>
        </div>
      )}

      <DeleteConfirmDialog
        open={deleteItemId !== null}
        itemName={deleteItemTarget ? (deleteItemTarget.title || "this item") : ""}
        onConfirm={() => deleteItemId && deleteItem(deleteItemId)}
        onCancel={() => setDeleteItemId(null)}
      />
      <DeleteConfirmDialog
        open={deleteSelf}
        itemName={`the "${section.heading}" section`}
        onConfirm={deleteSection}
        onCancel={() => setDeleteSelf(false)}
      />
    </div>
  );
}

export function CustomSectionsPanel() {
  const { customSections } = useResumeData();
  const dispatch = useResumeDispatch();

  return (
    <div className="rb-custom-sections">
      <SectionShell
        title="Custom Sections"
        description="Add any section that doesn't fit the standard categories."
        onAdd={() => dispatch({ type: "ADD_CUSTOM_SECTION", payload: createCustomSection() })}
        addLabel="Add section"
        isEmpty={customSections.length === 0}
        emptyIcon={<PlusSquareIcon />}
        emptyTitle="No custom sections yet"
        emptyDescription="Publications, patents, speaking engagements — anything you need."
      />

      {customSections.map((cs) => (
        <CustomSectionBlock key={cs.id} section={cs} />
      ))}
    </div>
  );
}
