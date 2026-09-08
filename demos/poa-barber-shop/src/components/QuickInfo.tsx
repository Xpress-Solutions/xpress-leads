import { SITE } from "../data/site";

const CARDS = [
  { title: "Combo R$ 80", text: "Corte + barba em 1h." },
  { title: SITE.address.street, text: "Partenon · Porto Alegre" },
  { title: SITE.hoursLine, text: "Domingo fechado." },
  { title: "5,0 no Booksy", text: `${SITE.reviewsCount} avaliações.` },
] as const;

export function QuickInfo() {
  return (
    <section className="quick" aria-label="Informações rápidas">
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
