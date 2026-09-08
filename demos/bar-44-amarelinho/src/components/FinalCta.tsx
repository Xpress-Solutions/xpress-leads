import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>Vem na casa amarela.</h2>
          <p>Assis Brasil, 171 — almoço, jantar e o 44 na parede.</p>
          <div className="final-actions">
            <a className="btn btn-on-dark" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost-on-dark" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
