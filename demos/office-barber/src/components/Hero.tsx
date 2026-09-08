import { SITE } from "../data/site";
import { Seal } from "./Seal";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-atmosphere" aria-hidden="true" />

      <div className="hero-stage">
        <div className="hero-copy">
          <p className="kicker">Barão do Amazonas · 1173</p>
          <h1 className="hero-lockup">
            <span>Office</span>
            <Seal className="hero-lockup-seal" />
            <span>Barber</span>
          </h1>
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
            <span>
              {SITE.reviewsCount} avaliações · {SITE.founded}
            </span>
          </div>
        </div>

        <figure className="hero-post">
          <div className="hero-post-plate">
            <div className="hero-post-shots">
              <img
                src="/fotos/maillon.jpeg"
                alt="Maillon Proença com a camiseta preta e o selo dourado Office Barber"
              />
              <img
                src="/fotos/kauan.jpeg"
                alt="Kauan Perez com a camiseta preta e o selo dourado Office Barber"
              />
            </div>
            <figcaption className="hero-post-legend">
              <div className="hero-post-stamp" aria-hidden="true">
                <Seal />
              </div>
              <span>EST. MMXXI</span>
              <i />
              <span>CUT AND SHAVE</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
