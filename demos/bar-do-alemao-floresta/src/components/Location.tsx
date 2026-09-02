import { SITE, WEEKLY_HOURS } from "../data/site";

export function Location() {
  return (
    <section className="section location" id="local">
      <div className="wrap">
        <p className="kicker">Onde fica</p>
        <h2 className="section-title">Dr. Timóteo, 201.</h2>
        <p className="section-lead">{SITE.address}</p>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa do Bar do Alemão na Floresta"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <p className="kicker">Horário</p>
            <ul className="hours-list">
              {WEEKLY_HOURS.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
            <p className="hours-note">{SITE.hoursNote}</p>
            <div className="hero-actions">
              <a className="btn btn-accent" href={SITE.maps} target="_blank" rel="noreferrer">
                Como chegar
              </a>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                Ligar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
