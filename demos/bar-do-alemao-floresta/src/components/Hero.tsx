import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/bolinho-couve-2026.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-place">Floresta · Porto Alegre</p>
        <h1>
          Bar do <em>Alemão</em>
        </h1>
        <p className="hero-line">{SITE.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <p className="hero-credit">{SITE.photoCredit}</p>
      </div>
    </section>
  );
}
