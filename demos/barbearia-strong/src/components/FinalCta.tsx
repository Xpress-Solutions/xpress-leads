import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <h2>Marca teu horário.</h2>
        <p>Chama no WhatsApp — é o recado da bio da Strong.</p>
        <div className="final-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp {SITE.phoneDisplay}
          </a>
          <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
            {SITE.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
