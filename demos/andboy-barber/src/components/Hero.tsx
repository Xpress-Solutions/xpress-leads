import { SITE } from "../data/site";
import { BarberPole, CrossedRazors } from "./Marks";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="/fotos/hero.jpg" alt="" />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">
          <BarberPole />
          Jardim Itu · Porto Alegre
        </p>
        <h1>
          <span className="hero-first">{SITE.headline}</span>
          <span className="hero-shop">{SITE.subhead}</span>
        </h1>
        <CrossedRazors className="hero-razors" />
        <p className="hero-phrase">{SITE.phrase}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.booksy} target="_blank" rel="noreferrer">
            Agendar no Booksy
          </a>
          <a className="btn btn-ghost" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Booksy
          <span>{SITE.reviewsCount} avaliações · Since {SITE.founded}</span>
        </div>
      </div>
      <div className="checker hero-checker" aria-hidden="true" />
    </section>
  );
}
