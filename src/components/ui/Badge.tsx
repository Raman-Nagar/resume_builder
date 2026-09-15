import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "success" | "warning" | "error";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClass: Record<BadgeVariant, string> = {
  default: "badge-default",
  accent:  "badge-accent",
  success: "badge-success",
  warning: "badge-warning",
  error:   "badge-error",
};

function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  return (
    <span className={cn("badge", variantClass[variant], className)} {...props}>
      {children}
    </span>
  );
}

export { Badge };
export type { BadgeProps, BadgeVariant };
