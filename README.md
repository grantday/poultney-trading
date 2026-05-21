# Poultney Trading — Website

Marketing site for **Poultney Trading**, a Zimbabwean agribusiness covering
horticulture, poultry, livestock and animal feed (including dog food).

Built with **Next.js 14 (App Router)** + TypeScript. Markdown-based CMS for
insights. Designed for GitHub → Vercel deployment with full offline development
support.

---

## Quick start (Windows PC)

```bash
npm install           # install dependencies
npm run setup         # one-time: download stock images to /public/images/
npm run dev           # start dev server on http://localhost:3010
```

> **Note on port:** dev runs on **3010** (not the default 3000) to avoid
> conflict with your other sites on 3000 and 3006. Change in `package.json`
> if needed.

After `npm run setup` has run once with internet, **you can work fully
offline.** All images, fonts and code live locally.

---

## Project layout

```
poultney-trading/
├── app/
│   ├── layout.tsx               # fonts + SEO + favicon
│   ├── page.tsx                 # home page (composes all sections)
│   ├── globals.css              # design system + all section styles
│   └── insights/
│       ├── page.tsx             # /insights — listing page
│       └── [slug]/page.tsx      # /insights/<slug> — detail page
├── components/
│   ├── Navbar.tsx
│   ├── HeroSlider.tsx           # layered animated hero slider
│   ├── About.tsx
│   ├── Products.tsx             # 6 product cards
│   ├── WhyUs.tsx
│   ├── InsightsSlider.tsx       # homepage insights carousel
│   ├── CTA.tsx
│   └── Footer.tsx
├── content/
│   └── insights/                # ⭐ THE CMS — write insights here as .md files
│       ├── stock-feed-prices-zimbabwe-2026.md
│       ├── horticulture-export-opportunities.md
│       └── day-old-chick-supply-outlook.md
├── lib/
│   └── insights.ts              # reads markdown, parses frontmatter, returns HTML
├── public/
│   ├── logo.svg                 # brand logo (leaf-feather mark)
│   ├── favicon.svg
│   └── images/                  # all stock photos (created by `npm run setup`)
│       └── insights/            # insight cover images
├── scripts/
│   └── download-images.js       # one-time image setup script
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## Writing insights (the CMS)

This is the simple part. Each insight is one `.md` file in
`content/insights/`. The site picks them up automatically — no rebuild step,
no admin panel.

### To publish a new insight:

1. Create a new file: `content/insights/my-insight-slug.md`
2. Add frontmatter and content like this:

```md
---
title: "Your Headline Goes Here"
excerpt: "A one-or-two-sentence summary that appears on cards and search."
date: "2026-05-21"
category: "Feed Market"
image: "/images/insights/your-image.jpg"
author: "Poultney Trading"
---

Your opening paragraph in plain prose.

## A subheading

