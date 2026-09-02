import { HOURS_NOTE, SITE, WEEKLY_HOURS, type Weekday } from "../data/site";

const DAYS: Weekday[] = [1, 2, 3, 4, 5, 6, 0];

function hoursNow() {
  const now = new Date();
  const weekday = now.getDay() as Weekday;
  const minutes = now.getHours() * 60 + now.getMinutes();
  const today = WEEKLY_HOURS[weekday];
  const open = today.hours !== null && minutes >= 17 * 60 + 30 && minutes < 24 * 60;
  return {
    weekday,
    label: today.label,
    headline: today.hours ?? "Fechado",
    open,
  };
}

export function Location() {
  const hours = hoursNow();

  return (
    <section className="section" id="localizacao">
      <div className="wrap">
        <p className="kicker">Onde</p>
        <h2 className="section-title">Olavo Bilac, 251.</h2>
        <p className="lead">
          {SITE.address.full}
          <br />
          CEP {SITE.address.cep}
        </p>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa d’A Virgem Bar na Olavo Bilac"
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
                    <span>{item.hours ?? "Fechado"}</span>
                  </li>
                );
              })}
            </ul>
            <p className="note">{HOURS_NOTE}</p>
            <div className="loc-actions">
              <a className="btn btn-brand" href={SITE.maps} target="_blank" rel="noreferrer">
                Google Maps
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
