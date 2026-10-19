# images/esws/ — Empire State Wrestling Series

Art for the four `empire-state-series*.html` pages. Anything missing renders as a
dashed `.esws-placeholder` frame; `grep -rn "MISSING ASSET\|PLACEHOLDER" ../../empire-state-series*.html`
finds every one.

## In the repo

| File | Used on |
| --- | --- |
| `jaxon-joy-2026-11-15.webp` | Nov 15, 2026 clinic flyer — hub next-clinic card and the events page featured card. 1122×1402, 316 KB. |

The flyer is served at its full 1122px width because it is the page's largest
visual and it carries readable text; its alt text repeats everything printed on
it, so nothing is lost to screen readers or search.

## Still needed

| File | Used on | Notes |
| --- | --- | --- |
| `esws-logo.png` | hub hero (dark band) | **Not on disk.** The series wordmark — white/red grunge type over the New York state outline with the "POWERED BY FROGEMPIRE FOUNDATION INC" plate. It appears composited onto the dark background of both flyers, so it has to come out of the original design file, not a crop. Export around 640×400 on transparency. |
| `recap-<n>-cover.jpg` | events page | Cover photo per past clinic. None exist yet — the recap section is parked in a `<template>` until after Nov 15. |
| `recap-<n>-01.jpg` … `-12.jpg` | events page | Square crops for the recap gallery strip. |

Keep new exports under about 300 KB, WebP where you can. Recap gallery images
are square crops and want `loading="lazy"` plus explicit `width`/`height`.
