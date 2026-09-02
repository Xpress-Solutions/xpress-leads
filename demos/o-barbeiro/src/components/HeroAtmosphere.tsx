export function HeroAtmosphere() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="shop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b221c" />
            <stop offset="55%" stopColor="#101410" />
            <stop offset="100%" stopColor="#0a0d0b" />
          </linearGradient>
          <linearGradient id="window" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d8c48a" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#7a6a42" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#1b221c" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="lamp" cx="50%" cy="20%" r="50%">
            <stop offset="0%" stopColor="#c4a35a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c4a35a" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1600" height="900" fill="url(#shop)" />

        <rect x="0" y="620" width="1600" height="280" fill="#161c18" />
        <rect x="0" y="618" width="1600" height="6" fill="#c4a35a" opacity="0.35" />

        <g transform="translate(90,80)">
          <rect x="18" y="0" width="36" height="520" rx="4" fill="#e7e2d4" />
          <rect x="18" y="28" width="36" height="70" fill="#a11d2e" />
          <rect x="18" y="118" width="36" height="70" fill="#1d3557" />
          <rect x="18" y="208" width="36" height="70" fill="#a11d2e" />
          <rect x="18" y="298" width="36" height="70" fill="#1d3557" />
          <rect x="18" y="388" width="36" height="70" fill="#a11d2e" />
          <rect x="12" y="0" width="48" height="16" fill="#c4a35a" />
          <rect x="12" y="520" width="48" height="16" fill="#c4a35a" />
        </g>

        <rect x="980" y="90" width="420" height="360" fill="url(#window)" stroke="#c4a35a" strokeOpacity="0.35" />
        <line x1="1190" y1="90" x2="1190" y2="450" stroke="#c4a35a" strokeOpacity="0.25" />
        <line x1="980" y1="270" x2="1400" y2="270" stroke="#c4a35a" strokeOpacity="0.25" />

        <ellipse cx="520" cy="280" rx="210" ry="260" fill="none" stroke="#c4a35a" strokeOpacity="0.4" strokeWidth="8" />
        <ellipse cx="520" cy="280" rx="186" ry="236" fill="#1a211c" />
        <ellipse cx="520" cy="280" rx="186" ry="236" fill="url(#lamp)" />

        <ellipse cx="820" cy="300" rx="170" ry="210" fill="none" stroke="#c4a35a" strokeOpacity="0.28" strokeWidth="6" />
        <ellipse cx="820" cy="300" rx="150" ry="190" fill="#151b17" />

        <g transform="translate(470,520)" fill="#2a2218">
          <rect x="40" y="40" width="120" height="18" rx="2" fill="#3a3226" />
          <path d="M20 40 C20 10 180 10 180 40 Z" fill="#2c241a" />
          <rect x="86" y="58" width="28" height="70" fill="#3a3226" />
          <rect x="50" y="128" width="100" height="12" fill="#c4a35a" opacity="0.45" />
        </g>

        <circle cx="400" cy="70" r="90" fill="url(#lamp)" />
        <circle cx="1100" cy="40" r="140" fill="url(#lamp)" />
      </svg>
    </div>
  );
}
