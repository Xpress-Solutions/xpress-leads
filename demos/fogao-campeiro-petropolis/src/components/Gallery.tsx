import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  {
    src: "/fotos/fachada.jpg",
    alt: "Fachada verde-limão e azul do casarão na Av. Lageado, 1265",
    cap: "O casarão 1265 — verde, azul e o número na porta.",
  },
  {
    src: "/fotos/buffet.jpg",
    alt: "Buffet com panelas de ferro, feijoada e carreteiro sobre piso parquet",
    cap: "Panelas no parquet: feijoada, carreteiro, carne de panela.",
  },
  {
    src: "/fotos/lousa.jpg",
    alt: "Lousa do salão com a frase A melhor comida campeira e caseira",
    cap: "A frase da casa, em giz, sob a moldura de 1950.",
  },
  {
    src: "/fotos/doces.jpg",
    alt: "Mesa de sobremesas do buffet: bolo na travessa, gelatina e cremes",
    cap: "Sobremesa de avó — bolo na travessa incluso.",
  },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa em foto</p>
        <h2 className="section-title">Lageado, por dentro.</h2>
        <p className="section-lead">
          Fotos do casarão e do buffet publicadas pelo Jornal do Comércio
          (Nathan Lemos, abril de 2025).
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
