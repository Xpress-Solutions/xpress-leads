import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/bacalhau-do-popeye.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">Centro Histórico · Porto Alegre</p>
        <h1>{SITE.headline}</h1>
        <p>{SITE.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <div className="hero-proof">
          Campeão Comida di Buteco POA 2019
          <span>No circuito de novo em 2026 · Bacalhau do Popeye</span>
        </div>
      </div>
    </section>
  );
}
