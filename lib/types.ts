export type Category =
  | "gastronomia"
  | "beleza"
  | "automotivo"
  | "comercio"
  | "casa-obra";

export type City =
  | "porto-alegre"
  | "canoas"
  | "gravatai"
  | "novo-hamburgo"
  | "sao-leopoldo";

export type Neighborhood =
  | "jardim-botanico"
  | "partenon"
  | "jardim-do-salso"
  | "rio-branco"
  | "santana"
  | "azenha"
  | "cidade-baixa"
  | "floresta"
  | "cristal"
  | "ipanema"
  | "centro-historico"
  | "jardim-itu"
  | "tristeza"
  | "boa-vista"
  | "passo-dareia"
  | "rubem-berta"
  | "restinga"
  | "vila-jardim"
  | "sao-joao"
  | "vila-ipiranga"
  | "vila-joao-pessoa"
  | "santa-rosa-de-lima"
  | "sao-luis-canoas"
  | "centro-canoas"
  | "marechal-rondon"
  | "centro-gravatai"
  | "barro-vermelho"
  | "rincao"
  | "centro-nh"
  | "centro-sl"
  | "sao-joao-sl";

export type Priority = "alta" | "media";

export type Source = {
  label: string;
  url: string;
};

export type Lead = {
  id: string;
  name: string;
  category: Category;
  city: City;
  neighborhood: Neighborhood;
  priority: Priority;
  score: number;
  address: string;
  mapsQuery: string;
  phone?: string;
  whatsapp?: string;
  instagram?: string;
  googleRating?: number;
  googleReviews?: number;
  founded?: string;
  identity: string;
  digitalGap: string;
  conversionWhy: string;
  approach: string;
  pitch: string;
  hours?: string;
  sources: Source[];
  notes?: string;
};

export type ExcludedBusiness = {
  name: string;
  reason: string;
  detail: string;
};
