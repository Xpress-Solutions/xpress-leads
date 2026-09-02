import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/hero-fachada.webp"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">Jardim do Salso · Porto Alegre</p>
        <h1>{SITE.headline}</h1>
        <p className="hero-line">{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Reservar no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <p className="hero-proof">
          {SITE.reviewsCount} avaliações no Google
          <span>280 dentro · 300 no pátio · espaço kids</span>
        </p>
      </div>
    </section>
  );
}
