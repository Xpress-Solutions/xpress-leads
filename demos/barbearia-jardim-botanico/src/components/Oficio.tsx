import { SERVICES } from "../data/site.ts";

export function Oficio() {
  return (
    <section className="section oficio" id="oficio">
      <div className="wrap">
        <p className="kicker">Ofício</p>
        <h2 className="section-title">Não é lista da Felizardo.</h2>
        <p className="lead">
          Quando alguém pesquisa o nome, o Google ainda entrega avaliação de terceiro. Esta
          página é a casa: horários, o ponto, o WhatsApp de agenda.
        </p>
        <div className="oficio-grid">
          {SERVICES.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
