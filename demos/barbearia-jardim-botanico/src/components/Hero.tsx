import { SITE } from "../data/site.ts";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/sala-reformada.png"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="kicker">Felizardo · sala 02</p>
        <h1>
          Barbearia <em>Jardim Botânico</em>
        </h1>
        <p className="hero-line">{SITE.line}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Agendar no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <p className="hero-meta">
          {SITE.reviewsCount} avaliações no Google <span>· {SITE.hours}</span>
        </p>
      </div>
    </section>
  );
}
