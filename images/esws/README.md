# images/esws/ — Empire State Wrestling Series

Art for the four `empire-state-series*.html` pages. Anything missing renders as a
dashed `.esws-placeholder` frame; `grep -rn "MISSING ASSET\|PLACEHOLDER" ../../empire-state-series*.html`
finds every one.

## In the repo

| File | Used on |
| --- | --- |
| `jaxon-joy-2026-11-15.webp` | Nov 15, 2026 clinic flyer — hub next-clinic card and the events page featured card. 1122×1402, 316 KB. |
| `esws-logo.png` | Series wordmark — hub hero, dark band. 640×426, 342 KB, downsized from the client's 1536×1024 export. |

The flyer is served at its full 1122px width because it is the page's largest
visual and it carries readable text; its alt text repeats everything printed on
it, so nothing is lost to screen readers or search.

### Two things to know about the wordmark

**Lowercase `.png` matters.** The export arrived as `esws-logo.PNG`. macOS is
case-insensitive so either spelling works locally, but Netlify serves
case-sensitively and the uppercase name would have 404'd in production.

**It is opaque, not transparent.** The export has no alpha channel — the
artwork sits on a pure-black ground (0,0,0 at every edge). On the warm
`--ink-deep` hero that would read as a black rectangle, so `.series-logo` uses
`mix-blend-mode: screen`: screen returns the backdrop unchanged wherever the
source is black, which drops the rectangle without alpha and leaves the white
and red artwork alone. If a genuinely transparent PNG is exported later, delete
the `mix-blend-mode` line from `.series-logo` in `styles.css`; nothing else
changes. Swapping in a differently proportioned file also means updating the
`width`/`height` attributes on the `<img>` and the `aspect-ratio` on
`.series-logo`.

## Still needed

| File | Used on | Notes |
| --- | --- | --- |
| `recap-<n>-cover.jpg` | events page | Cover photo per past clinic. None exist yet — the recap section is parked in a `<template>` until after Nov 15. |
| `recap-<n>-01.jpg` … `-12.jpg` | events page | Square crops for the recap gallery strip. |

Keep new exports under about 300 KB, WebP where you can. Recap gallery images
are square crops and want `loading="lazy"` plus explicit `width`/`height`.
