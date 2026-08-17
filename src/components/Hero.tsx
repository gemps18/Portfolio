import Reveal from "./Reveal";
import { useTypedText } from "../hooks/useTypedText";

export default function Hero() {
  const role = useTypedText({
    strings: ["Full-Stack Software Developer", "Web Developer", "UI/UX Designer"],
  });

  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-center gap-14 border-b border-line px-6 pt-28 pb-16 md:flex-row md:items-center md:gap-10"
    >
      <Reveal origin="left" className="mx-auto max-w-xl md:mx-0">
        <p className="font-mono text-sm text-signal">Hey, I'm</p>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-paper sm:text-6xl">
          Carlos Gemperle
        </h1>
        <p className="mt-3 font-display text-2xl text-slate">
          {role}
          <span className="cursor-blink" />
        </p>
        <p className="mt-6 max-w-md text-base leading-relaxed text-slate">
          I build clean, scalable web and application solutions with a UI/UX
          designer's eye — from React front ends to Django-powered APIs,
          shipped through Docker and CI/CD pipelines.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          
            <a href="#projects"
            className="rounded bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>
          
            <a href="/assets/CV.pdf"
            className="rounded border border-line px-6 py-3 font-mono text-sm text-paper transition-colors hover:border-signal hover:text-signal"
          >
            Download CV
          </a>
        </div>
        <div className="mt-8 flex gap-5 font-mono text-sm text-slate">
          
            <a href="https://github.com/gemps18"
            target="_blank"
            rel="noreferrer"
            className="hover:text-signal"
          >
            Github
          </a>
          
            <a href="https://www.linkedin.com/in/gemps18/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-signal"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal origin="right" delay={150} className="mx-auto flex justify-center md:mx-0">
        <img
          src="/assets/Profile.jpg"
          alt="Carlos Gemperle"
          className="w-[80vw] rounded-[25%] border border-line object-cover shadow-2xl shadow-black/40 animate-float sm:w-[70vw] md:w-[25vw]"
        />
      </Reveal>
    </section>
  );
}