import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Recanto uruguaio na Cidade Baixa. A decoração mistura o país vizinho com enfeites antigos — por isso o nome. Os donos praticamente só falam em espanhol.",
    src: "Síntese de avaliações públicas",
  },
  {
    text: "Barzinho com cara de Baixa: cervejas uruguaias e pizzas maravilhosas, ainda mais a de pesto, cortada em quadradinhos de uma bocada.",
    src: "Listagens Google / Restaurant Guru",
  },
  {
    text: "Um pedacinho do Uruguai. Música ao vivo, família no atendimento, antiguidades até no banheiro. Chivitos nota mil.",
    src: "Cardápio.menu · Hagah 2026",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Google</p>
        <h2 className="section-title">Quem senta, volta.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <div>★★★★★</div>
            <strong>
              {SITE.reviewsCount} avaliações no Google · {SITE.priceRange}
            </strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-src">{review.src}</span>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 22 }}>
          <a className="btn btn-ghost" href={SITE.googleReviews} target="_blank" rel="noreferrer">
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
}
