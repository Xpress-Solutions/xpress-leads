export function About() {
  return (
    <section className="section" id="casa">
      <div className="wrap about-grid">
        <figure className="about-photo">
          <img
            src="/fotos/casa.jpg"
            alt="Andresa Silva dos Santos no balcão do Nosso Bar, paredes laranja e medalhão dourado — foto Manuela Cassano / JC"
          />
        </figure>
        <div>
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Nove anos na Bento.</h2>
          <p className="section-lead">
            Andresa Silva dos Santos e Cassiano de Oliveira comandam o ponto que
            segura a noite no Partenon: família na mesa, jovem na sinuca, 500
            pessoas no fim de semana. Fora da Cidade Baixa, sem pose de
            restaurante.
          </p>
          <p className="section-lead" style={{ marginTop: 14 }}>
            Paredes laranja, cartaz escrito <strong>SEU LANCHE É AQUI</strong> e
            o medalhão dourado no uniforme. Quem chega pede o prato do vídeo —
            e fica até as quatro.
          </p>
          <p className="quote">“Aqui, é tudo muito e com tudo.”</p>
        </div>
      </div>
    </section>
  );
}
