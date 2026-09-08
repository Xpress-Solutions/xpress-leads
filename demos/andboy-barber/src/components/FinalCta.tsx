import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker">Cadeira</p>
          <h2>Marca com o Andboy.</h2>
          <p>Booksy ou WhatsApp. A casa é uma, o horário é dele.</p>
          <div className="final-actions">
            <a className="btn btn-accent" href={SITE.booksy} target="_blank" rel="noreferrer">
              Agendar no Booksy
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
