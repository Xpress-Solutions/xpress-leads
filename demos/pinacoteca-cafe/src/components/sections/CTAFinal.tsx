import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";
import { site } from "@/data/site";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={images.mosaico}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <h2 className="font-display max-w-[16ch] text-5xl leading-[0.9] md:text-7xl">
          Vem olhar o quadro e ficar para o Croqueflor.
        </h2>
        <p className="mt-5 max-w-lg text-foreground/80">
          Terça a domingo na República 409. Chama no WhatsApp ou liga para a casa.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={site.whatsapp}>WhatsApp</Button>
          <Button href={`tel:${site.phoneTel}`} variant="brand">
            Ligar
          </Button>
        </div>
      </div>
    </section>
  );
}
