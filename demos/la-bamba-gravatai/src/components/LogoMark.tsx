type LogoMarkProps = {
  className?: string;
  title?: string;
};

export function LogoMark({ className, title = "La Bamba" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="100" cy="100" r="96" fill="#C80000" />
      <line
        x1="28"
        y1="58"
        x2="172"
        y2="58"
        stroke="#fff8f0"
        strokeWidth="2.2"
      />
      <line
        x1="28"
        y1="148"
        x2="172"
        y2="148"
        stroke="#fff8f0"
        strokeWidth="2.2"
      />
      <text
        x="100"
        y="50"
        textAnchor="middle"
        fill="#fff8f0"
        fontFamily="Oswald, Arial Narrow, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="1.4"
      >
        RESTAURANTE E LANCHERIA
      </text>
      <text
        x="88"
        y="108"
        textAnchor="middle"
        fill="#fff8f0"
        fontFamily="Oswald, Arial Narrow, sans-serif"
        fontSize="38"
        fontWeight="700"
        letterSpacing="1"
      >
        LA
      </text>
      <text
        x="88"
        y="140"
        textAnchor="middle"
        fill="#fff8f0"
        fontFamily="Oswald, Arial Narrow, sans-serif"
        fontSize="32"
        fontWeight="700"
        letterSpacing="0.5"
      >
        BAMBA
      </text>
      <g fill="#fff8f0" transform="translate(148 96)">
        <rect x="-10" y="0" width="3.2" height="28" rx="1.4" />
        <ellipse cx="-8.4" cy="-2" rx="5" ry="7" />
        <rect x="6" y="0" width="3.2" height="28" rx="1.4" />
        <path d="M4 -6 h8 v14 h-2.2 v-11.2 h-3.6 v11.2 H4 z" />
      </g>
    </svg>
  );
}
