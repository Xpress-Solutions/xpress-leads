import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">A fachada é o nome.</h2>
          <p>
            Na Assis Brasil, 171, Santa Maria Goretti, ninguém precisa perguntar qual é o bar.
            Parede, toldo e cadeira da calçada no mesmo amarelo ouro — o Amarelinho 44 é a casa
            que se vê do corredor.
          </p>
          <p>
            Por dentro, tijolo pintado, potes de infusão no balcão e madeira escura. Por fora, o
            44 na parede e o quadro do almoço. É boteco de zona norte: come de dia, volta de
            noite.
          </p>
          <ul className="about-points">
            <li>Fachada amarela + letreiro terracota — a marca pintada na parede</li>
            <li>Almoço executivo no quadro e jantar de boteco</li>
            <li>Comida di Buteco 2026 com os Charutinhos Jalapeños</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/fachada-dia.jpg"
            alt="Fachada amarela do Bar 44 Amarelinho na Avenida Assis Brasil"
          />
          <div className="about-badge">Av. Assis Brasil, 171 · o amarelo é o endereço</div>
        </div>
      </div>
    </section>
  );
}
