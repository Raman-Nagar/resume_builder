import type { ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  onAdd?: () => void;
  addLabel?: string;
  isEmpty?: boolean;
  emptyIcon?: ReactNode;
  emptyTitle?: string;
  emptyDescription?: string;
  /** CTA label shown inside the empty state. Defaults to addLabel. */
  emptyCta?: string;
  children?: ReactNode;
}

export function SectionShell({
  title,
  description,
  onAdd,
  addLabel = "Add",
  isEmpty = false,
  emptyIcon,
  emptyTitle,
  emptyDescription,
  emptyCta,
  children,
}: Props) {
  const ctaLabel = emptyCta ?? addLabel;

  return (
    <section className="rb-section-shell" aria-label={title}>
      <div className="rb-section-shell__header">
        <div className="rb-section-shell__heading-group">
          <h2 className="rb-section-shell__title">{title}</h2>
          {description && (
            <p className="rb-section-shell__desc">{description}</p>
          )}
        </div>
        {onAdd && !isEmpty && (
          <button
            type="button"
            className="btn btn-secondary btn-sm rb-section-shell__add-btn"
            onClick={onAdd}
            aria-label={`${addLabel} to ${title}`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
            {addLabel}
          </button>
        )}
      </div>

      {isEmpty ? (
        <div className="rb-empty-state">
          {emptyIcon && <div className="rb-empty-state__icon" aria-hidden="true">{emptyIcon}</div>}
          <div className="rb-empty-state__title">{emptyTitle ?? `No ${title.toLowerCase()} added yet`}</div>
          {emptyDescription && (
            <p className="rb-empty-state__desc">{emptyDescription}</p>
          )}
          {onAdd && (
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={onAdd}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
              {ctaLabel}
            </button>
          )}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
