import { SITE } from "../data/site.ts";
import { Mustache } from "./Mustache.tsx";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="/fotos/fachada.jpeg" alt="" />
      </div>
      <div className="wrap hero-content">
        <p className="kicker light">
          Vila Ipiranga · Rua Umbu, 715 · {SITE.founded}
        </p>
        <h1>
          <span className="hero-script">{SITE.headline}</span>
        </h1>
        <Mustache className="hero-stache" />
        <p className="hero-line">{SITE.line}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Agendar no WhatsApp
          </a>
          <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
            Ver no Booksy
          </a>
        </div>
        <p className="hero-meta">
          ★ {SITE.rating} no Booksy
          <span>· {SITE.reviewsCount} avaliações</span>
        </p>
      </div>
    </section>
  );
}
