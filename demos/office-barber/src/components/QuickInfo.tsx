import { SITE } from "../data/site";
import { useHours } from "../hooks/useHours";

export function QuickInfo() {
  const hours = useHours();

  return (
    <section className="quick" aria-label="Informações rápidas">
      <div className="wrap">
        <div className="quick-grid">
          <div className="quick-card">
            <b>{hours.headline}</b>
            <span>
              {hours.label} · {hours.detail}
            </span>
          </div>
          <div className="quick-card">
            <b>Barão, 1173</b>
            <span>
              {SITE.address.complement} · {SITE.address.neighborhood}
            </span>
          </div>
          <div className="quick-card">
            <b>{SITE.rating} Booksy</b>
            <span>{SITE.reviewsCount} avaliações confirmadas</span>
          </div>
          <div className="quick-card">
            <b>Café no capricho</b>
            <span>Quem senta na cadeira cita o café</span>
          </div>
        </div>
      </div>
    </section>
  );
}
