import { SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="pb-10">
      <div className="page-pad flex flex-col gap-6 border-t border-[#171411]/10 pt-10 text-sm text-[#8a7f74] md:flex-row md:items-end md:justify-between">
        <div>
          <strong className="font-display text-3xl font-medium tracking-[0.28em] text-[#171411]">BRUNNEN</strong>
          <p className="mt-2 max-w-xs">
            Demo Xpress · {SITE.fullName} · {SITE.address.neighborhood}
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-[#171411]">
            Instagram
          </a>
          <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-[#171411]">
            Facebook
          </a>
          <a href={`tel:${SITE.phoneTel}`} className="hover:text-[#171411]">
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </footer>
  );
}
