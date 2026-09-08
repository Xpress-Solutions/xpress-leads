import { HOURS_ROWS, SITE } from "../data/site.ts";
import { useReveal } from "../hooks/useReveal.ts";

export function Local() {
  const ref = useReveal();

  return (
    <section className="section local" id="local">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="kicker">Como chegar</p>
          <h2 className="section-title">Rua Umbu, 715 loja 2.</h2>
          <p className="lead">
            Vila Ipiranga, Porto Alegre. CEP {SITE.cep}. Entra na loja 2 — a faixa verde com o
            bigode.
          </p>
        </div>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa da Pepeu Barber"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <div className="hours-now">
              <div>
                <span className="kicker">Horário</span>
                <strong>Booksy da casa</strong>
              </div>
            </div>
            <ul className="hours-list">
              {HOURS_ROWS.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <b>{row.time}</b>
                </li>
              ))}
            </ul>
            <p className="hours-note">{SITE.hoursNote}</p>
            <div className="loc-actions">
              <a className="btn btn-accent" href={SITE.maps} target="_blank" rel="noreferrer">
                Abrir no Maps
              </a>
              <a className="btn btn-ghost-ink" href={`tel:${SITE.phoneTel}`}>
                Ligar {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
