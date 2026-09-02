import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="contato">
      <div className="wrap">
        <div className="final-box">
          <h2>Marca o jogo. Pede o Farroupilha.</h2>
          <p className="lead" style={{ color: "rgba(244,241,232,0.86)" }}>
            WhatsApp da casa: {SITE.phoneDisplay}. Canoas, Marechal Rondon.
          </p>
          <div className="final-actions">
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              Ligar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
