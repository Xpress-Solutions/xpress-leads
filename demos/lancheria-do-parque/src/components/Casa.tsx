import { useReveal } from "../hooks/useReveal";

export function Casa() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap casa-grid reveal" ref={ref}>
        <div>
          <p className="section-kicker">Desde maio de 1982</p>
          <h2 className="section-title">Patrimônio afetivo.</h2>
          <p>
            A Lancheria do Parque abriu na Osvaldo Aranha e nunca saiu da frente da Redenção.
            Sobreviveu ao fim da noite do Bom Fim, virou cooperativa e continuou sendo o ponto
            onde a cidade se encontra sem pose.
          </p>
          <p>
            Corredor estreito, vitrine de doce, display antigo de preço, cadeira de madeira
            curva. Garçom anota no caderninho e solta o grito. Sem ar-condicionado. Sem frescura.
          </p>
          <ul className="casa-points">
            <li>Mesmo número desde 1982: Av. Osvaldo Aranha, 1086</li>
            <li>Cooperativa — a casa é de quem trabalha nela</li>
            <li>Pedido no grito, suco na jarra, xis no prato</li>
          </ul>
        </div>
        <div className="casa-photo">
          <img
            src="/fotos/interior.png"
            alt="Interior da Lancheria do Parque: mesas, cadeiras de madeira e suco na jarra"
          />
          <div className="casa-year">
            1982
            <small>Bom Fim · POA</small>
          </div>
        </div>
      </div>
    </section>
  );
}
