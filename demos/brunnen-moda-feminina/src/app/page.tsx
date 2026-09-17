import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Colecao } from "@/components/Colecao";
import { Lookbook } from "@/components/Lookbook";
import { Casa } from "@/components/Casa";
import { Reviews } from "@/components/Reviews";
import { Local } from "@/components/Local";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Colecao />
        <Lookbook />
        <Casa />
        <Reviews />
        <Local />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
