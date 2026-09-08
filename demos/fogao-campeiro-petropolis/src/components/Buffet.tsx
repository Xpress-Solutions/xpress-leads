import { BUFFET, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Buffet() {
  const ref = useReveal();

  return (
    <section className="section buffet" id="buffet">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O que vai ao fogão</p>
        <h2 className="section-title">Buffet campeiro, todo dia.</h2>
        <p className="section-lead">
          Feijoada e carne de panela no balcão de segunda a sábado. Às sextas,
          a lasanha de abacaxi que o Petrópolis já adotou. Livre ou por quilo.
        </p>

        <div className="buffet-grid">
          {BUFFET.map((dish) => (
            <article className="dish" key={dish.name}>
              <small>{dish.note}</small>
              <h3>{dish.name}</h3>
              <p>{dish.detail}</p>
            </article>
          ))}
        </div>

        <div className="prices">
          <div className="price-card">
            <span>Buffet livre · seg a sex</span>
            <b>{SITE.priceWeekday}</b>
            <span>Quilo {SITE.priceKgWeekday}</span>
          </div>
          <div className="price-card weekend">
            <span>Buffet livre · sáb e feriado</span>
            <b>{SITE.priceWeekend}</b>
            <span>Quilo {SITE.priceKgWeekend}</span>
          </div>
        </div>
        <p className="price-note">{SITE.priceNote}</p>
      </div>
    </section>
  );
}
