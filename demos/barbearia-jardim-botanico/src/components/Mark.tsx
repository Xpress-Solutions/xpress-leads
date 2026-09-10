export function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" fill="var(--surface)" />
      <path
        d="M32 10c-7 8-12 14-12 22a12 12 0 0 0 24 0c0-8-5-14-12-22Z"
        fill="var(--accent)"
      />
      <path
        d="M20 38l12 14 12-14"
        stroke="var(--brand)"
        strokeWidth="3"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
}
