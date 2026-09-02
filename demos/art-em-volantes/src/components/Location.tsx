import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Location() {
  const ref = useReveal();

  return (
    <section className="section location" id="localizacao">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Onde estamos</p>
        <h2 className="section-title">Barão do Amazonas, 1475.</h2>
        <p className="section-lead">
          {SITE.address.neighborhood} · {SITE.address.city} - {SITE.address.state}
          <br />
          CEP {SITE.address.cep}
        </p>

        <div className="loc-grid">
          <div className="loc-map">
            <iframe
              title="Mapa da Art em Volantes no Jardim Botânico"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <aside className="hours">
            <p className="section-kicker">Atendimento</p>
            <strong>No ateliê da Barão</strong>
            <p className="hours-note">{SITE.hoursNote}</p>
            <p>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              <br />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
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
