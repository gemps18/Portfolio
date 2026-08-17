export interface Project {
  slug: string;
  fileName: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  url: string;
}

export interface Service {
  fileName: string;
  title: string;
  description: string;
}
