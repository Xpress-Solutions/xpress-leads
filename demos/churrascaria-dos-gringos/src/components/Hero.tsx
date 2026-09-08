import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/hero.jpg"
          alt=""
          width={1280}
          height={960}
          fetchPriority="high"
        />
      </div>

      <div className="wrap hero-stage">
        <div className="hero-copy">
          <img className="hero-seal" src="/logo.svg" alt="" width={148} height={148} />

          <p className="hero-kicker">{SITE.address.neighborhood} · {SITE.address.street}</p>

          <h1 className="hero-name">
            <span className="hero-legal">Churrascaria &amp; Pizzaria dos</span>
            <span className="hero-banner">Gringos</span>
          </h1>

          <p className="hero-slogan">{SITE.subheadline}</p>
          <p className="hero-lead">{SITE.lead}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
            </a>
          </div>

          <div className="hero-proof">
            <span className="hero-stars">★ {SITE.rating} no Google</span>
            <span>{SITE.reviewsCount} avaliações</span>
            <a className="hero-ig" href={SITE.instagram} target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="cloth-bar" aria-hidden="true" />
      <div className="hero-rail">
        <span>{SITE.address.street}</span>
        <a href={SITE.instagram} target="_blank" rel="noreferrer">
          {SITE.instagramHandle}
        </a>
      </div>
    </section>
  );
}
