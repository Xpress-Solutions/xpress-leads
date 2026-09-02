import { useReveal } from "../hooks/useReveal";

export function Casa() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap casa-grid reveal" ref={ref}>
        <div className="casa-copy">
          <p className="section-kicker">Cristiano Fischer, 1440</p>
          <h2 className="section-title">A terra, o fogo e o pátio.</h2>
          <p>
            A casa abriu em 2024 no lugar do antigo Pátio Bar, no Jardim do Salso. Fernando
            Martins ficou com o terreno rebaixado, o paisagismo e a arquitetura singular — da rua
            não se vê a avenida; entra-se numa clareira de pinheiro, palmeira e luz âmbar.
          </p>
          <p>
            Dentro, madeira escura, lenha empilhada e a parrilla com brasero de ferro. Fora, 300
            lugares sob as árvores. A missão da casa é a mesma do texto oficial: reunir gente à
            mesa e repetir o encontro.
          </p>
          <ul className="casa-points">
            <li>Parrilla à vista, chama no brasero</li>
            <li>Salão 280 · pátio 300</li>
            <li>Música ao vivo, drinks e carta de vinhos</li>
            <li>Jantar de semana · almoço de fim de semana</li>
          </ul>
        </div>
        <figure className="casa-photo">
          <img
            src="/fotos/salao.jpg"
            alt="Salão da Terra do Churrasco: mesas de madeira, pendentes âmbar e parrilla ao fundo"
          />
        </figure>
      </div>
    </section>
  );
}
