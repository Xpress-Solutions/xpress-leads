import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Agenda() {
  const ref = useReveal();

  return (
    <section className="section agenda" id="agenda">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Programa da noite</p>
          <h2 className="section-title">O palco não apaga.</h2>
          <p className="section-lead">
            Velha guarda e nova cena no mesmo banquinho. A casa só abre com artista no palco —
            confirme a atração e reserve mesa.
          </p>
        </div>
        <div className="ag-grid">
          <article className="ag-card ag-mpb">
            <div>
              <p className="ag-day">Noite no sobrado</p>
              <h3>MPB, samba e choro</h3>
              <p>
                Clássicos no ar: Chico, Lupicínio, Adoniram, bossa e samba de raiz. Nito ainda
                sobe com voz e violão.
              </p>
            </div>
            <a className="btn btn-primary" href={SITE.instagram} target="_blank" rel="noreferrer">
              Ver quem toca
            </a>
          </article>
          <article className="ag-card ag-feijoada">
            <div>
              <p className="ag-day">Sábado · almoço</p>
              <h3>Feijoada com samba</h3>
              <p>
                O ritual da casa. Almoço de sábado com samba no palco — a mesa que o bairro
                disputa.
              </p>
            </div>
            <a className="btn btn-primary" href="#feijoada">
              Reservar o sábado
            </a>
          </article>
          <article className="ag-card ag-teatro">
            <div>
              <p className="ag-day">Desde 2017</p>
              <h3>Teatro na mesa</h3>
              <p>
                Espetáculos do Porto Verão Alegre, saraus e exposições — jantar e peça no mesmo
                sobrado, à moda do Prata.
              </p>
            </div>
            <a className="btn btn-ghost" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Perguntar a peça
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
