import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="/fotos/hero.png" alt="" />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">São Leopoldo · Unisinos · Acesso 2</p>
        <h1>
          Alemão
          <span>Unipark</span>
        </h1>
        <p className="hero-line">{SITE.subheadline}</p>
        <p className="hero-pitch">{SITE.identity}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href="#cardapio">
            Ver cardápio
          </a>
          <a className="btn btn-ghost" href="#acesso-2">
            Mapa do acesso 2
          </a>
          <a className="btn btn-red" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>Litrão · sinuca · buffet · banda</span>
        </div>
      </div>
    </section>
  );
}
