import { HOURS_NOTE, SITE, WEEKLY_HOURS } from "../data/site";
import { useHours } from "../hooks/useHours";

export function Local() {
  const status = useHours();
  const days = [1, 2, 3, 4, 5, 6, 0] as const;

  return (
    <section className="section local" id="local">
      <div className="wrap">
        <p className="kicker">Onde</p>
        <h2 className="section-title">Victor Barreto, 3588.</h2>
        <p className="section-lead">
          {SITE.address.extra}. Centro de Canoas — pub de avenida, não de
          bairro escondido.
        </p>
        <div className="local-grid">
          <div className="local-map">
            <iframe
              title="Mapa da Pinhos Botecaria Pub"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <div className="hours-now">
              <div>
                <strong>{status.headline}</strong>
                <span>{status.detail}</span>
              </div>
              <span className={status.open ? "pill pill-on" : "pill pill-off"}>
                {status.open ? "Aberto" : "Fechado"}
              </span>
            </div>
            <ul className="hours-list">
              {days.map((d) => {
                const day = WEEKLY_HOURS[d];
                return (
                  <li key={day.label} className={d === status.weekday ? "is-today" : undefined}>
                    <span>{day.label}</span>
                    <span>{day.slots?.[0]?.label ?? "Fechado"}</span>
                  </li>
                );
              })}
            </ul>
            <p className="demo-note">{HOURS_NOTE}</p>
            <div className="local-actions">
              <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                Reservar
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
