type LogoProps = {
  variant?: "lockup" | "stack" | "mark" | "markLight";
};

export function Logo({ variant = "lockup" }: LogoProps) {
  if (variant === "mark" || variant === "markLight") {
    return (
      <img
        className={`logo-mark ${variant === "markLight" ? "is-light" : ""}`}
        src={variant === "markLight" ? "/marca.svg" : "/marca-casa.svg"}
        alt=""
      />
    );
  }

  return (
    <span className={`logo-lockup ${variant === "stack" ? "is-stack" : ""}`}>
      <img src="/marca.svg" alt="" />
      <span className="logo-word">
        fogão campeiro
        {variant === "stack" ? <small>Petrópolis</small> : null}
      </span>
    </span>
  );
}
