import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <p className="hero-script">{SITE.tagline}</p>
          <h2>Marca a navalha.</h2>
          <p>
            Hora marcada com o Richard. Sem fila, sem recepção de shopping — a casa na
            Prazeres, 145.
          </p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.booksy} target="_blank" rel="noreferrer">
              Agendar no Booksy
            </a>
            <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
              Instagram {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
