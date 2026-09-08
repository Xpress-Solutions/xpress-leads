import { useReveal } from "../hooks/useReveal";

export function Turnos() {
  const ref = useReveal();

  return (
    <section className="section turnos" id="turnos">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">Dois expedientes</p>
        <h2 className="section-title">Almoço de avenida. Jantar na casa.</h2>
        <p className="section-lead">
          A Clamar não é rodízio de fim de semana. As listagens públicas marcam dois turnos
          no 1044 — o almoço de quem trabalha na Azenha e o jantar de quem volta ao bairro.
        </p>
        <div className="turno-grid">
          <article className="turno">
            <div>
              <time>Seg–sáb · 12h–15h</time>
              <h3>Almoço</h3>
              <p>
                Prato de carne no meio do expediente da avenida. Ótica, colchão, móvel — o
                comércio da Azenha para, come e volta. Sem espeto de hotel.
              </p>
            </div>
          </article>
          <article className="turno turno-jantar">
            <div>
              <time>Seg–sáb · 19h–23h</time>
              <h3>Jantar</h3>
              <p>
                A mesma porta, outra luz. Salão com toalha creme, cadeira de madeira, o que
                saiu da brasa. Domingo fechado.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
