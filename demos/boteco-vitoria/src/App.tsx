import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { FloatingCta } from "./components/FloatingCta";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Cardapio } from "./pages/Cardapio";
import { Home } from "./pages/Home";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title =
      pathname === "/cardapio"
        ? "Cardápio | Boteco Vitória — Jardim Botânico"
        : "Boteco Vitória | Bar no Jardim Botânico — Porto Alegre";

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const timer = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 60);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <ScrollManager />
      <div id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
      </div>
      <Footer />
      <FloatingCta />
    </>
  );
}
