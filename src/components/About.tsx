import Reveal from "./Reveal";

const SKILLS = [
  "React", "React Native", "JavaScript", "TypeScript", "Python", "Django",
  "REST APIs", "SQL", "MongoDB", "Docker", "Kubernetes", "CI/CD", "Figma",
];

export default function About() {
  return (
    <section id="about" className="border-b border-line-light bg-paper px-6 py-24 text-ink">
      <Reveal origin="bottom" className="mx-auto max-w-4xl">
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Full-Stack Software Developer
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-ink">
          I'm a full-stack developer with strong proficiency across the web
          stack — building robust front ends, back ends, and everything in
          between using HTML, CSS, SQL, MongoDB, and object-relational
          mapping. I specialize in cloud-native development with Docker,
          Kubernetes, and CI/CD pipelines, and apply UI/UX best practices
          through Figma to build scalable, user-centric products.
        </p>
        <div className="mt-10 flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded border border-line-light bg-paper-soft px-3 py-1 font-mono text-xs text-slate-ink"
            >
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}