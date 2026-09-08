import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  { src: "/fotos/picanha.jpg", alt: "Picanha no espeto servida no salão", caption: "Picanha no espeto" },
  { src: "/fotos/carving.jpg", alt: "Garçom fatiando o corte na mesa", caption: "Espeto na mesa" },
  { src: "/fotos/sala.jpg", alt: "Salão com toalha azul e serviço de rodízio", caption: "O salão da Bento" },
  { src: "/fotos/espeto.jpg", alt: "Espeto da casa sobre a toalha azul", caption: "O sabor que conquista" },
  { src: "/fotos/rodizio.jpg", alt: "Mesa posta com acompanhamentos e chopp", caption: "Almoço de domingo" },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa, não um banco de imagem</p>
        <h2 className="section-title">Fotos do salão e do espeto.</h2>
        <p className="section-lead">
          Frames oficiais do Instagram {SITE.instagramHandle} — o mesmo salão, a mesma toalha azul.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Ver mais no Instagram →
        </a>
      </div>
    </section>
  );
}
