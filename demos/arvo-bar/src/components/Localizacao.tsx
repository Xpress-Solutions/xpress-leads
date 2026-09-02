import { HOURS_NOTE, SITE, WEEKLY_HOURS, type Weekday } from "../data/site";
import { getHoursNow } from "../lib/hours";

const DAYS: Weekday[] = [1, 2, 3, 4, 5, 6, 0];

export function Localizacao() {
  const hours = getHoursNow();

  return (
    <section className="section" id="localizacao">
      <div className="wrap">
        <p className="kicker">Onde</p>
        <h2 className="section-title">Fernando Machado, 1200.</h2>
        <p className="lead">
          {SITE.address.street}
          <br />
          {SITE.address.neighborhood} · {SITE.address.city} — {SITE.address.state}
          <br />
          {SITE.address.nearby}
        </p>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa do Arvo Bar no Centro Histórico"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <aside className="hours">
            <div className="hours-now">
              <div>
                <span className="kicker">Hoje · {hours.label}</span>
                <strong>{hours.headline}</strong>
                <span className="detail">{hours.detail}</span>
              </div>
              <span className={`pill ${hours.open ? "pill-on" : "pill-off"}`}>
                {hours.open ? "Aberto" : "Fechado"}
              </span>
            </div>
            <ul className="hours-list">
              {DAYS.map((day) => {
                const item = WEEKLY_HOURS[day];
                return (
                  <li key={day} className={hours.weekday === day ? "is-today" : undefined}>
                    <span>{item.label}</span>
                    <span>{item.slots?.map((s) => s.label).join(" · ") ?? "Fechado"}</span>
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
                Ligar
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
