import { SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>senta no galpão.</h2>
          <p>
            Pergunta a torneira do mês, reserva a mesa da Ferrer ou pede as
            Bolinhas Crocantes do Mato.
          </p>
          <div className="final-actions">
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              whatsapp
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              ligar
            </a>
            <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
