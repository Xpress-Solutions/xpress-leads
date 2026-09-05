import { SITE } from "@/data/site";

export function FinalCta() {
  return (
    <section className="px-4 pb-16">
      <div
        className="wrap relative overflow-hidden rounded-[32px] px-6 py-16 md:px-14 md:py-20"
        style={{
          background:
            "radial-gradient(ellipse at 80% 0%, rgba(227,160,26,0.22), transparent 42%), #C80000",
        }}
      >
        <h2 className="font-display max-w-xl text-[clamp(2.6rem,8vw,5rem)] leading-[0.9] uppercase text-[#fff8f0]">
          Café da manhã na Dorival. Liga e pergunta o que tem hoje.
        </h2>
        <p className="mt-5 max-w-lg text-lg text-[#fff8f0]/85">
          {SITE.hoursLine}. Mesa no Centro de Gravataí — sem site até agora.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="btn !bg-[#fff8f0] !text-[color:var(--brand)]"
            href={`tel:${SITE.phoneTel}`}
          >
            Ligar {SITE.phoneDisplay}
          </a>
          <a
            className="btn btn-ghost !border-[#fff8f0]/40 !text-[#fff8f0]"
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
