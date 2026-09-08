import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Confraria de pai e filhos.</h2>
          <p>
            A Confraria Barber Club é a barbearia da Rua José do Patrocínio, 378, no miolo da
            Cidade Baixa. Empresa familiar: o fundador Luis Eduardo e os sócios Lucas, Vinícius
            e Eduardo Martins — pai e filhos na mesma calçada.
          </p>
          <p>
            O toldo preto e branco, o poste clássico e a placa com o bigode são a marca da
            porta. Dentro, cimento queimado, madeira da bancada e o horário longo que a CB
            pede: segunda à tarde, terça a sexta até 21h, sábado até 18h.
          </p>
          <ul className="about-points">
            <li>Desde 2013 no letreiro — ofício de família, não franquia</li>
            <li>Pets na cadeira, Wi-Fi e cartão — comodidades do Booksy</li>
            <li>Trança, manicure e depilação com a Rafa, além do corte clássico</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/interior.jpg"
            alt="Interior da Confraria: parede de cimento queimado, piso xadrez e cadeiras pretas"
          />
          <div className="about-badge">José do Patrocínio, 378</div>
        </div>
      </div>
    </section>
  );
}
