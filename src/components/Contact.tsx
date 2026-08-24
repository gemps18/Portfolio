import { useLanguage } from "../i18n/LanguageContext";
import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useLanguage();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Opens the visitor's mail client pre-filled with their message.
    // Swap this for a form service (Formspree, EmailJS, etc.) if you'd
    // rather receive submissions without relying on a mail client.
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:gemps18@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="px-6 py-24">
      <Reveal origin="bottom" className="mx-auto max-w-2xl text-center">
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          {t.contact.heading}
        </h2>
        <p className="mt-4 text-slate">
          {t.contact.description}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="font-mono text-xs text-slate"
            >
              {t.contact.name}
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded border border-line bg-ink-soft px-4 py-3 text-paper outline-none focus:border-signal"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="font-mono text-xs text-slate"
            >
              {t.contact.email}
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded border border-line bg-ink-soft px-4 py-3 text-paper outline-none focus:border-signal"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="font-mono text-xs text-slate"
            >
              {t.contact.message}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded border border-line bg-ink-soft px-4 py-3 text-paper outline-none focus:border-signal"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            {t.contact.send}
          </button>
        </form>
      </Reveal>
    </section>
  );
}
