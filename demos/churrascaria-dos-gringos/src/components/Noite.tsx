import { useReveal } from "../hooks/useReveal";

export function Noite() {
  const ref = useReveal();

  return (
    <section className="section noite" id="noite">
      <div className="wrap noite-grid reveal" ref={ref}>
        <div>
          <p className="section-kicker">À noite, pizza junto</p>
          <h2 className="section-title">O selo da casa já diz: churrasco e pizza.</h2>
          <p className="section-lead">
            De terça a sábado o jantar junta o espeto com rodízio de pizzas — salgadas e doces,
            gemada e chocolate branco inclusive. A bio do Instagram não enrola: rodízio de carnes
            e, à noite, a pizza entra na conversa.
          </p>
        </div>
        <div className="noite-photo">
          <img
            src="/fotos/pizza.jpg"
            alt="Peça oficial da casa: espeto de picanha e pizza lado a lado"
          />
        </div>
      </div>
    </section>
  );
}
