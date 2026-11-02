export type Lang = "en" | "es" | "ca";

export interface LocalizedText {
  en: string;
  es: string;
  ca: string;
}
export interface LocalizedList {
  en: string[];
  es: string[];
  ca: string[];
}

export interface Metric {
  label: LocalizedText;
  value: string;
  before?: string;
}
export interface Project {
  slug: string;
  fileName: string;
  title: LocalizedText;
  description: LocalizedText;
  stack: string[];
  image: string;
  url: string;
  features?: LocalizedList;
  originalUrl?: string;
  beforeImage?: string;
  metrics?: Metric[];
}

export interface Service {
  fileName: string;
  title: LocalizedText;
  description: LocalizedText;
}
