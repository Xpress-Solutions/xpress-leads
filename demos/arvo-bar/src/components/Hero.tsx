import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/fachada.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <h1>{SITE.headline}</h1>
        <div className="hero-mark" aria-hidden="true" />
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span> · {SITE.reviewsCount} avaliações · {SITE.hoursLead}</span>
        </div>
      </div>
    </section>
  );
}
