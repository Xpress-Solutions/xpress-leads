import { SITE } from "../data/site.ts";

export function Local() {
  return (
    <section className="section local" id="local">
      <div className="wrap">
        <p className="kicker">Onde cair</p>
        <h2 className="display" style={{ fontSize: "clamp(2.8rem, 8vw, 5rem)" }}>
          mariante, 587
        </h2>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa do Pito Bar na Rua Mariante"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <strong>horário</strong>
            <p>{SITE.hours}</p>
            <p>{SITE.hoursDetail}</p>
            <ul className="hours-list">
              <li>Segunda a domingo — horários variados</li>
              <li>Noite a partir das 18h (confirmar no dia)</li>
              <li>
                {SITE.address.street} — {SITE.address.neighborhood}
              </li>
              <li>{SITE.address.corner}</li>
            </ul>
            <div className="loc-actions">
              <a className="btn btn-accent" href={SITE.maps} target="_blank" rel="noreferrer">
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
