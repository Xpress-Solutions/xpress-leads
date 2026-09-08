import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="agendar">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker">Agenda</p>
          <h2>Senta na cadeira do Tiago.</h2>
          <p>
            WhatsApp {SITE.phoneDisplay} ou Booksy — a Gentlemen&apos;s não trabalha com fila de
            recepção. Uma cadeira, um horário.
          </p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Agendar no WhatsApp
            </a>
            <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
              Booksy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
