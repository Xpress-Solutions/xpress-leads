import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Samba de raiz, casa pequena e o Nito no violão. Não é bar de avenida — é o sobrado da Auxiliadora.",
  },
  {
    text: "Fui na feijoada de sábado. Mesa disputada, atendimento perto, música que a gente sente. Reserve.",
  },
  {
    text: "Peça no meio das mesas, chope e petisco sem levantar. Teatro e MPB no mesmo endereço — isso é o Nito.",
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
            <strong>{SITE.reviewsCount} avaliações no Google</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-demo">Tom das avaliações públicas · placeholder da demo</span>
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
