export function SobradoArt() {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1410" />
          <stop offset="55%" stopColor="#0f0b09" />
          <stop offset="100%" stopColor="#0a0706" />
        </linearGradient>
        <radialGradient id="lamp" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f3d48a" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#c9a15b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a2a1c" />
          <stop offset="100%" stopColor="#24180f" />
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0c56a" />
          <stop offset="100%" stopColor="#c47a2a" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#sky)" />
      <circle cx="180" cy="90" r="1.4" fill="#f4e8d0" opacity="0.5" />
      <circle cx="320" cy="140" r="1" fill="#f4e8d0" opacity="0.35" />
      <circle cx="1100" cy="80" r="1.2" fill="#f4e8d0" opacity="0.4" />
      <circle cx="1280" cy="160" r="1" fill="#f4e8d0" opacity="0.3" />

      <ellipse cx="980" cy="430" rx="220" ry="90" fill="url(#lamp)" />

      <path d="M0 720 L1440 690 L1440 900 L0 900 Z" fill="#1a120c" />
      <path d="M0 760 L1440 730 L1440 780 L0 810 Z" fill="#2a1c14" />

      <g transform="translate(620 210)">
        <polygon points="40,70 390,40 390,430 40,450" fill="url(#wall)" />
        <polygon points="390,40 620,110 620,470 390,430" fill="#1d140e" />
        <polygon points="40,70 220,-10 570,60 390,40" fill="#2c1d14" />
        <polygon points="220,-10 450,60 570,60" fill="#3d2618" />

        <rect x="70" y="130" width="70" height="88" fill="url(#glow)" opacity="0.95" />
        <rect x="170" y="126" width="70" height="88" fill="url(#glow)" opacity="0.88" />
        <rect x="270" y="122" width="70" height="88" fill="#e8b85a" opacity="0.8" />
        <rect x="430" y="150" width="62" height="80" fill="url(#glow)" opacity="0.75" />
        <rect x="520" y="168" width="54" height="72" fill="#d4a04a" opacity="0.55" />

        <rect x="70" y="280" width="110" height="150" fill="url(#glow)" />
        <rect x="210" y="276" width="130" height="154" fill="#f0c56a" />
        <rect x="430" y="300" width="150" height="160" fill="#c9a15b" opacity="0.7" />

        <rect x="118" y="300" width="4" height="110" fill="#2a1c14" opacity="0.35" />
        <rect x="268" y="296" width="4" height="114" fill="#2a1c14" opacity="0.35" />

        <ellipse cx="155" cy="390" rx="18" ry="28" fill="#1a120c" opacity="0.55" />
        <ellipse cx="250" cy="386" rx="16" ry="26" fill="#1a120c" opacity="0.5" />
        <path d="M268 360c10-2 18-12 18-22" fill="none" stroke="#1a120c" strokeWidth="3" opacity="0.45" />

        <rect x="88" y="430" width="36" height="8" fill="#c9a15b" opacity="0.35" />
        <rect x="430" y="448" width="150" height="10" fill="#7c2433" />

        <text x="86" y="108" fill="#c9a15b" fontSize="18" fontFamily="Georgia, serif">
          105
        </text>
      </g>

      <g transform="translate(980 430)">
        <rect x="0" y="0" width="6" height="210" fill="#3a2a1c" />
        <circle cx="3" cy="-8" r="18" fill="url(#lamp)" />
        <circle cx="3" cy="-8" r="6" fill="#f3d48a" />
      </g>

      <g fill="#0c0907" opacity="0.55">
        <ellipse cx="760" cy="690" rx="22" ry="8" />
        <rect x="748" y="650" width="8" height="40" />
        <ellipse cx="820" cy="688" rx="20" ry="7" />
        <rect x="810" y="652" width="8" height="36" />
        <ellipse cx="880" cy="686" rx="24" ry="8" />
      </g>

      <text
        x="80"
        y="820"
        fill="#8c7358"
        fontSize="15"
        letterSpacing="3"
        fontFamily="sans-serif"
      >
        LUCAS DE OLIVEIRA  ×  FELIPE NERI
      </text>
    </svg>
  );
}
