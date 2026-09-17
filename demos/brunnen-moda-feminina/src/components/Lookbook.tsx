import { LOOKS } from "@/data/site";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

export function Lookbook() {
  return (
    <section id="lookbook" className="bg-[#fff8f1] py-16 md:py-24">
      <div className="page-pad">
        <Reveal>
          <p className="mb-3 text-[0.7rem] tracking-[0.32em] text-[#c4a574] uppercase">Lookbook</p>
          <h2 className="font-display mb-10 max-w-xl text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95] md:mb-14">
            Peças para vestir, sentir e viver.
          </h2>
        </Reveal>
      </div>

      <div className="lookbook-rail flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:px-[max(1.25rem,calc((100vw-1180px)/2))] md:pb-0">
        {LOOKS.map((look, index) => (
          <Reveal
            key={look.title}
            delay={index * 110}
            className={`look-card w-[78vw] shrink-0 snap-center sm:w-[58vw] md:w-auto ${
              index === 1 ? "md:mt-16" : index === 2 ? "md:mt-8" : "md:mt-0"
            }`}
          >
            <article>
              <div
                className="relative aspect-[3/4] overflow-hidden"
                style={{ borderRadius: look.radius }}
              >
                <Photo
                  src={look.src}
                  alt={look.title}
                  className="photo object-cover"
                  sizes="(min-width: 768px) 30vw, 80vw"
                />
              </div>
              <h3 className="font-display mt-5 text-3xl leading-none">{look.title}</h3>
              <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-[#8a7f74]">{look.note}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
