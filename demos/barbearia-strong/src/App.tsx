import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <Home />
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
