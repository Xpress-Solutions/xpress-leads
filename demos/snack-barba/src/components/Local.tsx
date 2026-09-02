import { HOURS, SITE } from "../data/site";

export function Local() {
  return (
    <section className="section local" id="local">
      <div className="wrap">
        <p className="kicker">Onde fica</p>
        <h2 className="section-title">Ângelo Crivellaro, 540.</h2>
        <p className="lead">{SITE.address.full}.</p>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa do Snack Bar do Barba"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <p className="kicker">Horários</p>
            <ul className="hours-list">
              {HOURS.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <strong>{row.time}</strong>
                </li>
              ))}
            </ul>
            <p className="hours-note">{SITE.hoursNote}</p>
            <div className="hero-actions" style={{ marginTop: 16 }}>
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
