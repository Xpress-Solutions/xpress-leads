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
      <div className="wrap hero-content">
        <p className="hero-kicker">Petrópolis · Porto Alegre</p>
        <h1>{SITE.headline}</h1>
        <p className="hero-script">{SITE.subheadline}</p>
        <p>
          Buffet de almoço no casarão de 1950 da Av. Lageado. Comida campeira e
          caseira — o gostinho de feita por mãe e avó, agora no Petrópolis.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir / tirar dúvida
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
