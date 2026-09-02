import { useReveal } from "../hooks/useReveal";

export function Casa() {
  const ref = useReveal();
  return (
    <section className="section casa" id="casa">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">A casa</p>
        <h2 className="title">Gastrobar com placar.</h2>
        <p className="lead">
          Masah! Sports Bar na Farroupilha, Canoas. Nome com exclamação, perfil de jogo + cozinha —
          não é boteco anônimo. Melhor Gastrobar de Canoas no Prêmio Sabores do Sul 2023. Kelly,
          Rafael e Rose na foto do circuito. Quem chega fala de TVs, atendimento e ambiente moderno.
        </p>
        <ul className="casa-points">
          <li>Diversas TVs — o ponto de quem marca o jogo no WhatsApp.</li>
          <li>Loja 03 no Cosmopolitan Urban Mall, Av. Farroupilha, 3833.</li>
          <li>Chopp gelado, mesa de petisco e reserva pelo telefone da casa.</li>
          <li>Nota 4,5 no Google (agregadores). Sem site oficial até esta página.</li>
        </ul>
      </div>
    </section>
  );
}
