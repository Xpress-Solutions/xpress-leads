import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Casarão na Rua da Praia.</h2>
          <p>
            O Poeta fica na Rua dos Andradas, 777 — loja 783 — no Centro Histórico de Porto Alegre.
            É o bar de xis e petiscos do trecho que a cidade chama de Rua da Praia: casarão, calçada
            e chope enquanto o centro volta a encher.
          </p>
          <p>
            A voz da casa é curta e clara: chope, xis e vanguarda. Sem pose de restaurante. Mesa na
            calçada, expediente todos os dias a partir das 11h, e o letreiro com aspas — porque
            conversa também é o que se pede aqui.
          </p>
          <ul className="about-points">
            <li>Participante do Comida di Buteco 2026 com o Cocó Crispy</li>
            <li>Aberto todos os dias, 11h–22h30</li>
            <li>Mesas na calçada da Andradas · Centro Histórico</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/ambiente.png"
            alt="Salão do Poeta: balcão de madeira, paredes oliva e luz âmbar"
          />
          <div className="about-badge">Chope · Xis · Vanguarda</div>
        </div>
      </div>
    </section>
  );
}
