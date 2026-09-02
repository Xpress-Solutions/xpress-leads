import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Focaccia } from "@/components/Focaccia";
import { Forno } from "@/components/Forno";
import { Casa } from "@/components/Casa";
import { Reviews } from "@/components/Reviews";
import { Local } from "@/components/Local";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Fab } from "@/components/Fab";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Focaccia />
        <Forno />
        <Casa />
        <Reviews />
        <Local />
        <FinalCta />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
