import { SITE } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="px-4 pb-16 md:px-8">
      <Reveal>
        <div
          className="relative mx-auto max-w-[1180px] overflow-hidden bg-[#171411] px-8 py-16 text-center text-[#f4ece3] md:px-20 md:py-24"
          style={{ borderRadius: "2.4rem 4.2rem 1.6rem 3.6rem" }}
        >
          <p className="mb-4 text-[0.7rem] tracking-[0.32em] text-[#c4a574] uppercase">WhatsApp</p>
          <h2 className="font-display mx-auto max-w-3xl text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.9]">
            A próxima peça está na conversa.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/68">
            Manda mensagem — tamanho, ocasião ou o azul da semana. A loja atende.
          </p>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-9 inline-flex rounded-full bg-[#c4a574] px-8 py-3.5 text-[0.72rem] font-semibold tracking-[0.16em] text-[#171411] uppercase"
          >
            Falar com a Brunnen
          </a>
        </div>
      </Reveal>
    </section>
  );
}
