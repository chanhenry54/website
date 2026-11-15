import type { ReactNode } from "react";

export type BannerVariant = "info" | "warning" | "alert";

// Full class strings per variant: Tailwind only generates classes it can find
// as literals in source, so these must not be built with string interpolation.
const variantClasses: Record<BannerVariant, { surface: string; accent: string }> = {
  info: {
    surface: "border-info-border bg-info text-info-foreground",
    accent: "bg-info-accent",
  },
  warning: {
    surface: "border-warning-border bg-warning text-warning-foreground",
    accent: "bg-warning-accent",
  },
  alert: {
    surface: "border-alert-border bg-alert text-alert-foreground",
    accent: "bg-alert-accent",
  },
};

type BannerProps = {
  /** Color scheme and urgency. Defaults to "info". */
  variant?: BannerVariant;
  /** Bold lead-in shown before the message, e.g. "Work in progress." */
  title?: string;
  /** Animate the indicator dot to draw attention. Disabled for reduced-motion users. */
  pulse?: boolean;
  children: ReactNode;
};

/**
 * Full-width notice strip, e.g. above the site header.
 * "alert" is announced immediately by screen readers; "info" and "warning" politely.
 */
export function Banner({ variant = "info", title, pulse = false, children }: BannerProps) {
  const classes = variantClasses[variant];

  return (
    <div role={variant === "alert" ? "alert" : "status"} className={`border-b ${classes.surface}`}>
      <p className="mx-auto flex w-full max-w-3xl items-center justify-center gap-2.5 px-6 py-2.5 text-center text-sm">
        <span aria-hidden className="relative flex size-2 shrink-0">
          {pulse && (
            <span
              className={`absolute inline-flex size-full animate-ping rounded-full opacity-60 motion-reduce:hidden ${classes.accent}`}
            />
          )}
          <span className={`relative inline-flex size-2 rounded-full ${classes.accent}`} />
        </span>
        <span>
          {title && <strong className="font-semibold">{title}</strong>} {children}
        </span>
      </p>
    </div>
  );
}
