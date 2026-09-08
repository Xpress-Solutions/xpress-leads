import { SITE } from "../data/site.ts";
import { MediaImg } from "./MediaImg.tsx";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <MediaImg
          src="/fotos/hero.jpg"
          alt=""
          width={2000}
          height={1332}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="wrap hero-content">
        <h1>{SITE.headline}</h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar
          </a>
        </div>
        <p className="hero-meta">
          {SITE.address.street} — {SITE.address.neighborhood}
        </p>
      </div>
    </section>
  );
}
