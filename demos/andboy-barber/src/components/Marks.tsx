export function CrossedRazors({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 32" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M8 26 L28 8" />
        <path d="M24 26 L44 8" transform="translate(0 0)" />
        <path d="M36 26 L56 8" />
      </g>
      <path
        fill="currentColor"
        d="M7.2 27.2 26.4 8l2.2 2.2-19.2 19.2zM35.2 27.2 54.4 8l2.2 2.2-19.2 19.2z"
        opacity="0.15"
      />
      <circle cx="10" cy="26" r="2.2" fill="currentColor" />
      <circle cx="54" cy="10" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function BarberPole({ className }: { className?: string }) {
  return (
    <span className={`pole ${className ?? ""}`} aria-hidden="true">
      <i />
    </span>
  );
}
