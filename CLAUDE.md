@AGENTS.md

# Project

Henry Chan's personal website. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, deployed on Vercel (push to `main` → production; branches/PRs → preview deployments).

## Commands

Use **pnpm** (not npm or yarn); `packageManager` is pinned in `package.json`.

- `pnpm dev` — dev server at http://localhost:3000
- `pnpm lint` — ESLint (flat config in `eslint.config.mjs`)
- `pnpm build` — production build; run it to verify changes before finishing

## Layout

- `app/` — routes (App Router). `globals.css` holds Tailwind and the design tokens.
- `content/` — site text as typed TypeScript data. Pages render from it; they don't hard-code copy.
- `components/` — shared React components.
- `public/` — static assets served from `/`.
- Path alias: `@/*` → repo root.

## Conventions

- Before using a Next.js API, check the bundled docs in `node_modules/next/dist/docs/` — this version differs from older Next.js (see AGENTS.md).
- `next.config.ts` enables `cacheComponents` and `partialPrefetching`; keep pages static unless a feature needs dynamic data.
- Dynamic routes: return every known param from `generateStaticParams`, call `notFound()` for unknown ones, and export `instant = false` so unknown params block and return a real 404. (`dynamicParams` is unavailable with Cache Components.)
- Content: add or change site text in `content/`, not in components. Placeholder text is marked `TODO:`. Never invent details about Henry's jobs or projects: ask, or leave the TODO.
- Check UI changes in the browser preview (`.claude/launch.json` runs `pnpm dev`) and watch the console for Next.js dev warnings.
- Style with Tailwind utility classes; define shared colors as CSS variables in `app/globals.css` and support dark mode (`dark:` variants).
- Use semantic color tokens (e.g. `bg-warning text-warning-foreground`) rather than hard-coded colors for anything with meaning; give every token light and dark values in `globals.css`.
- Write Tailwind class names out in full (no `` `bg-${variant}` ``); Tailwind only generates classes it finds as literals.
- Prefer Server Components; add `"use client"` only for components that need interactivity.
- No GitHub Pages: there is no `basePath`, so links and assets are root-relative.
