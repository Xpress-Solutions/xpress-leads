import { SITE } from "../data/site";
import { useHours } from "../hooks/useHours";
import { useReveal } from "../hooks/useReveal";

export function QuickInfo() {
  const ref = useReveal();
  const hours = useHours();

  const items = [
    { title: "Acesso 2", text: "Primeira à direita na Padre Jaeger" },
    { title: `${SITE.rating} Google`, text: "Ponto do campus, sem pose" },
    { title: "Litrão", text: "Ceva gelada de universitário" },
    { title: "3 mesas de sinuca", text: "R$ 1 a partida" },
    {
      title: hours.open ? "Aberto agora" : hours.headline,
      text: hours.open ? hours.detail : SITE.hoursLine,
    },
  ];

  return (
    <section className="quick" aria-label="Informações rápidas">
      <div className="wrap">
        <div className="quick-grid reveal" ref={ref}>
          {items.map((item) => (
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
