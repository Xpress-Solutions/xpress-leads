import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";
import { site } from "@/data/site";

export function Croqueflor() {
  return (
    <section id="croqueflor" className="bg-surface">
      <div className="mosaic-rule" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-28">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={images.croqueflor}
            alt="Croqueflor — croquete panko da Pinacoteca Café no Comida di Buteco 2026. Foto: Israh Ramos"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div>
          <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-accent uppercase">
            Comida di Buteco 2026
          </p>
          <h2 className="font-display mt-3 text-5xl leading-none text-foreground md:text-6xl">
            Croqueflor
          </h2>
          <p className="mt-5 max-w-md text-foreground/80">
            Croquete empanado em panko, recheado de creme de couve-flor e muçarela derretida.
            Acompanha vinagrete e aioli de tomate seco. O petisco da edição — e o papel do prato
            ainda carrega o logo da casa.
          </p>
          <p className="mt-4 text-sm text-muted">
            Circuito Porto Alegre e Canoas · R$ 40 no concurso · foto Israh Ramos / Sabores do Sul
          </p>
          <div className="mt-8">
            <Button href={site.whatsapp}>Pedir mesa no WhatsApp</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
