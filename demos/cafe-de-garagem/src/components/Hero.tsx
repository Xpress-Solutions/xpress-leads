import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-slats" aria-hidden="true" />
      <div className="hero-scene" aria-hidden="true" />
      <div className="wrap hero-content">
        <p className="hero-kicker">Santa Rosa de Lima · Porto Alegre</p>
        <h1>{SITE.headline}</h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <div className="hero-proof">
          Comida di Buteco 2026
          <span> · Coxinha de Buteco · R$ 40 no circuito</span>
        </div>
      </div>
      <div className="sidewalk" aria-hidden="true" />
    </section>
  );
}
