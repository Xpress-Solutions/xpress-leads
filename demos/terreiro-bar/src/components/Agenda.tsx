import { SITE } from "../data/site";

export function Agenda() {
  return (
    <section className="section agenda" id="agenda">
      <div className="wrap">
        <p className="kicker">agEnDa</p>
        <h2 className="section-title">Samba no fim de semana.</h2>
        <p className="section-lead">
          {SITE.hoursLead} Confirme a atração da noite no {SITE.instagramHandle}.
        </p>
        <div className="ev-grid">
          {SITE.agenda.map((item) => (
            <article className="ev" key={item.title}>
              <small>{item.when}</small>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
