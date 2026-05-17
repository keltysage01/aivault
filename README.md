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

The lead form posts to `app/api/waitlist/route.ts`. It can save guide requests to Supabase and then show the free starter guide plus the Circle Founder Access CTA.

Set these environment variables in Vercel:

```bash
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_CIRCLE_URL=
```

Create this table in Supabase:

```sql
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  offer text,
  status text default 'guide_requested',
  created_at timestamptz default now()
);
```
