import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-coals" />
        <div className="hero-grill" />
      </div>
      <div className="wrap hero-content">
        <p className="hero-place">
          {SITE.neighborhood} · {SITE.city}
        </p>
        <h1>
          <span className="hero-bar">Bar</span>
          <span className="hero-e">e</span>
          <span className="hero-bar">Bar</span>
        </h1>
        <p className="hero-sub">{SITE.tagline}</p>
        <p className="hero-line">{SITE.line}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href="#reserva">
            Reservar mesa
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <p className="hero-rating">
          <span aria-hidden="true">★★★★★</span>
          <b>{SITE.googleRating}</b> no Google · {SITE.priceRange} por pessoa
        </p>
      </div>
    </section>
  );
}
