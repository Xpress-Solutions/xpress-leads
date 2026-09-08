import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  { src: "/fotos/fachada.jpg", alt: "Fachada verde-musgo e letreiro SOTAQUE na esquina" },
  { src: "/fotos/hero.jpg", alt: "Esquina da Protásio Alves ao entardecer" },
  { src: "/fotos/janelao.jpg", alt: "Interior com pé-direito alto e luz nos janelões" },
  { src: "/fotos/sala.jpg", alt: "Concreto, madeira e luminárias industriais" },
  { src: "/fotos/pass.jpg", alt: "Grade de vidro canelado da cozinha" },
  { src: "/fotos/pilar.jpg", alt: "Janelão aberto e mesas na calçada" },
  { src: "/fotos/balcao.jpg", alt: "Balcão, prateleiras e luz âmbar" },
];

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Os janelões</p>
        <h2 className="section-title">A casa, de verdade.</h2>
        <p className="section-lead">
          Fotos do projeto da Butiá — a esquina, o concreto, o tijolo e a calçada.
          O dia a dia está no Instagram.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
        <p className="gallery-credit">Fotos Roberta Gewehr · Butiá Arquitetura, 2022</p>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Mais no {SITE.instagramHandle} →
        </a>
      </div>
    </section>
  );
}
