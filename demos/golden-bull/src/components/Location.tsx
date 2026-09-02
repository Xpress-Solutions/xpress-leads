import { SITE, WEEK } from "../data/site.ts";

export function Location() {
  const today = new Date().getDay();
  const index = today === 0 ? 6 : today - 1;

  return (
    <section className="section place" id="na-cipo">
      <div className="wrap">
        <p className="kicker">Na Cipó</p>
        <h2 className="display" style={{ fontSize: "clamp(2.4rem, 7vw, 4.6rem)" }}>
          Rua Cipó, 1264
        </h2>
        <p className="lead" style={{ marginTop: 12 }}>
          {SITE.address}. CEP {SITE.cep}.
        </p>
        <div className="place-grid">
          <div className="hours">
            <p className="kicker">Horário</p>
            <strong className="display" style={{ fontSize: "2rem" }}>
              {SITE.hours}
            </strong>
            <p className="lead" style={{ marginTop: 8 }}>
              {SITE.hoursNote}
            </p>
            <ul>
              {WEEK.map((row, i) => (
                <li key={row.day} className={i === index ? "is-open-day" : undefined}>
                  <span>{row.day}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="map">
            <iframe
              title="Mapa do Golden Bull na Rua Cipó"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
