import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/fachada.jpg"
          alt=""
        />
      </div>
      <div className="hero-number" aria-hidden="true">
        1359
      </div>
      <div className="wrap hero-content">
        <span className="hero-kicker">São Geraldo · Porto Alegre</span>
        <h1>{SITE.headline}</h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>{SITE.reviewsCount} avaliações · desde {SITE.founded}</span>
        </div>
      </div>
    </section>
  );
}
