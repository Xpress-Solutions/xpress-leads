import { SITE } from "@/data/site";

const items = [
  { label: "Desde", value: SITE.founded },
  { label: "Google", value: `${SITE.rating} · ${SITE.reviewsCount}` },
  { label: "Bom Gourmet 2025", value: "Bar e Boteco" },
  { label: "Carta", value: "Indicação drinks" },
];

export function Proof() {
  return (
    <section className="border-y border-[color:var(--line)] bg-[color:var(--surface)]">
      <div className="wrap grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-[0.68rem] tracking-[0.2em] text-[color:var(--muted)] uppercase">
              {item.label}
            </p>
            <p className="font-display mt-2 text-2xl text-[color:var(--brand)] md:text-[1.7rem]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
