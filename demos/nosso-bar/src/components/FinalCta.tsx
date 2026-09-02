import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>Vem pra Bento.</h2>
          <p>
            O pastel, o xis e o WhatsApp ficam na casa — não no guia do concurso.
          </p>
          <div className="hero-actions">
            <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
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
