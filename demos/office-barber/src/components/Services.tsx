import { AMENITIES, SERVICES } from "../data/services";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Services() {
  const ref = useReveal();

  return (
    <section className="section services" id="servicos">
      <div className="wrap">
        <div className="svc-head reveal" ref={ref}>
          <p className="kicker">Tabela da casa</p>
          <h2 className="section-title">Cut and shave.</h2>
          <p className="section-lead">
            Preços e tempos do Booksy. Corte, máquina, barba, contorno e combos —
            sem cardápio de franquia.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((item) => (
            <article className="svc" key={item.name}>
              <h3>{item.name}</h3>
              <span className="price">{item.price}</span>
              <span className="meta">
                {item.duration}
                {item.popular ? " · popular" : ""}
              </span>
            </article>
          ))}
        </div>
        <div className="amenity-row">
          {AMENITIES.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
        <p style={{ marginTop: 22 }}>
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Quero esse horário
          </a>
        </p>
      </div>
    </section>
  );
}
