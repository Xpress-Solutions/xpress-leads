import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="reserva">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Saravá</p>
          <h2>Vem pro terreiro.</h2>
          <p>Mesa, reserva de aniversário ou só a dúvida da atração de sábado — chama no zap.</p>
          <div className="final-actions">
            <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              Ligar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
