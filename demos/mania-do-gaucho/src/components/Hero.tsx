import { SITE } from "../data/site";
import { useHours } from "../hooks/useHours";

export function Hero() {
  const hours = useHours();

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
          <span className="script">{SITE.kicker}</span>
          <span className="gold">{SITE.since}</span>
          <span>Felizardo · Jardim Botânico</span>
        </p>
        <h1>{SITE.headline}</h1>
        <p className="hero-line">{SITE.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <p className="hero-open">
          <span className={`dot ${hours.open ? "is-on" : ""}`} />
          {hours.headline} · {hours.label} {hours.detail}
        </p>
      </div>
    </section>
  );
}
