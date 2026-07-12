## Built with
- Next.js
- Tailwindcss
- Framer motion
- MDX
- Resend (contact form email)

## Run yarn install to install all the dependecies 
## To Run the application run yarn dev

## Contact form setup
The contact form sends you an email via [Resend](https://resend.com). Copy `.env.local.example` to `.env.local` and fill in:
- `RESEND_API_KEY` — from https://resend.com/api-keys
- `CONTACT_TO_EMAIL` — where submissions should land (use the address you signed up to Resend with if you haven't verified a custom domain)
- `CONTACT_FROM_EMAIL` — sender identity; the default `onboarding@resend.dev` works without domain verification

Without these env vars set, the form will show a friendly error instead of failing silently.