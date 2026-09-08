import { useReveal } from "../hooks/useReveal";

export function Suco() {
  const ref = useReveal();

  return (
    <section className="section suco" id="suco">
      <div className="wrap suco-grid reveal" ref={ref}>
        <div className="suco-photo">
          <img
            src="/fotos/suco.jpg"
            alt="Suco de laranja na jarra do liquidificador, café e torrada na mesa da Lanchera"
          />
          <div className="suco-badge">Na jarra do liquidificador</div>
        </div>
        <div className="suco-copy">
          <p className="section-kicker">A marca da casa</p>
          <h2 className="section-title">Suco na jarra.</h2>
          <p>
            Não vem em copo de vitrine. Vem na jarra do liquidificador, batido na hora, grosso de
            fruta — laranja, manga, a mistura que o garçom grita da cozinha.
          </p>
          <p>
            Quem atravessa a Redenção e senta no 1086 pede isso. Rende uns três copos. É o suco
            que Porto Alegre aponta quando fala da Lanchera.
          </p>
          <blockquote>“Sai um suco de laranja!”</blockquote>
        </div>
      </div>
    </section>
  );
}
