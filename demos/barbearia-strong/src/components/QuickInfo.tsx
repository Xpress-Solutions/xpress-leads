import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Centro Histórico", text: "Dr. Flores, 327 — loja 3" },
  { title: "Abre cedo", text: "Seg–sex 8h (ter 9h) · sáb 8h–18h" },
  { title: "Anderson", text: "Dono na cadeira, citado pelo nome" },
  { title: "WhatsApp", text: "Horário marcado no recado da bio" },
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
