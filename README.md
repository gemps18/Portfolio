# Carlos Gemperle — Portfolio

Rebuilt with React, TypeScript, Tailwind CSS v4, and Vite.

## Design

A developer-native aesthetic: a dark "ink" theme with a teal signal accent,
a typed-out terminal as the hero's signature element, and project cards
styled like code editor file tabs on warm "paper" sections. Fonts: Space
Grotesk (display), Inter (body), JetBrains Mono (labels/code).

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
   projects and services — the grid updates automatically.

## Build

```bash
npm run build   # outputs static files to dist/
npm run preview # preview the production build locally
```

## Deploying

**Vercel / Netlify / Cloudflare Pages** (recommended): connect your GitHub
repo, they auto-detect Vite, and every push redeploys automatically. No
extra config needed.

**GitHub Pages**: if you keep using GitHub Pages, uncomment the `base`
option in `vite.config.ts` and set it to `/your-repo-name/`, then deploy
the `dist/` folder (e.g. via the `gh-pages` npm package or a GitHub Actions
workflow).
