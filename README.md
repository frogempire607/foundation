# 🐸 Frog Empire Foundation — Website

A complete 7-page nonprofit website built in HTML, CSS, and vanilla JavaScript. Designed to be dragged onto a free host like Netlify and live in under 5 minutes.

---

## 📁 What's in this folder

```
frogempire/
├── index.html          ← Homepage
├── about.html          ← Our story, team, 501(c)(3) info
├── programs.html       ← Scholarships, Academy, Equipment, Clinics
├── events.html         ← Upcoming & past events + photo galleries
├── sponsor.html        ← All 5 sponsorship tiers + donation section
├── get-involved.html   ← Volunteer & athlete nomination forms
├── contact.html        ← Contact form
├── styles.css          ← All site styling
├── main.js             ← Nav menu + scroll animations
└── images/             ← Logo files + event photos
```

---

## 🚀 Getting your site online

### Netlify (recommended — free, 30 seconds)

1. Go to **https://app.netlify.com/drop**
2. Drag this entire `frogempire` folder onto the page
3. Your site is live at a random URL like `frog-empire-123.netlify.app`
4. Sign up free to claim it and add your custom domain

---

## 🌐 Your custom .org domain

### Step 1 — Buy it
- **Namecheap.com** (~$10–15/yr) — cheapest
- **Cloudflare.com** (~$10/yr) — at-cost pricing
- **Porkbun.com** — good support

Try: `frogempirefoundation.org`, `frogempire.org`, `frogempirefdn.org`

### Step 2 — Connect to Netlify
Netlify → Site settings → Domain management → Add custom domain. Follow their nameserver instructions.

---

## 📧 Getting a foundation email (info@frogempirefoundation.org)

Once you own the domain, pick ONE of these:

### Option 1 — Google for Nonprofits (FREE if approved — BEST OPTION)
1. Apply at **google.com/nonprofits**
2. Once approved, you get Google Workspace free: professional Gmail with your domain, Drive, Calendar, etc.
3. Takes 1–2 weeks for approval but worth it

### Option 2 — Cloudflare Email Routing (FREE, forwarding only)
1. Transfer your domain's DNS to Cloudflare (free)
2. Enable Email Routing → create `info@frogempirefoundation.org` that forwards to your personal Gmail
3. Free forever — but you can only *receive*. To *send* from that address, you'll need to set up Gmail "Send As"

### Option 3 — Namecheap Private Email (~$10–15/yr)
1. Buy it as an add-on when you buy the domain
2. Simple, cheap, works as your main inbox

**Recommendation:** Do Cloudflare forwarding right away (free, 10 minutes), then apply for Google for Nonprofits in the background. Best of both worlds.

---

## 💳 Setting up real donations

All "Donate" buttons currently open an email. To accept cards:

### Donorbox (easiest for nonprofits)
1. Sign up at **donorbox.org**
2. Create a campaign → get your donation page URL
3. In `sponsor.html`, find: `href="mailto:info@frogempirefoundation.org?subject=Donation Inquiry"` and replace with your Donorbox URL

### Stripe Payment Links
1. Create account at **stripe.com** → apply for nonprofit pricing
2. Create a payment link → replace donate `href` with your Stripe link

---

## 📅 Adding events

Open `events.html` in any text editor. Find the `<!-- EVENT TEMPLATE -->` comment. Below it are sample event cards.

### To add a new event:
1. Copy an entire `<article class="event-card">` block (including the closing `</article>`)
2. Paste it right below inside the `<div class="event-grid">` section
3. Change the image, title, date, location, time, and description
4. Set `data-status="upcoming"` or `data-status="past"`

### To add gallery photos to a past event:
1. Drop photo files in the `images/` folder (e.g., `clinic-2024-1.jpg`)
2. In the event card, replace `<div class="event-gallery-empty">Gallery coming after event</div>` with:

```html
<img src="images/clinic-2024-1.jpg" alt="Event photo" data-full="images/clinic-2024-1.jpg">
<img src="images/clinic-2024-2.jpg" alt="Event photo" data-full="images/clinic-2024-2.jpg">
<img src="images/clinic-2024-3.jpg" alt="Event photo" data-full="images/clinic-2024-3.jpg">
```

Photos automatically arrange in a 3-column grid and open in a lightbox when clicked.

---

## 🖼️ Photos currently on the site

- **Homepage**: `hero.jpg`, `scholarship.jpg`
- **About**: `clinic.jpg` + placeholders for Julian/Sal headshots (drop in when ready)
- **Programs**: `action.jpg`, `academy.jpg`, `gear.jpg`, `hero.jpg`
- **Events**: Sample events with photos

To swap any photo: save it to `images/`, then update the `<img src="...">` in the relevant HTML file.

### Adding Julian + Sal headshots (when ready):
Open `about.html`. Find the two lines that say `Julian Ramirez Headshot` and `Sal Headshot` inside `<div class="image-placeholder">`. Replace the whole `<div class="image-placeholder">...</div>` with:

```html
<img src="images/julian.jpg" alt="Julian Ramirez">
```
(and the same for Sal with `images/sal.jpg`)

---

## ✏️ Making text edits

Open any `.html` file in a text editor (Notepad, TextEdit, VS Code). Find the text, type over it, save. Re-upload the folder to Netlify.

---

## 🎨 Design notes

- **Primary color**: Deep red `#B31B1B` (Cornell red)
- **Fonts**: Anton, Archivo Black, Bebas Neue, Inter (all from Google Fonts, free)
