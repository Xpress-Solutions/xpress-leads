import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/spin-bacon.jpg"
          alt=""
        />
        <div className="hero-road" />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">Restinga · Extremo Sul · Porto Alegre</p>
        <h1>{SITE.headline}</h1>
        <p className="hero-line">{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <p className="hero-meta">
          {SITE.hoursLabel} · Av. Nilo Wulff, 902
        </p>
      </div>
    </section>
  );
}
