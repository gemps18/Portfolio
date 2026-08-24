import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const ALL_FILTER = "all";

export default function Projects() {
  const { t } = useLanguage();

  const stacks = useMemo(() => {
    const unique = new Set<string>();
    projects.forEach((p) => p.stack.forEach((tech) => unique.add(tech)));
    return Array.from(unique).sort();
  }, []);

  const [activeFilter, setActiveFilter] = useState<string>(ALL_FILTER);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_FILTER) return projects;
    return projects.filter((p) => p.stack.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="border-b border-line-light bg-paper px-6 py-24 text-ink">
      <div className="mx-auto max-w-6xl">
        <Reveal origin="top">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.projects.heading}
          </h2>
        </Reveal>

        <Reveal origin="top" delay={100} className="mt-8 flex flex-wrap gap-2">
          {[ALL_FILTER, ...stacks].map((stack) => (
            <button
              key={stack}
              onClick={() => setActiveFilter(stack)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                activeFilter === stack
                  ? "border-signal-dim bg-signal-dim text-paper"
                  : "border-line-light bg-paper-soft text-slate-ink hover:border-signal-dim"
              }`}
            >
              {stack === ALL_FILTER ? t.projects.all : stack}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.slug} origin="bottom" delay={(i % 3) * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-10 font-mono text-sm text-slate-ink">{t.projects.empty}</p>
        )}
      </div>
    </section>
  );
}