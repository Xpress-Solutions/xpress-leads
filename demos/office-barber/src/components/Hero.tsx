import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="/fotos/fachada-maps.jpg" alt="" />
      </div>
      <div className="hero-atmosphere" aria-hidden="true" />

      <div className="hero-stage">
        <div className="hero-copy">
          <p className="kicker">Barão do Amazonas · 1173</p>
          <h1 className="hero-lockup">
            <span>Office</span>
            <span>Barber</span>
          </h1>
          <div className="hero-rule" />
          <p>{SITE.subheadline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Agendar no WhatsApp
            </a>
            <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
              Horário no Booksy
            </a>
          </div>
          <div className="hero-proof">
            ★ {SITE.rating} no Booksy
            <span>
              {SITE.reviewsCount} avaliações · {SITE.founded}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
