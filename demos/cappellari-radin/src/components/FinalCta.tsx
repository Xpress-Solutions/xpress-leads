import { SITE } from "../data/site.ts";

export function FinalCta() {
  return (
    <section className="section final" id="orcamento">
      <div className="wrap">
        <p className="kicker">Pedido de visita</p>
        <h2 className="section-title">Mande a medida. A gente orça a pedra.</h2>
        <p className="section-lead">
          Bancada, escada, lareira ou lote de chapa. O site trabalha enquanto o pátio está
          fechado — o clique volta para a Cappellari, não para diretório de terceiro.
        </p>
        <div className="final-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp para orçamento
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
