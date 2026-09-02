const SHOTS = [
  {
    src: "/fotos/hero.jpg",
    alt: "Pilar mostarda da Pinhos com letreiro gótico, estrela e guitarras no salão.",
  },
  {
    src: "/fotos/deliciaporo.jpg",
    alt: "Deliciaporo 2026 — petisco da Pinhos no Comida di Buteco. Foto Israh Ramos.",
  },
  {
    src: "/fotos/triobom.jpg",
    alt: "Trio Bom, petisco da Pinhos no Comida di Buteco 2024. Foto Israh Ramos / G1.",
  },
  {
    src: "/fotos/salao.jpg",
    alt: "Salão da Botecaria em Canoas, com o dono Carlos Alberto Pinho.",
  },
] as const;

export function Galeria() {
  return (
    <section className="section" id="galeria">
      <div className="wrap">
        <p className="kicker">A casa, de verdade</p>
        <h2 className="section-title">Pilar, petisco, salão.</h2>
        <p className="section-lead">
          Interior de 2025, pratos do concurso e o salão na TV. Nenhuma foto de
          banco.
        </p>
        <div className="shots">
          {SHOTS.map((shot) => (
            <figure className="shot" key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
