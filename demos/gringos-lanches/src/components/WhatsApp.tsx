import { WA_DEFAULT } from "../data/site";

export function WhatsApp() {
  return (
    <a className="float-wa" href={WA_DEFAULT} target="_blank" rel="noreferrer">
      Pedir no WhatsApp
    </a>
  );
}
