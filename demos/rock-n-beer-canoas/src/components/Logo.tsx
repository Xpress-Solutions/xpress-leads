type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
};

function GuitarMark() {
  return (
    <g>
      <path
        fill="#E31B2A"
        d="M16 48C13 26 34 10 58 14c12-12 34-14 46 2 16-16 46-17 58 4l10 8h58l6-8h92c20 0 34 12 36 26l18-6 9 6-3 14-18 6c-1 14-16 24-36 24h-92l-6-8H172l-10 8c-13 20-43 18-58 2-13 15-35 14-46 1C32 87 12 78 16 48Z"
      />
      <path fill="#8E121C" d="M86 40h54v10H86z" opacity=".55" />
      <g fill="#C4A35A">
        <circle cx="292" cy="22" r="3.4" />
        <circle cx="306" cy="19" r="3.4" />
        <circle cx="320" cy="22" r="3.4" />
      </g>
      <g fill="#7D9A3A">
        <ellipse cx="340" cy="16" rx="7" ry="10" />
        <ellipse cx="333" cy="22" rx="5" ry="8" />
        <ellipse cx="347" cy="22" rx="5" ry="8" />
      </g>
      <path d="M340 6v14" stroke="#4E6A24" strokeWidth="1.4" fill="none" />
    </g>
  );
}

export function Logo({ variant = "full", className }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        className={className}
        viewBox="0 0 360 96"
        role="img"
        aria-label="Rock'n Beer Pub"
      >
        <GuitarMark />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 640 236"
      role="img"
      aria-label="Rock'n Beer Pub"
    >
      <g transform="translate(86 4) scale(1.3)">
        <GuitarMark />
      </g>
      <rect x="24" y="130" width="592" height="66" fill="#1A4A32" />
      <text
        x="320"
        y="176"
        textAnchor="middle"
        fill="#F6F1E8"
        fontFamily='"Alfa Slab One", "Times New Roman", serif'
        fontSize="42"
        letterSpacing="5"
      >
        ROCK'N BEER
      </text>
      <text
        x="320"
        y="222"
        textAnchor="middle"
        fill="#F6F1E8"
        fontFamily='"Oswald", "Arial Narrow", sans-serif'
        fontSize="20"
        fontWeight="600"
        letterSpacing="12"
      >
        PUB
      </text>
    </svg>
  );
}
