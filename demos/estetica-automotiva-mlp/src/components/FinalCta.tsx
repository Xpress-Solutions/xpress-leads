import { SITE } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="px-4 pb-16 md:px-8">
      <Reveal>
        <div
          className="relative mx-auto max-w-[1180px] overflow-hidden bg-[#97000e] px-8 py-16 text-center md:px-20 md:py-24"
          style={{ borderRadius: "2.2rem 4rem 1.4rem 3.4rem" }}
        >
          <p className="mb-4 text-[0.7rem] tracking-[0.32em] text-white/70 uppercase">Fale conosco</p>
          <h2 className="font-display mx-auto max-w-3xl text-[clamp(2.4rem,6vw,5rem)] leading-[0.9] font-semibold italic">
            Gostaria de fazer um orçamento?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/80">
            Manda foto da peça no WhatsApp ou liga. A oficina atende na Guilherme Alves, 299.
          </p>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-[0.72rem] font-semibold tracking-[0.14em] text-[#97000e] uppercase"
          >
            WhatsApp {SITE.phoneDisplay}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
