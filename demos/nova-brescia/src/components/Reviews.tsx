import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    name: "Jonathan",
    source: "Google",
    text: "O verdadeiro sabor do xis de Porto Alegre você encontra no Lanches Nova Bréscia: lanche grande, bem recheado e cheio de sabor. O xis bacon é o melhor.",
  },
  {
    name: "Andréia",
    source: "Restaurant Guru",
    text: "O melhor xis filé que já comi e as batatas sempre no ponto. Super recomendo.",
  },
  {
    name: "Cláudia",
    source: "Menuweb",
    text: "O xis tem bom tamanho e serve duas pessoas. Recheado de queijo, maionese caseira no consumo local, mostarda, catchup, alho e pimenta. Sem crédito.",
  },
] as const;

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Quem já veio</p>
        <h2 className="section-title">A casa que a cidade avalia.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <b>no Google</b>
            <p style={{ margin: "6px 0 0", color: "rgba(244,237,224,0.7)" }}>
              {SITE.reviewsCount} avaliações · finalista Bom Gourmet 2025 de Melhor Xis
            </p>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.name}>
              <b>★★★★★</b>
              <p>“{review.text}”</p>
              <small>
                {review.name} · {review.source}
              </small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
