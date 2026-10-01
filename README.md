# Fajas Ajmal & Shadha Fathima — Nikah Invitation

An animated digital wedding invitation (React + Vite + Tailwind + Framer Motion).

- **Nikah** · Saturday, 10 October 2026 · 7:00 PM · Groom's Residence
- **Reception** · Sunday, 11 October 2026 · 12 Noon – 2 PM · 'Glaze', Mouvery

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Edit the details

All text (names, dates, venues, hosts) lives in [`src/data/invitation.ts`](src/data/invitation.ts).
The link-preview text (title/description shown in WhatsApp) is in [`index.html`](index.html),
and the preview image is [`public/og-image.jpg`](public/og-image.jpg) (1200×630).

## Deploy to Vercel

Import the repo in Vercel (framework preset: **Vite**). No settings needed — the build fills in
absolute preview URLs from Vercel's production domain automatically.

If you use a custom domain, add an environment variable `SITE_URL=https://your-domain.com`
and redeploy so WhatsApp previews point at it.

WhatsApp caches previews: if you shared the link before the preview worked, test with a fresh
URL such as `https://your-site.vercel.app/?v=2`.
