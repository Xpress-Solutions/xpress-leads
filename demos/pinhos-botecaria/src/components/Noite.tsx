export function Noite() {
  return (
    <section className="section noite" id="noite">
      <div className="wrap">
        <p className="kicker">Quarta a sábado</p>
        <h2 className="section-title">A noite é da Pinho's.</h2>
        <p className="section-lead">
          Karaokê, banda no palco e aquela mesa que não vai embora cedo. Pub de
          avenida — não precisa cruzar a Capital.
        </p>
        <div className="noite-grid">
          <article className="noite-card">
            <p className="kicker">Palco</p>
            <h3>Música ao vivo</h3>
            <p>
              Retratos na parede, guitarra no pilar mostarda e luz de palco.
              Confere a semana no WhatsApp e chama a galera.
            </p>
          </article>
          <article className="noite-card">
            <p className="kicker">Microfone</p>
            <h3>Karaokê</h3>
            <p>
              A casa anuncia karaokê nas próprias redes. Última chance do ano,
              reunião de amigos, voz alta — é isso.
            </p>
          </article>
          <article className="noite-card">
            <p className="kicker">Mesa</p>
            <h3>Reserva</h3>
            <p>
              Sexta e sábado vão até 2h. Se for grupo, reserva no WhatsApp
              antes de chegar na Victor Barreto.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
