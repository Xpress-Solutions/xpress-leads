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

      <g transform="translate(1000 300)" fill="none" stroke="#F3EDE3" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="168" cy="78" r="46" />
        <path d="M168 124v86" />
        <path d="M128 210c8 70 80 70 88 0" />
        <path d="M216 248c38-6 62 20 48 58" />
        <path d="M252 268c22 8 18 40-8 48" />
        <path d="M120 268h70l-6 52c-2 16-14 26-26 26s-24-10-26-26l-6-52z" />
      </g>
      <path d="M1126 568h58c-3 18-14 30-29 30s-26-12-29-30z" fill="#B4292C" />
    </svg>
  );
}
