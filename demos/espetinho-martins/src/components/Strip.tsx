import { SITE } from "../data/site";

export function Strip() {
  return (
    <section className="strip" aria-label="Informações rápidas">
      <div className="wrap">
        <div className="strip-grid">
          <div className="strip-item">
            <b>Vila Jardim</b>
            <span>Zona leste · POA</span>
          </div>
          <div className="strip-item">
            <b>18h – 0h</b>
            <span>Segunda a sábado</span>
          </div>
          <div className="strip-item">
            <b>Kachurrasco</b>
            <span>Comida di Buteco 2026</span>
          </div>
          <div className="strip-item">
            <b>{SITE.phoneDisplay}</b>
            <span>WhatsApp da casa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
