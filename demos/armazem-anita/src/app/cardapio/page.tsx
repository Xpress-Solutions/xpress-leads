import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { CardapioSection } from "@/components/sections/CardapioSection";
import { MobileBar } from "@/components/layout/MobileBar";

export const metadata: Metadata = {
  title: "Cardápio | Armazém Anita — Jardim Botânico, Porto Alegre",
  description:
    "Cardápio do Armazém Anita: café, padaria, lanches, pratos, churrasquinho, chopes, cervejas e drinks. Jardim Botânico, Porto Alegre.",
};

export default function CardapioPage() {
  return (
    <>
      <header className="bg-anita-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link href="/">
            <Image
              src={images.logo}
              alt="Armazém Anita"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-white/70 transition-colors hover:text-anita-orange"
          >
            ← Voltar ao início
          </Link>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-8 md:px-6">
          <h1 className="font-display text-4xl tracking-wide text-white uppercase md:text-5xl">
            Cardápio
          </h1>
          <p className="mt-2 text-white/60">
            Preços demonstrativos onde indicado — confirmar com o estabelecimento.
          </p>
        </div>
      </header>

      <main>
        <CardapioSection showAll />
      </main>

      <MobileBar />
    </>
  );
}
