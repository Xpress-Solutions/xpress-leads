import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    name: "Jose Cruz",
    text: "Sensacional desde a chegada até a saída, experiência ímpar, pratos muito bem elaborados e acessíveis, bebidas bem geladas, atendimento nota 11. Super recomendo para quem quer qualidade e apreciar bons momentos.",
  },
  {
    name: "Noblesse Advocacia",
    text: "Melhor lugar de Porto Alegre: aconchegante, comida boa e alto astral.",
  },
  {
    name: "Alexandre Silva",
    text: "Lugar top, comida muito boa, atendimento excelente.",
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
          <div className="score-meta">
            <div>★★★★★</div>
            <strong>{SITE.reviewsCount} avaliações no Google</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.name}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span>{review.name} · Google</span>
            </article>
          ))}
        </div>
        <div className="menu-foot">
          <a className="btn btn-ghost" href={SITE.googleReviews} target="_blank" rel="noreferrer">
            Ver avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
