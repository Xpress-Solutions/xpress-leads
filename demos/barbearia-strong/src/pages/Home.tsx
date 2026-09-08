import { About } from "../components/About";
import { FinalCta } from "../components/FinalCta";
import { Gallery } from "../components/Gallery";
import { Hero } from "../components/Hero";
import { Location } from "../components/Location";
import { QuickInfo } from "../components/QuickInfo";
import { Reviews } from "../components/Reviews";
import { Services } from "../components/Services";
import { Team } from "../components/Team";

export function Home() {
  return (
    <main>
      <Hero />
      <QuickInfo />
      <Services />
      <Team />
      <Gallery />
      <About />
      <Reviews />
      <Location />
      <FinalCta />
    </main>
  );
}
