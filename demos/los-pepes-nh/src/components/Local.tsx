import { SITE, WEEKLY_HOURS } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Local() {
  const ref = useReveal();
  const days = [1, 2, 3, 4, 5, 6, 0] as const;

  return (
    <section className="section local" id="chegar">
      <div className="wrap local-grid reveal" ref={ref}>
        <div>
          <p className="section-kicker">Centro de NH</p>
          <h2 className="section-title">Leopoldo Wasun, 149.</h2>
          <p className="section-lead">{SITE.address.nearby}</p>
          <p className="local-addr">
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} · {SITE.address.city}/{SITE.address.state}
            <br />
            CEP {SITE.address.cep}
          </p>
          <ol className="hours-list">
            {days.map((day) => {
              const row = WEEKLY_HOURS[day];
              return (
                <li key={row.short}>
                  <span>{row.label}</span>
                  <span>{row.slots?.[0]?.label ?? "Fechado"}</span>
                </li>
              );
            })}
          </ol>
          <p className="hours-note">{SITE.hoursNote}</p>
          <div className="hero-actions">
            <a className="btn btn-accent" href={SITE.maps} target="_blank" rel="noreferrer">
              Abrir no mapa
            </a>
            <a className="btn btn-ghost-ink" href={SITE.instagram} target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
          </div>
        </div>
        <div className="local-map">
          <iframe
            title="Mapa da Los Pepes Barbearia"
            src={SITE.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
