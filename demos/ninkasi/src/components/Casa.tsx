import { WEEK } from "../data/site";

export function Casa() {
  return (
    <section className="section casa" id="casa">
      <div className="wrap">
        <p className="kicker">A casa</p>
        <h2 className="display" style={{ fontSize: "clamp(2.2rem, 6vw, 3.6rem)" }}>
          Sinuca, karaokê e palco de mulher.
        </h2>
        <p className="lead">
          Nos fundos tem mesa de sinuca e pingue-pongue — e rola campeonato. Na rua, quando
          a João Alfredo pede, as mesas saem para a calçada. Cozinha com carne, vegana e
          vegetariana. Bolinho de feijão com couve e pizza vegetariana são da casa.
        </p>
        <div className="week">
          {WEEK.map((row) => (
            <div className="week-row" key={row.day}>
              <strong>{row.day}</strong>
              <div>
                {row.event}
                <span> — {row.detail}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="casa-photos">
          <img
            src="/fotos/mural.jpg"
            alt="Mural da deusa Ninkasi com lúpulo, cevada e gato preto na fachada"
          />
          <img
            src="/fotos/fachada.jpg"
            alt="Fachada do Ninkasi Bar com a equipe em frente ao mural Sapatista e DaLuz"
          />
        </div>
      </div>
    </section>
  );
}
