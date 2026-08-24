import type { Project, Service } from "../types";

export const projects: Project[] = [
  {
    slug: "la-fuga-siargao",
    fileName: "La_Fuga_Siargao.tsx",
    title: { en: "La Fuga Siargao", es: "La Fuga Siargao", ca: "La Fuga Siargao" },
    description: {
      en: "A single-page hotel booking website.",
      es: "Un sitio web de reserva de hotel de una sola página.",
      ca: "Un lloc web de reserva d'hotel d'una sola pàgina.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    image: "assets/1.png",
    url: "https://gemps18.github.io/La-Fuga-Hotel/",
  },
  {
    slug: "analytics-dashboard",
    fileName: "Analytics_Dashboard.tsx",
    title: { en: "Analytics Dashboard", es: "Panel de Análisis", ca: "Tauler d'Anàlisi" },
    description: {
      en: "An analytics dashboard with a light-to-dark theme toggle.",
      es: "Un panel de análisis con alternancia de tema claro a oscuro.",
      ca: "Un tauler d'anàlisi amb alternança de tema clar a fosc.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    image: "assets/2.png",
    url: "https://gemps18.github.io/Light-to-Dark-Dashboard/",
  },
  {
    slug: "art-gallery-landing",
    fileName: "Art_Gallery.tsx",
    title: { en: "Art Gallery Landing Page", es: "Landing Page de Galería de Arte", ca: "Landing Page de Galeria d'Art" },
    description: {
      en: "An art gallery landing page.",
      es: "Una landing page para una galería de arte.",
      ca: "Una landing page per a una galeria d'art.",
    },
    stack: ["HTML", "CSS"],
    image: "assets/3.png",
    url: "https://gemps18.github.io/Art-Gallery-Landing-Page/",
  },
  {
    slug: "education-platform",
    fileName: "Education_Platform.tsx",
    title: { en: "Online Educational Landing Page", es: "Landing Page Educativa Online", ca: "Landing Page Educativa en Línia" },
    description: {
      en: "An educational landing page design.",
      es: "Un diseño de landing page educativa.",
      ca: "Un disseny de landing page educativa.",
    },
    stack: ["HTML", "CSS"],
    image: "assets/4.png",
    url: "https://gemps18.github.io/Education-Platform-Landing-Page/",
  },
  {
    slug: "music-streaming",
    fileName: "Music_Streaming.tsx",
    title: { en: "Music Streaming Webpage", es: "Página Web de Streaming de Música", ca: "Pàgina Web d'Streaming de Música" },
    description: {
      en: "A music streaming webpage design.",
      es: "Un diseño de página web de streaming de música.",
      ca: "Un disseny de pàgina web d'streaming de música.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
    image: "assets/5.png",
    url: "https://gemps18.github.io/Music-Streaming-Platform/",
  },
  {
    slug: "task-tracker",
    fileName: "Task_Tracker.tsx",
    title: { en: "Task Tracker", es: "Seguimiento de Tareas", ca: "Seguiment de Tasques" },
    description: {
      en: "A simple task tracker webpage.",
      es: "Una página web sencilla para el seguimiento de tareas.",
      ca: "Una pàgina web senzilla per al seguiment de tasques.",
    },
    stack: ["HTML", "CSS"],
    image: "assets/6.png",
    url: "https://gemps18.github.io/Task-Tracker/",
  },
  {
    slug: "jardineria-putxet",
    fileName: "Jardineria_Putxet.tsx",
    title: { en: "Jardineria Putxet", es: "Jardineria Putxet", ca: "Jardineria Putxet" },
    description: {
      en: "A redesign of a garden shop with React.",
      es: "Un rediseño de una tienda de jardinería con React.",
      ca: "Un redisseny d'una botiga de jardineria amb React.",
    },
    stack: ["JavaScript", "React", "Vite", "Tailwind CSS"],
    image: "assets/7.png",
    url: "https://gemps18.github.io/Jardineria_Putxet/",
  },
  {
    slug: "queviures-murria",
    fileName: "Queviures_Murria.tsx",
    title: { en: "Queviures Murria", es: "Queviures Murria", ca: "Queviures Murria" },
    description: {
      en: "A redesign of a restaurant & charcuterie shop with React.",
      es: "Un rediseño de un restaurante y tienda de charcutería con React.",
      ca: "Un redisseny d'un restaurant i botiga de xarcuteria amb React.",
    },
    stack: ["JavaScript", "React", "Vite", "Zustand"],
    image: "assets/8.png",
    url: "https://gemps18.github.io/Queviures_Murria/",
  },
  {
    slug: "ivori-barcelona",
    fileName: "Ivori_Barcelona.tsx",
    title: { en: "Ivori Barcelona", es: "Ivori Barcelona", ca: "Ivori Barcelona" },
    description: {
      en: "A redesign of a clothes shop with React.",
      es: "Un rediseño de una tienda de ropa con React.",
      ca: "Un redisseny d'una botiga de roba amb React.",
    },
    stack: ["JavaScript", "React", "Vite", "Tailwind CSS"],
    image: "assets/9.png",
    url: "https://gemps18.github.io/Ivori_Barcelona/",
  },
];

export const services: Service[] = [
  {
    fileName: "web-development.md",
    title: { en: "Web Development", es: "Desarrollo Web", ca: "Desenvolupament Web" },
    description: {
      en: "Front-end and back-end development with React, JavaScript, HTML, CSS, Python, Django, REST APIs, SQL, and MongoDB to build scalable, high-performance web applications.",
      es: "Desarrollo front-end y back-end con React, JavaScript, HTML, CSS, Python, Django, APIs REST, SQL y MongoDB para crear aplicaciones web escalables y de alto rendimiento.",
      ca: "Desenvolupament front-end i back-end amb React, JavaScript, HTML, CSS, Python, Django, APIs REST, SQL i MongoDB per crear aplicacions web escalables i d'alt rendiment.",
    },
  },
  {
    fileName: "ui-ux-design.md",
    title: { en: "UI/UX Designing", es: "Diseño UI/UX", ca: "Disseny UI/UX" },
    description: {
      en: "Intuitive, visually engaging, user-centered interfaces designed in Figma, combining design thinking with front-end expertise to keep every screen responsive and accessible.",
      es: "Interfaces intuitivas y visualmente atractivas centradas en el usuario, diseñadas en Figma, combinando pensamiento de diseño con experiencia front-end para mantener cada pantalla responsive y accesible.",
      ca: "Interfícies intuïtives i visualment atractives centrades en l'usuari, dissenyades a Figma, combinant pensament de disseny amb experiència front-end per mantenir cada pantalla responsive i accessible.",
    },
  },
  {
    fileName: "app-development.md",
    title: { en: "Application Development", es: "Desarrollo de Aplicaciones", ca: "Desenvolupament d'Aplicacions" },
    description: {
      en: "Scalable web and mobile applications with React, React Native, Python, and Django, backed by robust REST APIs, SQL, and MongoDB, shipped with Docker and CI/CD pipelines.",
      es: "Aplicaciones web y móviles escalables con React, React Native, Python y Django, respaldadas por APIs REST robustas, SQL y MongoDB, desplegadas con Docker y pipelines de CI/CD.",
      ca: "Aplicacions web i mòbils escalables amb React, React Native, Python i Django, recolzades per APIs REST robustes, SQL i MongoDB, desplegades amb Docker i pipelines de CI/CD.",
    },
  },
];