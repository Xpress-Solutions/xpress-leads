import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src={images.hero}
        alt="Mesa de mosaico da Pinacoteca Café com o petisco da casa — Rua da República, Cidade Baixa"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,8,12,0.28) 0%, rgba(20,8,12,0.18) 32%, rgba(20,8,12,0.92) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-32 md:px-6 md:pb-20">
        <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.28em] text-accent uppercase animate-fade-up">
          {site.kicker}
        </p>
        <h1 className="font-display max-w-[12ch] text-[clamp(3.4rem,12vw,7.4rem)] leading-[0.86] text-foreground animate-fade-up">
          Pinacoteca Café
        </h1>
        <p className="mt-5 max-w-xl text-lg text-foreground/82 md:text-xl animate-fade-up">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
          <Button href={site.whatsapp}>WhatsApp</Button>
          <Button href={`tel:${site.phoneTel}`} variant="ghost">
            Ligar {site.phoneDisplay}
          </Button>
        </div>
        <p className="mt-6 text-sm text-accent">
          ★ {site.rating} no Google
          <span className="ml-2 font-normal text-foreground/70">{site.reviewsCount} avaliações</span>
        </p>
      </div>
    </section>
  );
}
