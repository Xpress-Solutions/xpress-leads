type MarkProps = {
  className?: string
  title?: string
  decorative?: boolean
};

export function GlassMark({ className, title = "Copo da casa", decorative }: MarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
    >
      <circle cx="40" cy="11" r="6" stroke="currentColor" strokeWidth="3.2" />
      <path
        d="M17 18h46l-4.6 36c-1.7 13.2-10.4 21.4-18.4 21.4S23.3 67.2 21.6 54L17 18z"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinejoin="round"
      />
      <path d="M21.2 42h37.6c-.8 10.8-8 17.6-18.8 17.6S22 52.8 21.2 42z" fill="#B4292C" />
    </svg>
  );
}

export function CandleMark({ className, title = "Vela da casa" }: MarkProps) {
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
        d="M40 10c6 8 4 16-1 20-6-2-9-10-4-20z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M18 40c2-8 10-12 22-12s20 4 22 12v30c0 8-8 14-22 14S18 78 18 70V40z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path d="M22 58c6 4 30 4 36 0" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

export function DoorMark({ className, title = "Portas 871" }: MarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <rect x="7" y="16" width="26" height="58" stroke="currentColor" strokeWidth="3" />
      <rect x="47" y="16" width="26" height="58" stroke="currentColor" strokeWidth="3" />
      <rect x="36" y="16" width="8" height="58" fill="currentColor" />
      <path d="M16 30h8M56 30h8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
