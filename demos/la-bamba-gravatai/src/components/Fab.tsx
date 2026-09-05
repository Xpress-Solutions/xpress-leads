import { SITE } from "@/data/site";

export function Fab() {
  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      className="fixed right-4 bottom-4 z-30 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--accent)] text-[#fff8f0] shadow-[var(--shadow)] md:hidden"
      aria-label={`Ligar ${SITE.phoneDisplay}`}
    >
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.9 3 3.4 3.4 3 4 3h3.5c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.6.1.4 0 .7-.2 1L6.6 10.8z"
        />
      </svg>
    </a>
  );
}
