import { SITE } from "../data/site";
import { Logo } from "./Logo";

export function FinalCta() {
  return (
    <section className="final" id="contato">
      <div className="wrap">
        <div className="final-box">
          <div className="final-plate">
            <Logo variant="stack" />
          </div>
          <p className="hero-kicker">Vem almoçar</p>
          <h2>Sobe a escada do 1265.</h2>
          <p>
            Casarão verde, porta azul, buffet no parquet. Liga ou manda um
            WhatsApp se quiser saber o que tem hoje.
          </p>
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
