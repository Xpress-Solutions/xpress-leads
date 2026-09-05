import { AMENITIES, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Strip() {
  const ref = useReveal();

  return (
    <section className="strip" aria-label="Informações rápidas">
      <div className="wrap strip-grid reveal" ref={ref}>
        <div>
          <p className="strip-kicker">Onde</p>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} · {SITE.address.city}
          </p>
        </div>
        <div>
          <p className="strip-kicker">Quando</p>
          <p>{SITE.hoursLine}</p>
        </div>
        <div>
          <p className="strip-kicker">Na cadeira</p>
          <p>Corte · barba · sobrancelha</p>
        </div>
        <div>
          <p className="strip-kicker">A casa tem</p>
          <p>{AMENITIES.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
