import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Cidade Baixa", text: "Lima e Silva, 985 loja 2" },
  { title: "Qua–dom", text: "Noite: a partir das 18h" },
  { title: "Chivito", text: "Pizza, empanadas, panchos" },
  { title: "Música ao vivo", text: "Violão, mesa e família" },
];

export function QuickInfo() {
  const ref = useReveal();

  return (
    <section className="quick" aria-label="Informações rápidas">
      <div className="wrap">
        <div className="quick-inner reveal" ref={ref}>
          {ITEMS.map((item) => (
            <article className="quick-item" key={item.title}>
              <b>{item.title}</b>
              <span>{item.text}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
