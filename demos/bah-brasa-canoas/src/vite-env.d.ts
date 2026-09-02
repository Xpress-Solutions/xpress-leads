/// <reference types="vite/client" />

declare module "*.json" {
  const value: {
    leadId: string;
    name: string;
    colors: {
      background: string;
      foreground: string;
      brand: string;
      accent: string;
      surface: string;
      muted: string;
    };
  };
  export default value;
}
