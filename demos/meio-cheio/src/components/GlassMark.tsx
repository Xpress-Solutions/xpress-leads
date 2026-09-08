type GlassMarkProps = {
  className?: string
  title?: string
};

export function GlassMark({ className, title = "Copo da casa" }: GlassMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <path
        d="M16 10h48l-4.2 34c-1.6 12.4-9.8 20-19.8 20s-18.2-7.6-19.8-20L16 10z"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path
        d="M19.6 34h40.8c-.9 10.6-8.2 17.6-20.4 17.6S20.5 44.6 19.6 34z"
        fill="#B4292C"
      />
      <circle cx="18" cy="22" r="2.2" fill="currentColor" />
      <circle cx="62" cy="20" r="2.2" fill="currentColor" />
      <circle cx="14" cy="36" r="1.8" fill="currentColor" />
      <circle cx="66" cy="38" r="1.8" fill="currentColor" />
    </svg>
  );
}
