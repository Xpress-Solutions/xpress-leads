import { SITE } from "../data/site";

export function QuickInfo() {
  return (
    <section className="quick" aria-label="Informações da casa">
      <div className="wrap quick-grid">
        <div className="quick-item">
          <b>Onde</b>
          <span>Dr. Timóteo, 201 · Floresta</span>
        </div>
        <div className="quick-item">
          <b>Quando</b>
          <span>{SITE.hours}</span>
        </div>
        <div className="quick-item">
          <b>2026</b>
          <span>Bolinho de Couve da Vovó</span>
        </div>
        <div className="quick-item">
          <b>Ligar</b>
          <span>{SITE.phoneDisplay}</span>
        </div>
      </div>
    </section>
  );
}
