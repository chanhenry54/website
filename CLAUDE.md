@AGENTS.md

# Project

Henry Chan's personal website. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, deployed on Vercel (push to `main` → production; branches/PRs → preview deployments).

## Commands

Use **pnpm** (not npm or yarn); `packageManager` is pinned in `package.json`.

- `pnpm dev` — dev server at http://localhost:3000
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`)
- `pnpm build` — production build; run it to verify changes before finishing

## Layout

- `app/` — routes. `layout.tsx` sets site-wide metadata and fonts (Geist via `next/font`); `page.tsx` is the home page; `globals.css` holds Tailwind and the color tokens.
- `public/` — static assets served from `/`.
- Path alias: `@/*` → repo root.

## Conventions

- Before using a Next.js API, check the bundled docs in `node_modules/next/dist/docs/` — this version differs from older Next.js (see AGENTS.md).
- `next.config.ts` enables `cacheComponents` and `partialPrefetching`; keep pages static unless a feature needs dynamic data.
- Style with Tailwind utility classes; define shared colors as CSS variables in `app/globals.css` and support dark mode (`dark:` variants).
- Prefer Server Components; add `"use client"` only for components that need interactivity.
- No GitHub Pages: there is no `basePath`, so links and assets are root-relative.
