import { SITE } from "../data/site";

export function Strip() {
  return (
    <section className="strip" aria-label="Informações rápidas">
      <div className="wrap strip-grid">
        <div className="strip-item">
          <b>Jardim Itu</b>
          <span>Zona Norte · POA</span>
        </div>
        <div className="strip-item">
          <b>18h – 23h</b>
          <span>Segunda a sábado</span>
        </div>
        <div className="strip-item">
          <b>Poro e Brasa</b>
          <span>Comida di Buteco 2026</span>
        </div>
        <div className="strip-item">
          <b>{SITE.phoneDisplay}</b>
          <span>WhatsApp da casa</span>
        </div>
      </div>
    </section>
  );
}
