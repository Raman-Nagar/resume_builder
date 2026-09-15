"use client";

import { FormField } from "./FormField";

interface Props {
  startDate: string;
  endDate: string;
  current: boolean;
  onStartChange: (v: string) => void;
  onEndChange: (v: string) => void;
  onCurrentChange: (v: boolean) => void;
  currentLabel?: string;
  idPrefix: string;
  startError?: string;
  endError?: string;
}

export function DateRangeFields({
  startDate,
  endDate,
  current,
  onStartChange,
  onEndChange,
  onCurrentChange,
  currentLabel = "I currently work here",
  idPrefix,
  startError,
  endError,
}: Props) {
  return (
    <>
      <FormField id={`${idPrefix}-start`} label="Start date" error={startError} className="rb-field">
        <input
          id={`${idPrefix}-start`}
          className={`field-base input${startError ? " field-error" : ""}`}
          type="month"
          value={startDate}
          placeholder="YYYY-MM"
          onChange={(e) => onStartChange(e.target.value)}
          aria-describedby={startError ? `${idPrefix}-start-error` : undefined}
        />
      </FormField>

      <FormField id={`${idPrefix}-end`} label="End date" error={endError} className="rb-field">
        <input
          id={`${idPrefix}-end`}
          className={`field-base input${endError ? " field-error" : ""}`}
          type="month"
          value={endDate}
          placeholder="YYYY-MM"
          disabled={current}
          onChange={(e) => onEndChange(e.target.value)}
          aria-describedby={endError ? `${idPrefix}-end-error` : undefined}
        />
        <label className="rb-current-checkbox">
          <input
            type="checkbox"
            className="checkbox"
            checked={current}
            onChange={(e) => onCurrentChange(e.target.checked)}
          />
          <span className="checkbox-label">{currentLabel}</span>
        </label>
      </FormField>
    </>
  );
}
