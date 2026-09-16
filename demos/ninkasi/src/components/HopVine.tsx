export function HopVine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 420"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M42 8c-4 42 10 70-2 112 8 38-12 64 2 108-10 36 8 70-4 110"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.55"
      />
      <ellipse cx="28" cy="56" rx="11" ry="16" fill="currentColor" opacity="0.45" />
      <ellipse cx="54" cy="92" rx="10" ry="15" fill="currentColor" opacity="0.38" />
      <ellipse cx="26" cy="168" rx="12" ry="17" fill="currentColor" opacity="0.42" />
      <ellipse cx="56" cy="220" rx="11" ry="16" fill="currentColor" opacity="0.36" />
      <ellipse cx="30" cy="292" rx="12" ry="18" fill="currentColor" opacity="0.4" />
      <ellipse cx="52" cy="360" rx="10" ry="15" fill="currentColor" opacity="0.34" />
    </svg>
  );
}
