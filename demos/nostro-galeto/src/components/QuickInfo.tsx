import { SITE } from "../data/site";
import { useHours } from "../hooks/useHours";

export function QuickInfo() {
  const hours = useHours();

  return (
    <section className="quick" aria-label="Informações rápidas">
      <div className="check-bar" aria-hidden="true" />
      <div className="wrap" style={{ paddingTop: 18 }}>
        <div className="quick-grid">
          <div className="quick-card">
            <b>Av. Bahia, 581</b>
            <span>{SITE.address.neighborhood} · Porto Alegre</span>
          </div>
          <div className="quick-card">
            <b>{hours.open ? "Aberto agora" : hours.headline}</b>
            <span>{hours.detail}</span>
          </div>
          <div className="quick-card">
            <b>Rodízio de galeto</b>
            <span>Massas, polenta e agnoline</span>
          </div>
          <div className="quick-card">
            <b>iFood {SITE.ifoodRating}</b>
            <span>Delivery e retirada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
