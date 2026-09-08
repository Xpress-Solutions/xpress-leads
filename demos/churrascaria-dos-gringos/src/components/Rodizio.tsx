import { ACOMPANHAMENTOS, CORTES, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Rodizio() {
  const ref = useReveal();

  return (
    <section className="section rodizio" id="rodizio">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">O espeto corrido</p>
          <h2 className="section-title">Galeto, costela e o lombinho que rouba a mesa.</h2>
          <p className="section-lead">
            Mini-espeto de almoço: maminha, vazio, costela, lombo de porco, galeto, salsichão e
            coração. Os acompanhamentos chegam antes — e sozinhos já dariam conta, como escreveu o
            Destemperados em junho de 2026.
          </p>
        </div>
        <div className="corte-grid">
          {CORTES.map((corte) => (
            <article className="corte-card" key={corte.name}>
              <h3>{corte.name}</h3>
              <p>{corte.note}</p>
            </article>
          ))}
        </div>
        <div className="sides" aria-label="Acompanhamentos">
          {ACOMPANHAMENTOS.map((item) => (
            <span className="side" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="price-row">
          <div>
            <span>Almoço ter–sex</span>
            <strong>{SITE.lunchPrice}</strong>
          </div>
          <div>
            <span>Jantar de fim de semana</span>
            <strong>{SITE.dinnerPrice}</strong>
          </div>
        </div>
        <p className="price-note">{SITE.priceNote}</p>
      </div>
    </section>
  );
}
