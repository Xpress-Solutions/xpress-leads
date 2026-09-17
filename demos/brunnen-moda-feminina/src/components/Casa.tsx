import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";

export function Casa() {
  return (
    <section id="casa" className="overflow-hidden py-16 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="relative min-h-[380px] md:min-h-[560px]">
          <div className="relative h-[58vw] min-h-[340px] max-h-[640px] overflow-hidden md:h-[70vh] md:rounded-r-[5rem]">
            <Photo
              src="/fotos/loja.png"
              alt="Interior da boutique Brunnen"
              className="object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
          <div
            className="absolute right-[8%] -bottom-8 h-36 w-36 overflow-hidden border-[6px] border-[#f4ece3] shadow-[0_18px_40px_rgba(23,20,17,0.18)] md:right-[12%] md:h-44 md:w-44"
            style={{ borderRadius: "42% 58% 48% 52%" }}
          >
            <Photo src="/fotos/detalhe.png" alt="Detalhe de tecido azul" className="object-cover" sizes="180px" />
          </div>
        </Reveal>

        <Reveal delay={140} className="page-pad pb-8 lg:pl-4 lg:pr-[max(1.25rem,calc((100vw-1180px)/2))]">
          <p className="mb-4 text-[0.7rem] tracking-[0.32em] text-[#c4a574] uppercase">A casa</p>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.95]">Atual, real e consciente.</h2>
          <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-[#171411]/72">
            Assim é a cliente Brunnen: uma mulher contemporânea que busca qualidade. Na Padre Chagas, 242, a
            loja é ponto de Moinhos — não um e-commerce sem corpo. Escolha na loja ou peça pelo WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
