import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  { src: "/fotos/chopp.jpg", alt: "Chope gelado em copos de vidro", tall: true },
  { src: "/fotos/petiscos.jpg", alt: "Mesa com petiscos e comida de boteco" },
  { src: "/fotos/tijolada.jpg", alt: "Prato em destaque da casa" },
  { src: "/fotos/ambiente.jpg", alt: "Salão interno do boteco", tall: true },
  { src: "/fotos/feijoada.jpg", alt: "Feijoada servida em tigela" },
  { src: "/fotos/drinks.jpg", alt: "Drinks e coquetéis do bar" },
  { src: "/fotos/externo.jpg", alt: "Mesas em área externa" },
  { src: "/fotos/amigos.jpg", alt: "Pessoas reunidas à mesa" },
  { src: "/fotos/karaoke.jpg", alt: "Noite de karaokê" },
];

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Galeria</p>
        <h2 className="section-title">O clima do Vitória.</h2>
        <p className="section-lead">
          Ambiente, comida, chope e gente. Fotos de referência da demo — o Instagram da casa
          tem o dia a dia real.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Veja mais no Instagram →
        </a>
      </div>
    </section>
  );
}
