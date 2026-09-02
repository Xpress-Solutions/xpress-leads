const SHOTS = [
  {
    src: "/fotos/samba.jpg",
    alt: "Roda de samba no Terreiro: atabaque, pandeiro e cavaquinho",
    cap: "Samba na casa",
  },
  {
    src: "/fotos/torneiras.jpg",
    alt: "Torneira Cabocla com copo de chope na barra do Terreiro",
    cap: "Cabocla na torneira",
  },
  {
    src: "/fotos/copo.jpg",
    alt: "Copo ceva e axé com as fitas do Bonfim ao fundo",
    cap: "Ceva & axé",
  },
  {
    src: "/fotos/ceva-axe.jpg",
    alt: "Cavaquinho, letreiro Samba Ceva e Axé e copo americano na mesa",
    cap: "Mesa da casa",
  },
  {
    src: "/fotos/hero.jpg",
    alt: "Interior do Terreiro com atabaques e o logo no painel",
    cap: "Atabaques",
  },
  {
    src: "/fotos/cabocla.jpg",
    alt: "Cerveja Cabocla servida no Terreiro",
    cap: "Chope da casa",
  },
] as const;

export function Gallery() {
  return (
    <section className="section" id="galeria">
      <div className="wrap">
        <p className="kicker">A atmosfera</p>
        <h2 className="section-title">A casa, não um stock.</h2>
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
