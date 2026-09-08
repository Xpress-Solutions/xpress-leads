import { HOURS, SITE } from "../data/site";

export function Location() {
  return (
    <section className="section" id="localizacao">
      <div className="wrap">
        <p className="section-kicker">Onde estamos</p>
        <h2 className="section-title">Bento Gonçalves, 1979.</h2>
        <p className="section-lead">
          {SITE.address}
          <br />
          {SITE.nearby}
        </p>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa do Nosso Bar no Partenon"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <aside className="hours">
            <p className="section-kicker">Horário</p>
            <strong>Abre às 17h. Fecha quando a avenida esvazia.</strong>
            <ul className="hours-list">
              {HOURS.map((row) => (
                <li key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.slot}</span>
                </li>
              ))}
            </ul>
            <p className="section-lead" style={{ fontSize: "0.85rem" }}>
              {SITE.hoursNote}
            </p>
            <div className="loc-actions">
              <a className="btn btn-accent" href={SITE.maps} target="_blank" rel="noreferrer">
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
