import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const DAYS = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
] as const;

export function Location() {
  const ref = useReveal();

  return (
    <section className="section location" id="localizacao">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Como chegar</p>
        <h2 className="section-title">Ten-Caten, 112.</h2>
        <p className="section-lead">
          {SITE.address.street}
          <br />
          {SITE.address.neighborhood} · {SITE.address.city} - {SITE.address.state}
          <br />
          {SITE.address.nearby}
        </p>

        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa do Café de Garagem na Santa Rosa de Lima"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <aside className="hours">
            <p className="section-kicker">Expediente</p>
            <ul className="hours-list">
              {DAYS.map((day) => (
                <li key={day}>
                  <span>{day}</span>
                  <span>Horários variados</span>
                </li>
              ))}
            </ul>
            <p className="coxinha-note" style={{ color: "var(--muted)" }}>
              {SITE.hoursNote}
            </p>
            <div className="loc-actions">
              <a className="btn btn-primary" href={SITE.maps} target="_blank" rel="noreferrer">
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
