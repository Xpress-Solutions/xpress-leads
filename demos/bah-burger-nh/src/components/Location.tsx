import { SITE, WEEKLY_HOURS } from "../data/site";
import { useHours } from "../hooks/useHours";
import { useReveal } from "../hooks/useReveal";

export function Location() {
  const hours = useHours();
  const ref = useReveal();

  return (
    <section className="section" id="local">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="kicker">Onde</p>
          <h2 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
            Rua China, 14.
          </h2>
          <p className="lead">
            Novo Hamburgo · {SITE.address.neighborhood}. Entrega e retirada. Liga ou manda um
            WhatsApp no {SITE.phoneDisplay}.
          </p>
        </div>
        <div className="local-grid">
          <div className="local-map">
            <iframe
              title="Mapa da BAH! BURGER na Rua China, 14"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <div className="hours-now">
              <div>
                <strong>{hours.headline}</strong>
                <span className="hours-detail">{hours.detail}</span>
              </div>
              <span className={`pill ${hours.open ? "pill-on" : "pill-off"}`}>
                {hours.open ? "Na brasa" : hours.label}
              </span>
            </div>
            <ul className="hours-list">
              {([0, 1, 2, 3, 4, 5, 6] as const).map((key) => {
                const day = WEEKLY_HOURS[key];
                return (
                  <li key={day.short} className={hours.weekday === key ? "is-today" : undefined}>
                    <span>{day.label}</span>
                    <span>{day.slots ? day.slots[0].label : "Fechado"}</span>
                  </li>
                );
              })}
            </ul>
            <div className="local-actions">
              <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
                Como chegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
