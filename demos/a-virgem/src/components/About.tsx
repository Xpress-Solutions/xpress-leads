export function About() {
  return (
    <section className="section about" id="casa">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="kicker">A casa</p>
          <h2 className="section-title">Bar, tattoo e arte no mesmo lote.</h2>
          <p>
            Quem entra n’A Virgem sente o clima antes do cardápio: objeto de arte,
            exposição, grafite e o estúdio de tattoo no mesmo espaço. A velha casa da
            Olavo Bilac virou selva de plantas, mural e mesa na calçada.
          </p>
          <p>
            Destemperados resumiu numa palavra: visual. VEJA falou do jardim, da
            piscina e da arte urbana. O QuintoAndar ainda aponta o óbvio — dá para
            botecar e marcar a próxima tattoo no mesmo endereço.
          </p>
          <ul className="about-points">
            <li>Mesas na calçada da Olavo Bilac — a disputa da CB.</li>
            <li>Pizzas e escondidinhos com nome da casa, não porção genérica.</li>
            <li>Galeria viva: teto colado, parede pintada, máscara na madeira.</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/jardim.jpg"
            alt="Escultura e lanterna âmbar na parede n’A Virgem"
          />
        </div>
      </div>
    </section>
  );
}
