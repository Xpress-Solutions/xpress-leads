import { HOURS_ROWS, SITE } from "../data/site.ts";

export function Local() {
  return (
    <section className="section" id="local">
      <div className="wrap local-grid">
        <div>
          <p className="kicker">Onde</p>
          <h2 className="section-title">Felizardo, 579 — sala 02.</h2>
          <p className="lead">
            {SITE.address}. Jardim Botânico, Porto Alegre. O concorrente da mesma rua não
            precisa ganhar o clique.
          </p>
          <ul className="hours">
            {HOURS_ROWS.map((row) => (
              <li key={row.day}>
                <span>{row.day}</span>
                <strong>{row.time}</strong>
              </li>
            ))}
          </ul>
          <p className="lead" style={{ marginTop: 16 }}>
            {SITE.hoursNote}
          </p>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <a className="btn btn-brand" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              Ligar
            </a>
          </div>
        </div>
        <div className="map-frame">
          <iframe title="Mapa da Barbearia Jardim Botânico na Felizardo" src={SITE.mapsEmbed} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
