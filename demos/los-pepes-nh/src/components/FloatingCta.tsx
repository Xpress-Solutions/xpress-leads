import { SITE } from "../data/site";

export function FloatingCta() {
  return (
    <a className="float-cta" href={SITE.booksy} target="_blank" rel="noreferrer">
      Agendar
    </a>
  );
}
