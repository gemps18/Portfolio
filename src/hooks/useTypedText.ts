import { useEffect, useState } from "react";

interface UseTypedTextOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
}

export function useTypedText({
  strings,
  typeSpeed = 70,
  backSpeed = 40,
  backDelay = 1000,
}: UseTypedTextOptions) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(strings[0]);
      return;
    }

    const current = strings[wordIndex % strings.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), backDelay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      const next = isDeleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(next), isDeleting ? backSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, strings, typeSpeed, backSpeed, backDelay, prefersReducedMotion]);

  return text;
}