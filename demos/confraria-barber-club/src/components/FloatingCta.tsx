import { SITE } from "../data/site";

export function FloatingCta() {
  return (
    <div className="fab">
      <a href={SITE.booksy} target="_blank" rel="noreferrer">
        Agendar
      </a>
    </div>
  );
}
