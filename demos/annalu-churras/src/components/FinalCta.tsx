import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="contato">
      <div className="wrap">
        <div className="final-box">
          <p className="kicker">Fecha a busca do bairro</p>
          <h2>Vem de noite. Pede o espeto.</h2>
          <p className="lead" style={{ color: "rgba(244,230,212,.82)" }}>
            WhatsApp ou ligação — o Jardim Itu ainda não tinha página da casa.
          </p>
          <div className="final-actions">
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
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
