# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio site for Srivatsa Nayak, built with Next.js 13 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Static/content-driven pages: Home, About, Projects, Resume, Contact.

## Commands

Package manager is **yarn** (per README).

- `yarn install` — install dependencies
- `yarn dev` — run the dev server (`next dev`)
- `yarn build` — production build (`next build`)
- `yarn start` — run the production build (`next start`)
- `yarn lint` — lint via `next lint` (config extends `next/core-web-vitals`)

There is no test suite configured in this repo (no test script, no test runner dependency).

## Architecture

- **App Router**: pages live under `src/app/**/page.tsx` (`about`, `projects`, `experience`, `contact`, plus root `page.tsx` for Home). `src/app/layout.tsx` defines the root HTML shell: the whole app renders inside a single `TerminalWindow` (traffic-light title bar + a `Navbar` top nav bar + a scrollable content pane + `Footer`) — a terminal-emulator aesthetic, not a sidebar layout.
- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`). Use this for all intra-`src` imports.
- **Components** (`src/components/`) are organized by role:
  - `layout/` — chrome that wraps every page: `TerminalWindow`, `Navbar`, `Footer`, `Container` (max-width wrapper).
  - `ui/` — typography/control primitives: `Heading`, `Paragraph`, `Highlight`, `DownloadResumeButton`.
  - `sections/` — page-specific content blocks: `About`, `Contact`, `Products`, `TechStack`, `WorkHistory`.
- **Content-as-code pattern**: page content (projects, work history, tech stack, nav links, social links) lives in `src/constants/*.tsx` as typed data arrays, imported by components that render them (e.g. `constants/projects.tsx` → `Products` component, `constants/timeline.tsx` → `WorkHistory`, `constants/navlinks.tsx` / `constants/socials.tsx` → `Navbar`). To change site content, edit the constants file, not the component.
- **Images**: content images referenced from constants are imported directly from `public/images/...` (static imports, not string paths) so Next.js can optimize them; remote images are allowed from `images.unsplash.com` and `res.cloudinary.com` (see `next.config.mjs`).
- **Styling**: Tailwind CSS in a dark, monospace "terminal" theme (JetBrains Mono via `next/font/google`, emerald as the single accent color). Two semantic colors (`primary`/`secondary`) are mapped to CSS variables (`--neutral-200`/`--neutral-400`) in `tailwind.config.ts`. A custom Tailwind plugin in that same config exposes every Tailwind color as a `--<color>` CSS variable on `:root`.
- **Contact form backend**: `src/app/api/contact/route.ts` validates input and sends mail via Resend (needs `RESEND_API_KEY` / `CONTACT_TO_EMAIL` in `.env.local` — see `.env.local.example`). `resend` depends on `@react-email/render`, which is not declared in its own package.json — keep it installed or the route fails to bundle.
- **Resume download**: `DownloadResumeButton` links to `/resume.pdf` with the `download` attribute. That file must be placed at `public/resume.pdf` for the button to work — it is not checked in by default.
