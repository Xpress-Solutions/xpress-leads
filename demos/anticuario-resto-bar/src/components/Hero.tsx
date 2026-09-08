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
      <div className="wrap hero-content">
        <p className="hero-kicker">Cidade Baixa · Lima e Silva, 985</p>
        <h1>
          {SITE.headline}
          <span className="hero-rest">{SITE.subhead}</span>
        </h1>
        <p>{SITE.phrase}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir mesa no WhatsApp
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google <span>· {SITE.reviewsCount} avaliações</span>
        </div>
      </div>
    </section>
  );
}
