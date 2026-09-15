import { HOURS_NOTE, SITE, WEEKLY_HOURS } from "../data/site";
import type { Weekday } from "../data/site";

const DAYS: Weekday[] = [0, 1, 2, 3, 4, 5, 6];

function todayIndex(): Weekday {
  return new Date().getDay() as Weekday;
}

export function Location() {
  const today = todayIndex();
  const todayHours = WEEKLY_HOURS[today];
  const open = Boolean(todayHours.hours);

  return (
    <section className="section location" id="localizacao">
      <div className="wrap">
        <p className="section-kicker">rio branco</p>
        <h2 className="section-title">francisco ferrer, 192.</h2>
        <p className="section-lead">
          {SITE.address.nearby}. Galpão coberto, pet friendly, reserva pelo Instagram
          ou WhatsApp.
        </p>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa do Mato Bar"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <div className="hours-now">
              <div>
                <strong>{open ? "aberto hoje" : "fechado hoje"}</strong>
                <span>{todayHours.hours ?? "volta quarta, 18h"}</span>
              </div>
              <span className={`pill ${open ? "pill-on" : "pill-off"}`}>
                {open ? "noite" : "folga"}
              </span>
            </div>
            <ul className="hours-list">
              {DAYS.map((day) => (
                <li key={day} className={day === today ? "is-today" : undefined}>
                  <span>{WEEKLY_HOURS[day].label}</span>
                  <span>{WEEKLY_HOURS[day].hours ?? "fechado"}</span>
                </li>
              ))}
            </ul>
            <p className="section-lead">{HOURS_NOTE}</p>
            <div className="loc-actions">
              <a className="btn btn-accent" href={SITE.maps} target="_blank" rel="noreferrer">
                como chegar
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
