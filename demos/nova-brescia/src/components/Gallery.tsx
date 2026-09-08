import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const SHOTS = [
  { src: "/fotos/fachada.jpg", cap: "A esquina: toldo vermelho, 1359 no pilar" },
  { src: "/fotos/xis-coracao.jpg", cap: "Xis coração — o mais pedido" },
  { src: "/fotos/xis-maos.jpg", cap: "Montagem na mão, do tamanho da fome" },
  { src: "/fotos/xis-corte.jpg", cap: "Corte do xis: carne, queijo, ovo, salada" },
  { src: "/fotos/xis-prato.jpg", cap: "No prato, com a batata no ponto" },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa</p>
        <h2 className="section-title">Fachada, chapa, xis.</h2>
        <p className="section-lead">
          Fotos da lancheria — a esquina à noite e o lanche que o letreiro já mostra.
        </p>
        <div className="gallery-grid">
          {SHOTS.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.cap} />
              <figcaption>{shot.cap}</figcaption>
            </figure>
          ))}
        </div>
        <p style={{ marginTop: 18 }}>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Mais no Instagram {SITE.instagramHandle} →
          </a>
        </p>
      </div>
    </section>
  );
}
