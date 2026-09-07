import Image from "next/image";
import { images } from "@/data/images";

export function Casa() {
  return (
    <section id="casa" className="bg-paper text-paper-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-28">
        <div>
          <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-brand uppercase">
            A casa
          </p>
          <h2 className="font-display mt-3 text-5xl leading-[0.92] md:text-6xl">
            Casarão vermelho, parede de quadro e mesa de mosaico.
          </h2>
          <p className="mt-6 text-lg text-paper-ink/78">
            Desde 2005 na Rua da República, 409. A Pinacoteca Café — também chamada Pinacoteca Bar
            — é galeria e balcão no mesmo casarão: fachada vermelho-cereja com friso branco,
            street art no térreo, teto pintado e mesas de mosaico.
          </p>
          <ul className="mt-8 space-y-3 text-paper-ink/85">
            <li className="border-l-2 border-brand pl-4">
              Exposições rotativas de artes plásticas e fotografia — um artista por vez nas paredes.
            </li>
            <li className="border-l-2 border-accent pl-4">
              Lounge, dois salões e calçada sob os jacarandás, quase ao lado da Sorveteria Jóia.
            </li>
            <li className="border-l-2 border-brand pl-4">
              Carta com mais de 40 cervejas artesanais, drinks, vinhos e o petisco do concurso.
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden">
            <Image
              src={images.fachada}
              alt="Fachada vermelho-oxblood do casarão na República 409"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.salao}
              alt="Salão com quadros e parede amarela de exposição"
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.patio}
              alt="Pátio com plantas e mural"
              fill
              className="object-cover"
              sizes="30vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
