export function CrossedRazors({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 88 36" aria-hidden="true">
      <g fill="currentColor">
        <g transform="rotate(-32 44 18)">
          <rect x="10" y="16" width="50" height="3.2" rx="1" />
          <path d="M58 13.2h10l6 4.8-6 4.8H58z" />
          <circle cx="12" cy="17.6" r="3.1" />
        </g>
        <g transform="rotate(32 44 18)">
          <rect x="10" y="16" width="50" height="3.2" rx="1" />
          <path d="M58 13.2h10l6 4.8-6 4.8H58z" />
          <circle cx="12" cy="17.6" r="3.1" />
        </g>
      </g>
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
