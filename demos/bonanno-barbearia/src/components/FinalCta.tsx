import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="agendar">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker">Sua vez na cadeira</p>
          <h2>Manda no WhatsApp e escolhe o barbeiro.</h2>
          <p>
            Dúvidas no {SITE.phoneDisplay}. Agenda pelo zap ou pelo Booksy — a casa é a mesma.
          </p>
          <div className="final-actions">
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
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
