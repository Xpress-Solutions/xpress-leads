import { Link } from "react-router-dom";
import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="/fotos/hero.jpg" alt="" />
      </div>
      <div className="wrap hero-content">
        <h1>{SITE.headline}</h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/cardapio">
            Ver cardápio
          </Link>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>{SITE.reviewsCount} avaliações</span>
        </div>
      </div>
    </section>
  );
}
