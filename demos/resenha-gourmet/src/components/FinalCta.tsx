import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker">A resenha é aqui</p>
          <h2>Marca a mesa na Av. do Forte.</h2>
          <p>
            Bolinho Resenha, almoço a partir das 11h e a noite até meia-noite.
            Chama no WhatsApp.
          </p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
