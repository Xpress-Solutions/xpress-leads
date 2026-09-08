import { SITE } from "../data/site.ts";

export function Strip() {
  return (
    <section className="strip" aria-label="Dados da casa">
      <div className="wrap strip-grid">
        <div>
          <b>Onde</b>
          <span>{SITE.street}</span>
        </div>
        <div>
          <b>Quando</b>
          <span>Ter–sex de manhã à noite · sáb até 17h</span>
        </div>
        <div>
          <b>Nota</b>
          <span>5,0 no Booksy · 128 avaliações</span>
        </div>
        <div>
          <b>Quem</b>
          <span>Pepeu e Côco na cadeira</span>
        </div>
      </div>
    </section>
  );
}
