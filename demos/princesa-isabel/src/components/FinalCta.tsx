import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>Chega cedo. A fila é o cardápio.</h2>
          <p>Espeto corrido na esquina — dinheiro ou PIX na mão.</p>
          <div className="final-actions">
            <a className="btn btn-primary" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
            </a>
            <a className="btn btn-ghost" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
