import Image from "next/image";
import { SITE } from "@/data/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-[calc(var(--nav-h)+32px)] md:items-center md:pb-24"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/cover.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(138,0,0,0.88) 0%, rgba(200,0,0,0.72) 42%, rgba(26,18,16,0.55) 100%), linear-gradient(180deg, rgba(26,18,16,0.15) 0%, rgba(26,18,16,0.55) 100%)",
          }}
        />
      </div>

      <div className="wrap relative z-10">
        <p className="kicker mb-5 !text-[#ffd28a]">
          <span className="h-px w-8 bg-[#ffd28a]" />
          {SITE.neighborhood}
        </p>
        <h1 className="font-display max-w-[10ch] text-[clamp(4.4rem,16vw,9.2rem)] leading-[0.82] tracking-[-0.02em] text-[#fff8f0] uppercase">
          {SITE.headline}
        </h1>
        <p className="mt-4 font-display text-[clamp(1.5rem,4vw,2.4rem)] uppercase tracking-wide text-[#ffd28a]">
          {SITE.subhead}
        </p>
        <p className="mt-5 max-w-xl text-lg text-[#fff8f0]/88 md:text-xl">
          {SITE.line}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-brand" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
          <a
            className="btn btn-ghost !border-[#fff8f0]/40 !text-[#fff8f0]"
            href="#cardapio"
          >
            Ver o que tem
          </a>
        </div>
        <p className="mt-6 text-sm font-semibold text-[#ffd28a]">
          ★ {SITE.rating} no Google
          <span className="ml-2 font-normal text-[#fff8f0]/75">
            · {SITE.reviewsCount} avaliações · {SITE.hoursLine}
          </span>
        </p>
      </div>
    </section>
  );
}
