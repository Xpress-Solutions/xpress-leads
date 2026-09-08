import { Logo } from "./Logo";
import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <picture>
          <source media="(min-width: 768px)" srcSet="/fotos/hero-wide.jpg" />
          <img
            src="/fotos/hero.jpg"
            alt=""
            width={945}
            height={1680}
            fetchPriority="high"
          />
        </picture>
      </div>
      <div className="hero-content">
        <p className="hero-kicker">
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            {SITE.instagramHandle}
          </a>
        </p>
        <h1>
          <Logo className="hero-logo" />
        </h1>
        <p className="hero-tagline">{SITE.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <p className="hero-meta">Palco · pizza · burger · Sezefredo, Canoas</p>
      </div>
    </section>
  );
}
