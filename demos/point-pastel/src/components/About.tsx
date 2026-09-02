import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="a-casa">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Ponto de pastel na Zona Norte.</h2>
          <p>
            O Point do Pastel fica na Maria Augusta Generoso Estrela, 1070 —
            Rubem Berta, Parque Santa Fé. Abre de noite, terça a domingo. Quem
            busca pastel na Zona Norte cai aqui, não num diretório.
          </p>
          <p>
            Em 2023 a casa subiu no pódio do Comida di Buteco no Rio Grande do
            Sul: terceiro lugar, atrás do Tuim e do Reserva do Mosteiro. Em 2024
            entrou com o Sabor Gaudério. Em 2026 volta com O Magnífico.
          </p>
          <ul className="about-points">
            <li>Pastelaria de bairro — ofício único, nome de ponto.</li>
            <li>3º lugar no Comida di Buteco RS 2023.</li>
            <li>Mesa na casa, retirada e delivery pelo WhatsApp.</li>
          </ul>
        </div>
        <figure className="about-photo">
          <img
            src="/fotos/sabor-gauderio.jpg"
            alt="Sabor Gaudério: pastel desconstruído com carne de panela, cream cheese e alho-poró frito"
          />
        </figure>
      </div>
    </section>
  );
}
