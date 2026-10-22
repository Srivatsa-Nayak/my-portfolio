# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio site for Srivatsa Nayak, built with Next.js 13 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Single scrolling page with anchor-linked sections: Home, Projects, Experience, About, Contact.

## Commands

Package manager is **yarn** (per README).

- `yarn install` — install dependencies
- `yarn dev` — run the dev server (`next dev`)
- `yarn build` — production build (`next build`)
- `yarn start` — run the production build (`next start`)
- `yarn lint` — lint via `next lint` (config extends `next/core-web-vitals`)

There is no test suite configured in this repo (no test script, no test runner dependency).

## Architecture

- **Single-page site**: there is exactly one route, `src/app/page.tsx` (plus the `src/app/api/contact` route handler) — no `/about`, `/projects`, `/resume`, or `/contact` routes. `page.tsx` composes every section — Home/Hero (with `ProfileStrip` and `TechStack`), About, Projects, Experience, Contact — as `<section id="...">` blocks stacked in one scrolling page. `src/app/layout.tsx` defines the root HTML shell: a sticky `Navbar` header, the page content, and `Footer`, all inside `ActiveSectionProvider`. The page scrolls the window itself (no inner scroll container).
- **In-page navigation**: `Navbar` links are anchors (`#projects`, `#experience`, ...) that call `scrollIntoView` on click rather than routing; `section[id]` has a `scroll-margin-top` in `globals.css` so headings clear the sticky header. `ActiveSectionProvider` (`src/components/layout/ActiveSectionProvider.tsx`) runs an `IntersectionObserver` over every `section[id]`, using a thin band across the middle of the viewport so it works for sections taller than the screen; `Navbar` reads the result via `useActiveSection()` for its active-link underline.
- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`). Use this for all intra-`src` imports.
- **Components** (`src/components/`) are organized by role:
  - `layout/` — chrome that wraps the page: `Navbar`, `Footer`, `Container` (max-width wrapper), `ActiveSectionProvider`.
  - `ui/` — typography/control primitives: `Heading`, `Paragraph`, `Highlight`, `DownloadResumeButton`.
  - `sections/` — the section content blocks composed into `page.tsx`: `About`, `Contact`, `Products`, `ProfileStrip`, `TechStack`, `WorkHistory`.
- **Content-as-code pattern**: section content (projects, work history, skills, nav links, social links) lives in `src/constants/*.tsx` as typed data arrays, imported by components that render them (e.g. `constants/projects.tsx` → `Products` component, `constants/timeline.tsx` → `WorkHistory`, `constants/skills.tsx` → `TechStack`, `constants/navlinks.tsx` / `constants/socials.tsx` → `Navbar`). To change site content, edit the constants file, not the component.
- **Images**: project screenshots in `constants/projects.tsx` are static imports from `public/images/projects/` so Next.js can optimize them (and generate blur placeholders); skill logos in `constants/skills.tsx` are string paths to SVGs in `public/images/logos/`. Remote images are allowed from `images.unsplash.com` and `res.cloudinary.com` (see `next.config.mjs`).
- **Styling**: Tailwind CSS in a light "aeronautical chart" theme borrowed from the author's Aerothon project. Palette tokens in `tailwind.config.ts`: `paper` (page background), `sheet` (panels), `ink`/`ink-soft` (text), `rule` (borders), `magenta` (accent: active nav, route line, highlights), `chart` (blue), `go`/`hold` (success/error). The font is JetBrains Mono everywhere (via `next/font/google`); `font-sans`, `font-mono` and `font-display` all map to it, with `font-display` kept as the heading token. Because a monospace face is wide, type sizes are deliberately a step smaller than a proportional design would use. Cards, panels and screenshots use `rounded-lg`/`rounded-md`; buttons and chips `rounded-md`. Shared component classes live in `globals.css` under `@layer components`: `.strip`/`.strip-band`/`.strip-cell`/`.strip-label`/`.strip-input` (the "flight progress strip" card with a coloured left band, used by `ProfileStrip`, project cards and the contact form), `.panel`, `.chip`, `.btn-primary`, `.btn-secondary`.- **Contact form backend**: `src/app/api/contact/route.ts` validates input and sends mail via Resend (needs `RESEND_API_KEY` / `CONTACT_TO_EMAIL` in `.env.local` — see `.env.local.example`). `resend` depends on `@react-email/render`, which is not declared in its own package.json — keep it installed or the route fails to bundle.
- **Resume download**: `DownloadResumeButton` links to `/Resume_Srivatsa_Nayak.pdf` with the `download` attribute; the PDF is checked in at `public/Resume_Srivatsa_Nayak.pdf`. To update the résumé, overwrite that file (keep the name).
- **Email links**: the email address is shown via `CopyEmailButton` (copies to clipboard), not a `mailto:` link, because `mailto:` opens the visitor's OS default mail app. The address itself is the `EMAIL` constant in `constants/socials.tsx`.
