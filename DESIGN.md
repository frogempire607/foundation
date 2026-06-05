# Frog Empire Foundation — Design System

**Direction:** *Stripe-clean light surface, athletic precision.*
A premium, modern, light-first system. Calm and spacious like Stripe / Linear / Notion,
with one committed brand accent (Cornell red) and engineered, athletic typography so it
still reads like a wrestling brand, not generic SaaS.

All tokens live in `styles.css` under `:root`. This file is the reference; the CSS is the
source of truth.

---

## Principles

1. **Light first.** Warm near-white paper, generous whitespace, soft elevation. Two
   deliberate *dark moments* (the stats band and the footer) create rhythm and punch.
2. **One committed accent.** The brand red carries identity at ≤10% coverage — CTAs, key
   words, small marks. No second accent color.
3. **One type family.** Archivo (variable, 300–900, width 100–125%). Athletic energy comes
   from heavy weight + expanded width + tight tracking + scale, not from many fonts.
4. **Restraint over noise.** Title case for headings (not ALL-CAPS everywhere). Uppercase is
   reserved for short labels. The hero keeps one bold statement moment.
5. **Never pure black/white.** Every neutral is tinted warm toward the brand hue (OKLCH).

---

## Color (OKLCH, warm-tinted)

| Token | Value | Use |
|---|---|---|
| `--bg` | `oklch(0.992 0.003 50)` | Page background (warm paper white) |
| `--bg-subtle` | `oklch(0.972 0.005 50)` | Alternating section bands |
| `--surface` | `oklch(1 0 0)` | Cards / raised surfaces |
| `--surface-2` | `oklch(0.985 0.004 50)` | Inset / secondary surfaces |
| `--ink` | `oklch(0.24 0.012 40)` | Primary text |
| `--ink-2` | `oklch(0.44 0.012 40)` | Body / secondary text |
| `--ink-3` | `oklch(0.60 0.010 40)` | Muted labels, captions |
| `--ink-deep` | `oklch(0.18 0.014 40)` | Dark bands (stats, footer) |
| `--line` / `--line-2` | `oklch(0.918 / 0.86 …)` | Hairline / stronger borders |
| `--red` | `oklch(0.525 0.205 27)` | Brand accent (buttons, marks) |
| `--red-bright` | `oklch(0.585 0.215 27)` | Hover |
| `--red-deep` | `oklch(0.43 0.18 27)` | Red text on light (legible) |
| `--red-soft` | `oklch(0.965 0.028 27)` | Red-tinted surfaces / panels |
| `--red-line` | `oklch(0.90 0.05 27)` | Red-tinted borders |

**Legacy bridge:** the old dark-theme token names (`--black`, `--black-soft`, `--black-card`,
`--gray`, `--gray-light`, `--gray-dark`) are remapped to light-theme values so existing inline
styles keep resolving. Prefer the semantic tokens above for any new work.

---

## Typography

- **Family:** `Archivo` (variable). Loaded via Google Fonts with `wdth 100–125`, `wght 300–900`.
- **Display** (`.h-display`, `.hero-title`): weight 800–900, `font-stretch` 118–120%, tight
  negative tracking, fluid `clamp()`.
- **Section** (`.h-section`): weight 800, stretch ~112%, title case.
- **Body:** weight 400, ~17px, line-height 1.6, `-0.006em` tracking, max 60–68ch.
- **Labels / eyebrows:** weight 600, uppercase, `0.14em` tracking, small. Used sparingly.
- **Scale ratio:** ≥1.25 between steps; headings are visibly larger than body.

---

## Spacing & layout

- **Container:** `--max-width: 1240px`, fluid `--gutter: clamp(1.25rem, 5vw, 4.5rem)`.
- **Section padding:** `clamp(4rem, 9vw, 7.5rem)` (tight variant `clamp(3rem, 7vw, 5.5rem)`).
- Vary rhythm: generous between sections, tight within groups. Don't pad everything equally.
- Responsive grids use `repeat(auto-fit, minmax(…, 1fr))` — breakpoint-free.

## Radius

`--radius-xs 8` · `--radius-sm 10` · `--radius 14` · `--radius-lg 20` · `--radius-xl 28` · `--radius-pill 999`.
Cards `--radius`, buttons `--radius-sm`, pills/badges `--radius-pill`, large panels `--radius-xl`.

## Elevation (soft, warm-tinted)

`--shadow-xs → --shadow-lg` for resting → hover lift. `--shadow-red` for primary-button hover glow.
Cards rest at `--shadow-sm` and rise to `--shadow-lg` on hover with a `-4px` translate.

## Motion

- Easing: `--ease: cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint). No bounce/elastic.
- Durations: `--dur-1 .18s` (hover) · `--dur-2 .32s` (cards) · `--dur-3 .55s` (reveals).
- Only animate transform / opacity / color / shadow — never layout properties.
- Respects `prefers-reduced-motion` (all animation/transition neutralized).

---

## Components

- **Buttons:** `.btn-primary` (red, shadow lift), `.btn-outline` (white, hairline), `.btn-ghost`
  (red text + red hairline). Sentence case, weight 600, arrow `→` that nudges on hover.
- **Cards:** white surface, hairline border, soft shadow, hover lift. Number badges sit in a
  red-soft chip. No nested cards, no side-stripe accents, no top-stripe bars.
- **Nav:** translucent blurred bar; gains a hairline border + shadow once scrolled (`.scrolled`).
- **Stats band & footer:** the two intentional dark (`--ink-deep`) moments.
- **CTA banner:** soft red-tinted rounded panel, not full-bleed.
- **Forms:** light inputs, hairline border, red focus ring (`0 0 0 3px var(--red-soft)`).
- **Tiers / events:** consistent card system; tier accent colors drive an on-light-legible
  text variant (`--tier-color-ink`).

## Accessibility

- Focus-visible ring on all interactive elements (`2px` red, offset).
- Tinted neutrals keep body text well above contrast thresholds on the light surface.
- Reduced-motion honored. Selection styled. Hit targets ≥40px.

---

## Guardrails (don't reintroduce)

- No `-webkit-text-stroke` outline headlines, no gradient text.
- No `border-left/right` colored side-stripes; use full borders or tinted panels.
- No ALL-CAPS body copy; no eyebrow label as mandatory grammar above every heading.
- No pure `#000` / `#fff`.
