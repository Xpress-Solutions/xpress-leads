const SHOTS = [
  {
    src: "/fotos/triobom.jpg",
    alt: "Trio Bom, petisco da Pinhos no Comida di Buteco 2024. Foto Israh Ramos / G1.",
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
