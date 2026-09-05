import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="a-casa">
      <div className="wrap about-grid">
        <div className="about-copy reveal" ref={ref}>
          <p className="kicker">A casa</p>
          <h2 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.4rem)" }}>
            Premium de cidade industrial.
          </h2>
          <p>{SITE.about}</p>
          <p>
            Não é franquia. É a BAH! da China 14: ambiente simples, mesa do lado de fora quando o
            salão esquenta, e o lanche como estrela — do Laçador com provolone crispy ao Combo
            Sozinho (mas feliz).
          </p>
          <ul className="about-points">
            <li>Hambúrguer artesanal na brasa — texto da própria equipe.</li>
            <li>4,9 no Google · 119 avaliações · R$ 20–60.</li>
            <li>Qua a sáb 18h30–23h · domingo 18h–22h · segunda e terça fechado.</li>
          </ul>
        </div>
        <div className="about-seal">
          <img src="/logo.jpeg" alt="Logo da BAH! BURGER — gaúcho de lenço vermelho no círculo amarelo" />
        </div>
      </div>
    </section>
  );
}
