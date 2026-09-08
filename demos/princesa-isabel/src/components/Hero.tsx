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
      <div className="wrap hero-content">
        <span className="hero-stamp">Santana · desde {SITE.founded}</span>
        <h1>{SITE.headline}</h1>
        <p className="hero-legal">{SITE.name}</p>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#cardapio">
            Ver o espeto
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>{SITE.reviewsCount} avaliações · {SITE.address.nearby}</span>
        </div>
      </div>
    </section>
  );
}
