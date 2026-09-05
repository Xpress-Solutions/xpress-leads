import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="pedir">
      <div className="wrap">
        <div className="final-box">
          <h2>
            <span>BAH!</span>
            <br />
            Manda no zap.
          </h2>
          <p>{SITE.pitch}</p>
          <div className="hero-actions" style={{ marginTop: 16 }}>
            <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Pedir no WhatsApp
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
