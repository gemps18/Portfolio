import { services } from "../data/projects";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="border-b border-line px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal origin="top">
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            My Services
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.fileName} origin="bottom" delay={i * 120}>
              <div className="h-full rounded-lg border border-line bg-ink-soft p-6 transition-colors hover:border-signal-dim hover:-translate-y-1">
                <h3 className="mt-3 font-display text-xl font-semibold text-paper">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}