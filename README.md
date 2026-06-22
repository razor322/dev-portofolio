# [gybrannauval.site](https://gybrannauval.site)

Personal developer portfolio of **Gybran Nauval Yuhandika** — Software Engineer based in Padang, Indonesia.

Built with Next.js 16, Tailwind CSS v4, and TypeScript. Based on the [chanhdai.com](https://github.com/ncdai/chanhdai.com) template by [ncdai](https://github.com/ncdai).

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Language**: TypeScript (strict mode)
- **Package Manager**: pnpm

## Features

- Single-page portfolio with smooth scroll sections
- Light/Dark theme toggle
- Command menu (`Cmd+K` / `Ctrl+K`)
- SEO optimized (JSON-LD, OpenGraph, sitemap, robots.txt)
- Spam-protected email and phone (base64 encoded)
- GitHub contributions chart
- Responsive design
- Component registry (installable via `shadcn add`)

## Sections

Profile Header · About · Tech Stack · Experience · Education · Projects · Awards · Certifications · Organizations · Languages · Bookmarks · Insights

## Getting Started

```bash
# Clone the repository
git clone https://github.com/razor322/minimal-dev-portfolio.git
cd minimal-dev-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Commands

```bash
pnpm dev             # Start dev server
pnpm build           # Production build (includes registry:build)
pnpm start           # Start production server
pnpm lint            # Run ESLint
pnpm lint:fix        # Fix ESLint errors
pnpm format:check    # Check Prettier formatting
pnpm format:write    # Format with Prettier
pnpm check-types     # Type checking (run after build)
pnpm test:run        # Run tests
```

## Project Structure

```
src/
├── app/              # Next.js App Router routes
├── components/       # Shared UI components
├── config/           # Site configuration
├── features/         # Feature modules (portfolio, blog, doc)
├── lib/              # Utility functions
├── registry/         # shadcn component registry
└── styles/           # Global styles
```

## Customization

1. Edit `src/features/portfolio/data/user.ts` — your personal info, bio, skills
2. Edit `src/config/site.ts` — site metadata, nav items, social links
3. Replace images in `public/images/` — avatar, favicon, OG image
4. Update `src/features/portfolio/data/` — projects, experience, education, etc.

## Credits

Based on the excellent [chanhdai.com](https://github.com/ncdai/chanhdai.com) portfolio template by [ncdai](https://github.com/ncdai).

## License

This project is for personal use. Please respect the original template's license when using the codebase.
