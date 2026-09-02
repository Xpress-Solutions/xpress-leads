import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker">A mesa é da casa</p>
          <h2>Marca o grupo. A Terra reserva.</h2>
          <p>Cortes, kids e pátio no Salso — sem depender do Instagram para fechar a data.</p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Reservar no WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
