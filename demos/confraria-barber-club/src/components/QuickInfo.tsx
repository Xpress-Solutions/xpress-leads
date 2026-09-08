import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Cidade Baixa", text: "José do Patrocínio, 378" },
  { title: "5,0 no Booksy", text: "167 avaliações, todas 5 estrelas" },
  { title: "Família na cadeira", text: "Pai e filhos desde 2013" },
  { title: "Horário longo", text: "Ter–sex 9h–21h · sáb até 18h" },
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
