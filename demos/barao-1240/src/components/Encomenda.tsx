import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Encomenda() {
  const ref = useReveal();

  return (
    <section className="section encomenda" id="encomenda">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Encomenda</p>
        <h2 className="section-title">Kit café e festa de aniversário.</h2>
        <p className="section-lead">
          O Instagram não fecha esse ciclo. Manda no WhatsApp o dia, a quantidade e se é kit café
          ou aniversário — a casa responde no número que já é o da porta.
        </p>
        <div className="encomenda-actions">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Encomendar no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
