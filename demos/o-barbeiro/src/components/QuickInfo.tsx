import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "50+ anos", text: "Legado de família na Felizardo" },
  { title: "Daniel", text: "O barbeiro que os clientes pedem pelo nome" },
  { title: `${SITE.rating} no Google`, text: `${SITE.reviewsCount} avaliações` },
  { title: SITE.hoursLine, text: "Domingo fechado · agenda na cadeira" },
];

export function QuickInfo() {
  const ref = useReveal();

  return (
    <section className="quick" aria-label="Informações rápidas">
      <div className="wrap">
        <div className="quick-grid reveal" ref={ref}>
          {ITEMS.map((item) => (
            <article className="quick-card" key={item.title}>
              <b>{item.title}</b>
              <span>{item.text}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
