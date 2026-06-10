# Pratham Kadam Portfolio

Next.js portfolio and lead-generation website for Pratham Kadam, freelance full stack and business website developer in Ahmedabad, India.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm run start
```

## Environment

Copy `.env.example` to your local/deploy environment and set:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=google-site-verification-code
```

GA4 is optional at build time, but lead click tracking only sends events when a measurement ID is configured.

## SEO Assets

- Sitemap: `https://prathamkadam.netlify.app/sitemap.xml`
- Robots: `https://prathamkadam.netlify.app/robots.txt`
- LLM summary: `https://prathamkadam.netlify.app/llms.txt`
- Full LLM context: `https://prathamkadam.netlify.app/llms-full.txt`
- AI summary JSON: `https://prathamkadam.netlify.app/ai-summary.json`

## Growth Workflow

Use the non-GBP growth files in `docs/growth/`:

- `lead-tracking.md`
- `search-console-routine.md`
- `backlink-citation-kit.md`
- `weekly-content-calendar.md`

These keep Search Console, GA4, profile links, social posts, and backlink work consistent without relying on Google Business Profile.
