# Cursor Instructions — Poultney Trading Website (v0.2)

Paste these prompts into Cursor's chat (Ctrl+L) one at a time, in order, and
let Cursor do the work. Each block is self-contained.

> **Open the `poultney-trading` folder in Cursor first** (File → Open Folder).
> Cursor needs the project context to act on files.

---

## 0. Project Context (paste this first, once per new chat)

```
You are working on the Poultney Trading marketing website. Context:

- Framework: Next.js 14 App Router + TypeScript
- Dev port: 3010 (not the default 3000 — I have other sites on 3000 and 3006)
- Styling: vanilla CSS in app/globals.css with CSS variables
- Fonts: Fraunces (serif display) + Manrope (sans body) via next/font/google
- Brand colors: forest green primary, warm orange accent, cream background
- Logo: /public/logo.svg (leaf-feather mark with orange seed accent)
- Sections: Navbar, HeroSlider, About, Products (6 cards), WhyUs, InsightsSlider, CTA, Footer
- CMS: markdown files in /content/insights/, parsed by lib/insights.ts
- Images: all local under /public/images/ (downloaded once via `npm run setup`)
- Deployment: GitHub → Vercel auto-deploy on push to main
- I am not a hands-on developer — do all file edits yourself; don't make me copy-paste code

Confirm you understand by listing the top-level folders in this project.
```

---

## 1. Initial setup (one time, on your Windows PC)

In Cursor's built-in terminal (Ctrl+`) inside the project folder:

```bash
npm install              # install dependencies
npm run setup            # download stock images (one-time, needs internet)
npm run dev              # start local server at http://localhost:3010
```

After `npm run setup` finishes once, **the site works fully offline.**

If `npm` isn't recognized: install Node.js LTS from https://nodejs.org first,
then restart your terminal.

---

## 2. Push to GitHub (one time)

### Step 2a — Create the repo

Go to https://github.com/new and create a repo called `poultney-trading`.
Make it private if you prefer. **Don't initialise it with a README** — leave
it empty. Copy the repo URL from the page that appears next.

### Step 2b — Paste this prompt into Cursor:

```
I just created a new empty GitHub repo at <PASTE-YOUR-REPO-URL>.

Initialise git in this project, commit everything, and push to that remote.
Walk me through it step by step with exact commands. If git asks for
credentials, tell me how to set up a Personal Access Token in GitHub.
```

Cursor will run:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin <YOUR-REPO-URL>
git push -u origin main
```

---

## 3. Connect Vercel to the GitHub repo (one time)

Do this in the browser, not Cursor:

1. Sign in to https://vercel.com using your GitHub account
2. Click **Add New** → **Project**
3. Find and import the `poultney-trading` repo
4. Framework: **Next.js** (auto-detected — leave defaults)
5. Click **Deploy**
6. ~60 seconds later you'll get a `*.vercel.app` URL — that's the client preview link

From now on, **every `git push` to main auto-deploys to that URL.**

---

## 4. Daily workflow

Two patterns:

### Pattern A — Quick content edit

In Cursor:
1. Edit a file (or ask Cursor to)
2. In the terminal:
   ```bash
   git add .
   git commit -m "Update product copy"
   git push
   ```
3. Vercel auto-deploys in ~30 seconds

### Pattern B — Bigger feature

1. Make a branch first: `git checkout -b feature-name`
2. Edit, commit, push: `git push -u origin feature-name`
3. Vercel gives you a **preview URL** for that branch — share with client
4. When approved, merge to main on GitHub → production auto-updates

---

## 5. Writing insights (the CMS)

Each insight is a markdown file in `content/insights/`. Cursor handles this perfectly.

### Prompt to write a new insight:

```
Write a new insight post for Poultney Trading. Topic: <TOPIC HERE>.

Create the file at content/insights/<slug-i-want>.md with the standard frontmatter
(title, excerpt, date, category, image, author).

- Date: today's date
- Category: <Feed Market | Poultry | Horticulture | Market Update | etc>
- Image path: /images/insights/<slug>.jpg — I'll add the image afterwards
- Length: ~500-800 words
- Style: confident, practical, grounded in Zimbabwean market context, written
  for farmers / traders / retailers as the audience
