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
      <div className="wrap hero-copy">
        <p className="kicker">Ipanema · orla do Guaíba</p>
        <h1>{SITE.name}</h1>
        <p className="hero-line">{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-accent" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
