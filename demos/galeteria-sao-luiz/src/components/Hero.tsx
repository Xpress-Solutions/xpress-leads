import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="/fotos/fachada.jpg" alt="" />
      </div>
      <div className="wrap hero-content">
        <div className="hero-stamp">
          Desde
          <br />
          {SITE.founded}
        </div>
        <h1>
          Galeteria
          <br />
          <span>São Luiz</span>
        </h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
          <a className="btn btn-ghost is-light" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>
            {SITE.reviewsCount} avaliações · {SITE.priceRange}
          </span>
        </div>
      </div>
    </section>
  );
}
