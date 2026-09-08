import { SITE } from "../data/site.ts";

export function Cta() {
  return (
    <section className="cta" id="contato">
      <div className="wrap">
        <div className="cta-box">
          <h2>vem pra esquina.</h2>
          <p>Pagode, tábua campeira e o WhatsApp da casa.</p>
          <div className="cta-actions">
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
