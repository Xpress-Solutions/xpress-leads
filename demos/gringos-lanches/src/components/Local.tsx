import { HOURS, SITE } from "../data/site";

export function Local() {
  return (
    <section className="section local" id="onde">
      <div className="wrap local-grid">
        <div>
          <p className="section-kicker">Onde</p>
          <h2 className="section-title">Av. Ceará, 823</h2>
          <p className="section-lead">
            São João, Porto Alegre — perto do Viaduto José Eduardo Utzig.
            Lanchonete de avenida, mesas na calçada.
          </p>
          <div className="local-photo">
            <img
              src="/fotos/fachada.jpg"
              alt="Fachada e alaminuta da Gringo’s Lanches na Av. Ceará."
            />
          </div>
          <p>
            <strong>{SITE.hoursLead}</strong>
            <br />
            Horários em listagens públicas:
          </p>
          <ul className="hours">
            {HOURS.map((row) => (
              <li key={row.day}>
                <span>{row.day}</span>
                <span>{row.hours}</span>
              </li>
            ))}
          </ul>
          <a className="btn btn-ghost-ink" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="Mapa da Gringo’s Lanches"
            src={SITE.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
