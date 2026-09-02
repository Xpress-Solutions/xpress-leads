import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  {
    num: "01",
    title: "Cabelo",
    text: "Corte pensado no osso do rosto, não no recorte da moda. Ofício de tesoura e pente, do jeito que a casa faz há meio século.",
  },
  {
    num: "02",
    title: "Barba",
    text: "Desenho e acabamento com a precisão de quem trata a barba como projeto — não como extra no fim do horário.",
  },
  {
    num: "03",
    title: "O conjunto",
    text: "Barba e cabelo arquitetados juntos. O discurso da casa não é slogan de rede: é o jeito de sentar na cadeira do Daniel.",
  },
];

export function Craft() {
  const ref = useReveal();

  return (
    <section className="section craft" id="oficio">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O ofício</p>
        <h2 className="section-title">Pensados e arquitetados.</h2>
        <p className="section-lead">
          Serviço qualificado de barba e cabelo, sem franquia e sem pose de club. Preço justo,
          cadeira de bairro.
        </p>
        <div className="craft-grid">
          {ITEMS.map((item) => (
            <article className="craft-item" key={item.num}>
              <span className="craft-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
