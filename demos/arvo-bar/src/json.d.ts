declare module "*.json" {
  const value: {
    leadId: string;
    name: string;
    positioning: string;
    mood: string;
    voice: string[];
    avoid: string[];
    colors: {
      background: string;
      foreground: string;
      brand: string;
      accent: string;
      surface: string;
      muted: string;
    };
    typography: {
      display: string;
      body: string;
      rationale: string;
    };
    imagery: {
      heroSubject: string;
      atmosphere: string[];
      references: Array<{ label: string; url: string }>;
    };
    ui: {
      radius: "sharp" | "soft" | "mixed";
      density: "compact" | "airy";
      heroStyle: "full-bleed" | "split" | "typographic";
    };
    evidence: string[];
    confidence: number;
    researchedAt: string;
  };
  export default value;
}
