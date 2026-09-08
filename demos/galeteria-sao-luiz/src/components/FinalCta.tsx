import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>Vem almoçar na São Luiz.</h2>
          <p>Galeto, grelha e o bufê do meio-dia. Santana, desde 1988.</p>
          <div className="final-actions">
            <a className="btn btn-accent" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
            </a>
            <a className="btn btn-ghost is-light" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
