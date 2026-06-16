# [gybrannauval.site](https://gybrannauval.site) &middot; [![GitHub License](https://img.shields.io/github/license/razor322/minimal-dev-portfolio?label=License)](https://github.com/razor322/minimal-dev-portfolio/blob/main/LICENSE)

A minimal developer portfolio built with Next.js 16, Tailwind CSS v4, and TypeScript.

→ Live site: [gybrannauval.site](https://gybrannauval.site)

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui + shadcn registry (`@ncdai`)
- **Language**: TypeScript (strict mode)
- **Analytics**: PostHog, OpenPanel

## Features

- Single-page portfolio with anchor-based sections
- Light/Dark theme toggle
- Command menu (`Cmd+K` / `Ctrl+K`)
- SEO optimized (JSON-LD, OpenGraph, sitemap, robots.txt)
- Spam-protected email and phone
- GitHub contributions chart
- Responsive design
- Component registry (installable via `shadcn add`)

## Sections

About · Tech Stack · Experience · Education · Projects · Awards · Certifications · Organizations · Languages · Bookmarks · Insights

## Development

```bash
pnpm install         # Install dependencies
pnpm dev             # Dev server
pnpm build           # Production build (includes registry:build)
pnpm lint            # ESLint
pnpm format:write    # Prettier
pnpm check-types     # Type checking (run after build)
```

## Registry

This project doubles as a shadcn component registry. Install components:

```bash
npx shadcn@latest add @ncdai/copy-button
npx shadcn@latest add @ncdai/contribution-graph
npx shadcn@latest add @ncdai/text-flip
```

Build registry:

```bash
pnpm registry:build
```

## License

Licensed under the [MIT license](./LICENSE).

You're free to use this code. **Remove all personal information** before publishing your own site.
