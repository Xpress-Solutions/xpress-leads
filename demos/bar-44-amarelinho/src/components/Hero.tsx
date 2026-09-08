import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-wall" aria-hidden="true" />
      <div className="wrap hero-content">
        <p className="hero-kicker">Santa Maria Goretti · Zona Norte</p>
        <h1>
          <span className="hero-number">Bar {SITE.number}</span>
          Amarelinho
        </h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <div className="hero-proof">
          <span>★ {SITE.rating} no Google</span>
          <span>{SITE.reviewsCount} avaliações</span>
          <span>{SITE.priceRange}</span>
        </div>
      </div>
    </section>
  );
}
