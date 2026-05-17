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

## Lead capture and Founder Access

The lead form posts to `app/api/waitlist/route.ts`. It can save guide requests to Airtable and then show the free starter guide plus the Circle Founder Access CTA.

Set these environment variables in Vercel:

```bash
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
AIRTABLE_TABLE_NAME=
NEXT_PUBLIC_CIRCLE_URL=
```

The Airtable table should include these fields:

- `Email`
- `Source`
- `Offer`
- `Status`
