import { SITE } from "../data/site";
import { useHours } from "../hooks/useHours";
import { useReveal } from "../hooks/useReveal";

export function QuickInfo() {
  const ref = useReveal();
  const hours = useHours();

  return (
    <section className="quick" aria-label="Informações rápidas">
      <div className="wrap quick-grid reveal" ref={ref}>
        <article className="quick-card">
          <b>5.0</b>
          <span>Nota máxima no Booksy</span>
        </article>
        <article className="quick-card">
          <b>{SITE.barber}</b>
          <span>Na cadeira, em todo review</span>
        </article>
        <article className="quick-card">
          <b>{hours.open ? "Aberto agora" : hours.headline}</b>
          <span>{hours.detail}</span>
        </article>
        <article className="quick-card">
          <b>Barro Vermelho</b>
          <span>Cavalhada, 571 · Gravataí</span>
        </article>
      </div>
    </section>
  );
}
