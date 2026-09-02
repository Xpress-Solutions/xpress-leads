export function About() {
  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="section-kicker">simples, livre, experimental</p>
          <h2 className="section-title">a extensão da primor da terra.</h2>
          <p>
            Patrícia Guimarães, Fabiano Schaeffer e Julian Caporal abriram o Mato
            em 2024 num galpão que era garagem, na Ferrer 192. Os móveis — mesa,
            cadeira, sofá — saíram das mãos deles. O ideal é o mesmo da cerveja:
            fazer o simples, com personalidade.
          </p>
          <p>
            Ninguém chega pedindo carne. A casa inteira é planta: lanche, petisco,
            chope, drink e vinho. Melhor Cozinha Vegana no Prêmio Sabores do Sul
            2025. Não é sermão — é experiência nova no polo da Miguel Tostes.
          </p>
          <ul className="about-points">
            <li>Cervejaria cigana, microlotes, fábrica ainda nos planos do fundo.</li>
            <li>Atendimento que explica estilo, IBU e harmonização no balcão.</li>
            <li>Música ao vivo uma vez por semana. Pet friendly. Eventos de rua.</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/balcao.jpg"
            alt="Sócios do Mato Bar atrás do balcão de pinho, com a parede mostarda e as lousas de chope da Primor da Terra"
          />
          <div className="about-badge">melhor cozinha vegana · sabores do sul 2025</div>
        </div>
      </div>
    </section>
  );
}
