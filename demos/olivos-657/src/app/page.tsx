import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { Carta } from "@/components/Carta";
import { Casa } from "@/components/Casa";
import { Sobre } from "@/components/Sobre";
import { Reviews } from "@/components/Reviews";
import { Localizacao } from "@/components/Localizacao";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Proof />
        <Carta />
        <Casa />
        <Sobre />
        <Reviews />
        <Localizacao />
        <CTAFinal />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
