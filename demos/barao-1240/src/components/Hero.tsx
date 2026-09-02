import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/hero.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">{SITE.kicker}</p>
        <h1>
          <em>Barão</em>
          1240
        </h1>
        <p className="hero-line">{SITE.line}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <div className="hero-meta">
          ★ {SITE.rating} no Google
          <span>
            {SITE.reviewsCount} avaliações · {SITE.hoursLabel}
          </span>
        </div>
      </div>
    </section>
  );
}
