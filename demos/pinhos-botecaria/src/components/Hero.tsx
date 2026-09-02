import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/hero.jpg"
          alt=""
          width={1200}
          height={1600}
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-place">Centro · Canoas · Victor Barreto</p>
        <h1>{SITE.headline}</h1>
        <p className="hero-sub">{SITE.tagline}</p>
        <p>{SITE.line}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp / reserva
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <div className="hero-meta">
          ★ {SITE.rating} no Google <span>· {SITE.hoursLine}</span>
        </div>
      </div>
    </section>
  );
}
