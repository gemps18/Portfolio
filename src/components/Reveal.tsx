import { useEffect, useRef, useState, type ReactNode } from "react";

type Origin = "top" | "bottom" | "left" | "right";

const OFFSET: Record<Origin, string> = {
  top: "-translate-y-10",
  bottom: "translate-y-10",
  left: "-translate-x-10",
  right: "translate-x-10",
};

export default function Reveal({
  children,
  origin = "bottom",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  origin?: Origin;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${OFFSET[origin]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}