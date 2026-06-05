# Frog Empire Foundation — SEO Overhaul Report

**Date:** 2026-06-05 · **Branch:** `seo/overhaul` · **Canonical domain:** https://frogempirefoundation.org

This document summarizes the SEO work shipped, the estimated score impact, the
manual steps you still need to do, and the recommended content / local / backlink
strategy going forward.

---

## 1. What shipped (code)

### Technical foundation
- **robots.txt** — allows all crawlers + explicitly welcomes AI/answer-engine bots
  (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot) for
  AI-search/GEO discoverability. Points to the sitemap.
- **sitemap.xml** — all 9 pages with priorities, change frequency, and a homepage image entry.
- **netlify.toml** — long-cache immutable headers for images/CSS/JS, `must-revalidate`
  for HTML, security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy,
  Permissions-Policy), and pretty-URL rewrites (`/about` → `/about.html`, `/donate` → donate section).
- **site.webmanifest** — PWA/install metadata + theme color.

### Metadata (every page)
- Unique, keyword-rich **titles** and **meta descriptions** (no more duplicates —
  `about.html` previously shared the homepage title, which split ranking signals).
- **Canonical URLs** on all 9 pages.
- **OpenGraph + Twitter card** tags with a dedicated 1200×630 share image (`og-default.jpg`).
- **Geo meta** (region, placename, coordinates) for local relevance.
- `theme-color`, `apple-touch-icon`, manifest link, enhanced robots directives
  (`max-image-preview:large`).

### Structured data (JSON-LD) — all validated
- **NGO + SportsOrganization** entity sitewide (name, logo, area served, geo, sameAs, 501c3 status).
- **WebSite / WebPage / BreadcrumbList** on every page.
- **FAQPage** on sponsor + both new landing pages (with matching visible Q&A).
- **Event** for the Light It Up Blue clinic.
- **Service** + **DonateAction** for scholarships and donations.

### Core Web Vitals / performance
- **Images optimized 13 MB → 6.6 MB** (sips re-compression + right-sizing; the worst
  offender, `founding_sponsor.png`, went 2.4 MB → 512 KB).
- Render-blocking font `@import` moved out of CSS into a **preconnected `<link>`** in the head.
- **Intrinsic `width`/`height`** on all content images (eliminates layout shift / CLS).
- **`loading="lazy"` + `decoding="async"`** on below-the-fold images; the homepage LCP
  image gets **`fetchpriority="high"`**.
- A 1200×630 `og-default.jpg` generated for social/AI previews.

### Accessibility
- **Skip-to-content link** + `id="main"` landmark on every page.
- Nav toggle now exposes **`aria-expanded` / `aria-controls`** (wired in `main.js`).
- **Progressive enhancement:** the scroll-reveal animation is gated behind `html.js`,
  so content stays visible for crawlers / no-JS / reduced-motion users.

### New SEO landing pages (local + topic)
- **`wrestling-scholarships-ithaca-ny.html`** — targets "wrestling scholarships Ithaca NY",
  "youth wrestling financial aid Finger Lakes". Service + FAQ schema.
- **`autism-inclusive-wrestling-clinic.html`** — targets "autism wrestling clinic",
  "adaptive wrestling Ithaca", "Light It Up Blue". Event + FAQ schema.
- Both interlinked from `programs.html` and `events.html`.

---

## 2. Estimated SEO score impact

Qualitative before → after (run Lighthouse / PageSpeed Insights on the live URL for exact numbers):

| Category | Before | After (est.) | Driver |
|---|---|---|---|
| Technical SEO | ~35 | ~92 | robots, sitemap, canonicals, headers |
| Metadata / on-page | ~55 | ~93 | unique titles/desc, OG/Twitter, fixed dup title |
| Structured data | 0 | ~95 | NGO/Event/FAQ/Breadcrumb, all valid |
| Performance (mobile) | ~60 | ~85–90 | −50% image weight, font preconnect, lazy/CLS |
| Accessibility | ~80 | ~95 | skip link, aria, no-JS resilience |
| Local SEO | ~25 | ~85 | geo meta, NGO address, city/topic pages |
| AI-search / GEO | ~20 | ~85 | crawler allows, entity schema, FAQ content |

> These are engineering estimates based on the changes, not measured Lighthouse scores.
> Actual ranking gains depend on indexing + off-page signals over 4–12 weeks.

---

## 3. Remaining manual steps (you must do these)

1. **Deploy:** merge `seo/overhaul` into `main` (or drag the folder to Netlify). Nothing
   here breaks existing behavior — donations still use your PayPal links.
