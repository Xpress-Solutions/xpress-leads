import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="ir">
      <div className="wrap">
        <div className="final-box">
          <p className="section-kicker">Cidade Baixa</p>
          <h2>Chega cedo. PIX na mão.</h2>
          <p style={{ maxWidth: "32rem", color: "rgba(243,238,228,.86)" }}>
            Terça a domingo. Segunda a casa descansa. Fila na porta, espeto na mesa.
          </p>
          <div className="final-actions">
            <a className="btn btn-accent" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
            </a>
            <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
