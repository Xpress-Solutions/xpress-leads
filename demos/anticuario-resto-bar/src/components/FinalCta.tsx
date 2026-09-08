import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>Bienvenidos.</h2>
          <p>Um pedaço do Uruguai na Lima e Silva. Chama a mesa e vem.</p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
