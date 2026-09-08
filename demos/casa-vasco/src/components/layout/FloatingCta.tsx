import { business } from "@/data/business";

export function FloatingCta() {
  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-[#06210f] shadow-lg md:right-6 md:bottom-6"
      aria-label="WhatsApp Casa Vasco"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.4c.1-.2 0-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3s-.9.9-.9 2.1.9 2.5 1 2.6a11.8 11.8 0 0 0 4.5 3.6c1.7.6 2.3.5 3.1.4.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3s-.2-.2-.5-.3z" />
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
      </svg>
    </a>
  );
}
