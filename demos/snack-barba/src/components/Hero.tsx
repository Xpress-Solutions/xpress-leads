import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="/hero-atmosphere.svg" alt="" />
      </div>
      <div className="wrap hero-content">
        <p className="hero-place">Jardim do Salso · Porto Alegre</p>
        <h1>
          Snack Bar <span>do Barba</span>
        </h1>
        <p className="one-line">{SITE.oneLiner}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
