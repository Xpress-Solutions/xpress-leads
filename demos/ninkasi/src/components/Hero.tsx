import { SITE } from "../data/site";
import { HopVine } from "./HopVine";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/hero.jpg"
          alt=""
        />
      </div>
      <HopVine className="hero-vine left" />
      <HopVine className="hero-vine right" />
      <div className="wrap hero-content">
        <p className="kicker">{SITE.kicker}</p>
        <h1>{SITE.headline}</h1>
        <p>{SITE.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
