import { SITE } from "../data/site";
import { PlazaScene } from "./PlazaScene";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <PlazaScene />
      </div>
      <div className="wrap hero-content">
        <p className="hero-place">
          {SITE.neighborhood} · {SITE.city} · Roosevelt, 323
        </p>
        <h1>
          <span className="hero-bar">Bar</span>
          <span className="hero-ze">do Zé</span>
        </h1>
        <p className="hero-lead">{SITE.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Chamar o Zé
          </a>
          <a className="btn btn-ghost" href="#horario">
            Ver o horário
          </a>
        </div>
        <p className="hero-proof">
          ★ {SITE.rating} no Google
          <span>xis · mesa na praça · {SITE.priceRange}</span>
        </p>
      </div>
    </section>
  );
}
