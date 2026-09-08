import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/hero.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">
          <span>Jardim Itu · Porto Alegre</span>
          <span>desde {SITE.founded}</span>
        </p>
        <p className="hero-confraria">Barbearia &amp; Confraria</p>
        <h1>{SITE.headline}</h1>
        <p className="hero-lead">{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Agendar no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Booksy
          <span>{SITE.reviewsCount} avaliações · recomendado</span>
        </div>
      </div>
    </section>
  );
}
