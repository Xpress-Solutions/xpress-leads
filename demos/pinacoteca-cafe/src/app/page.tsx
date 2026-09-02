import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { Navbar } from "@/components/layout/Navbar";
import { Avaliacoes } from "@/components/sections/Avaliacoes";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Cardapio } from "@/components/sections/Cardapio";
import { Casa } from "@/components/sections/Casa";
import { Croqueflor } from "@/components/sections/Croqueflor";
import { Galeria } from "@/components/sections/Galeria";
import { Hero } from "@/components/sections/Hero";
import { Localizacao } from "@/components/sections/Localizacao";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Croqueflor />
        <Casa />
        <Cardapio />
        <Galeria />
        <Avaliacoes />
        <Localizacao />
        <CTAFinal />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
