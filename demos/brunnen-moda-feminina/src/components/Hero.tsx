import { SITE } from "@/data/site";
import { Photo } from "@/components/Photo";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Photo
          src="/fotos/hero.png"
          alt=""
          priority
          className="object-cover object-[72%_center] md:object-[68%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(23,20,17,0.88)_0%,rgba(23,20,17,0.52)_38%,rgba(23,20,17,0.08)_72%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#171411]/50 to-transparent" />
      </div>

      <p className="pointer-events-none absolute top-1/2 left-4 hidden -translate-y-1/2 text-[0.62rem] tracking-[0.48em] text-white/55 uppercase [writing-mode:vertical-rl] rotate-180 xl:block">
        {SITE.address.neighborhood} · {SITE.address.city}
      </p>

      <div className="hero-copy relative z-10 flex min-h-[100svh] w-full max-w-[38rem] flex-col justify-end px-5 pb-16 pt-28 text-left text-white sm:px-10 lg:px-16 lg:pb-20">
        <p className="mb-5 text-[0.7rem] tracking-[0.38em] text-[#c4a574] uppercase">
          Boutique · {SITE.address.neighborhood}
        </p>
        <h1 className="font-display text-[clamp(4.2rem,16vw,8.8rem)] leading-[0.78] font-medium tracking-[-0.03em]">
          Brunnen
        </h1>
        <p className="font-display mt-5 text-2xl italic text-white/92 md:text-3xl">{SITE.tagline}</p>
        <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-white/72 md:text-base">{SITE.line}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-gold rounded-full bg-[#c4a574] px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.16em] text-[#171411] uppercase"
          >
            Comprar no WhatsApp
          </a>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="rounded-full border border-white/30 px-6 py-3.5 text-[0.72rem] tracking-[0.16em] uppercase transition hover:border-white hover:bg-white/10"
          >
            Ligar
          </a>
        </div>
      </div>
    </section>
  );
}
