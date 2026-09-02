import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="contato">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Chama o Barba</p>
          <h2>Mesa no Salso.</h2>
          <p className="lead" style={{ color: "rgba(246,232,200,0.78)" }}>
            WhatsApp ou ligação — o mesmo número da ficha do Comida di Buteco.
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
