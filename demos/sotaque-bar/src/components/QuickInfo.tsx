import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Esquina da Protásio", text: "Av. Protásio Alves, 699 · João Guimarães" },
  { title: "Janelões", text: "Pé-direito alto — a mesa de dentro parece rua" },
  { title: "Chef na cozinha", text: "Boteco simples, mão de quem veio da alta" },
  { title: "Ter–dom", text: "Noite na semana · almoço no fim de semana" },
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
