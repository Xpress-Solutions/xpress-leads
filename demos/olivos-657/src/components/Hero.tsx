import { SITE } from "@/data/site";

export function Hero() {
  return (
    <section id="inicio" className="hero-glow relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-[12%] h-64 w-64 rounded-full bg-[color:var(--brand)]/10 blur-3xl" />
        <div className="absolute right-[8%] bottom-1/4 h-72 w-72 rounded-full bg-[color:var(--accent)]/12 blur-3xl" />
        <img
          src="/olive-mark.svg"
          alt=""
          className="absolute top-28 right-8 w-24 opacity-30 md:top-32 md:right-16 md:w-32"
        />
      </div>

      <div className="wrap relative z-10 w-full pb-28 pt-36 md:pb-24">
        <div className="animate-fade-up max-w-3xl">
          <p className="kicker">Cidade Baixa · Porto Alegre</p>
          <h1 className="mt-5 font-display leading-[0.88] text-[color:var(--foreground)]">
            <span className="block text-[clamp(4.4rem,14vw,9.5rem)] font-medium tracking-[-0.03em] italic">
              {SITE.headline}
            </span>
            <span className="mt-2 block font-display text-[clamp(2.8rem,8vw,5.5rem)] font-normal tracking-[0.28em] text-[color:var(--brand)]">
              {SITE.number}
            </span>
          </h1>
          <p className="mt-8 max-w-xl font-display text-2xl leading-snug text-[color:var(--foreground)]/90 italic md:text-3xl">
            {SITE.tagline}
          </p>
          <p className="section-lead mt-5">{SITE.subheadline}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Reservar no WhatsApp
            </a>
            <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
              Ligar {SITE.phoneDisplay}
            </a>
          </div>

          <p className="mt-8 text-sm tracking-wide text-[color:var(--muted)]">
            Qua–dom a partir das 18h30 · {SITE.years}
          </p>
        </div>
      </div>
    </section>
  );
}
