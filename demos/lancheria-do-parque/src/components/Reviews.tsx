import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "O suco chega na jarra do liquidificador. Quem conhece a Lanchera já sabe: é isso, não é copo de vitrine.",
    source: "Guia local · suco na jarra",
  },
  {
    text: "Xis coração, à la minuta e o toldo vermelho em frente à Redenção. A casa que a cidade trata como patrimônio afetivo.",
    source: "Wikipedia e frequentadores",
  },
  {
    text: "Simples, barato, sem ar-condicionado. O garçom grita o pedido e todo mundo se entende. É a Osvaldo Aranha.",
    source: "Matérias sobre a rotina da casa",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Google</p>
        <h2 className="section-title">Quem passa, volta.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <div>★★★★★</div>
            <strong>Nota pública da Lanchera no Google</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-demo">{review.source} · texto demonstrativo</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
