import { SITE } from "../data/site.ts";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-slab" aria-hidden="true" />
      <div className="hero-vein" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-place">Jardim Botânico · Porto Alegre</p>
        <h1>{SITE.headline}</h1>
        <p className="hero-line">{SITE.line}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir orçamento no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <div className="hero-meta">
          <span>Av. Ipiranga, 8621</span>
          <span>Desde {SITE.founded}</span>
          <span>{SITE.tradeName}</span>
        </div>
      </div>
    </section>
  );
}
