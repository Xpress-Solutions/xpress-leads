export function Gallery() {
  return (
    <section className="section" id="galeria">
      <div className="wrap">
        <p className="section-kicker">o galpão</p>
        <h2 className="section-title">atmosfera da ferrer.</h2>
        <div className="gallery-grid">
          <figure>
            <img
              src="/fotos/galpao.jpg"
              alt="Pátio do Mato Bar: parede de terra com o wordmark, plantas e móveis de pinho"
            />
            <figcaption>O pátio — foto Evandro Oliveira / JC, 2024</figcaption>
          </figure>
          <figure>
            <img
              src="/fotos/chopes.jpg"
              alt="Copos com o logo mato bar e latas da Primor da Terra sobre o balcão de madeira"
            />
            <figcaption>Chope da casa no copo com o wordmark</figcaption>
          </figure>
          <figure>
            <img
              src="/fotos/bolinhas.jpg"
              alt="Bolinhas Crocantes do Mato no papel manteiga laranja da casa"
            />
            <figcaption>Bolinhas Crocantes do Mato — Israh Ramos / Sabores do Sul</figcaption>
          </figure>
          <figure>
            <img
              src="/fotos/balcao.jpg"
              alt="Balcão do Mato Bar com parede mostarda e lousas de chope"
            />
            <figcaption>As seis lousas atrás do balcão</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
