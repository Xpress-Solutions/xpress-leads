export function Cultura() {
  return (
    <section className="section cultura" id="cultura">
      <div className="wrap">
        <p className="kicker">No palco do galpão</p>
        <h2 className="section-title">Invernada entre um espeto e outro.</h2>
        <div className="cultura-grid">
          <div className="cultura-photo">
            <img
              src="/fotos/danca.jpg"
              alt="Peões em pilcha dançam no palco da Roda de Carreta, com a bandeira do Rio Grande do Sul ao fundo"
            />
          </div>
          <div className="cultura-copy">
            <p>
              A casa não é só fogo. No mesmo salão de costaneira sobe a invernada: prendas e
              peões de lenço vermelho, bombacha e bota, gaita e violão. A bandeira do Rio Grande
              fica na parede de tijolo.
            </p>
            <p>
              Quem documentou a casa descreve dois horários de apresentação no almoço de domingo
              (13h e 13h45) e no jantar (21h e 21h45). Convém chegar cedo se quiser mesa perto
              do palco — e confirmar o show do dia no telefone.
            </p>
            <ul className="show-list">
              <li>
                <strong>Domingo ao meio-dia</strong>
                <div>Dança tradicionalista no almoço</div>
              </li>
              <li>
                <strong>Noites de segunda a sábado</strong>
                <div>Música e invernada no jantar</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
