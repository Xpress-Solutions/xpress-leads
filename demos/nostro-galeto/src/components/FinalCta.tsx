import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker">Reserva e delivery</p>
          <h2>Vem almoçar na Bahia.</h2>
          <p className="section-lead">
            Mesa no São Geraldo ou pedido no iFood. O galeto é o mesmo.
          </p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-brand" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
            <a className="btn btn-ghost" href={SITE.ifood} target="_blank" rel="noreferrer">
              Pedir no iFood
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
