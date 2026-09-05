import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    source: "John Murowaniecki · Google",
    text: "Recanto universitário raiz. Filosofia, música, uns aperitivos e lanches… além da sinuca, claro.",
  },
  {
    source: "Alexandre Olsson · Google",
    text: "Tem sinuca, tem buffet. O ambiente é amplo. Tem espaço até para apresentação de bandas. Litrão bem gelado — e o caminho pelo acesso 2 da Unisinos.",
  },
  {
    source: "Avaliação no Google",
    text: "Vida noturna e alívio pro stress acadêmico. Cervejinha gelada, sinuca e o Alemão sempre receptivo. Às vezes rola um churras 0800.",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Google</p>
        <h2 className="section-title">Quem cola, volta.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div className="score-meta">
            <div>★★★★★</div>
            <strong>Nota pública no Google</strong>
            <span>Faixa {SITE.priceRange} por pessoa</span>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.source}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-demo">{review.source}</span>
            </article>
          ))}
        </div>
        <div className="menu-foot">
          <a className="btn btn-ghost" href={SITE.googleReviews} target="_blank" rel="noreferrer">
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
}
