export function About() {
  return (
    <section className="section about" id="casa">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="kicker">A esquina</p>
          <h2 className="section-title">Comida de verdade no 4º Distrito.</h2>
          <p>
            Eduardo e Paula Baldasso abriram a Larica em outubro de 2022 na Santos Dumont, 710 —
            esquina com a Álvaro Chaves. A ideia era simples: um lugar pra quem sai da festa e
            ainda quer um xis de qualidade.
          </p>
          <p>
            A parede-destaque é de telha ondulada achada na Voluntários da Pátria. A carne de
            panela é receita do pai; a maionese, da avó. Tem cliente que come a maionese de
            colher. Sem pose de restaurante — ocupação criativa, chapa quente, mesa de esquina.
          </p>
          <ul className="about-points">
            <li>Placa de aço corten na fachada: LARICA / 4º DISTRITO</li>
            <li>Telhas reaproveitadas + neon + camisas da seleção</li>
            <li>Família de boteco — duas gerações na chapa</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/owners.jpg"
            alt="Paula e Eduardo Baldasso na porta da Larica, sob a placa de metal oxidado"
          />
          <div className="about-badge">Santos Dumont, 710</div>
        </div>
      </div>
    </section>
  );
}
