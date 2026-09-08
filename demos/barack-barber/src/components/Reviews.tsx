import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Richard é o profissional que escolhemos para cuidar da nossa família, pelo serviço de excelência, pela gentileza e pelo local de trabalho impecável.",
    who: "Luciana · Booksy",
  },
  {
    text: "Lugar incrível, experiência fora da curva. Muito mais que uma simples barbearia — experiência de spa.",
    who: "Matheus · Booksy",
  },
  {
    text: "Profissional de primeira. Horário, atendimento e local… ao lado do Iguatemi. Simplesmente nota 10.",
    who: "Charles · Booksy",
  },
] as const;

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Booksy</p>
        <h2 className="section-title">Cinco estrelas. Nenhuma outra.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div className="score-meta">
            <div>★★★★★</div>
            <strong>
              {SITE.reviewsCount} avaliações no Booksy — todas 5.0
            </strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.who}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-who">{review.who}</span>
            </article>
          ))}
        </div>
        <div className="menu-foot" style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
          <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
            Ler no Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
