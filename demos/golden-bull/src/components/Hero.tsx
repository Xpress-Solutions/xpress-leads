import { SITE } from "../data/site.ts";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-photo" aria-hidden="true">
        <img
          src={SITE.photoSrc}
          alt=""
        />
      </div>
      <div className="wrap hero-copy">
        <p className="kicker">Passo D’Areia · Porto Alegre</p>
        <h1>
          Golden
          <span>Bull</span>
        </h1>
        <p>{SITE.oneLiner}</p>
        <div className="hero-actions">
          <a className="btn btn-wa" href={SITE.maps} target="_blank" rel="noreferrer">
            WhatsApp / ligar
          </a>
          <a className="btn btn-gold" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <p className="hero-meta">{SITE.street} · {SITE.hours}</p>
      </div>
    </section>
  );
}
