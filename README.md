# website

My personal website, built with [Next.js](https://nextjs.org) (App Router), TypeScript and Tailwind CSS, and hosted on [Vercel](https://vercel.com).

## Development

Requires Node.js 20.9+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint
pnpm build    # production build
```

## Deployment

The repo is connected to Vercel: every push to `main` deploys to production, and every other branch or pull request gets its own preview URL.
