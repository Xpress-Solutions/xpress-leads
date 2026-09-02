import { SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker">Boa Vista</p>
          <h2>Vem pro casarão.</h2>
          <p>Torneiras, Croqueta Andina e o Cusco no tapete — terça a sábado, 17h30.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
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
