import { SITE } from "@/data/site";
import { LogoMark } from "@/components/LogoMark";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-[calc(var(--nav-h)+32px)] md:items-center md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-16 top-16 w-[min(92vw,560px)] opacity-[0.22] md:right-[-40px] md:top-10 md:opacity-[0.34]">
          <LogoMark className="h-auto w-full" title="" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(212,176,106,0.16), transparent 50%), linear-gradient(180deg, rgba(0,51,100,0.2) 0%, rgba(0,36,72,0.55) 48%, #00284d 100%)",
          }}
        />
        <svg
          className="absolute -bottom-10 left-[-8%] w-[70%] max-w-xl opacity-25"
          viewBox="0 0 420 180"
          aria-hidden="true"
        >
          <ellipse cx="210" cy="90" rx="200" ry="78" fill="#DFCA9E" />
          <ellipse cx="120" cy="70" rx="22" ry="16" fill="#003364" />
          <ellipse cx="190" cy="86" rx="34" ry="22" fill="#003364" />
          <ellipse cx="270" cy="64" rx="18" ry="14" fill="#003364" />
          <ellipse cx="310" cy="100" rx="24" ry="16" fill="#003364" />
          <ellipse cx="160" cy="118" rx="16" ry="12" fill="#003364" />
        </svg>
      </div>

      <div className="wrap relative z-10">
        <p className="kicker mb-5">
          <span className="h-px w-8 bg-[color:var(--brand)]" />
          {SITE.neighborhood}
        </p>
        <h1 className="font-display max-w-[11ch] text-[clamp(4.2rem,16vw,9rem)] leading-[0.82] tracking-[-0.03em] text-[color:var(--brand)]">
          {SITE.headline}
          <span className="mt-2 block text-[clamp(1.6rem,5vw,2.8rem)] font-medium italic leading-none text-[color:var(--foreground)]">
            {SITE.subhead}
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[color:var(--foreground)]/82 md:text-xl">
          {SITE.line}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-brand" href={SITE.whatsapp}>
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar {SITE.phoneDisplay}
          </a>
        </div>
        <p className="mt-6 text-sm font-semibold text-[color:var(--brand)]">
          ★ {SITE.rating} no Google
          <span className="ml-2 font-normal text-[color:var(--foreground)]/70">
            · fermentação natural · {SITE.priceRange}
          </span>
        </p>
      </div>
    </section>
  );
}
