import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Mesa na calçada</p>
          <h2>Reserva n’A Virgem.</h2>
          <p className="lead" style={{ color: "rgba(242,240,232,0.82)" }}>
            {SITE.hoursLine}. WhatsApp ou ligação — o Linktree não ranqueia no Google.
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
