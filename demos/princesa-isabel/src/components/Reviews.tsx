import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Espeto no ponto, maionese que a cidade discute e atendimento de casa cheia. Lugar simples — e é exatamente por isso que a fila existe.",
  },
  {
    text: "Cheguei perto do meio-dia e esperei. Valeu. Polenta crocante, cebola em conserva e carne no ritmo. Leve PIX: cartão não passa.",
  },
  {
    text: "Churrasco gaudério de verdade na esquina da Princesa Isabel. Sem pose, sem cartão, sem reserva. A Princesinha do Santana.",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Google</p>
        <h2 className="section-title">Quem enfrenta a fila, volta.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <div>★★★★★</div>
            <strong>{SITE.reviewsCount} avaliações no Google</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-demo">Texto demonstrativo a partir de reviews públicas</span>
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
