import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa da Bento</p>
          <h2 className="section-title">Clássico da Azenha, nome de quem ri de si.</h2>
          <p>
            A Churrascaria dos Gringos fica na Av. Bento Gonçalves, 303. Não é churrascaria de
            shopping: é salão de toalha azul, cadeira de madeira e garçom circulando com o espeto.
            O nome é a piada — a casa serve quem cresceu no churrasco gaúcho e quem está
            descobrindo agora.
          </p>
          <p>
            Mais de 20 anos no mesmo ofício. Em junho de 2026 o Destemperados ainda chamou de
            clássico de Porto Alegre: comida boa, atendimento sem complicação e vontade de
            permanecer à mesa quando a refeição já terminou.
          </p>
          <ul className="about-points">
            <li>Toalha azul-clara, travessa de inox, espeto na mesa</li>
            <li>Estacionamento próprio no número 303</li>
            <li>Domingo só almoço — e fila</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/rodizio.jpg"
            alt="Mesa do rodízio com toalha azul, espeto e acompanhamentos no salão da Azenha"
          />
          <div className="about-badge">Qualidade, sabor, tradição</div>
        </div>
      </div>
    </section>
  );
}
