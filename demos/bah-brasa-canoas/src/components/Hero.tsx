import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/bolinho-do-brasa.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <h1>
          Bah <em>Brasa</em>
        </h1>
        <p className="hero-line">{SITE.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsappShare} target="_blank" rel="noreferrer">
            Chama no Zap
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <p className="hero-meta">São Luís · {SITE.hoursLabel}</p>
      </div>
    </section>
  );
}
