import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final wrap">
      <div className="final-box">
        <p className="section-kicker">Mesa na Zona Sul</p>
        <h2>Vem pro Barril.</h2>
        <p>
          Reserva, almoço ou a torneira da noite — manda no WhatsApp ou liga. A casa está na
          Wenceslau desde 2015.
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
    </section>
  );
}
