import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <p className="hero-script">a esquina da música brasileira</p>
          <h2>Reserva no WhatsApp. Palco no sobrado.</h2>
          <p>A casa é pequena. O sábado de feijoada some. Chama antes de sair.</p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Reservar mesa
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
