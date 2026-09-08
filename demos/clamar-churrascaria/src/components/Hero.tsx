import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/fachada.png"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-pin">Avenida da Azenha · Porto Alegre</p>
        <h1>
          {SITE.headline}
          <span>Churrascaria</span>
        </h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
