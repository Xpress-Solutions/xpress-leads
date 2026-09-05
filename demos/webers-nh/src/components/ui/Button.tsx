import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-weber-brand text-weber-surface hover:bg-weber-brand-deep shadow-lg shadow-weber-brand/25",
  secondary: "bg-weber-accent text-weber-ink hover:bg-weber-accent-deep",
  outline:
    "border-2 border-weber-accent text-weber-accent hover:bg-weber-accent hover:text-weber-ink",
  ghost: "text-weber-ink hover:text-weber-brand",
};

export function Button({
  className,
  variant = "primary",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-[0.14em] uppercase transition-all duration-200 active:scale-95",
    variants[variant],
    className,
  );

  if (href) {
    const linkProps: AnchorHTMLAttributes<HTMLAnchorElement> = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    if (external || href.startsWith("http") || href.startsWith("tel:")) {
      return (
        <a href={href} className={classes} {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
