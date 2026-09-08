import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Rua da Praia", text: "Andradas, 777 · loja 783" },
  { title: "Todos os dias", text: "11h – 22h30" },
  { title: "4,6 no Google", text: "+150 avaliações" },
  { title: "Cocó Crispy", text: "Comida di Buteco 2026" },
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
