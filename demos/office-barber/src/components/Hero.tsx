import { SITE } from "../data/site";
import { Seal } from "./Seal";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/hero.jpeg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <Seal className="hero-seal" />
        <p className="kicker">Barão do Amazonas · 1173</p>
        <h1>{SITE.headline}</h1>
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
          <span>{SITE.reviewsCount} avaliações · {SITE.founded}</span>
        </div>
      </div>
    </section>
  );
}
