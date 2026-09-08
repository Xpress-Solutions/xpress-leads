import { SITE } from "../data/site";

export function FloatingCta() {
  return (
    <div className="fab">
      <a className="fab-maps" href={SITE.maps} target="_blank" rel="noreferrer">
        Maps
      </a>
      <a className="fab-tel" href={`tel:${SITE.phoneTel}`}>
        Ligar
      </a>
    </div>
  );
}
