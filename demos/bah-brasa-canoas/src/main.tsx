import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { applyBrandToDocument } from "./data/brand.ts";
import "./index.css";

function Root() {
  useEffect(() => {
    applyBrandToDocument();
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
