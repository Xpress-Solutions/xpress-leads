import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Mesa na orla</p>
          <h2>Beladora</h2>
          <p className="hero-line">Espetinho, Guaíba e horário até 1h.</p>
          <div className="final-actions">
            <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
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
