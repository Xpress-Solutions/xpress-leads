import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">É uma garagem. De verdade.</h2>
          <p>
            Não é metáfora de branding. O Café de Garagem funciona dentro de uma
            garagem na zona norte de Porto Alegre — espaço pequeno, mesas no
            interno e na calçada, sem controle de conforto térmico.
          </p>
          <p>
            Quem volta não volta pelo ar-condicionado. Volta pelo atendimento
            (nota 9 no iAvaliei) e pelo PF, o café e o lanche que cabem no
            expediente do bairro.
          </p>
          <ul className="about-points">
            <li>Santa Rosa de Lima · Rua Paulo Henrique Ten-Caten, 112</li>
            <li>Mesas na calçada — a sala de estar é a rua</li>
            <li>Estacionamento na rua, vaga nas proximidades</li>
          </ul>
        </div>
        <div className="about-door" aria-hidden="true">
          <div>
            <strong>
              Porta
              <br />
              aberta
            </strong>
            <span>Ten-Caten, 112</span>
          </div>
        </div>
      </div>
    </section>
  );
}
