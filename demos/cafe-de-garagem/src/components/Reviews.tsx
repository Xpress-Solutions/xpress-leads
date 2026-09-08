import { useReveal } from "../hooks/useReveal";

const SCORES = [
  { n: "8.5", label: "Comida / bebida" },
  { n: "9.0", label: "Atendimento" },
  { n: "5.0", label: "Ambiente" },
  { n: "5.0", label: "Infra" },
  { n: "6.5", label: "Nota geral" },
] as const;

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">iAvaliei · 15 de abril de 2026</p>
        <h2 className="section-title">Atendimento 9. Garagem 5.</h2>
        <p className="section-lead">
          A casa não finge boutique. A review pública descreve o que a porta
          entrega: comida boa, gente querida, estrutura de garagem.
        </p>
        <div className="score-row">
          {SCORES.map((score) => (
            <div className="score-pill" key={score.label}>
              <b>{score.n}</b>
              <span>{score.label}</span>
            </div>
          ))}
        </div>
        <article className="rev-card">
          <p>
            “Um café dentro de uma garagem, na zona norte de Porto Alegre-RS. O
            lugar é pequeno com mesas na parte interna e na calçada, com
            ambientes sem controle do conforto térmico. Oferece cafés, lanches,
            salgados e almoço com prato feito. O atendimento é muito querido.”
          </p>
          <span className="rev-src">iAvaliei · Café de Garagem — Porto Alegre</span>
        </article>
      </div>
    </section>
  );
}
