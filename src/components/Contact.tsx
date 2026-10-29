import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../i18n/LanguageContext";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          {t.contact.heading}
        </h2>
        <p className="mt-4 text-slate">{t.contact.description}</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4 text-left">
          <div>
            <label htmlFor="name" className="font-mono text-xs text-slate">
              {t.contact.name}
            </label>
            <input
              id="name"
              required
              disabled={isSending}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded border border-line bg-ink-soft px-4 py-3 text-paper outline-none focus:border-signal disabled:opacity-60"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-xs text-slate">
              {t.contact.email}
            </label>
            <input
              id="email"
              type="email"
              required
              disabled={isSending}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded border border-line bg-ink-soft px-4 py-3 text-paper outline-none focus:border-signal disabled:opacity-60"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-xs text-slate">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              disabled={isSending}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded border border-line bg-ink-soft px-4 py-3 text-paper outline-none focus:border-signal disabled:opacity-60"
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="w-full rounded bg-signal px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {isSending ? t.contact.sending : t.contact.send}
          </button>

          {status === "success" && (
            <p className="text-center font-mono text-xs text-signal-dim">{t.contact.success}</p>
          )}
          {status === "error" && (
            <p className="text-center font-mono text-xs text-red-400">{t.contact.error}</p>
          )}
        </form>
      </div>
    </section>
  );
}