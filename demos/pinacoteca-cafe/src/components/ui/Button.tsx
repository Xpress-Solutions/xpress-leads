import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "accent" | "brand" | "ghost" | "paper";

const variants: Record<Variant, string> = {
  accent:
    "bg-accent text-paper-ink hover:bg-accent-soft shadow-[0_8px_24px_rgba(212,160,23,0.28)]",
  brand: "bg-brand text-foreground hover:bg-brand-deep",
  ghost:
    "border border-foreground/30 bg-transparent text-foreground hover:border-accent hover:text-accent",
  paper: "bg-paper-ink text-paper hover:bg-brand",
};

export function Button({
  href,
  variant = "accent",
  className,
  children,
  ...props
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 px-6 text-xs font-semibold tracking-[0.14em] uppercase transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0",
    variants[variant],
    className,
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    const linkProps: AnchorHTMLAttributes<HTMLAnchorElement> = external
      ? { target: href.startsWith("tel:") ? undefined : "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a href={href} className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
