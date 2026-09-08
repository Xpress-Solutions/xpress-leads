import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker">Agenda</p>
          <h2>Marca o horário. A Bento espera.</h2>
          <p>Corte, barba ou o combo de R$ 80. Escolhe o barbeiro pelo nome.</p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.booksy} target="_blank" rel="noreferrer">
              Agendar no Booksy
            </a>
            <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
