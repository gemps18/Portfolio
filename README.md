# Carlos Gemperle — Portfolio

A personal portfolio site rebuilt from a static HTML/CSS/JS template into a
React + TypeScript application.

## Features

- **Multilingual** — English, Spanish, and Catalan, switchable from a
  dropdown in the nav. Choice persists across visits (`localStorage`) and
  defaults to the visitor's browser language on first load.
- **Project filtering** — filter the project grid by tech stack (React,
  Vite, Tailwind CSS, etc.), with filter buttons generated automatically
  from whatever stacks appear in the project data.
- **Scroll-reveal animations** — sections and cards fade/slide into view
  as you scroll, staggered on grids (services, projects), and disabled
  automatically for visitors with `prefers-reduced-motion` set.
- **Typed rotating role text** — the hero subtitle cycles through role
  titles with a type/delete animation.
- **Responsive throughout** — mobile nav, fluid image sizing, and grid
  breakpoints for phone/tablet/desktop.
- **Contact form** — opens the visitor's mail client pre-filled with their
  message (no backend required).

## Tech stack

| Layer      | Choice                            |
| ---------- | --------------------------------- |
| Language   | TypeScript                        |
| UI library | React 18                          |
| Styling    | Tailwind CSS v4                   |
| Build tool | Vite                               |
| Hosting    | GitHub Pages (`gh-pages` branch)   |

## Design

A developer-native aesthetic: a dark "ink" theme with a teal signal
accent, warm "paper" sections for contrast, and project cards styled like
code editor file tabs. Fonts: Space Grotesk (display), Inter (body),
JetBrains Mono (labels/code).

## Project structure
src/
components/ UI components (Navbar, Hero, About, Services, Projects, Contact, Footer, ...)
data/ Project and service content (src/data/projects.ts)
i18n/ Translations and language context (src/i18n/)
hooks/ Custom hooks (typed text, etc.)
utils/ Helpers (e.g. asset() for base-path-safe asset URLs)
types.ts Shared TypeScript types
public/
assets/ Images, CV, favicon — copy your own files in here


## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 — edits hot-reload instantly.

## Before you deploy

1. Drop your real project screenshots and profile photo into
   `public/assets/` (see `PLACE_YOUR_IMAGES_HERE.txt` in that folder for
   exact filenames).
2. Add your résumé as `public/assets/CV.pdf`, or update the link in
   `src/components/Hero.tsx`.
3. Update the `mailto:` address in `src/components/Contact.tsx`, or swap
   the form for a service like Formspree or EmailJS if you don't want to
   rely on the visitor's mail client.
4. Edit content in `src/data/projects.ts` to add, remove, or reorder
   projects and services — provide `en`, `es`, and `ca` text for each
   `title`/`description`. The project grid and filter buttons update
   automatically.
5. Edit UI copy (nav labels, headings, button text) in
   `src/i18n/translations.ts` — one object per language.

## Build

```bash
npm run build   # outputs static files to dist/
npm run preview # preview the production build locally
```

## Deploying

**GitHub Pages** (current setup): this repo is configured for it —
`vite.config.ts` sets `base: "/Portfolio/"` to match the repo name, and
`gh-pages` is installed as a dev dependency. To publish:

```bash
npm run deploy
```

This builds the project and pushes `dist/` to the `gh-pages` branch. In
**Settings → Pages**, the source branch should be set to `gh-pages`. The
live site: https://gemps18.github.io/Portfolio/

Note: any hardcoded asset paths must go through the `asset()` helper in
`src/utils/asset.ts` rather than a plain `/assets/...` string, since
GitHub Pages serves from a subpath — Vite's `base` config alone doesn't
rewrite paths written directly in component code.

**Vercel / Netlify / Cloudflare Pages** (alternative): connect your GitHub
repo, they auto-detect Vite, and every push redeploys automatically — no
manual `npm run deploy` step, and no `base` path needed since these serve
from the domain root (remove/comment the `base` line in `vite.config.ts`
if you switch).