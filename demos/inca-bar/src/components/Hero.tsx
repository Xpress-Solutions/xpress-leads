import { SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

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
        <img className="hero-mark" src="/logo.svg" alt="" width={88} height={88} />
        <p className="hero-kicker">Boa Vista · Porto Alegre</p>
        <h1>{SITE.headline}</h1>
        <p className="hero-line">{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="brand-bar" aria-hidden="true" />
    </section>
  );
}
