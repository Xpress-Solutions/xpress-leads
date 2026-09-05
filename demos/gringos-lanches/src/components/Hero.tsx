import { SITE, WA_TESOURO } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/tesouro.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">Comida di Buteco 2026 · São João</p>
        <h1>
          {SITE.headline}
        </h1>
        <p className="hero-line">Tesouro de Molho</p>
        <p>{SITE.identity}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={WA_TESOURO} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href="#cardapio">
            Ver cardápio
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>{SITE.reviewsCount} avaliações · {SITE.street}</span>
        </div>
      </div>
    </section>
  );
}
