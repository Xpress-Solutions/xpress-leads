import { SITE } from "@/data/site";

export function FinalCta() {
  return (
    <section className="px-4 pb-16">
      <div
        className="wrap relative overflow-hidden rounded-[32px] px-6 py-16 md:px-14 md:py-20"
        style={{
          background:
            "radial-gradient(ellipse at 80% 0%, rgba(212,176,106,0.22), transparent 40%), #003364",
        }}
      >
        <h2 className="font-display max-w-xl text-[clamp(2.6rem,8vw,5rem)] leading-[0.9] text-[color:var(--brand)]">
          O pão do dia, sem passar pelo app de terceiro.
        </h2>
        <p className="mt-5 max-w-lg text-lg text-[color:var(--foreground)]/80">
          Encomenda de focaccia, horário e o endereço da Jacinto Gomes — direto
          com a casa.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-brand" href={SITE.whatsapp}>
            WhatsApp {SITE.phoneDisplay}
          </a>
          <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
            Ligar
          </a>
        </div>
      </div>
    </section>
  );
}
