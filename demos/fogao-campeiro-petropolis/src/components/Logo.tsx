function PotMark() {
  return (
    <svg className="logo-pot" viewBox="0 0 80 72" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="40" cy="12" rx="5" ry="4.2" />
        <ellipse cx="40" cy="24" rx="26" ry="7" />
        <path d="M18 25h44c3 0 8 6 8 16 0 10-10 18-30 18S10 51 10 41c0-10 5-16 8-16z" />
        <path d="M12 36c-8 0-10 8-8 14 2 5 8 6 12 3-3-2-5-6-4-12v-5z" />
        <path d="M68 36c8 0 10 8 8 14-2 5-8 6-12 3 3-2 5-6 4-12v-5z" />
      </g>
    </svg>
  );
}

type LogoProps = {
  variant?: "lockup" | "stack" | "mark";
};

export function Logo({ variant = "lockup" }: LogoProps) {
  if (variant === "mark") {
    return (
      <span className="logo-badge" aria-hidden="true">
        <PotMark />
      </span>
    );
  }

  return (
    <span className={`logo-lockup ${variant === "stack" ? "is-stack" : ""}`}>
      <PotMark />
      <span className="logo-word">
        fogão campeiro
        {variant === "stack" ? <small>Petrópolis</small> : null}
      </span>
    </span>
  );
}
