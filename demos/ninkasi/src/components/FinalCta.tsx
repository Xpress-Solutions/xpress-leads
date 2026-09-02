import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="reserva">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Reserva</p>
          <h2>A deusa espera com o chope tirado.</h2>
          <p className="lead">
            WhatsApp {SITE.phoneDisplay}. Conta que veio pelo site.
          </p>
          <div className="final-actions">
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
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
