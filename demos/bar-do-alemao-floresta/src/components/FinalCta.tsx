import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="contato">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Vem no almoço</p>
          <h2>Mesa na Timóteo.</h2>
          <p className="section-lead">
            WhatsApp ou o telefone da casa. O bolinho da vovó e o horário de semana estão aqui.
          </p>
          <div className="final-actions">
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
