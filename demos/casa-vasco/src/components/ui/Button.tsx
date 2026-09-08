import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "accent" | "plum" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  accent: "bg-accent text-petrol hover:brightness-110",
  plum: "bg-brand text-foreground hover:brightness-110",
  ghost:
    "border border-foreground/30 bg-transparent text-foreground hover:border-accent hover:text-accent",
};

export function Button({
  className,
  variant = "accent",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-200",
    variants[variant],
    className,
  );

  if (href) {
    const isHttp = href.startsWith("http");
    const extra: AnchorHTMLAttributes<HTMLAnchorElement> =
      external || isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={classes} {...extra}>
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
