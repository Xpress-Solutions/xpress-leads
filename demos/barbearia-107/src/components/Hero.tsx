import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="/fotos/hero.jpeg" alt="" />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">Barbearia · Barro Vermelho</p>
        <h1>{SITE.headline}</h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Agendar no WhatsApp
          </a>
          <a className="btn btn-ghost" href="#combos">
            Ver combos
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Booksy
          <span>{SITE.reviewsCount} avaliações · {SITE.barber}</span>
        </div>
      </div>
    </section>
  );
}
