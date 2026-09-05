import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Location() {
  const ref = useReveal();

  return (
    <section className="section" id="localizacao">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">Onde acender a brasa</p>
        <h2 className="title">Elmo Lenz, 1480.</h2>
        <p className="lead">
          {SITE.address}
          <br />
          CEP {SITE.zip} · {SITE.hoursLabel}
        </p>

        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa do Bar e Bar na Rua Elmo Lenz, Gravataí"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <aside className="hours">
            <div className="hours-now">
              <div>
                <span className="kicker">Expediente</span>
                <strong>Almoço</strong>
                <span className="hours-detail">a partir das 11h</span>
              </div>
              <span className="pill pill-off">Confirmar</span>
            </div>
            <ul className="hours-list">
              <li>
                <span>Abertura evidenciada</span>
                <span>11h</span>
              </li>
              <li>
                <span>Fechamento</span>
                <span>no balcão</span>
              </li>
              <li>
                <span>Domingo</span>
                <span>confirmar</span>
              </li>
            </ul>
            <p className="lead hours-note">
              Restaurant Guru registra “abre às 11:00”. O lead pede confirmação no Google ou
              no balcão — o site não inventa o resto da grade.
            </p>
            <div className="loc-actions">
              <a className="btn btn-accent" href={SITE.maps} target="_blank" rel="noreferrer">
                Abrir no Maps
              </a>
              <a className="btn btn-ghost" href={SITE.reserveHref}>
                Ligar
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
