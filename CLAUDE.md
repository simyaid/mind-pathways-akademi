# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Akademi Psikodiyalektik** — a Turkish psychology and philosophy academy website. Built as a React + TypeScript SPA with Vite.

## Commands

```bash
npm run dev        # Dev server on port 8080
npm run build      # Production build → dist/
npm run build:dev  # Development build
npm run preview    # Preview production build
npm run lint       # ESLint
npm run test       # Vitest (single run)
npm run test:watch # Vitest watch mode
```

## Routing

Defined in `src/App.tsx` using React Router v6. All routes share the `<Layout>` wrapper (Navbar + Outlet + Footer):

| Path | Component |
|------|-----------|
| `/` | `pages/Index.tsx` |
| `/hakkimizda` | `pages/About.tsx` |
| `/formasyon` | `pages/Formation.tsx` |
| `/kadro` | `pages/Team.tsx` |
| `/kadro/:slug` | `pages/Team.tsx` (detail view) |
| `/iletisim` | `pages/Contact.tsx` |

## Architecture

**Pages** (`src/pages/`) compose **section components** (`src/components/`) which use **UI primitives** (`src/components/ui/`).

The home page (`Index.tsx`) is assembled from `Hero → ValuesSection → AboutPreview → CtaSection`.

**UI primitives** are shadcn/ui components (40+ files in `src/components/ui/`). Add new ones with the shadcn CLI (`components.json` is configured). Never edit these files manually — regenerate them instead.

**State:**
- Server state: TanStack React Query (`QueryClient` in `App.tsx`)
- Forms: React Hook Form + Zod validation
- Toasts: Sonner via `useToast` hook in `src/hooks/use-toast.ts`

## Design System

Defined in `src/index.css` as HSL CSS variables. Key tokens:

- **Colors:** Navy palette (`--navy-deep`, `--navy-700`, `--navy-500`, `--navy-300`) + Amber accent
- **Fonts:** Fraunces (headings/display) + Inter (body) — loaded via Google Fonts in `index.html`
- **Custom utilities:** `.container-tight`, `.eyebrow` (defined in CSS `@layer utilities`)
- **Tailwind config:** `tailwind.config.ts` extends the design tokens

Dark mode is supported via `next-themes` but the site currently uses light mode.

## TypeScript

Config is permissive: `noImplicitAny: false`, `strictNullChecks: false`. Three tsconfig files: base (`tsconfig.json`), app (`tsconfig.app.json`), build tool (`tsconfig.node.json`).

## Utility

`src/lib/utils.ts` exports `cn()` — the standard class merging helper (clsx + tailwind-merge). Use it for all conditional Tailwind class composition.
