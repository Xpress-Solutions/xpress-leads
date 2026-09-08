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
      <div className="hero-grid" aria-hidden="true" />
      <div className="wrap hero-content">
        <p className="hero-kicker">Rio Branco · Porto Alegre</p>
        <h1>
          <span className="hero-sign">{SITE.headline}</span>
        </h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#cardapio">
            Ver o bolinho
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>{SITE.instagramHandle} · desde {SITE.founded}</span>
        </div>
      </div>
    </section>
  );
}
