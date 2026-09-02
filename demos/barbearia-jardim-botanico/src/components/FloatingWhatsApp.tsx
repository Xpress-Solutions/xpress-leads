import { SITE } from "../data/site.ts";

export function FloatingWhatsApp() {
  return (
    <a
      className="float"
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar no WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l6-1.6A11 11 0 0 0 21 12a10.8 10.8 0 0 0-.5-8.5ZM12 20.2a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.5.9.9-3.4-.2-.3A9.2 9.2 0 1 1 12 20.2Zm5-6.9c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.2l-.8 1c-.1.2-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5l-.6-1.5c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c-.1-.1-.3-.2-.6-.3Z" />
      </svg>
    </a>
  );
}
