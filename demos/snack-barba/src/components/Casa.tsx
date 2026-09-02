export function Casa() {
  return (
    <section className="section casa" id="casa">
      <div className="wrap">
        <p className="kicker">A casa</p>
        <h2 className="section-title">O snack do Barba.</h2>
        <p className="lead">
          Snack bar no Jardim do Salso. Nome de dono + petisco de feijoada em formato de boteco —
          identidade pessoal clara, ponto na Ângelo Crivellaro.
        </p>
        <div className="casa-grid">
          <article className="casa-card">
            <h3>De dono</h3>
            <p>
              Barba no letreiro. Casa de pessoa, não de franquia. Quem chega no Salso pergunta pelo
              snack, não por um conceito.
            </p>
          </article>
          <article className="casa-card">
            <h3>De noite</h3>
            <p>
              A ficha oficial abre a partir das 18h. Terça a domingo no concurso; sexta e sábado
              até 1h. Snack de fim de expediente.
            </p>
          </article>
          <article className="casa-card">
            <h3>No Salso</h3>
            <p>
              Rua Ângelo Crivellaro, 540. Fora do circuito óbvio da cidade — o clique precisa cair
              aqui, não só na lista do concurso.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
