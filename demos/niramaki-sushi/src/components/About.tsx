import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Japonês de bairro, peça grande.</h2>
          <p>
            O Niramaki fica na Barão do Amazonas, 1145 — Jardim Botânico. Não é omakase de reserva
            nem landing de marketplace: é a noite de sushi que o bairro já pede de novo, com
            salmão generoso, drinks e porta aberta até 2h.
          </p>
          <p>
            A marca já vende bem no iFood e no cardápio de terceiro. Este site é o atalho para quem
            já conhece a casa: cardápio, retirada e WhatsApp, sem a taxa da plataforma.
          </p>
          <ul className="about-points">
            <li>Peças grandes com muito salmão — o elogio que se repete.</li>
            <li>No local, retirada e delivery, todos os dias das 18h às 2h.</li>
            <li>Drinks da casa e atendimento que a avaliação chama de impecável.</li>
          </ul>
        </div>
        <div className="about-photo">
          <img src="/fotos/prato-5.png" alt="Salmão selado do Niramaki Sushi" />
          <div className="about-badge">Aberto todas as noites até 2h</div>
        </div>
      </div>
    </section>
  );
}
