import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { MobileBar } from "@/components/MobileBar";
import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Treatments } from "@/components/Treatments";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Treatments />
        <About />
        <Reviews />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
