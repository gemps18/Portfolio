const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-paper"
        >
          C-Gemperle<span className="text-signal">.</span>dev
        </a>
        <ul className="hidden items-center gap-8 font-mono text-sm text-slate md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative py-1 transition-colors hover:text-signal after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-signal after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded border border-signal px-4 py-2 font-mono text-xs text-signal transition-colors hover:bg-signal hover:text-ink"
        >
          Get In Touch
        </a>
      </nav>
    </header>
  );
}
