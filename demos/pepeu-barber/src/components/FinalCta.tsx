import { SITE } from "../data/site.ts";

export function FinalCta() {
  return (
    <section className="final" id="agendar">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker light">Agenda</p>
          <h2>Marca com o Pepeu.</h2>
          <p>
            WhatsApp ou Booksy. A cadeira é na Umbu 715, loja 2 — Vila Ipiranga.
          </p>
          <div className="final-actions">
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
              Instagram {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
