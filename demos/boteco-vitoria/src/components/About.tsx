import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">Sobre o boteco</p>
          <h2 className="section-title">Boteco de verdade.</h2>
          <p>
            O Boteco Vitória é um bar no Jardim Botânico, em Porto Alegre, na Rua Felizardo, 445,
            a poucas quadras do Bourbon Ipiranga.
          </p>
          <p>
            Ambiente descontraído, familiar e acolhedor — com mesas externas, cobertura, chope
            gelado e comida boa. Petiscos, pratos para compartilhar, pratos feitos, hambúrgueres
            e um atendimento próximo, do jeito que boteco tem que ser.
          </p>
          <ul className="about-points">
            <li>Campeão do Comida di Buteco 2022 em Porto Alegre</li>
            <li>Espaço externo e área coberta</li>
            <li>Família, amigos e aquela mesa que se estende</li>
          </ul>
        </div>
        <div className="about-photo">
          <img src="/fotos/ambiente.jpg" alt="Ambiente de boteco com mesas e iluminação baixa" />
          <div className="about-badge">1º lugar Comida di Buteco 2022 · POA</div>
        </div>
      </div>
    </section>
  );
}
