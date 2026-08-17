/**
 * Prefixes a public-asset path with Vite's base URL, so image/file paths
 * resolve correctly whether the app is served from the domain root (Vercel,
 * Netlify) or a subpath like /Portfolio/ (GitHub Pages).
 */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}