2. **Set the primary domain in Netlify** to `frogempirefoundation.org` (non-www) and enable
   "Force HTTPS" so canonicals match exactly. If you prefer `www`, tell me and I'll flip
   every canonical/OG URL + sitemap to match (must be consistent).
3. **Publish your EIN.** "EIN available upon request" is a trust gap — listing the actual
   EIN in the footer + about page measurably improves donor trust and authority signals.
4. **Add a physical/mailing address** if you have one. A real `streetAddress` unlocks the
   full LocalBusiness/Google Business Profile benefit (currently city-level only).
5. **Create a Google Business Profile** for the foundation (category: Non-profit organization,
   Ithaca, NY) — the single biggest local-SEO lever for a local nonprofit.
6. **Set real event dates** in `events.html`. The two "TBD" events can't carry valid Event
   schema until they have a `startDate`; once you have dates, I (or you) can add them.
7. **Verify in Google Search Console + Bing Webmaster Tools** (next section).

---

## 4. Google Search Console recommendations

1. Add the property `https://frogempirefoundation.org` (Domain property via DNS is best).
2. Submit `https://frogempirefoundation.org/sitemap.xml`.
3. Use **URL Inspection → Request Indexing** for the homepage + the two new landing pages.
4. Check **Enhancements** for Breadcrumb / FAQ / Event rich-result eligibility (should
   populate within ~1–2 weeks of crawl).
5. Watch **Core Web Vitals** and **Mobile Usability** reports after ~28 days of field data.
6. Repeat property setup in **Bing Webmaster Tools** (feeds ChatGPT search) and submit the same sitemap.
7. Once you have a Google Business Profile, verify it and keep NAP (Name/Address/Phone)
   identical to the site footer.

---

## 5. Recommended content strategy (blog / articles)

Add a simple `/blog/` (or `/news/`) section. Each post = one long-tail keyword cluster.
Priority order by impact × ease:

1. **"How much does youth wrestling cost (and how to afford it)"** — high intent, ties
   directly to your scholarship funnel.
2. **"A parent's guide to starting wrestling in Ithaca / the Finger Lakes"** — local + informational.
3. **"Wrestling for kids with autism: what an adaptive clinic looks like"** — owns the
   adaptive-sports niche, links to the clinic page.
4. **"What wrestling teaches kids beyond the mat"** — mission-aligned, shareable, link-bait.
5. **Event recaps** (with photos + Event schema) after each clinic/fundraiser — fresh content + local signals.
6. **Athlete / scholarship spotlight stories** — emotional, drives donations, earns shares.

Cadence: 1–2 posts/month is plenty. Each should internally link to programs, the
scholarship page, and a donate CTA.

---

## 6. Local SEO strategy

- **Google Business Profile** (do this first) + Bing Places.
- Get listed in **local nonprofit directories**: Ithaca Times community listings,
  Tompkins County nonprofit lists, United Way of Tompkins County, GuideStar/Candid,
  Great Nonprofits, Charity Navigator.
- Consistent **NAP** everywhere (name "Frog Empire Foundation", Ithaca NY, info@ email).
- Build **city/region pages** as you expand (e.g. Cortland, Binghamton, Syracuse youth
  wrestling) — same template as the Ithaca scholarship page.
- Encourage **Google reviews** from parents/sponsors on the Business Profile.

---

## 7. Backlink & community partnership opportunities

- **Frog Empire Wrestling Academy** (frogempire607.com) — cross-link both directions (you
  already link out; ask the academy to link back to the foundation).
- **School & youth wrestling clubs** in Section IV / Finger Lakes — partner pages, "supported by" links.
- **Cornell & Ithaca College wrestling programs** — clinic collaborations earn .edu-adjacent links.
- **Autism / disability organizations** (Autism Society chapters, special-olympics-adjacent
  groups) — partners for the Light It Up Blue clinic + high-authority links.
- **Local sponsors/businesses** — each sponsor's site should link to your sponsor page (add
  it to your sponsor onboarding).
- **Local press** — Ithaca Times, Ithaca Voice, Tompkins Weekly for event coverage (news links).
- **Donation platforms** — GuideStar/Candid profile, Facebook Fundraisers, Benevity.

---

## 8. Maintaining SEO when you edit the site

- **Adding a page?** Add its `<loc>` to `sitemap.xml` and give it a unique `<title>` +
  meta description + canonical (copy the `<head>` pattern from any existing page).
- **Adding an event with a real date?** Add an `Event` block to the JSON-LD in `events.html`
  (copy the Light It Up Blue block, change name/date/description).
- **Adding images?** Keep them under ~300 KB, set `width`/`height`, add `loading="lazy"`
  (except the first/hero image), and write descriptive `alt` text.
