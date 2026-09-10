import { SITE, WEEKLY_HOURS, type Weekday } from "../data/site";
import { useHours } from "../hooks/useHours";
import { useReveal } from "../hooks/useReveal";

const DAYS = [1, 2, 3, 4, 5, 6, 0] as Weekday[];

export function Location() {
  const hours = useHours();
  const ref = useReveal();

  return (
    <section className="section" id="localizacao">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="kicker">Jardim Botânico</p>
          <h2 className="section-title">Onde fica.</h2>
          <p className="section-lead">
            {SITE.address.street}, {SITE.address.complement} — {SITE.address.cep}.
            A Barão do Amazonas é a via comercial do bairro.
          </p>
        </div>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa da Office Barber na Barão do Amazonas"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <div className="hours-now">
              <div>
                <strong>{hours.headline}</strong>
                <span className="hours-detail">
                  {hours.label} · {hours.detail}
                </span>
              </div>
              <span className={`pill ${hours.open ? "pill-on" : "pill-off"}`}>
                {hours.open ? "Aberto" : "Fechado"}
              </span>
            </div>
            <ul className="hours-list">
              {DAYS.map((day) => {
                const row = WEEKLY_HOURS[day];
                return (
                  <li key={day} className={hours.weekday === day ? "is-today" : undefined}>
                    <span>{row.label}</span>
                    <span>{row.slots ? row.slots[0].label : "Fechado"}</span>
                  </li>
                );
              })}
            </ul>
            <p className="hours-detail">{SITE.hoursNote}</p>
            <div className="loc-actions">
              <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
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
