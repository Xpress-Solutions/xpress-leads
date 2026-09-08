import { SITE } from "../data/site";

export function FloatingCta() {
  return (
    <div className="fab">
      <a href={SITE.instagramDm} target="_blank" rel="noreferrer" aria-label="Reservar no Instagram">
        Reservar no DM
      </a>
    </div>
  );
}
