/** Cena original da praça ao anoitecer — não é foto de stock. */
export function PlazaScene() {
  return (
    <svg
      className="plaza-scene"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#152018" />
          <stop offset="42%" stopColor="#0F1812" />
          <stop offset="100%" stopColor="#070B08" />
        </linearGradient>
        <radialGradient id="lamp" cx="28%" cy="62%" r="38%">
          <stop offset="0%" stopColor="#E8C24A" stopOpacity="0.42" />
          <stop offset="45%" stopColor="#E8C24A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#0B130F" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dusk" cx="78%" cy="18%" r="40%">
          <stop offset="0%" stopColor="#3A4A28" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0B130F" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#sky)" />
      <rect width="1440" height="900" fill="url(#dusk)" />
      <rect width="1440" height="900" fill="url(#lamp)" />

      <ellipse cx="220" cy="820" rx="280" ry="40" fill="#0A100C" opacity="0.55" />
      <ellipse cx="640" cy="840" rx="340" ry="36" fill="#0A100C" opacity="0.45" />
      <ellipse cx="1100" cy="830" rx="300" ry="38" fill="#0A100C" opacity="0.5" />

      <g fill="#07100A">
        <path d="M0 0h220c-8 90-40 160-96 210C70 250 20 300 0 360Z" />
        <path d="M180 0c40 70 30 150-10 220-50 80-40 150 20 210" />
        <path d="M1440 0h-280c20 80 70 150 140 210 80 70 120 140 140 220Z" />
        <path d="M1180 0c-30 80-10 160 50 230 70 80 40 150-30 220" />
        <path d="M420 0c80 40 90 110 40 180-60 80-20 150 70 210" opacity="0.85" />
        <path d="M860 0c-70 50-50 130 20 190 80 70 30 150-60 220" opacity="0.8" />
      </g>

      <g stroke="#1C2C20" strokeWidth="10" fill="none">
        <path d="M310 900 V430" />
        <path d="M1080 900 V400" />
        <path d="M690 900 V360" />
      </g>
      <g fill="#0E1A12">
        <ellipse cx="310" cy="400" rx="170" ry="90" />
        <ellipse cx="250" cy="340" rx="110" ry="70" />
        <ellipse cx="390" cy="350" rx="100" ry="64" />
        <ellipse cx="690" cy="330" rx="210" ry="110" />
        <ellipse cx="620" cy="260" rx="120" ry="80" />
        <ellipse cx="780" cy="250" rx="130" ry="74" />
        <ellipse cx="1080" cy="370" rx="190" ry="100" />
        <ellipse cx="1000" cy="300" rx="120" ry="70" />
        <ellipse cx="1160" cy="310" rx="110" ry="66" />
      </g>

      <g fill="#1A2C1E">
        <rect x="118" y="668" width="132" height="10" rx="1" />
        <rect x="148" y="678" width="8" height="36" />
        <rect x="210" y="678" width="8" height="36" />
        <rect x="128" y="636" width="28" height="36" rx="1" />
        <rect x="206" y="636" width="28" height="36" rx="1" />
        <rect x="410" y="700" width="150" height="10" rx="1" />
        <rect x="444" y="710" width="8" height="34" />
        <rect x="516" y="710" width="8" height="34" />
        <rect x="424" y="668" width="28" height="36" rx="1" />
        <rect x="516" y="668" width="28" height="36" rx="1" />
      </g>

      <g>
        <rect x="176" y="642" width="14" height="28" rx="2" fill="#E8C24A" />
        <rect x="178" y="628" width="10" height="16" rx="2" fill="#F3EEDC" opacity="0.55" />
        <rect x="468" y="672" width="16" height="30" rx="2" fill="#E8C24A" />
        <rect x="470" y="658" width="12" height="16" rx="2" fill="#F3EEDC" opacity="0.5" />
      </g>

      <g fill="#B8D96A" opacity="0.18">
        <circle cx="200" cy="210" r="3" />
        <circle cx="540" cy="160" r="2.4" />
        <circle cx="900" cy="200" r="3" />
        <circle cx="1240" cy="170" r="2.2" />
      </g>
    </svg>
  );
}
