import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="reserva">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Mesa</p>
          <h2>Chama a galera.</h2>
          <p>
            Quarta a sábado, a partir das 19h. WhatsApp da casa: {SITE.phoneDisplay}.
          </p>
          <div className="final-actions">
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
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
