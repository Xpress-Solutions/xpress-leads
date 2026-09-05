import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <div
        className={cn(
          "mb-4 h-px w-16",
          light ? "bg-weber-accent" : "bg-weber-brand",
        )}
        aria-hidden
      />
      <h2
        className={cn(
          "font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl",
          light ? "text-weber-linen" : "text-weber-brand",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-base md:text-lg",
            light ? "text-weber-linen/75" : "text-weber-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
