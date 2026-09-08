import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Combo da casa", text: "Barba & cabelo · R$ 90" },
  { title: "A cadeira", text: "Bruno Galante e a equipe" },
  { title: "Jardim Itu", text: "Bispo Scalabrini, 380" },
  { title: "Desde 2018", text: "Confraria de bairro" },
] as const;

export function QuickInfo() {
  const ref = useReveal();

  return (
    <section className="quick" aria-label="A casa em quatro linhas">
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
