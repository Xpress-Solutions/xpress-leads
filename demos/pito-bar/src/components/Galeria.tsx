const SHOTS = [
  {
    src: "/fotos/esquina.jpg",
    alt: "Fachada noturna do Pito na esquina da Mariante com a Liberdade",
  },
  {
    src: "/fotos/salao.jpg",
    alt: "Salão lotado visto de cima — concreto, luz do caixa e porta de aço",
  },
  {
    src: "/fotos/calcada.jpg",
    alt: "Calçada cheia em frente ao letreiro pito, noite de pagode",
  },
] as const;

export function Galeria() {
  return (
    <section className="section galeria" id="galeria">
      <div className="wrap">
        <p className="kicker">A casa, de verdade</p>
        <h2 className="display" style={{ fontSize: "clamp(2.8rem, 8vw, 5rem)" }}>
          calçada e salão
        </h2>
        <p className="lead">Fotos da esquina — GZH / Agência RBS. Sem banco de imagem.</p>
        <div className="gal-grid">
          {SHOTS.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt} width={2000} height={1332} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
