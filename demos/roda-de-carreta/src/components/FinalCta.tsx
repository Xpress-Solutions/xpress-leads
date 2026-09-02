import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="reserva">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Mesa no galpão</p>
          <h2>Reserva no WhatsApp. Fogo no espeto.</h2>
          <p>Quarenta anos de casa — o domínio antigo está morto, a roda não.</p>
          <div className="final-actions">
            <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-accent" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
