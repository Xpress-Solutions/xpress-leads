export function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" aria-hidden="true">
      <rect x="6" y="6" width="68" height="68" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M40 6v68M6 40h68" stroke="currentColor" strokeWidth="1.3" />
      <text
        x="23"
        y="33"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="17"
        fontWeight="600"
      >
        I
      </text>
      <text
        x="57"
        y="33"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="17"
        fontWeight="600"
      >
        N
      </text>
      <text
        x="23"
        y="60"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="17"
        fontWeight="600"
      >
        C
      </text>
      <text
        x="57"
        y="60"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Cinzel, Georgia, serif"
        fontSize="17"
        fontWeight="600"
      >
        A
      </text>
    </svg>
  );
}
