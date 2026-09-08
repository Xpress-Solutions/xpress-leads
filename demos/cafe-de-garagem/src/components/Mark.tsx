export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" fill="#E6C31A" />
      <rect x="0" y="0" width="64" height="22" fill="#1A1410" />
      <rect x="4" y="3" width="4" height="16" fill="#2A221C" />
      <rect x="12" y="3" width="4" height="16" fill="#2A221C" />
      <rect x="20" y="3" width="4" height="16" fill="#2A221C" />
      <rect x="28" y="3" width="4" height="16" fill="#2A221C" />
      <rect x="36" y="3" width="4" height="16" fill="#2A221C" />
      <rect x="44" y="3" width="4" height="16" fill="#2A221C" />
      <rect x="52" y="3" width="4" height="16" fill="#2A221C" />
      <text
        x="32"
        y="48"
        textAnchor="middle"
        fill="#1A1410"
        fontFamily="Anton, sans-serif"
        fontSize="18"
      >
        CG
      </text>
    </svg>
  );
}
