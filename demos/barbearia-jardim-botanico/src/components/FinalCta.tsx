import { SITE } from "../data/site.ts";

export function FinalCta() {
  return (
    <section className="section cta" id="agenda">
      <div className="wrap">
        <p className="kicker">Agenda</p>
        <h2 className="section-title">Marca no WhatsApp. Corta na Felizardo.</h2>
        <p className="lead">
          Sem site oficial até agora — só agregador. O horário da casa e o telefone já estão
          aqui.
        </p>
        <div className="cta-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp {SITE.phoneDisplay}
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar agora
          </a>
        </div>
      </div>
    </section>
  );
}