- Structure: opening paragraph, 2-3 H2 subheadings, end with a soft CTA
  ("Get in touch" / "Talk to us")
- Voice: first-person plural ("we"), authoritative but warm

After writing, tell me the exact path of the file you created and remind me
to drop the cover image in /public/images/insights/.
```

### To edit an existing insight:

```
Update the insight at content/insights/<slug>.md. <Describe the change>.
Keep the same frontmatter unless I tell you to change it.
```

### To remove an insight:

Delete the `.md` file. It disappears from the site on next deploy.

---

## 6. Common update prompts

### 6a. Change contact details (phone, email, address)

```
Update the Poultney Trading contact details across the whole site:
- Phone: <PASTE>
- Email: <PASTE>
- Address: <PASTE>

These appear in components/CTA.tsx and components/Footer.tsx. Update both,
plus the tel: and mailto: links to match.
```

### 6b. Edit a hero slide

```
In components/HeroSlider.tsx, change Slide <1/2/3>:
- Eyebrow: "<NEW EYEBROW>"
- Title: "<NEW HEADLINE>" — split each word into its own object in titleWords
  array. Set italic: true on the word I want highlighted in orange.
- Subtitle: "<NEW SUBTITLE>"
- Meta list items: <list>
```

### 6c. Add/remove a product

```
In components/Products.tsx, <add a new product / remove "X">. The products
array at the top controls everything.

For new products: give it the next num ("007", "008"...), title, one-sentence
desc, a simple line-art SVG icon on a 64x64 viewBox matching the style of
existing icons, and pick an img number 1-6 to reuse an existing background
(or tell me to add a new image).
```

### 6d. Add the real Poultney logo

```
I have the real Poultney Trading logo. <Either: I'll save it as
/public/logo.svg / it's an SVG I'll paste here>.

If pasting: <paste the SVG markup>. Save it as /public/logo.svg overwriting
the existing placeholder. Verify the navbar and footer still render it correctly
at 42x42px (they reference /logo.svg via an <img> tag).

If the new logo isn't a circular badge shape, adjust the .logo-mark-img CSS in
globals.css to remove the border-radius if needed.
```

### 6e. Replace stock photos with real photography

```
I'm replacing the stock photos with real Poultney photography. I'll drop them
into /public/images/ using these exact filenames:

- hero-horticulture.jpg, hero-poultry.jpg, hero-feed.jpg
- about.jpg, cta-bg.jpg
- product-horticulture.jpg, product-chicks.jpg, product-chickens.jpg,
  product-pigs.jpg, product-feed.jpg, product-dogfood.jpg

I don't need code changes — the paths are already pointing here. But verify
nothing in the codebase still references images.unsplash.com, and tell me
the recommended dimensions for each.
```

### 6f. Add a working contact form (Resend)

```
Add a working contact form to the CTA section using Resend (same pattern I
have on Universe Security).

Requirements:
- Server action at app/actions/send-contact.ts that sends via Resend
- Form fields: name, email, phone, product interest (dropdown: day-old chicks,
  chickens, pigs, animal feed, dog food, horticulture, other), message
- Add the form UI inside components/CTA.tsx alongside the existing contact info
- Style to match existing design (cream/green/orange, Fraunces labels, rounded inputs)
- Show success state on submit
- Use RESEND_API_KEY env var
- Tell me exactly what to add to .env.local and to Vercel's environment vars

Install the resend package if needed and commit.
```

After Cursor adds this:
1. Get an API key from https://resend.com
2. Locally: create `.env.local` with `RESEND_API_KEY=re_xxxxxx`
3. Vercel dashboard → project → Settings → Environment Variables → add the same key
4. Push to GitHub — auto-deploys

### 6g. Add a custom domain

```
I bought the domain <poultneytrading.co.zw>. Walk me through pointing it at
my Vercel deployment, with the exact DNS records I need to add at my domain
registrar.
```

Cursor will explain: Vercel dashboard → project → Settings → Domains → add
the domain → Vercel shows you DNS records → add at your registrar (likely
ZISPA for `.co.zw` domains) → wait for propagation.

### 6h. SEO improvements

```
Make this site production-ready for SEO:
1. Create app/sitemap.ts that lists the home page, /insights, and every
   /insights/<slug> dynamically from the CMS
