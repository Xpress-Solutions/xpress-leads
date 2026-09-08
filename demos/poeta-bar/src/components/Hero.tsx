import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/hero.png"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">Rua da Praia · Centro Histórico</p>
        <h1>
          {SITE.headline}
          <span>”</span>
        </h1>
        <p className="hero-tag">{SITE.tagline}</p>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
          <a className="btn btn-brand" href="#coco-crispy">
            Cocó Crispy
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>{SITE.reviewsCount} avaliações · Comida di Buteco 2026</span>
        </div>
      </div>
    </section>
  );
}
