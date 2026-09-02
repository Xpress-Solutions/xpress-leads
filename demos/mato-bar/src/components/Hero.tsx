import { SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/galpao.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">rio branco · porto alegre</p>
        <h1>{SITE.headline}</h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            whatsapp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
