import { SITE } from "../data/site";
import { SobradoArt } from "./SobradoArt";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-art">
        <SobradoArt />
      </div>
      <div className="hero-veil" />
      <div className="wrap hero-content">
        <p className="hero-script">{SITE.tagline}</p>
        <h1>{SITE.headline}</h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Reservar no WhatsApp
          </a>
          <a className="btn btn-ghost" href="#agenda">
            Ver agenda
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>{SITE.reviewsCount} avaliações</span>
          <span>desde {SITE.founded} · Auxiliadora</span>
        </div>
      </div>
    </section>
  );
}
