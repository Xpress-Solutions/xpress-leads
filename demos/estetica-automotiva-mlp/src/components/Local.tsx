import { SITE } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Local() {
  return (
    <section id="onde" className="py-16 md:py-24">
      <div className="page-pad grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="mb-4 text-[0.7rem] tracking-[0.32em] text-[#c4121f] uppercase">Onde estamos</p>
          <h2 className="font-display text-[clamp(2.3rem,5vw,4.4rem)] leading-[0.9] font-semibold italic">
            Guilherme Alves, 299.
          </h2>
          <p className="mt-5 text-white/70">{SITE.address.full}</p>
          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="text-[0.65rem] tracking-[0.2em] text-[#c4121f] uppercase">WhatsApp</dt>
              <dd className="mt-1 text-lg">{SITE.phoneDisplay}</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] tracking-[0.2em] text-[#c4121f] uppercase">Loja</dt>
              <dd className="mt-1">
                {SITE.landlineDisplay}
                <span className="mx-2 text-[#c4121f]">·</span>
                {SITE.landlineAltDisplay}
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.maps}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-3 text-[0.68rem] tracking-[0.16em] uppercase transition hover:bg-white hover:text-[#0c0c0e]"
            >
              Como chegar
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-5 py-3 text-[0.68rem] tracking-[0.16em] uppercase transition hover:bg-white hover:text-[#0c0c0e]"
            >
              {SITE.instagramHandle}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="min-h-[340px] overflow-hidden md:min-h-[460px]" style={{ borderRadius: "2.6rem 0.9rem 3.2rem 1.2rem" }}>
            <iframe
              title="Mapa da MLP na Rua Guilherme Alves"
              src={SITE.mapsEmbed}
              className="h-full min-h-[340px] w-full border-0 md:min-h-[460px]"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
