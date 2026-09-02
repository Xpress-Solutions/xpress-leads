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
        <p className="hero-kicker">Jardim Botânico · Porto Alegre</p>
        <h1>
          <span className="hero-art">art</span>
          <span className="hero-em">em</span>
          <span className="hero-volantes">volantes</span>
        </h1>
        <p className="hero-line">{SITE.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp — orçamento
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
