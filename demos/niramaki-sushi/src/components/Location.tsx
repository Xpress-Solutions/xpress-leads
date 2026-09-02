import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const DAYS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"] as const;

export function Location() {
  const ref = useReveal();

  return (
    <section className="section location" id="localizacao">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Jardim Botânico</p>
          <h2 className="section-title">Barão do Amazonas, 1145.</h2>
          <p className="section-lead">
            {SITE.address.neighborhood}, {SITE.address.city} · CEP {SITE.address.cep}
          </p>
        </div>
        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa do Niramaki Sushi"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="hours">
            <div className="hours-now">
              <strong>18h – 2h</strong>
              <span>Todos os dias</span>
            </div>
            <ul className="hours-list">
              {DAYS.map((day) => (
                <li key={day}>
                  <span>{day}</span>
                  <span>18h – 2h</span>
                </li>
              ))}
            </ul>
            <div className="loc-actions">
              <a className="btn btn-primary" href={SITE.maps} target="_blank" rel="noreferrer">
                Como chegar
              </a>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                Ligar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
