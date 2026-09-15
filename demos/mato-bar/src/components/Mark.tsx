export function Mark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 4C16 16 11 26 11 34c0 8 5.2 12 13 16 7.8-4 13-8 13-16 0-8-5-18-13-30Z"
        fill="currentColor"
      />
      <path
        d="M24 12v30"
        stroke="var(--background)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
