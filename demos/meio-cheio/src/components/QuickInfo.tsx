import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Venâncio, 871", text: "Em frente ao Bar do Beto" },
  { title: "Copo da casa", text: "Merlot da Serra · R$ 15" },
  { title: "Qua–sáb 18–23h", text: "Domingo 17h–22h" },
  { title: "Reserva no DM", text: "@meio.cheio.poa" },
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
