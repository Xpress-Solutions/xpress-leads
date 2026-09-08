export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" fill="#2C1810" />
      <rect x="6" y="8" width="52" height="8" fill="#3A322A" />
      <rect x="6" y="18" width="52" height="8" fill="#2A221C" />
      <rect x="6" y="28" width="52" height="8" fill="#3A322A" />
      <rect x="6" y="38" width="52" height="18" fill="#C9A227" />
      <text
        x="32"
        y="51"
        textAnchor="middle"
        fill="#1A1410"
        fontFamily="Anton, sans-serif"
        fontSize="11"
      >
        CG
      </text>
    </svg>
  );
}
