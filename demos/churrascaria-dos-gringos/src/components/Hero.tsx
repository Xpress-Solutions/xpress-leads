import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/picanha.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">Azenha · Av. Bento Gonçalves, 303</p>
        <h1 className="hero-name">
          <small>Churrascaria &amp; Pizzaria</small>
          <span className="hero-banner">Dos Gringos</span>
        </h1>
        <h2>{SITE.subheadline}</h2>
        <p>{SITE.lead}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>{SITE.reviewsCount} avaliações</span>
        </div>
      </div>
    </section>
  );
}
