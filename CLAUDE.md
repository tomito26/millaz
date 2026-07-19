# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build
npm run start   # Serve production build
npm run lint    # ESLint (next/core-web-vitals)
```

There is no test suite configured.

## Architecture

Marketing/portfolio site for **Millaz Productions Kenya** (a film & theatre company), built with Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS. It is a static, content-driven site — no backend, database, or API routes.

### Content is centralized in `lib/constants.ts`

Nearly all page copy and data (nav links, company values, team members, productions, articles, etc.) lives as typed arrays in `lib/constants.ts`. Components import these arrays and `.map()` over them to render. **To change site content, edit `lib/constants.ts` — not the JSX.** Image paths in these arrays point into `public/assets/`.

### Routing

Pages live under `app/(pages)/` using a route group (the `(pages)` folder does not appear in URLs):
- `page.tsx` → `/` (renders `components/Home.tsx`)
- `about/page.tsx` → `/about`
- `featured-articles/page.tsx` → `/featured-articles`
- `our-productions/page.tsx` → `/our-productions`

`app/layout.tsx` is the root layout: it loads the Inter Google font, applies global metadata, and wraps every page with `<Navbar />` and `<Footer />`. Page components are thin shells that render a corresponding component from `components/`.

### Components

Page-level components live in `components/` (e.g. `Home.tsx`, `footer.tsx`, `navigation/navbar.tsx`, `articles/articles.tsx`, `about.tsx/about.tsx`). Most are Server Components; add `"use client"` only when a component needs interactivity/hooks (e.g. `navbar.tsx` uses `useState` and `usePathname`).

### Styling conventions

- Tailwind CSS with an extended theme in `tailwind.config.ts`. Custom breakpoints go beyond the defaults: `xl: 1310px`, `2xl: 1400px`, and a custom `3xl: 1700px` — responsive classes use these heavily.
- Semantic colors (`primary`, `secondary`, `accent`, etc.) are driven by CSS custom properties defined in `app/globals.css`; a large palette of named brand colors is also defined directly in the Tailwind config.
- Use the `cn()` helper from `lib/utils.ts` (clsx + tailwind-merge) to compose conditional class names.

### Imports & assets

- Path alias `@/*` maps to the repo root (`@/lib/constants`, `@/components/...`).
- Static assets are served from `public/` (images under `public/assets/`); reference them by root-relative path (e.g. `/assets/millaz.svg`) and render with `next/image`.
