import { SITE } from "@/data/site";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

export function Colecao() {
  return (
    <section id="colecao" className="overflow-hidden py-16 md:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-0">
        <Reveal className="page-pad lg:pr-12 xl:pr-20">
          <p className="mb-4 text-[0.7rem] tracking-[0.32em] text-[#c4a574] uppercase">Da semana</p>
          <h2 className="font-display max-w-lg text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.95]">
            Leveza e elegância em uma composição versátil.
          </h2>
          <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-[#171411]/72">
            O conjunto azul de caimento fluido pode ser usado completo ou com as peças separadas. Para os dias
            mais frescos, um casaquinho por cima deixa o look ainda mais sofisticado — do jeito que a casa
            postou no Facebook.
          </p>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-8 inline-flex rounded-full bg-[#1a3354] px-6 py-3.5 text-[0.72rem] tracking-[0.16em] text-white uppercase"
          >
            Pedir no WhatsApp
          </a>
        </Reveal>

        <Reveal delay={120} className="relative mx-4 aspect-[4/5] max-h-[820px] min-h-[420px] overflow-hidden lg:mx-0 lg:mr-0 lg:aspect-auto lg:h-[min(82vh,760px)] lg:rounded-l-[4.5rem]">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ borderRadius: "1.4rem 3.8rem 1.4rem 4.6rem" }}
          >
            <Photo
              src="/fotos/look-azul.png"
              alt="Conjunto azul fluido da Brunnen"
              className="object-cover object-center"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
