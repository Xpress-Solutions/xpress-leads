import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const CARDS = [
  { title: "A garagem", text: SITE.address.street },
  { title: "Bairro", text: `${SITE.address.neighborhood} · zona norte` },
  { title: "Expediente", text: "Seg–dom, horários variados" },
  { title: "Instagram", text: SITE.instagramHandle },
] as const;

export function QuickInfo() {
  const ref = useReveal();

  return (
    <section className="quick">
      <div className="wrap quick-grid reveal" ref={ref}>
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
