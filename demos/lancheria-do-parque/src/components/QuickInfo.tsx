import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Desde 1982", text: "Mesmo endereço, mesmo toldo" },
  { title: "Suco na jarra", text: "Batido na hora, servido no liquidificador" },
  { title: "Xis coração", text: "O lanche que a cidade pede pelo nome" },
  { title: "De frente ao parque", text: "Osvaldo Aranha, 1086 · Bom Fim" },
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
