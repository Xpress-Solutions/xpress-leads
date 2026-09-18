import { SERVICES, SITE } from "@/data/site";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

export function Servicos() {
  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="page-pad">
        <Reveal>
          <p className="mb-3 text-[0.7rem] tracking-[0.32em] text-[#c4121f] uppercase">Produtos & serviços</p>
          <h2 className="font-display max-w-2xl text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.9] font-semibold italic">
            Do amassado ao verniz.
          </h2>
        </Reveal>
      </div>

      <div className="service-rail mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 md:mt-14 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-[max(1.25rem,calc((100vw-1180px)/2))]">
        {SERVICES.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 80}
            className={`shot w-[78vw] shrink-0 snap-center sm:w-[46vw] md:w-auto ${
              index % 2 === 1 ? "md:mt-10" : ""
            }`}
          >
            <article>
              <div className="relative aspect-[3/4] overflow-hidden" style={{ borderRadius: service.radius }}>
                <Photo src={service.src} alt={service.title} className="photo object-cover" sizes="(min-width: 768px) 18vw, 80vw" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 to-transparent" />
                <p className="font-display absolute bottom-4 left-4 right-4 text-2xl leading-none font-semibold italic">
                  {service.title}
                </p>
              </div>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-[#8a8580]">{service.note}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="page-pad mt-10">
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn-red inline-flex rounded-full bg-[#97000e] px-6 py-3.5 text-[0.72rem] tracking-[0.14em] text-white uppercase"
        >
          Pedir orçamento no WhatsApp
        </a>
      </div>
    </section>
  );
}