More content. Markdown works — **bold**, *italic*, [links](https://example.com),
bullet lists, etc.

- Bullet point one
- Bullet point two

> A pull quote that will be styled distinctively.
```

3. Drop the cover image into `public/images/insights/your-image.jpg`
4. Commit and push to GitHub — Vercel auto-deploys.

That's it. The file shows up on `/insights`, on the homepage slider, and gets
its own page at `/insights/my-insight-slug`.

### Available frontmatter fields

| Field      | Required | Example                                | Notes |
|------------|----------|----------------------------------------|-------|
| title      | yes      | `"Stock Feed Prices Outlook"`          | The headline |
| excerpt    | yes      | `"Two-line summary..."`                | Card preview text |
| date       | yes      | `"2026-05-21"`                         | YYYY-MM-DD format, used for sorting |
| category   | no       | `"Feed Market"`                        | Shown as a tag |
| image      | no       | `"/images/insights/my-pic.jpg"`        | Cover image path |
| author     | no       | `"Poultney Trading"`                   | Byline |

### Upgrading the CMS later

When you outgrow markdown files, the migration path is straightforward:

- **Sanity / Contentful / Strapi** — replace the `lib/insights.ts` functions
  with API calls to whichever headless CMS you choose. The rest of the site
  doesn't need to change.
- **Built-in admin UI** — add a `/admin` route protected by auth that lets
  non-technical staff write insights through a web form.

---

## Deployment workflow: GitHub → Vercel

This is the recommended workflow — every commit auto-deploys, and you get
preview URLs for every branch.

### One-time setup

1. **Create a GitHub repo** (private if you prefer):
   - Go to https://github.com/new
   - Name it `poultney-trading` (or whatever you like)
   - Don't initialise with a README — the repo should be empty
   - Copy the repo URL

2. **Push this project to that repo** (from the project folder):
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin <PASTE-YOUR-REPO-URL>
   git push -u origin main
   ```

3. **Connect Vercel to the repo**:
   - Sign in at https://vercel.com (use GitHub login)
   - Click **Add New** → **Project**
   - Import your `poultney-trading` repo
   - Framework: Next.js (auto-detected)
   - Click **Deploy**
   - You get a `*.vercel.app` URL in ~60 seconds

### Day-to-day workflow

After the one-time setup, your workflow is just:

```bash
# Make changes locally, test on localhost:3010, then:
git add .
git commit -m "Update homepage copy"
git push
```

Vercel auto-deploys on every push. Production URL stays the same, changes go
live in about 30 seconds.

### Preview deploys

Push to a branch other than `main` and Vercel automatically gives you a
preview URL for that branch. Useful for sharing work-in-progress with the
client before merging.

---

## Editing common things

| What you want to change         | File                              |
| ------------------------------- | --------------------------------- |
| Brand colors / fonts / spacing  | `app/globals.css` (top, CSS vars) |
| SEO title, description, OG tags | `app/layout.tsx`                  |
| Logo                            | `public/logo.svg`                 |
| Hero slides (3 of them)         | `components/HeroSlider.tsx`       |
| About copy + stats              | `components/About.tsx`            |
| Product cards (6 of them)       | `components/Products.tsx`         |
| "Why us" feature list           | `components/WhyUs.tsx`            |
| Contact CTA + details           | `components/CTA.tsx`              |
| Footer (links, contacts)        | `components/Footer.tsx`           |
| Navbar links + logo             | `components/Navbar.tsx`           |
| Insights (CMS)                  | `content/insights/*.md`           |
| Stock photos                    | `public/images/`                  |

---

## Swapping placeholder photos for real Poultney photography

Drop your photos into `/public/images/` using the same filenames as the
placeholders. They'll be picked up automatically. Reference list:

- `hero-horticulture.jpg`, `hero-poultry.jpg`, `hero-feed.jpg`
- `about.jpg`, `cta-bg.jpg`
- `product-horticulture.jpg`, `product-chicks.jpg`, `product-chickens.jpg`,
  `product-pigs.jpg`, `product-feed.jpg`, `product-dogfood.jpg`
- `insights/insight-*.jpg` — referenced by frontmatter in each `.md` file

Recommended sizes: hero/CTA backgrounds **2000px wide**, product/about
**1200–1400px wide**, insight covers **1400px wide**. JPEG, ~80% quality.

---

## Scripts

| Command          | What it does                                              |
|------------------|-----------------------------------------------------------|
| `npm install`    | Install dependencies                                      |
| `npm run setup`  | Download stock images for offline use (run once)          |
| `npm run dev`    | Start dev server on http://localhost:3010                 |
| `npm run build`  | Production build (Vercel runs this automatically)         |
| `npm run start`  | Start the built site on port 3010                         |

---

## Troubleshooting

**Images aren't showing on dev server**
Run `npm run setup` once with internet to download them.

**Port 3010 conflicts with something else**
Edit `package.json` — change the `-p 3010` flag in `dev` and `start` scripts.

**Vercel build fails**
Most likely cause: a typo in an insight frontmatter (missing required field,
unbalanced quotes). Check the build log in the Vercel dashboard for the
specific file.

**Insight didn't appear after I added the .md file**
Make sure the `date` field is set in `YYYY-MM-DD` format. Insights sort
newest-first by date.
