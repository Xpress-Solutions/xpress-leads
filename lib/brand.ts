export type BrandMood =
  | "boteco-raiz"
  | "armazem-familiar"
  | "premium-casual"
  | "artesanal"
  | "urbano-noturno"
  | "tradicional-gaucho"
  | "limpo-servico";

export type BrandIdentity = {
  /** Mesmo id do lead em data/leads.ts */
  leadId: string;
  name: string;
  /** Como a marca se apresenta (1 frase) */
  positioning: string;
  mood: BrandMood;
  /** Palavras que o site deve “soar” */
  voice: string[];
  /** Palavras proibidas / clima a evitar */
  avoid: string[];
  colors: {
    /** Fundo dominante / atmosfera */
    background: string;
    /** Texto principal */
    foreground: string;
    /** Nome da marca / títulos */
    brand: string;
    /** CTA principal */
    accent: string;
    /** Superfícies (cards, painéis) */
    surface: string;
    /** Apoio / bordas */
    muted: string;
  };
  typography: {
    /** Display / nome da casa */
    display: string;
    /** Corpo */
    body: string;
    /** Por que essas fontes */
    rationale: string;
  };
  imagery: {
    /** O que as fotos devem mostrar */
    heroSubject: string;
    atmosphere: string[];
    /** Fontes públicas usadas (IG, Google, matérias) */
    references: Array<{ label: string; url: string }>;
  };
  ui: {
    /** radius: sharp | soft | mixed */
    radius: "sharp" | "soft" | "mixed";
    density: "compact" | "airy";
    heroStyle: "full-bleed" | "split" | "typographic";
  };
  /** Evidências que sustentam as escolhas */
  evidence: string[];
  /** Confiança 0–1 na leitura visual */
  confidence: number;
  researchedAt: string;
};
