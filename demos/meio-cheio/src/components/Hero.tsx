import { SITE } from "../data/site";
import { Facade } from "./Facade";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-facade">
        <Facade />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">Venâncio Aires · Cidade Baixa</p>
        <h1>{SITE.headline}</h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.instagramDm} target="_blank" rel="noreferrer">
            Reservar no Instagram
          </a>
          <a className="btn btn-ghost is-light" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <div className="hero-proof">
          Em frente ao Bar do Beto · {SITE.followers} no Instagram · desde {SITE.founded}
        </div>
      </div>
    </section>
  );
}
