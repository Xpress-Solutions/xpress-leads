/** Fachada da Venâncio: duas portas vermelhas, 871, copo e nome — traço original, espírito Athos. */
export function Facade() {
  return (
    <svg
      className="hero-facade-art"
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="corrugation" width="22" height="20" patternUnits="userSpaceOnUse">
          <rect width="22" height="20" fill="#7C1C1C" />
          <rect x="0" width="7" height="20" fill="#6A1717" />
          <rect x="15" width="7" height="20" fill="#8A2222" />
        </pattern>
      </defs>
      <rect width="1600" height="1000" fill="#D8CFC0" />
      <rect y="780" width="1600" height="220" fill="#C9B8A6" />
      <rect x="70" y="70" width="1460" height="80" fill="#E8E0D2" />
      <text
        x="430"
        y="132"
        fill="#7C1C1C"
        fontFamily="Caveat, cursive"
        fontSize="64"
        fontWeight="700"
      >
        meio
      </text>
      <text
        x="800"
        y="128"
        fill="#7C1C1C"
        fontFamily="Caveat, cursive"
        fontSize="58"
        fontWeight="700"
        textAnchor="middle"
      >
        871
      </text>
      <text
        x="1040"
        y="132"
        fill="#7C1C1C"
        fontFamily="Caveat, cursive"
        fontSize="64"
        fontWeight="700"
      >
        cheio
      </text>

      <rect x="90" y="170" width="680" height="640" fill="url(#corrugation)" />
      <rect x="830" y="170" width="680" height="640" fill="url(#corrugation)" />
      <rect x="760" y="170" width="80" height="640" fill="#EFE6D8" />

      <g transform="translate(250 250)" fill="none" stroke="#F3EDE3" strokeWidth="14" strokeLinejoin="round">
        <path d="M70 40h260l-24 210c-10 78-62 128-126 128s-116-50-126-128L70 40z" />
      </g>
      <path
        d="M348 430h204c-6 62-48 104-102 104s-96-42-102-104z"
        fill="#B4292C"
        transform="translate(0 0)"
      />
      <g fill="#1B1210">
        <ellipse cx="300" cy="320" rx="16" ry="22" />
        <ellipse cx="700" cy="310" rx="16" ry="22" />
        <ellipse cx="280" cy="430" rx="13" ry="18" />
        <ellipse cx="720" cy="450" rx="13" ry="18" />
        <ellipse cx="340" cy="540" rx="12" ry="16" />
        <ellipse cx="660" cy="560" rx="12" ry="16" />
      </g>

      <g transform="translate(980 280)" fill="none" stroke="#F3EDE3" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        <path d="M210 40c40 8 70 46 64 92-8 62-70 78-118 70" />
        <path d="M150 90c-8 40 6 88 48 104" />
        <path d="M198 196c-40 18-48 70-18 96" />
        <path d="M86 292c-10-40 18-70 54-66 22 40 8 86-28 104" />
        <path d="M250 250c36-8 58 22 46 58-28 18-62 8-78-10" />
        <path d="M200 248c22-4 38 10 34 28-16 10-34 4-42-8" />
      </g>
      <path
        d="M1188 430h92c-4 28-22 46-46 46s-42-18-46-46z"
        fill="#B4292C"
      />
    </svg>
  );
}
