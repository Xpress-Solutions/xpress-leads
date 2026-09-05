import { SITE } from "../data/site";

export function Strip() {
  return (
    <section className="strip" aria-label="Informações rápidas">
      <div className="wrap strip-grid">
        <div className="strip-item">
          <b>Elmo Lenz, 1480</b>
          <span>Vera Cruz · Gravataí</span>
        </div>
        <div className="strip-item">
          <b>A partir das 11h</b>
          <span>Confirmar no balcão</span>
        </div>
        <div className="strip-item">
          <b>{SITE.googleRating} no Google</b>
          <span>Churrasco e almoço</span>
        </div>
        <div className="strip-item">
          <b>{SITE.phoneDisplay}</b>
          <span>Ligar para reservar</span>
        </div>
      </div>
    </section>
  );
}
