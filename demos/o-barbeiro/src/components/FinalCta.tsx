import { SITE } from "../data/site";

export function FinalCta() {
  return (
    <section className="final">
      <div className="wrap">
        <div className="final-box">
          <h2>A cadeira do Daniel fica no 336.</h2>
          <p>
            Sem WhatsApp público, sem Instagram local. Quem quer horário vem até a Felizardo —
            a casa da família, não o site de Florianópolis.
          </p>
          <div className="final-actions">
            <a className="btn btn-primary" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
            <a className="btn btn-ghost" href="#chegar">
              Ver horários
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
