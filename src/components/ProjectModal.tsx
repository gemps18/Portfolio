import { createPortal } from "react-dom";
import { useEffect } from "react";
import type { Project } from "../types";
import { useLanguage } from "../i18n/LanguageContext";
import { asset } from "../utils/asset";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { t, lang } = useLanguage();

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project.features) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/80 px-4 py-10 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl overflow-hidden rounded-lg border border-line-light bg-paper text-ink shadow-2xl"
      >
        <div className="flex items-center justify-end border-b border-line-light bg-paper-soft px-5 py-3">
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded p-1 text-slate-ink transition-colors hover:text-signal-dim"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto">
          {project.beforeImage ? (
            <div className="grid gap-px bg-line-light sm:grid-cols-2">
              <figure className="bg-paper">
                <figcaption className="px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-slate-ink">
                  {t.projects.before}
                </figcaption>
                <div className="aspect-video overflow-hidden bg-paper-soft">
                  <img
                    src={asset(project.beforeImage)}
                    alt={`${project.title[lang]} (${t.projects.before})`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </figure>
              <figure className="bg-paper">
                <figcaption className="px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-signal-dim">
                  {t.projects.after}
                </figcaption>
                <div className="aspect-video overflow-hidden bg-paper-soft">
                  <img
                    src={asset(project.image)}
                    alt={`${project.title[lang]} (${t.projects.after})`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </figure>
            </div>
          ) : (
            <div className="aspect-video w-full overflow-hidden bg-paper-soft">
              <img
                src={asset(project.image)}
                alt={`${project.title[lang]} preview`}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              {project.title[lang]}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-ink sm:text-base">
              {project.description[lang]}
            </p>

            {project.metrics && project.metrics.length > 0 && (
              <div className="mt-6 flex flex-col divide-y divide-line-light overflow-hidden rounded-lg border border-line-light bg-paper-soft text-center sm:flex-row sm:divide-x sm:divide-y-0">
                {project.metrics.map((metric) => (
                  <div key={metric.label.en} className="flex-1 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-wide text-slate-ink">
                      {metric.label[lang]}
                    </p>
                    <p className="mt-1 font-display text-2xl font-semibold text-signal-dim">
                      {metric.value}
                      {metric.before && (
                        <span className="ml-1 font-body text-xs font-normal text-slate-ink">
                          ({t.projects.metricWas} {metric.before})
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6">
              <h4 className="font-mono text-xs uppercase tracking-wide text-signal-dim">
                {t.projects.featuresHeading}
              </h4>
              <ul className="mt-3 space-y-2">
                {project.features[lang].map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm leading-relaxed text-slate-ink">
                    <span className="text-signal-dim">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-line-light px-2 py-0.5 font-mono text-[11px] text-slate-ink"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="rounded bg-signal px-5 py-2.5 font-mono text-xs font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                {t.projects.visitSite}
              </a>
              {project.originalUrl && (
                <a
                  href={project.originalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-line-light px-5 py-2.5 font-mono text-xs text-slate-ink transition-colors hover:border-signal-dim hover:text-signal-dim"
                >
                  {t.projects.originalSite}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}