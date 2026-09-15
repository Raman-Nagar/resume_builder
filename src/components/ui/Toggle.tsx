"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <label className={cn("toggle-wrapper", className)} htmlFor={id}>
        <span className="toggle">
          <input ref={ref} id={id} type="checkbox" {...props} />
          <span className="toggle-track" aria-hidden="true" />
        </span>
        {label && <span className="toggle-label">{label}</span>}
      </label>
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle };
export type { ToggleProps };
