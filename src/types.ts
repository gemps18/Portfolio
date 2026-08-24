export type Lang = "en" | "es" | "ca";

export interface LocalizedText {
  en: string;
  es: string;
  ca: string;
}
export interface Project {
  slug: string;
  fileName: string;
  title: LocalizedText;
  description: LocalizedText;
  stack: string[];
  image: string;
  url: string;
}

export interface Service {
  fileName: string;
  title: LocalizedText;
  description: LocalizedText;
}
