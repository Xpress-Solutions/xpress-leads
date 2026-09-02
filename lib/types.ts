export type Category =
  | "gastronomia"
  | "beleza"
  | "automotivo"
  | "comercio"
  | "casa-obra";

export type Priority = "alta" | "media";

export type Source = {
  label: string;
  url: string;
};

export type Lead = {
  id: string;
  name: string;
  category: Category;
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
