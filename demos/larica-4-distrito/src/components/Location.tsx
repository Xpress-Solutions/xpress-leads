import { useMemo } from "react";
import { DAYS, HOURS_NOTE, SITE, WEEKLY_HOURS, type Weekday } from "../data/site";

export function Location() {
  const today = useMemo(() => new Date().getDay() as Weekday, []);
  const todayHours = WEEKLY_HOURS[today];
  const open = Boolean(todayHours.hours);

  return (
    <section className="section" id="localizacao">
      <div className="wrap">
        <p className="kicker">Onde cair</p>
        <h2 className="section-title">Santos Dumont, 710.</h2>
        <p className="lead">{SITE.address.nearby}.</p>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa da Larica 4º Distrito"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <div className="hours-now">
              <div>
                <span className="kicker">Hoje</span>
                <strong>{open ? todayHours.hours : "Fechado"}</strong>
              </div>
              <span className={`pill ${open ? "pill-on" : "pill-off"}`}>
                {open ? "Aberto" : "Fechado"}
              </span>
            </div>
            <ul className="hours-list">
              {DAYS.map((day) => {
                const row = WEEKLY_HOURS[day];
                return (
                  <li key={row.label} className={day === today ? "is-today" : undefined}>
                    <span>{row.label}</span>
                    <span>{row.hours ?? "Fechado"}</span>
                  </li>
                );
              })}
            </ul>
            <p className="hours-note">{HOURS_NOTE}</p>
            <div className="loc-actions">
              <a className="btn btn-accent" href={SITE.maps} target="_blank" rel="noreferrer">
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
