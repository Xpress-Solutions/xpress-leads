import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/xis-parmegiana.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">{SITE.neighborhood} · {SITE.city}</p>
        <h1>{SITE.name}</h1>
        <p className="hero-line">{SITE.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <p className="hero-meta">{SITE.hoursShort} · Av. Bento Gonçalves, 1979</p>
      </div>
    </section>
  );
}
