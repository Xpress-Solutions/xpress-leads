import { GALLERY } from "@/data/site";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

const SHAPES = [
  "1.8rem 0.6rem 2.4rem 0.8rem",
  "0.7rem 2.2rem 0.7rem 2.6rem",
  "2.4rem 2.4rem 0.8rem 0.8rem",
  "0.8rem 2.8rem 2.2rem 0.8rem",
  "3rem 0.6rem 1.2rem 2.4rem",
  "1rem 3rem 1rem 3rem",
  "2.6rem 1rem 2.6rem 1rem",
] as const;

export function Galeria() {
  return (
    <section id="galeria" className="bg-[#161618] py-16 md:py-24">
      <div className="page-pad mb-10">
        <Reveal>
          <p className="mb-3 text-[0.7rem] tracking-[0.32em] text-[#c4121f] uppercase">Galeria de fotos</p>
          <h2 className="font-display max-w-xl text-[clamp(2.3rem,5.5vw,4.2rem)] leading-[0.92] font-semibold italic">
            O que entra na oficina.
          </h2>
        </Reveal>
      </div>

      <div className="gallery-rail flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-[max(1.25rem,calc((100vw-1180px)/2))]">
        {GALLERY.map((shot, index) => (
          <Reveal
            key={shot.src}
            delay={index * 70}
            className={`shot w-[82vw] shrink-0 snap-center sm:w-[55vw] md:w-auto ${
              index === 1 || index === 4 ? "md:mt-12" : index === 2 || index === 5 ? "md:mt-6" : ""
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[5/6]" style={{ borderRadius: SHAPES[index] }}>
              <Photo src={shot.src} alt={shot.alt} className="photo object-cover" sizes="(min-width: 768px) 32vw, 85vw" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
