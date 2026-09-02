import { HOURS_NOTE, SITE, WEEKLY_HOURS, type Weekday } from "../data/site";
import { useHours } from "../hooks/useHours";
import { useReveal } from "../hooks/useReveal";

const DAYS: Weekday[] = [1, 2, 3, 4, 5, 6, 0];

export function Location() {
  const ref = useReveal();
  const hours = useHours();

  return (
    <section className="section location" id="localizacao">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Onde estamos</p>
        <h2 className="section-title">Rubem Berta, 1070.</h2>
        <p className="section-lead">
          {SITE.address.street}
          <br />
          {SITE.address.neighborhood}
          <br />
          {SITE.address.city} — {SITE.address.state}
        </p>

        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa do Point do Pastel no Rubem Berta"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <aside className="hours">
            <div>
              <span className="section-kicker">Hoje · {hours.label}</span>
              <strong>{hours.open ? "Aberto" : "Fechado"}</strong>
              <span className={hours.open ? "pill pill-on" : "pill pill-off"}>
                {hours.hours}
              </span>
            </div>
            <ul className="hours-list">
              {DAYS.map((day) => {
                const row = WEEKLY_HOURS[day];
                return (
                  <li key={day} className={day === hours.weekday ? "is-today" : undefined}>
                    <span>{row.label}</span>
                    <span>{row.slots?.[0]?.label ?? "Fechado"}</span>
                  </li>
                );
              })}
            </ul>
            <p className="note">{HOURS_NOTE}</p>
            <div className="loc-actions">
              <a className="btn btn-brand" href={SITE.maps} target="_blank" rel="noreferrer">
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
