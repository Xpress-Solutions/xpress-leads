import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    quote: "Melhor pastel da cidade.",
    source: "Fernando Santos · Facebook @pointdopastelpoa",
  },
  {
    quote:
      "98% recomendam a pastelaria. 2,6 mil seguidores no Facebook — e ainda sem site próprio.",
    source: "Página oficial da casa",
  },
] as const;

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Quem já foi</p>
        <h2 className="section-title">A casa fala pela massa.</h2>
        <p className="section-lead">
          {SITE.facebookRecommend} · {SITE.facebookFollowers} seguidores no
          Facebook. Sem site próprio até agora.
        </p>
        <div className="rev-grid">
          {REVIEWS.map((item) => (
            <article className="rev-card" key={item.source}>
              <span className="tag">★</span>
              <p>“{item.quote}”</p>
              <p className="note">{item.source}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
