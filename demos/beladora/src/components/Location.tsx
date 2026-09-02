import { HOURS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Location() {
  const ref = useReveal();

  return (
    <section className="section" id="localizacao">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">Onde estamos</p>
        <h2 className="section-title">Av. Guaíba, 10748.</h2>
        <p className="lead">
          {SITE.address.full}
          <br />
          CEP {SITE.address.cep}
        </p>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa da Beladora na Av. Guaíba, Ipanema"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <aside className="hours">
            <p className="kicker">Horários</p>
            <ul className="hours-list">
              {HOURS.map((item) => (
                <li key={item.day} className={item.value === "Fechado" ? "is-off" : undefined}>
                  <span>{item.day}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
            <p className="lead">{SITE.hoursNote}</p>
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
