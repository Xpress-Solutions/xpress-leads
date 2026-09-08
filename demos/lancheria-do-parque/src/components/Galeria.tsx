import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  {
    src: "/fotos/fachada.jpg",
    caption: "Toldo vermelho e o 1086 na pastilha",
    alt: "Fachada da Lancheria do Parque com toldo vermelho e número 1086",
  },
  {
    src: "/fotos/suco-cafe.jpg",
    caption: "Café, suco na jarra, mesa de granito",
    alt: "Suco na jarra e taça de café na mesa da Lanchera",
  },
  {
    src: "/fotos/historica.jpg",
    caption: "A Osvaldo, as palmeiras, o toldo",
    alt: "Lancheria do Parque na Avenida Osvaldo Aranha com palmeiras da Redenção",
  },
  {
    src: "/fotos/fachada-frente.jpg",
    caption: "Porta aberta para o corredor da casa",
    alt: "Entrada da Lancheria do Parque na esquina do Bom Fim",
  },
  {
    src: "/fotos/calcada.jpg",
    caption: "Calçada em frente à Redenção",
    alt: "Calçada da Osvaldo Aranha com o toldo da Lanchera e palmeiras do parque",
  },
  {
    src: "/fotos/interior.png",
    caption: "A sala: pastilha, cadeira, jarra",
    alt: "Salão da Lancheria do Parque visto dos fundos",
  },
];

export function Galeria() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa de verdade</p>
        <h2 className="section-title">O toldo, a jarra, o parque.</h2>
        <p className="section-lead">
          Fotos reais da Lanchera — fachada, suco e o salão que não mudou de ofício.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <p className="photo-credit">
          Fotos: Hedestad / Wikimedia Commons,{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="noreferrer">
            CC BY-SA 4.0
          </a>
          .
        </p>
      </div>
    </section>
  );
}
