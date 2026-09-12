import { SITE } from "../data/site.ts";

export function Patio() {
  return (
    <section className="section patio" id="patio">
      <div className="wrap">
        <p className="kicker">Venha ver a chapa</p>
        <h2 className="section-title">O pátio na Ipiranga.</h2>
        <p className="section-lead">
          Quem pesquisa mármore em Porto Alegre precisa achar o catálogo desta casa — e o
          caminho até o térreo. Fácil acesso na avenida; o orçamento começa no WhatsApp ou
          no telefone do balcão.
        </p>
        <div className="patio-grid">
          <div className="patio-card">
            <p className="kicker">Endereço</p>
            <address>
              {SITE.address.street}
              <br />
              {SITE.address.neighborhood} · {SITE.address.city}/{SITE.address.state}
              <br />
              CEP {SITE.address.cep}
            </address>
            <p>{SITE.hours}</p>
            <p>
              {SITE.phoneDisplay}
              <br />
              CNPJ {SITE.cnpj}
            </p>
            <div className="hero-actions">
              <a className="btn btn-brand" href={SITE.maps} target="_blank" rel="noreferrer">
                Como chegar
              </a>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                Ligar
              </a>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              title="Mapa da Marmoraria Cappellari e Radin na Avenida Ipiranga"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
