import { SITE } from "../data/site";

export function Location() {
  return (
    <section className="section" id="local">
      <div className="wrap">
        <p className="kicker">Onde fica</p>
        <h2 className="section-title">Oito de Julho, 155.</h2>
        <p className="section-lead">
          {SITE.address.neighborhood} · {SITE.address.city} — {SITE.address.state}
          <br />
          CEP {SITE.address.cep}
        </p>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa da Oficina Mecânica Guime no Jardim Botânico"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <aside className="loc-aside">
            <strong>{SITE.address.street}</strong>
            <p>{SITE.address.nearby}</p>
            <p>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              <br />
              <a href={`tel:${SITE.phoneAltTel}`}>{SITE.phoneAltDisplay}</a>
            </p>
            <p>{SITE.hoursNote}</p>
            <div className="loc-actions">
              <a className="btn btn-brand" href={SITE.maps} target="_blank" rel="noreferrer">
                Abrir no Maps
              </a>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                Ligar
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
