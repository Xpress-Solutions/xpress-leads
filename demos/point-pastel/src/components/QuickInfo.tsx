import { SITE } from "../data/site";

export function QuickInfo() {
  return (
    <section className="quick" aria-label="Informações rápidas">
      <div className="wrap">
        <div className="quick-grid">
          <div className="quick-item">
            <b>3º lugar RS</b>
            <span>Comida di Buteco 2023</span>
          </div>
          <div className="quick-item">
            <b>{SITE.hoursLabel}</b>
            <span>Segunda fechado</span>
          </div>
          <div className="quick-item">
            <b>{SITE.neighborhood}</b>
            <span>{SITE.address.nearby}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
