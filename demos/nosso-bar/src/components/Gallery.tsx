const SHOTS = [
  {
    src: "/fotos/xis-parmegiana.jpg",
    alt: "Xis à parmegiana do Nosso Bar sobre mesa de madeira",
    cap: "Xis à parmegiana · divulgação da casa / JC",
  },
  {
    src: "/fotos/pastel-vento.jpg",
    alt: "Pastel de Vento em cesto de vime, Comida di Buteco 2026",
    cap: "Pastel de Vento · Israh Ramos",
  },
  {
    src: "/fotos/sushi-hot.jpg",
    alt: "Sushi Hot Campeiro do Nosso Bar, Comida di Buteco 2024",
    cap: "Sushi Hot Campeiro 2024 · Israh Ramos / G1",
  },
] as const;

export function Gallery() {
  return (
    <section className="section gallery" id="galeria">
      <div className="wrap">
        <p className="section-kicker">A mesa</p>
        <h2 className="section-title">O que chega na frente.</h2>
        <p className="section-lead">
          Fotos da casa e do circuito — não é banco de imagem.
        </p>
        <div className="gallery-grid">
          {SHOTS.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
              <figcaption>{shot.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
