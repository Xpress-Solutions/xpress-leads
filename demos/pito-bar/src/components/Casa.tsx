import { SITE } from "../data/site.ts";

export function Casa() {
  return (
    <section className="section casa" id="casa">
      <div className="wrap">
        <p className="kicker">A esquina</p>
        <h2 className="display" style={{ fontSize: "clamp(2.8rem, 8vw, 5rem)" }}>
          o mesmo cantinho
        </h2>
        <div className="casa-grid">
          <div className="casa-photo">
            <img
              src="/fotos/casa.jpg"
              alt="Salão do Pito: concreto, esquadria vermelha e casa cheia na Mariante"
              width={2000}
              height={1332}
            />
          </div>
          <div className="casa-copy">
            <p>{SITE.identity}</p>
            <p>
              Reabriu no mesmo ponto, com o mesmo letreiro vermelho e a calçada de sempre. Pagode,
              gente boa, xis novo no cardápio e a casa funcionando todos os dias.
            </p>
            <ul>
              <li>Esquina Mariante × Liberdade — Rio Branco, colado no Petrópolis.</li>
              <li>Porta de enrolar aberta, mesa na calçada, movimento depois das 23h.</li>
              <li>Música no salão: pagode, samba e DJ. Sem pose de restaurante.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
