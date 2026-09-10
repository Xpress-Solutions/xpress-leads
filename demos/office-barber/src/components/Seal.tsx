type SealProps = {
  className?: string;
};

export function Seal({ className }: SealProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      aria-hidden="true"
      role="img"
    >
      <circle cx="100" cy="100" r="98" fill="#0B0B0B" />
      <circle cx="100" cy="100" r="93" fill="none" stroke="#F2EDE3" strokeWidth="1.4" />
      <circle cx="100" cy="100" r="62" fill="none" stroke="#F2EDE3" strokeWidth="1" />
      <text
        fill="#F2EDE3"
        fontFamily="Cinzel, serif"
        fontSize="13"
        letterSpacing="3"
        textAnchor="middle"
      >
        <textPath href="#office-arc-top" startOffset="50%">
          OFFICE BARBER
        </textPath>
      </text>
      <text
        fill="#F2EDE3"
        fontFamily="Cinzel, serif"
        fontSize="11"
        letterSpacing="2.4"
        textAnchor="middle"
      >
        <textPath href="#office-arc-bot" startOffset="50%">
          CUT AND SHAVE
        </textPath>
      </text>
      <text
        x="38"
        y="104"
        fill="#F2EDE3"
        fontFamily="Cinzel, serif"
        fontSize="9"
        letterSpacing="1.5"
      >
        EST.
      </text>
      <text
        x="138"
        y="104"
        fill="#F2EDE3"
        fontFamily="Cinzel, serif"
        fontSize="9"
        letterSpacing="1"
      >
        MMXXI
      </text>
      <text
        x="100"
        y="118"
        fill="#E3C15A"
        fontFamily="Cinzel, serif"
        fontSize="46"
        fontWeight="700"
        textAnchor="middle"
      >
        OB
      </text>
      <defs>
        <path id="office-arc-top" d="M28,100 a72,72 0 0 1 144,0" fill="none" />
        <path id="office-arc-bot" d="M172,100 a72,72 0 0 1 -144,0" fill="none" />
      </defs>
    </svg>
  );
}