2. Create app/robots.ts that allows all crawlers
3. Create app/opengraph-image.tsx using Next.js built-in image generation —
   deep green background, orange accent stripe, "Poultney Trading" in Fraunces,
   tagline "Horticulture · Poultry · Feed"
4. Add per-insight OpenGraph metadata so social shares look good
```

### 6i. Add Google Analytics or Plausible

```
Add <Plausible / Google Analytics> tracking. Use the Next.js Script
component with the right loading strategy. Walk me through getting the
tracking ID.
```

### 6j. Upgrade the CMS to a proper headless CMS

```
I want to upgrade from markdown-file CMS to <Sanity / Contentful>. Walk me
through it:
1. What I need to set up on their side
2. What changes in lib/insights.ts (it needs to call their API instead of reading files)
3. Migration script to push my existing content/insights/*.md into the new CMS
4. Env vars and Vercel config needed

The rest of the site (homepage slider, listing page, detail page) shouldn't
need to change — that's the benefit of keeping the CMS behind lib/insights.ts.
```

---

## 7. Troubleshooting prompts

### "Something's broken locally"

```
The site is showing errors / blank / broken styles. Look at:
1. The terminal output where `npm run dev` is running
2. The browser console for errors
3. Any TypeScript errors

Tell me what's wrong and fix it. Don't make me copy-paste.
```

### "Vercel deploy failed"

```
My Vercel deploy failed. I'll paste the error log next — read it and fix
the cause. If it's a missing frontmatter field in an insight, fix that file.
```

Then paste the Vercel build log.

### "Insight isn't appearing on the site"

```
I added a new insight at content/insights/<slug>.md but it isn't showing
up. Check:
1. The frontmatter is valid (all required fields present, dates in YYYY-MM-DD)
2. The file extension is .md (not .markdown or .txt)
3. The date isn't in the future

If everything looks fine, run a build locally to see if it errors.
```

### "Images aren't loading"

```
Some images aren't loading. Check:
1. Have I run `npm run setup` yet?
2. Are the files actually in /public/images/ on disk?
3. Does any code still reference images.unsplash.com or other remote hosts?

Investigate and tell me what's wrong.
```

---

## 8. General "make it better" prompts

```
Audit my Poultney Trading site for mobile responsiveness on a 375px screen.
List every section that breaks or looks rough, then fix all of them.
```

```
Look at the current site and suggest 5 high-impact design or UX improvements.
Don't change anything yet — just propose them with one-sentence rationale each,
and I'll pick which to implement.
```

```
Audit my site for accessibility (a11y): missing alt text, low contrast,
missing aria labels, keyboard navigation. Fix everything you find.
```

```
The homepage feels long. Suggest the optimal section order for a first-time
visitor and reorder app/page.tsx accordingly.
```

---

## 9. Daily cheat sheet

```bash
# Open project, start working
cd C:\Users\cojva\Desktop\poultney-trading
npm run dev                          # localhost:3010

# Publish changes
git add .
git commit -m "<what changed>"
git push                             # Vercel auto-deploys

# Refresh stock images (if any failed first time)
npm run setup
```

That's the whole workflow.

---

## 10. Files cheat sheet

| What                              | File                                  |
| --------------------------------- | ------------------------------------- |
| Colors, fonts, spacing            | `app/globals.css` (top, `:root`)      |
| SEO, favicon, fonts               | `app/layout.tsx`                      |
| Home page section order           | `app/page.tsx`                        |
| Hero slides                       | `components/HeroSlider.tsx`           |
| About copy                        | `components/About.tsx`                |
| Product cards                     | `components/Products.tsx`             |
| Why-us bullets                    | `components/WhyUs.tsx`                |
| Insights slider                   | `components/InsightsSlider.tsx`       |
| Contact CTA                       | `components/CTA.tsx`                  |
| Footer + nav                      | `components/Footer.tsx`, `Navbar.tsx` |
| **All insights (CMS)**            | `content/insights/*.md`               |
| Insights logic                    | `lib/insights.ts`                     |
| Logo                              | `public/logo.svg`                     |
| Stock photos                      | `public/images/`                      |
| Image download script             | `scripts/download-images.js`          |
