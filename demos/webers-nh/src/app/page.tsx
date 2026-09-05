import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { Hero } from "@/components/sections/Hero";
import { Buffet } from "@/components/sections/Buffet";
import { MesaAlema } from "@/components/sections/MesaAlema";
import { Sobre } from "@/components/sections/Sobre";
import { Avaliacoes } from "@/components/sections/Avaliacoes";
import { Localizacao } from "@/components/sections/Localizacao";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Buffet />
        <MesaAlema />
        <Sobre />
        <Avaliacoes />
        <Localizacao />
        <CTAFinal />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
