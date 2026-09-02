import { HOURS_NOTE, SITE, WEEKLY_HOURS, type Weekday } from "../data/site";
import { useHours } from "../hooks/useHours";

const DAYS: Weekday[] = [1, 2, 3, 4, 5, 6, 0];

export function Location() {
  const hours = useHours();

  return (
    <section className="section" id="localizacao">
      <div className="wrap">
        <p className="kicker">Onde estamos</p>
        <h2 className="section-title">Ipiranga, 5300. No 35 CTG.</h2>
        <p className="section-lead">
          {SITE.address.street}
          <br />
          {SITE.address.neighborhood} · {SITE.address.city} - {SITE.address.state}
          <br />
          CEP {SITE.address.cep}
        </p>
        <p className="section-lead" style={{ marginTop: 8 }}>
          {SITE.address.nearby}
        </p>

        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa da Churrascaria Roda de Carreta no Jardim Botânico"
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
                <span>{hours.detail}</span>
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
                    <span>{item.slots?.map((s) => s.label).join(" · ")}</span>
                  </li>
                );
              })}
            </ul>
            <p className="price-note">{HOURS_NOTE}</p>
            <div className="loc-actions">
              <a className="btn btn-brand" href={SITE.maps} target="_blank" rel="noreferrer">
                Abrir no Maps
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
