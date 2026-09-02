import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "São Luís", text: "Berto Círio, 329 — Canoas" },
  { title: "Noite", text: "Qua a sáb, 18h30–23h30" },
  { title: "Bolinho do Brasa", text: "Petisco do circuito 2026" },
  { title: "Canoas", text: "Mesmo circuito de Porto Alegre" },
] as const;

export function Strip() {
  const ref = useReveal();

  return (
    <section className="strip" aria-label="O essencial">
      <div className="wrap">
        <div className="strip-grid reveal" ref={ref}>
          {ITEMS.map((item) => (
            <article key={item.title}>
              <b>{item.title}</b>
              <span>{item.text}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
