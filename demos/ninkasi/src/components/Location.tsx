import { HOURS, SITE } from "../data/site";

export function Location() {
  return (
    <section className="section local" id="local">
      <div className="wrap">
        <p className="kicker">Onde</p>
        <h2 className="display" style={{ fontSize: "clamp(2.2rem, 6vw, 3.6rem)" }}>
          João Alfredo, 557.
        </h2>
        <p className="lead">
          Cidade Baixa, Porto Alegre. {SITE.hoursLead}. {SITE.hoursNote}
        </p>
        <div className="local-grid">
          <div className="local-map">
            <iframe
              title="Mapa do Ninkasi Bar"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <p className="kicker">Horários</p>
            <ul className="hours-list">
              {HOURS.map((row) => (
                <li key={row.day} className={row.value === "Fechado" ? "is-closed" : undefined}>
                  <span>{row.day}</span>
                  <b>{row.value}</b>
                </li>
              ))}
            </ul>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
                Abrir no Maps
              </a>
              <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
                {SITE.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
