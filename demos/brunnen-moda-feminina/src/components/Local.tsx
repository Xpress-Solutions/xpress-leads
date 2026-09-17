import { SITE } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Local() {
  return (
    <section id="onde" className="py-16 md:py-28">
      <div className="page-pad grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-4 text-[0.7rem] tracking-[0.32em] text-[#c4a574] uppercase">Onde</p>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.92]">Padre Chagas, 242.</h2>
          <p className="mt-5 max-w-md text-[#171411]/72">{SITE.address.full}</p>
          <dl className="mt-9 space-y-4 text-sm">
            <div>
              <dt className="text-[0.65rem] tracking-[0.22em] text-[#c4a574] uppercase">Horário</dt>
              <dd className="mt-1">{SITE.hoursLabel}</dd>
              <dd className="mt-1 text-[#8a7f74]">{SITE.hoursNote}</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] tracking-[0.22em] text-[#c4a574] uppercase">Contato</dt>
              <dd className="mt-1">
                WhatsApp {SITE.phoneDisplay}
                <span className="mx-2 text-[#c4a574]">·</span>
                Loja {SITE.landlineDisplay}
              </dd>
              <dd className="mt-1">{SITE.email}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.maps}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#171411]/15 px-5 py-3 text-[0.68rem] tracking-[0.16em] uppercase transition hover:border-[#171411] hover:bg-[#171411] hover:text-white"
            >
              Como chegar
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#171411]/15 px-5 py-3 text-[0.68rem] tracking-[0.16em] uppercase transition hover:border-[#171411] hover:bg-[#171411] hover:text-white"
            >
              {SITE.instagramHandle}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="min-h-[340px] overflow-hidden shadow-[0_30px_70px_rgba(23,20,17,0.12)] md:min-h-[460px]"
            style={{ borderRadius: "2.8rem 1rem 3.4rem 1.4rem" }}
          >
            <iframe
              title="Mapa da Brunnen na Padre Chagas"
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
