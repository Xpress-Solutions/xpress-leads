import { SITE } from "@/data/site";

export function Fab() {
  return (
    <a
      href={SITE.whatsapp}
      className="fixed right-4 bottom-4 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-[#06210f] shadow-[var(--shadow)] md:hidden"
      aria-label="Abrir WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.5.1-.6.7-.7.8-.3.2-.5.1a6.6 6.6 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.3-1.6c-.1-.2 0-.4.1-.5l.4-.4.1-.3c0-.1 0-.3 0-.4s-.5-1.2-.7-1.6-.4-.4-.5-.4h-.4a.8.8 0 0 0-.6.3 2.4 2.4 0 0 0-.8 1.8 4.2 4.2 0 0 0 .9 2.2 9.6 9.6 0 0 0 3.7 3.3 12 12 0 0 0 1.3.5 3 3 0 0 0 1.4.1 2.3 2.3 0 0 0 1.5-1.1 1.9 1.9 0 0 0 .1-1.1c-.1 0-.2-.1-.4-.2z"
        />
      </svg>
    </a>
  );
}
