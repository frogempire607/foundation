# images/esws/ — Empire State Wrestling Series

Flyers, clinician photos and recap galleries for the four
`empire-state-series*.html` pages. The pages currently show dashed placeholder
frames (`.esws-placeholder`) wherever one of these files is missing — search the
markup for `PLACEHOLDER` to find each one.

Expected file names:

| File | Used on |
| --- | --- |
| `jaxon-joy.jpg` | hub — clinician photo on the next-clinic card |
| `2026-11-15-jaxon-joy.jpg` | events — flyer for the Nov 15, 2026 clinic |
| `recap-<n>-cover.jpg` | events — cover photo on each past-clinic card |
| `recap-<n>-01.jpg` … `recap-<n>-12.jpg` | events — square crops in the recap gallery strip |

Keep flyer and photo exports under 300 KB, WebP where you can. Recap gallery
images are square crops and should be lazy-loaded
(`loading="lazy"` plus explicit `width`/`height`).
