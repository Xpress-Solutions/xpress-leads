import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/kachurrasco.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-sub">{SITE.line}</p>
        <h1>{SITE.headline}</h1>
        <p>{SITE.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href="#cardapio">
            Ver os espetos
          </a>
        </div>
      </div>
    </section>
  );
}
