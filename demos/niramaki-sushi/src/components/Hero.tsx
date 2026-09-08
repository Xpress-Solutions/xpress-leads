import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <picture>
          <source srcSet="/fotos/hero.webp" type="image/webp" />
          <img
            src="/fotos/hero.jpg"
            alt=""
            width={2400}
            height={1350}
            fetchPriority="high"
          />
        </picture>
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">{SITE.tagline}</p>
        <h1>
          {SITE.headline}
          <span className="hero-mark">sushi</span>
        </h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-call" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
