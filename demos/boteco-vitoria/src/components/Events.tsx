import { Link } from "react-router-dom";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Events() {
  const ref = useReveal();

  return (
    <section className="section events" id="eventos">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Toda semana</p>
          <h2 className="section-title">Toda semana tem motivo pra vir.</h2>
        </div>
        <div className="ev-grid">
          <article className="ev-card ev-card-1">
            <div>
              <p className="ev-day">Quarta-feira</p>
              <h3>Quarta é dia de karaokê 🎤</h3>
              <p>Toda quarta o microfone está aberto. Você não paga nada para cantar.</p>
            </div>
            <a className="btn btn-primary" href={SITE.instagram} target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </article>
          <article className="ev-card ev-card-2">
            <div>
              <p className="ev-day">Sábado</p>
              <h3>Sábado tem feijoada 🍲</h3>
              <p>Feijoada de boteco para começar o sábado do jeito certo.</p>
            </div>
            <Link className="btn btn-primary" to="/cardapio">
              Ver detalhes
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
