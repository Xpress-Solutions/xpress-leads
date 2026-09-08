import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { title: "Almoço ter–dom", text: "Espeto corrido com maionese caseira na frente" },
  { title: "Jantar ter–sáb", text: "Churrasco e rodízio de pizza no mesmo salão" },
  { title: "Estacionamento", text: "Vaga própria na Bento — o detalhe que o Google elogia" },
  { title: "Fila no domingo", text: `11h–15h. ${SITE.reviewsCount} avaliações não mentem` },
] as const;

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
