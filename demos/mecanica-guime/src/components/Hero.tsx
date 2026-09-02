import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-light" />
        <div className="hero-stripe" />
      </div>
      <div className="wrap hero-content">
        <p className="hero-meta">
          <span>Jardim Botânico · Porto Alegre</span>
          <span>Desde {SITE.foundedYear}</span>
        </p>
        <h1>
          <span>Oficina Mecânica</span>
          {SITE.headline}
        </h1>
        <p className="hero-line">{SITE.line}</p>
        <div className="hero-actions">
          <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Orçamento no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
