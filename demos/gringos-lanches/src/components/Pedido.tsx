import { SITE, WA_DEFAULT } from "../data/site";

export function Pedido() {
  return (
    <section className="section pedido" id="pedido">
      <div className="wrap">
        <p className="section-kicker">Pedido</p>
        <h2 className="section-title">Manda no WhatsApp.</h2>
        <p className="section-lead">{SITE.pitch}</p>
        <div className="pedido-box">
          <div>
            <h3>Retirar ou pedir</h3>
            <p>
              Lanchonete de fluxo: escolhe o xis, a alaminuta ou o Tesouro e
              chama. Sem app, sem fila de site — o pedido cai no telefone da casa.
            </p>
            <ul>
              <li>Tesouro de Molho · Comida di Buteco 2026</li>
              <li>Xis da Ceará · mostarda forte</li>
              <li>Alaminuta · almoço rápido</li>
            </ul>
            <a className="btn btn-primary" href={WA_DEFAULT} target="_blank" rel="noreferrer">
              Abrir WhatsApp
            </a>
          </div>
          <div>
            <h3>Ou liga</h3>
            <p className="pedido-phone">
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </p>
            <p>
              {SITE.address}
              <br />
              {SITE.hoursLead}
            </p>
            <p>
              Instagram{" "}
              <a href={SITE.instagram} target="_blank" rel="noreferrer">
                {SITE.instagramHandle}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
