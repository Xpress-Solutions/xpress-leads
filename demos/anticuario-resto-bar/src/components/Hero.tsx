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
        <p className="hero-place">{SITE.kicker}</p>
        <h1>{SITE.headline}</h1>
        <p className="hero-rest">{SITE.subhead}</p>
        <p>{SITE.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google <span>· {SITE.reviewsCount} avaliações</span>
        </div>
      </div>
    </section>
  );
}
