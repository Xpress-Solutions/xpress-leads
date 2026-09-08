import { useReveal } from "../hooks/useReveal";

export function Musica() {
  const ref = useReveal();

  return (
    <section className="section musica" id="musica">
      <div className="wrap musica-grid reveal" ref={ref}>
        <div className="musica-photo">
          <img
            src="/fotos/musica.jpg"
            alt="Música ao vivo no salão de madeira do Anticuário"
          />
        </div>
        <div>
          <p className="section-kicker">En vivo</p>
          <h2 className="section-title">Violão no salão, mesa apertada.</h2>
          <p className="section-lead">
            Casa pequena, 60 lugares, luz baixa. Sextas, sábados e também às quintas e
            domingos o salão vira encontro — banda em três idiomas, donos que cantam,
            cliente que puxa a música.
          </p>
          <div className="chalkboard" style={{ marginTop: 22 }}>
            <p>Abrimos cuando llegamos.</p>
            <p>Cerramos cuando nos vamos.</p>
            <small>Plaquinha da casa · em espanhol, como o resto</small>
          </div>
        </div>
      </div>
    </section>
  );
}
