import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle?: string;
  meta?: string;
  isExpanded: boolean;
  onToggle: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onDuplicate?: () => void;
  onDelete: () => void;
  children?: ReactNode;
}

export function EntryCard({
  title,
  subtitle,
  meta,
  isExpanded,
  onToggle,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
  children,
}: Props) {
  return (
    <div className={`rb-entry-card${isExpanded ? " rb-entry-card--expanded" : ""}`} role="listitem">
      {/* Card header row */}
      <div className="rb-entry-card__row">
        {/* Reorder buttons — keyboard-accessible alternative to drag */}
        {(onMoveUp !== undefined || onMoveDown !== undefined) && (
          <div className="rb-entry-card__reorder" aria-label={`Reorder ${title}`}>
            <button
              type="button"
              className="rb-entry-card__move"
              onClick={onMoveUp}
              disabled={!onMoveUp}
              aria-label={`Move ${title} up`}
              title="Move up"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
            <button
              type="button"
              className="rb-entry-card__move"
              onClick={onMoveDown}
              disabled={!onMoveDown}
              aria-label={`Move ${title} down`}
              title="Move down"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}

        {/* Single toggle button covers the whole card body */}
        <button
          type="button"
          className="rb-entry-card__body"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? `Collapse ${title}` : `Edit ${title}`}
        >
          <div className="rb-entry-card__title">
            {title || <span className="rb-entry-card__placeholder">Untitled</span>}
          </div>
          {subtitle && <div className="rb-entry-card__subtitle">{subtitle}</div>}
          {meta && <div className="rb-entry-card__meta">{meta}</div>}
        </button>

        <div className="rb-entry-card__actions">
          <span className="rb-entry-card__chevron" aria-hidden="true">
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 150ms ease" }}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>

          {onDuplicate && (
            <button
              type="button"
              className="btn btn-ghost btn-sm btn-icon rb-entry-card__action-btn"
              onClick={onDuplicate}
              aria-label={`Duplicate ${title}`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          )}

          <button
            type="button"
            className="btn btn-ghost btn-sm btn-icon rb-entry-card__delete"
            onClick={onDelete}
            aria-label={`Delete ${title}`}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Inline expanded form */}
      {isExpanded && children && (
        <div className="rb-entry-card__form">
          {children}
        </div>
      )}
    </div>
  );
}
