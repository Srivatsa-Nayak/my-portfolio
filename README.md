# Srivatsa Nayak — Portfolio

Single-page portfolio site.

## Built with
- Next.js 13 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Resend (contact form email)

## Running locally
```bash
yarn install   # install dependencies
yarn dev       # http://localhost:3000
```

For a production build: `yarn build` then `yarn start`.

## Contact form setup
The contact form sends you an email via [Resend](https://resend.com). Copy `.env.local.example` to `.env.local` and fill in:
- `RESEND_API_KEY` — from https://resend.com/api-keys
- `CONTACT_TO_EMAIL` — where submissions should land (use the address you signed up to Resend with if you haven't verified a custom domain)
- `CONTACT_FROM_EMAIL` — sender identity; the default `onboarding@resend.dev` works without domain verification

Without these env vars set, the form will show a friendly error instead of failing silently.

## Updating content
- Projects, experience, skills, nav links and social links live in `src/constants/`.
- The downloadable résumé is `public/Resume_Srivatsa_Nayak.pdf` — replace that file to update it.
