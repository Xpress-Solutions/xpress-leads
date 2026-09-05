import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function FinalCta() {
  const ref = useReveal();

  return (
    <section className="final" id="agendar">
      <div className="wrap reveal" ref={ref}>
        <div className="final-box">
          <p className="section-kicker">Agenda</p>
          <h2>Marca o corte. A 107 é a casa.</h2>
          <p>
            Combos, Fabricio e WhatsApp no mesmo lugar. Booksy continua se quiser — a marca
            fica aqui.
          </p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
              Agenda Booksy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
