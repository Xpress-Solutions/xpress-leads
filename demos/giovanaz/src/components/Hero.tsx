import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/brasa.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <div className="hero-sign" aria-hidden="true">
          <span>Churrascaria</span>
          <strong>Giovanaz</strong>
        </div>
        <h1>
          Gio<em>vanaz</em>
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
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>{SITE.reviewsCount} avaliações</span>
          <span>{SITE.payment}</span>
        </div>
      </div>
    </section>
  );
}
