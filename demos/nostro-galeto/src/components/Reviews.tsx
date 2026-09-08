import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Galeto tradicional de Porto Alegre. Bons acompanhamentos, muito bem servido. Recomendo o almoço.",
    source: "Google · tema recorrente",
  },
  {
    text: "Rodízio de galeto, costelinha, pururuca, massas e sobremesa. Superou a expectativa — comida, serviço e atmosfera.",
    source: "Restaurant Guru / Google",
  },
  {
    text: "Polenta frita crocante, maionese caseira e o galeto no ponto. Mesa farta, atendimento que não deixa a bandeja esfriar.",
    source: "Destino POA + avaliações",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Quem já sentou</p>
        <h2 className="section-title">4,7 no Google. 4,9 no iFood.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div className="score-meta">
            <div>★★★★★</div>
            <strong>{SITE.reviewsCount} avaliações no Google</strong>
            <p className="section-lead" style={{ marginTop: 8 }}>
              iFood {SITE.ifoodRating} · faixa {SITE.priceRange} por pessoa
            </p>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-demo">{review.source}</span>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <a className="btn btn-ghost" href={SITE.googleReviews} target="_blank" rel="noreferrer">
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
}
