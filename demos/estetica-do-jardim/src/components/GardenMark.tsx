export function GardenMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M24 36c0-10 8-14 14-16-2 10-8 14-14 16Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M24 36c0-11-8-15-14-17 2 11 8 15 14 17Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path d="M24 14v22" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
