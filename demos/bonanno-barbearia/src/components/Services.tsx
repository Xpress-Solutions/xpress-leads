import { SERVICES } from "../data/services";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Services() {
  const ref = useReveal();

  return (
    <section className="section services" id="servicos">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="section-kicker">Na cadeira</p>
          <h2 className="section-title">O combo, o corte, a barba.</h2>
          <p className="section-lead">
            Preços da casa no Booksy. O que o Jardim Itu já pede pelo nome: corte, barba e o
            Promo 1 — barba, cabelo e bigode.
          </p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((svc) => (
            <article
              className={`svc-card ${svc.highlight ? "is-hot" : ""}`}
              key={svc.name}
            >
              <div className="svc-top">
                <h3>{svc.name}</h3>
                {svc.highlight ? <span className="svc-flag">Combo</span> : null}
              </div>
              <p>{svc.detail}</p>
              <div className="svc-meta">
                <strong>{svc.price}</strong>
                <span>{svc.duration}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="section-foot">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Quero esse horário
          </a>
          <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
            Ver no Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
