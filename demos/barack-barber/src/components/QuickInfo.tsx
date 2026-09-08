import { SITE } from "../data/site";

const CARDS = [
  { title: "5,0 Booksy", text: `${SITE.reviewsCount} avaliações, todas cinco estrelas` },
  { title: "Navalha", text: "Toalha quente e barba terapia" },
  { title: "Combo", text: "Corte + navalha em uma hora" },
  { title: "Iguatemi", text: "Av. dos Prazeres, 145 — Passo D'Areia" },
  { title: `EST. ${SITE.foundedRoman}`, text: "Casa aberta em 2021" },
] as const;

export function QuickInfo() {
  return (
    <section className="quick" aria-label="Síntese da casa">
      <div className="wrap quick-grid">
        {CARDS.map((card) => (
          <article className="quick-card" key={card.title}>
            <b>{card.title}</b>
            <span>{card.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
