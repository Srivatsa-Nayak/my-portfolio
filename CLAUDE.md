# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio site for Srivatsa Nayak, built with Next.js 13 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Static/content-driven pages: Home, About, Projects, Resume, Contact.

## Commands

Package manager is **yarn** (per README), though `package-lock.json` also exists.

- `yarn install` — install dependencies
- `yarn dev` — run the dev server (`next dev`)
- `yarn build` — production build (`next build`)
- `yarn start` — run the production build (`next start`)
- `yarn lint` — lint via `next lint` (config extends `next/core-web-vitals`)

There is no test suite configured in this repo (no test script, no test runner dependency).

## Architecture

- **App Router**: pages live under `src/app/**/page.tsx` (`about`, `projects`, `resume`, `contact`, plus root `page.tsx` for Home). `src/app/layout.tsx` defines the root HTML shell: it renders a fixed `Sidebar` for navigation and a `Footer`, wrapping `children` in a scrollable content panel.
- **Path alias**: `@/*` maps to `src/*` (see `tsconfig.json`). Use this for all intra-`src` imports.
- **Components** (`src/components/`) are presentational and mostly composed directly into pages — there is no shared page-template abstraction beyond `Container` (max-width wrapper) and `Heading`/`Paragraph`/`Highlight` (typography primitives).
- **Content-as-code pattern**: page content (projects, work history, tech stack, nav links, social links) lives in `src/constants/*.tsx` as typed data arrays, imported by components that render them (e.g. `constants/products.tsx` → `Products`/`Product` components, `constants/timeline.tsx` → `WorkHistory`, `constants/navlinks.tsx` / `constants/socials.tsx` → `Sidebar`). To change site content, edit the constants file, not the component.
- **Images**: content images referenced from constants are imported directly from `public/images/...` (static imports, not string paths) so Next.js can optimize them; remote images are allowed from `images.unsplash.com` and `res.cloudinary.com` (see `next.config.mjs`).
- **Styling**: Tailwind CSS with two semantic colors (`primary`/`secondary`) mapped to CSS variables (`--neutral-700`/`--neutral-500`) in `tailwind.config.ts`. A custom Tailwind plugin in that same config exposes every Tailwind color as a `--<color>` CSS variable on `:root`. `isMobile()` in `src/lib/utils.ts` is a simple `window.innerWidth <= 1024` check used to drive responsive/sidebar behavior client-side (not a media-query hook).
- **MDX/blog infrastructure is currently unused**: `next.config.mjs` wires up `@next/mdx` (with `remark-gfm` and `rehype-prism`), and `lib/getAllBlogs.ts` + `src/components/Blogs.tsx` + `src/types/blog.tsx` implement a blog listing that reads `*.mdx` files from `src/app/blog/`. That directory was removed and the "Articles" nav link is commented out in `src/constants/navlinks.tsx` — this code path is currently dead. If re-enabling blogging, restore `src/app/blog/` content and uncomment the nav link.
