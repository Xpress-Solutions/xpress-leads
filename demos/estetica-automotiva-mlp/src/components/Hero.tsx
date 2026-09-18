import { SITE } from "@/data/site";
import { Photo } from "@/components/Photo";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Photo
          src="/fotos/oficina-1.jpg"
          alt=""
          priority
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(12,12,14,0.92)_0%,rgba(12,12,14,0.55)_42%,rgba(12,12,14,0.18)_78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0c0c0e] to-transparent" />
      </div>

      <p className="pointer-events-none absolute top-1/2 left-5 hidden -translate-y-1/2 text-[0.62rem] tracking-[0.42em] text-white/45 uppercase [writing-mode:vertical-rl] rotate-180 xl:block">
        Desde {SITE.since} · {SITE.address.neighborhood}
      </p>

      <div className="hero-copy relative z-10 flex min-h-[100svh] max-w-[40rem] flex-col justify-end px-5 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-20">
        <p className="mb-4 text-[0.7rem] tracking-[0.36em] text-[#e8b4b8] uppercase">
          {SITE.address.neighborhood} · Porto Alegre
        </p>
        <h1 className="font-display text-[clamp(5rem,18vw,9.5rem)] leading-[0.78] font-extrabold tracking-tight italic">
          MLP
        </h1>
        <p className="font-display mt-4 text-3xl font-medium tracking-wide text-white md:text-4xl">
          {SITE.tagline}
        </p>
        <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-white/70">{SITE.line}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-red rounded-full bg-[#97000e] px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.14em] text-white uppercase"
          >
            Gostaria de fazer um orçamento
          </a>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="rounded-full border border-white/25 px-6 py-3.5 text-[0.72rem] tracking-[0.14em] uppercase transition hover:border-white hover:bg-white/10"
          >
            Ligar
          </a>
        </div>
      </div>
    </section>
  );
}
