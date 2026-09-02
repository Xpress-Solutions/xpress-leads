import { Croqueta } from "../components/Croqueta";
import { FinalCta } from "../components/FinalCta";
import { Hero } from "../components/Hero";
import { House } from "../components/House";
import { Location } from "../components/Location";
import { Reviews } from "../components/Reviews";
import { Taps } from "../components/Taps";

export function Home() {
  return (
    <main>
      <Hero />
      <Taps />
      <Croqueta />
      <House />
      <Reviews />
      <Location />
      <FinalCta />
    </main>
  );
}
