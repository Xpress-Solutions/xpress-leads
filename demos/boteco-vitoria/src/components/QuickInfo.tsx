import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  { icon: "📍", title: "Jardim Botânico", text: "A poucas quadras do Bourbon Ipiranga" },
  { icon: "⭐", title: "4,7 no Google", text: "+2.600 avaliações" },
  { icon: "🍺", title: "Chope e drinks", text: "Caldereta gelada e carta de bar" },
  { icon: "🎤", title: "Karaokê às quartas", text: "Entrada gratuita para cantar" },
  { icon: "🍲", title: "Feijoada aos sábados", text: "O sábado começa no Vitória" },
];

export function QuickInfo() {
  const ref = useReveal();

  return (
    <section className="quick" aria-label="Informações rápidas">
      <div className="wrap">
        <div className="quick-grid reveal" ref={ref}>
          {ITEMS.map((item) => (
            <article className="quick-card" key={item.title}>
              <b>
                {item.icon} {item.title}
              </b>
              <span>{item.text}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
