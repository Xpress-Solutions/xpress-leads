import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="pb-10">
      <div className="page-pad flex flex-col gap-5 border-t border-white/10 pt-10 text-sm text-[#8a8580] md:flex-row md:items-end md:justify-between">
        <div>
          <strong className="font-display text-4xl font-extrabold tracking-tight text-white italic">MLP</strong>
          <p className="mt-2 max-w-xs">
            Demo Xpress · {SITE.fullName} · {SITE.address.neighborhood}
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
            Instagram
          </a>
          <a href={`tel:${SITE.phoneTel}`} className="hover:text-white">
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
