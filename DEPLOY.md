# Thomas McKee Design Engineering — website

Custom site built with **Astro**. Fast, SEO-friendly, hosted free on Cloudflare Pages.

## What's here
- `src/layouts/Base.astro` — shared header, footer, theme toggle and the page <head>
- `src/styles/global.css` — the whole design system, in one place
- `src/pages/index.astro` — the homepage
- More pages (services, case studies, about, contact) and the guides CMS come next.

## Get it live on a FREE test URL (your Wix site + domain stay untouched)

### 1. Make two free accounts
- github.com  — stores the code
- dash.cloudflare.com  — hosts it and republishes automatically

### 2. Put the code on GitHub (no command line needed)
1. On GitHub: **New repository** → name it `tmde-site` → Private is fine → **Create**.
2. Unzip the file I sent you.
3. On the empty repo page, click **"uploading an existing file"**, then drag in
   ALL the files and folders from *inside* the unzipped `site` folder
   (there is no `node_modules` folder to worry about — it isn't included) → **Commit changes**.

### 3. Connect Cloudflare Pages
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick the `tmde-site` repo.
3. Framework preset: **Astro** (auto-detected). Build command `npm run build`, output directory `dist`.
4. **Save and Deploy.**

You'll get a URL like `tmde-site.pages.dev`. That's the site live — send it to me.

### 4. Your domain
Leave it on Wix for now. We point it at the new site only at the very end,
once everything is built and you're happy with it.

## How updates work
Every time the code changes on GitHub, Cloudflare rebuilds and republishes
automatically — usually within a minute. No manual publishing.

## To run it on your own computer (optional)
Install Node.js, then in this folder run `npm install` then `npm run dev`.
