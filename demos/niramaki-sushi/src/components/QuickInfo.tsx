import { SITE } from "../data/site";

export function QuickInfo() {
  return (
    <section className="quick" aria-label="Informações rápidas">
      <div className="wrap quick-grid">
        <div className="quick-card">
          <b>Horário</b>
          <span>{SITE.hours}</span>
        </div>
        <div className="quick-card">
          <b>No local · retirada · delivery</b>
          <span>Como no cardápio da casa</span>
        </div>
        <div className="quick-card">
          <b>{SITE.address.street}</b>
          <span>
            {SITE.address.neighborhood} · {SITE.address.city}
          </span>
        </div>
        <div className="quick-card">
          <b>{SITE.phoneDisplay}</b>
          <span>WhatsApp e ligação</span>
        </div>
      </div>
    </section>
  );
}
