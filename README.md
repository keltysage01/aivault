# The AI Vault

A production-ready Next.js landing page and waitlist site for The AI Vault.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Waitlist integration

The waitlist form posts to `app/api/waitlist/route.ts`. Replace the placeholder success response with Mailchimp, ConvertKit, Airtable, Supabase, or another provider integration when ready.
