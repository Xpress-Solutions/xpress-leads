import { SITE } from "../data/site";
import { HeroAtmosphere } from "./HeroAtmosphere";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <HeroAtmosphere />
      <div className="wrap hero-content">
        <p className="hero-meta">
          <span>Felizardo, 336</span>
          <span>Jardim Botânico · Porto Alegre</span>
          <span>{SITE.founded}</span>
        </p>
        <h1>{SITE.headline}</h1>
        <p className="hero-line">{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
          <a className="btn btn-ghost" href="#chegar">
            Horários
          </a>
        </div>
      </div>
    </section>
  );
}
