import { SITE } from "@/data/site";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

export function Oficina() {
  return (
    <section id="oficina" className="overflow-hidden py-16 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="relative min-h-[360px]">
          <div className="relative h-[56vw] min-h-[320px] max-h-[620px] overflow-hidden md:h-[68vh] md:rounded-r-[4.5rem]">
            <Photo src="/fotos/oficina-2.jpg" alt="Cabine de pintura da MLP" className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
          <div
            className="absolute right-[10%] -bottom-6 h-32 w-32 overflow-hidden border-[5px] border-[#0c0c0e] md:h-40 md:w-40"
            style={{ borderRadius: "46% 54% 48% 52%" }}
          >
            <Photo src="/fotos/servico-espelhamento.jpg" alt="Espelhamento automotivo" className="object-cover" sizes="180px" />
          </div>
        </Reveal>

        <Reveal delay={120} className="page-pad pb-6 lg:pl-2">
          <p className="mb-4 text-[0.7rem] tracking-[0.32em] text-[#c4121f] uppercase">A oficina</p>
          <h2 className="font-display text-[clamp(2.3rem,5vw,4.2rem)] leading-[0.92] font-semibold italic">
            Originalidade, rapidez, resultado.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-white/70">
            A MLP trabalha para preservar a originalidade do veículo, aliando rapidez e custo justo — o texto da
            casa, não de um template. Desde {SITE.since} em Porto Alegre: lanternagem, funilaria e pintura na{" "}
            {SITE.address.street}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
