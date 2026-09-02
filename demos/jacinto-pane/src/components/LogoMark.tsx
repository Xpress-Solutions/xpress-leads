type LogoMarkProps = {
  className?: string;
  title?: string;
};

/** Recriação do logo oficial: boneco branco + pão alveolar no marinho. */
export function LogoMark({ className, title = "Jacinto Pane & Cucina" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={title}
    >
      <rect width="200" height="200" rx="20" fill="#003364" />
      <ellipse
        cx="108"
        cy="92"
        rx="62"
        ry="38"
        fill="#DFCA9E"
        transform="rotate(-12 108 92)"
      />
      <ellipse cx="86" cy="80" rx="9" ry="7" fill="#003364" />
      <ellipse cx="112" cy="86" rx="14" ry="10" fill="#003364" />
      <ellipse cx="136" cy="78" rx="7" ry="6" fill="#003364" />
      <ellipse cx="124" cy="102" rx="8" ry="6" fill="#003364" />
      <ellipse cx="98" cy="104" rx="6" ry="5" fill="#003364" />
      <g fill="#F7F2E8">
        <circle cx="58" cy="118" r="16" />
        <path d="M48 128c2 22 8 36 10 48h20c2-14 6-28 8-48H48z" />
        <path d="M54 176h16l4 16H52z" />
        <path d="M68 176h14l8 16H72z" />
        <path d="M70 132c16 4 28 2 40-8l4 10c-16 12-32 16-48 12z" />
        <path d="M46 108c-6-8-4-18 4-22 4-10 16-12 22-4 8-2 16 6 12 16-8 2-18 6-38 10z" />
      </g>
      <circle cx="54" cy="116" r="1.8" fill="#122033" />
      <circle cx="62" cy="116" r="1.8" fill="#122033" />
      <path
        d="M54 122c3 3 7 3 10 0"
        fill="none"
        stroke="#122033"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
