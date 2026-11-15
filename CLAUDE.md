@AGENTS.md

# Project

Henry Chan's personal website. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, deployed on Vercel (push to `main` → production; branches/PRs → preview deployments).

## Commands

Use **pnpm** (not npm or yarn); `packageManager` is pinned in `package.json`.

- `pnpm dev` — dev server at http://localhost:3000
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`)
- `pnpm build` — production build; run it to verify changes before finishing

## Layout

- `app/` — routes. `layout.tsx` sets site-wide metadata (title template `%s · Henry Chan`), fonts (Geist via `next/font`) and the shared header/footer; `globals.css` holds Tailwind and the color tokens.
  - `/` home page lists work and projects.
  - `/work`, `/work/[slug]` — previous companies. `/projects`, `/projects/[slug]` — previous projects.
- `content/` — all portfolio text lives here as typed data, not in the pages.
  - `work.ts` and `projects.ts` hold the entries (array order = display order); `types.ts` defines `WorkEntry` / `ProjectEntry`.
  - To add a page, append an entry with a unique `slug`; the index, home page and detail route pick it up automatically.
  - Placeholder text is marked `TODO:`. Never invent details about Henry's jobs or projects: ask, or leave the TODO.
- `components/` — `site-header` / `nav-links` (active link via `usePathname`, wrapped in `Suspense`), `site-footer`, and `entry-list` / `entry-detail`, shared by work and projects.
- `public/` — static assets served from `/`.
- Path alias: `@/*` → repo root.

## Conventions

- Before using a Next.js API, check the bundled docs in `node_modules/next/dist/docs/` — this version differs from older Next.js (see AGENTS.md).
- `next.config.ts` enables `cacheComponents` and `partialPrefetching`; keep pages static unless a feature needs dynamic data.
- Dynamic routes: `generateStaticParams` returns every slug from `content/`, unknown slugs call `notFound()`, and the page exports `instant = false` so unknown slugs block and return a real 404 instead of tripping the dev-mode instant-navigation check. (`dynamicParams` is unavailable with Cache Components.)
- Check UI changes in the browser preview (`.claude/launch.json` runs `pnpm dev`) and watch the console for Next.js dev warnings.
- Style with Tailwind utility classes; define shared colors as CSS variables in `app/globals.css` and support dark mode (`dark:` variants).
- Prefer Server Components; add `"use client"` only for components that need interactivity.
- No GitHub Pages: there is no `basePath`, so links and assets are root-relative.
