import { SITE } from "../data/site";

export function Location() {
  return (
    <section className="section local" id="local">
      <div className="wrap">
        <p className="kicker">Onde estamos</p>
        <h2 className="section-title">Luiz Afonso, 247.</h2>
        <p className="section-lead">{SITE.address}</p>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa do Terreiro Bar Ancestral"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <p className="kicker">Horários</p>
            <ul className="hours-list">
              {SITE.hours.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <b>{row.value}</b>
                </li>
              ))}
            </ul>
            <p className="hours-note">{SITE.hoursNote}</p>
            <div className="hero-actions">
              <a className="btn btn-brand" href={SITE.maps} target="_blank" rel="noreferrer">
                Como chegar
              </a>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
