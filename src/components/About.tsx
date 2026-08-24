import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const SKILLS = [
  "React", "React Native", "JavaScript", "TypeScript", "Python", "Django",
  "REST APIs", "SQL", "MongoDB", "Docker", "Kubernetes", "CI/CD", "Figma",
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-b border-line-light bg-paper px-6 py-24 text-ink">
      <Reveal origin="bottom" className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.about.label}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-ink">
          {t.about.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span key={skill} className="rounded border border-line-light bg-paper-soft px-3 py-1 font-mono text-xs text-slate-ink">
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}