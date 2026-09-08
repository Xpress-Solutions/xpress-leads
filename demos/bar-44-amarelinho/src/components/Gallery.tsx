import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  { src: "/fotos/fachada-dia.jpg", alt: "Fachada amarela e mesas na calçada da Assis Brasil" },
  { src: "/fotos/balcao.jpg", alt: "Balcão com potes de infusão e parede de tijolo amarelo" },
  { src: "/fotos/charutinhos.jpg", alt: "Charutinhos Jalapeños do concurso 2026" },
  { src: "/fotos/tijolo.jpg", alt: "Tijolo amarelo e clima de boteco no salão" },
  { src: "/fotos/sala.jpg", alt: "Salão com placas e mesa de madeira" },
  { src: "/fotos/musica.jpg", alt: "Música ao vivo no Amarelinho" },
  { src: "/fotos/milanesa.jpg", alt: "Prato de almoço com milanesa e massa" },
  { src: "/fotos/fachada-noite.jpg", alt: "Fachada amarela à noite com o 44 no vão" },
];

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa em foto</p>
        <h2 className="section-title">Fachada, balcão, prato.</h2>
        <p className="section-lead">
          Fotos públicas da casa — Restaurant Guru e o petisco do circuito 2026. O dia a dia
          atual está no Instagram.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Instagram {SITE.instagramHandle} →
        </a>
      </div>
    </section>
  );
}
