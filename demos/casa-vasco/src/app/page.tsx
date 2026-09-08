import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCta } from "@/components/layout/FloatingCta";
import { Hero } from "@/components/sections/Hero";
import { Facts } from "@/components/sections/Facts";
import { Bodega } from "@/components/sections/Bodega";
import { Irmas } from "@/components/sections/Irmas";
import { Mesa } from "@/components/sections/Mesa";
import { Agenda } from "@/components/sections/Agenda";
import { Galeria } from "@/components/sections/Galeria";
import { Localizacao } from "@/components/sections/Localizacao";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Facts />
        <Bodega />
        <Irmas />
        <Mesa />
        <Agenda />
        <Galeria />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
