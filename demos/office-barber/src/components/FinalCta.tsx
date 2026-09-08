import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="agendar">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Horário marcado</p>
          <h2>Sua cadeira na Barão.</h2>
          <p style={{ maxWidth: "32rem", color: "rgba(242,237,227,0.82)" }}>
            Chama no WhatsApp ou reserva no Booksy. Maillon e Kauan, loja
            térreo, 9h às 20h.
          </p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Agendar no WhatsApp
            </a>
            <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
              Abrir Booksy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
