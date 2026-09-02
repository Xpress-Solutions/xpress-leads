import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final" id="pedir">
      <div className="wrap">
        <div className="final-box">
          <h2>Pede direto. Sem a taxa da plataforma.</h2>
          <p>
            O iFood continua para quem descobre. O site é para quem já conhece o Niramaki e quer
            voltar pela Barão.
          </p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-call" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
