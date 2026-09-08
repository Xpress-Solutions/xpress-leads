import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>Mesa no 1044.</h2>
          <p>Liga e pergunta o que tem hoje — a Clamar ainda não fala por site de terceiro.</p>
          <div className="final-actions">
            <a className="btn btn-accent" href={`tel:${SITE.phoneTel}`}>
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
