import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/lacador.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <h1>
          {SITE.headline}
        </h1>
        <p>{SITE.line}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp — jogos
          </a>
          <a className="btn btn-brand" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
