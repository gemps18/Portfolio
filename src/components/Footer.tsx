export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-slate md:flex-row">
        <p>© {new Date().getFullYear()} Carlos Gemperle. All rights reserved.</p>
        <a href="#home" className="hover:text-signal">
          ↑ back to top
        </a>
      </div>
    </footer>
  );
}
