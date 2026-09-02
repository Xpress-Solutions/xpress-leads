import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function FinalCta() {
  const ref = useReveal();

  return (
    <section className="section final" id="pedir">
      <div className="wrap reveal" ref={ref}>
        <div className="final-box">
          <p className="section-kicker">Zona Norte</p>
          <h2>Vem no Point.</h2>
          <p className="section-lead">
            WhatsApp, ligação ou delivery. O Magnífico e os pastéis da casa
            saem da fritura no Rubem Berta.
          </p>
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
