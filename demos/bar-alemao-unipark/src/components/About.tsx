import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">O Alemão do Unipark</p>
          <h2 className="section-title">Nasceu estacionamento. Virou o ponto.</h2>
          <p>
            No fim de 1999 o terreno em frente à Unisinos era vazio. Virou estacionamento, depois
            quentão no frio, depois Bar do Alemão. O apelido de Reinaldo foi pro letreiro — letras
            vermelhas garrafais — e ficou.
          </p>
          <p>
            Hoje é bar amplo e restaurante: litrão, buffet de almoço, sinuca, espaço pra banda.
            Ponto universitário e happy hour de São Leopoldo. Não é o Alemão da Floresta, em Porto
            Alegre. Este é o do Unipark.
          </p>
          <ul className="about-points">
            <li>Junto ao Unipark · Rua Padre Luís Gonzaga Jaeger, 80</li>
            <li>Seg–sex 9h–0h · sáb 9h–16h · dom fechado</li>
            <li>Estacionamento e lava-rápido na porta</li>
          </ul>
        </div>
        <div className="about-visual">
          <img src="/fotos/banda.png" alt="Espaço aberto do bar à noite, com movimento de campus" />
          <div className="about-badge">Desde o começo dos anos 2000 no acesso da Unisinos</div>
        </div>
      </div>
    </section>
  );
}
