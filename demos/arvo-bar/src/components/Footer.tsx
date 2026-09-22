import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <strong style={{ color: "var(--brand)", fontFamily: "var(--display)", letterSpacing: "0.12em" }}>
            ARVO
          </strong>
          <p style={{ margin: "6px 0 0" }}>
            {SITE.address.full}
            <br />
            {SITE.hoursLead}
          </p>
        </div>
        <div>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            {SITE.instagramHandle}
          </a>
          <br />
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
        </div>
      </div>
    </footer>
  );
}
