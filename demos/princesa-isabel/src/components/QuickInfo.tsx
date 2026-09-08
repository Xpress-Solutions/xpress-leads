import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Esquina famosa", text: "Princesa Isabel com São Luís, 410 — Santana" },
  { title: "Fila no almoço", text: "Chegue cedo. Não tem reserva: ordem de chegada." },
  { title: "Só dinheiro e PIX", text: "A casa não passa cartão. Leve PIX ou nota." },
  { title: "Desde 1985", text: "Espeto corrido de bairro, sem pose de rodízio." },
];

export function QuickInfo() {
  const ref = useReveal();

  return (
    <section className="quick" aria-label="O que importa saber">
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
