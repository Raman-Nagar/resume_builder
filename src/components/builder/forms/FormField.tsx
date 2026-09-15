import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export function FormField({ id, label, required, hint, error, children, className }: Props) {
  return (
    <div className={cn("rb-field", className)}>
      <label className="label" htmlFor={id}>
        {label}
        {required && <span className="label-required" aria-hidden="true" />}
      </label>
      {children}
      {error ? (
        <p className="field-error-msg" role="alert" id={`${id}-error`}>{error}</p>
      ) : hint ? (
        <p className="field-hint" id={`${id}-hint`}>{hint}</p>
      ) : null}
    </div>
  );
}
