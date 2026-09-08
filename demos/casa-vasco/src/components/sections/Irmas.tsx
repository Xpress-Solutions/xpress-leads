import Image from "next/image";
import { business } from "@/data/business";
import { images } from "@/data/images";

export function Irmas() {
  return (
    <section id="irmas" className="bg-plum-deep py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={images.irmas}
            alt="Larissa e Carolina Teixeira atrás do balcão da Casa Vasco, com vinhos e cachaças da casa"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">Mana e Nina</p>
          <h2 className="font-display mt-2 text-5xl leading-[0.95] text-foreground md:text-6xl">
            Duas irmãs.
            <br />
            Uma casinha.
          </h2>
          <p className="mt-6 text-lg text-foreground/85">
            Larissa é mestre destiladora — veio da cachaça e da Bitoca. Carolina é sommelier —
            descomplica o vinho sem tirar o gosto da descoberta. Em 2023 olharam o casarão na
            Vasco da Gama e perguntaram: vamos tentar?
          </p>
          <p className="mt-4 text-foreground/70">
            O lustre era da avó Lola. O quadro veio de viagem. Cada garrafa tem um produtor que
            elas foram atrás. O Bom Fim ganhou um armazém que parece casa porque é.
          </p>
          <ul className="mt-8 space-y-3 border-t border-foreground/10 pt-6 text-sm">
            <li>
              <span className="text-accent">Mana · </span>
              {business.sisters.larissa}
            </li>
            <li>
              <span className="text-accent">Nina · </span>
              {business.sisters.carolina}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
