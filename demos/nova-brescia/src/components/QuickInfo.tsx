import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "A esquina", text: "São Pedro com Ceará, 1359" },
  { title: "Sem delivery", text: "O xis não viaja. Vem na casa." },
  { title: "10 sabores", text: "Xis, bauru, dog e torrada" },
  { title: "Paga no balcão", text: "Débito, PIX ou dinheiro" },
  { title: "Desde 1987", text: "Sérgio, Pity e a família" },
] as const;

export function QuickInfo() {
  const ref = useReveal();

  return (
    <section className="quick" aria-label="O essencial da casa">
      <div className="wrap quick-grid reveal" ref={ref}>
        {ITEMS.map((item) => (
          <article className="quick-card" key={item.title}>
            <b>{item.title}</b>
            <span>{item.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
