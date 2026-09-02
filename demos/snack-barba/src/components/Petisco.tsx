export function Petisco() {
  return (
    <section className="section petisco" id="petisco">
      <div className="wrap">
        <p className="kicker">Comida di Buteco 2026</p>
        <h2 className="section-title">Feijoca Crocante.</h2>
        <p className="lead">
          O Barba entra no concurso com feijoada em formato de snack — o petisco da casa no Jardim
          do Salso, não um prato de restaurante.
        </p>
        <div className="petisco-grid">
          <div className="feijoca-art">
            <img src="/feijoca.svg" alt="Feijoca Crocante: bolinhos dourados com miolo de feijão e geleia de abacaxi com pimenta" />
          </div>
          <div className="petisco-copy">
            <p>
              A Revista Sabores do Sul registrou a Feijoca Crocante do Snack Bar do Barba na edição
              2026, com foto de Israh Ramos. É o prato que a casa coloca na rua: casca frita,
              feijão, o nome do dono na porta.
            </p>
            <p>
              Antes dela, o concurso já passou por aqui com o Deixa falar — bolinho de língua e
              geleia caseira de abacaxi com pimenta — e com a Moda do Sul, coração na chapa.
            </p>
            <span className="stamp">Petisco da edição · R$ 40 no circuito</span>
          </div>
        </div>
      </div>
    </section>
  );
}
