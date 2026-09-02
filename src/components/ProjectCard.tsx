import { useState } from "react";
import type { Project } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { asset } from "../utils/asset";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }: { project: Project }) {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const hasDetails = Boolean(project.features);

  return (
    <>
      <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-line-light bg-paper text-ink transition-all hover:-translate-y-1 hover:border-signal-dim hover:shadow-xl">
        <div className="flex items-center justify-end border-b border-line-light bg-paper-soft px-4 py-2">
          <span className="font-mono text-xs text-signal-dim opacity-0 transition-opacity group-hover:opacity-100">
            {t.projects.open}
          </span>
        </div>

        
        <a href={project.url}
          target="_blank"
          rel="noreferrer"
          className="relative aspect-video w-full overflow-hidden bg-paper-soft"
        >
          <img
            src={asset(project.image)}
            alt={`${project.title[lang]} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/50">
            <span className="translate-y-3 rounded-full bg-paper p-3 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </span>
          </div>
        </a>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-semibold">{project.title[lang]}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-ink">{project.description[lang]}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded border border-line-light px-2 py-0.5 font-mono text-[11px] text-slate-ink">
                {tech}
              </span>
            ))}
          </div>

          {hasDetails && (
            <button
              onClick={() => setOpen(true)}
              className="mt-5 self-start font-mono text-xs text-signal-dim underline decoration-dotted underline-offset-4 transition-colors hover:text-signal"
            >
              {t.projects.seeMore}
            </button>
          )}
        </div>
      </div>

      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}