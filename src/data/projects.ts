import type { Project, Service } from "../types";

export const projects: Project[] = [
  {
    slug: "la-fuga-siargao",
    fileName: "La_Fuga_Siargao.tsx",
    title: "La Fuga Siargao",
    description: "A single-page hotel booking website.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "assets/1.png",
    url: "https://gemps18.github.io/La-Fuga-Hotel/",
  },
  {
    slug: "analytics-dashboard",
    fileName: "Analytics_Dashboard.tsx",
    title: "Analytics Dashboard",
    description: "An analytics dashboard with a light-to-dark theme toggle.",
    stack: ["HTML", "CSS","JavaScript"],
    image: "assets/2.png",
    url: "https://gemps18.github.io/Light-to-Dark-Dashboard/",
  },
  {
    slug: "art-gallery-landing",
    fileName: "Art_Gallery.tsx",
    title: "Art Gallery Landing Page",
    description: "An art gallery landing page.",
    stack: ["HTML", "CSS"],
    image: "assets/3.png",
    url: "https://gemps18.github.io/Art-Gallery-Landing-Page/",
  },
  {
    slug: "education-platform",
    fileName: "Education_Platform.tsx",
    title: "Online Educational Landing Page",
    description: "An educational landing page design.",
    stack: ["HTML", "CSS"],
    image: "assets/4.png",
    url: "https://gemps18.github.io/Education-Platform-Landing-Page/",
  },
  {
    slug: "music-streaming",
    fileName: "Music_Streaming.tsx",
    title: "Music Streaming Webpage",
    description: "A music streaming webpage design.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "assets/5.png",
    url: "https://gemps18.github.io/Music-Streaming-Platform/",
  },
  {
    slug: "task-tracker",
    fileName: "Task_Tracker.tsx",
    title: "Task Tracker",
    description: "A simple task tracker webpage.",
    stack: ["HTML", "CSS"],
    image: "assets/6.png",
    url: "https://gemps18.github.io/Task-Tracker/",
  },
  {
    slug: "jardineria-putxet",
    fileName: "Jardineria_Putxet.tsx",
    title: "Jardineria Putxet",
    description: "A redesign of a garden shop with React.",
    stack: ["JavaScript", "React", "Vite", "Tailwind CSS"],
    image: "assets/7.png",
    url: "https://gemps18.github.io/Jardineria_Putxet/"
  },
  {
    slug: "queviures-murria",
    fileName: "Queviures_Murria.tsx",
    title: "Queviures Murria",
    description: "A redesign of a restaurant & charcuterie shop with React.",
    stack: ["JavaScript", "React", "Vite", "Zustand"],
    image: "assets/8.png",
    url: "https://gemps18.github.io/Queviures_Murria/"
  },
  {
    slug: "ivori-barcelona",
    fileName: "Ivori_Barcelona.tsx",
    title: "Ivori Barcelona",
    description: "A redesign of a clothes shop with React.",
    stack: ["JavaScript", "React", "Vite", "Tailwind CSS"],
    image: "assets/9.png",
    url: "https://gemps18.github.io/Ivori_Barcelona/"
  },
];

export const services: Service[] = [
  {
    fileName: "web-development.md",
    title: "Web Development",
    description:
      "Front-end and back-end development with React, JavaScript, HTML, CSS, Python, Django, REST APIs, SQL, and MongoDB to build scalable, high-performance web applications.",
  },
  {
    fileName: "ui-ux-design.md",
    title: "UI/UX Designing",
    description:
      "Intuitive, visually engaging, user-centered interfaces designed in Figma, combining design thinking with front-end expertise to keep every screen responsive and accessible.",
  },
  {
    fileName: "app-development.md",
    title: "Application Development",
    description:
      "Scalable web and mobile applications with React, React Native, Python, and Django, backed by robust REST APIs, SQL, and MongoDB, shipped with Docker and CI/CD pipelines.",
  },
];
