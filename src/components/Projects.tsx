import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  const stacks = useMemo(() => {
    const unique = new Set<string>();
    projects.forEach((p) => p.stack.forEach((tech) => unique.add(tech)));
    return ["All", ...Array.from(unique).sort()];
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.stack.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="border-b border-line-light bg-paper px-6 py-24 text-ink">
      <div className="mx-auto max-w-6xl">
        <Reveal origin="top">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Latest Projects
          </h2>
        </Reveal>

        <Reveal origin="top" delay={100} className="mt-8 flex flex-wrap gap-2">
          {stacks.map((stack) => (
            <button
              key={stack}
              onClick={() => setActiveFilter(stack)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                activeFilter === stack
                  ? "border-signal-dim bg-signal-dim text-paper"
                  : "border-line-light bg-paper-soft text-slate-ink hover:border-signal-dim"
              }`}
            >
              {stack}
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
          <p className="mt-10 font-mono text-sm text-slate-ink">
            No projects match that filter yet.
          </p>
        )}
      </div>
    </section>
  );
}