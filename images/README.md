# Asset Drop Map — Nature Formed Landscaping

Every image/video slot on the site has a `data-label` telling you exactly what goes there. When you save your files with the exact filenames below, they'll automatically appear in the right spots.

> **How swap-in works:** every `<div class="image-placeholder">` is wrapper that holds a background label. If you add an `<img>` or `<video>` as the first child with the matching filename, it fills the container and the label disappears automatically.

---

## 📁 Expected folder structure

```
images/
├── logos/
│   ├── nf-monogram-white.svg    (or .png) — nav + footer monogram
│   ├── nf-monogram-forest.svg   — for light-bg sections
│   ├── nf-lockup-cream.png      — full lockup w/ "Formed by Nature / Refined by us" on cream
│   └── nf-lockup-forest.png     — full lockup on forest green
├── hero-bg.jpg                  — homepage hero (16:9, ~1920x1080)
├── services-hero.jpg            — services page hero
├── portfolio-hero.jpg           — portfolio page hero
├── about-hero.jpg               — about page hero
├── contact-hero.jpg             — contact page hero
├── og-image.jpg                 — social sharing image (1200x630)
├── favicon.png                  — browser tab icon (512x512)
├── intro-portrait.jpg           — home page intro column (3:4 portrait)
├── about-story.jpg              — about page story column (4:3)
│
├── projects/
│   ├── paver-walkway-finished.jpg
│   ├── paver-walkway-before.jpg     (the herringbone-in-progress shot)
│   ├── pool-backyard.jpg
│   ├── concrete-patio-modern.jpg
│   ├── curved-concrete-walkway.jpg
│   ├── putting-green-stonewall.jpg
│   ├── sod-install-fresh.jpg         (the striped just-installed photo)
│   ├── sod-install-established.jpg   (the mature green lawn by pool)
│   ├── front-yard-driveway.jpg       (the teal cottage + concrete driveway)
│   ├── shrub-cleanup-before.jpg      (the overgrown bushes photo)
│   ├── twilight-lighting.jpg
│   ├── irrigation-retrofit.jpg
│   └── mediterranean-courtyard.jpg
│
├── services/
│   ├── design.jpg
│   ├── hardscape.jpg            (reuse paver-walkway-finished.jpg)
│   ├── turf.jpg                 (reuse putting-green-stonewall.jpg)
│   ├── irrigation.jpg
│   ├── lighting.jpg             (reuse twilight-lighting.jpg)
│   ├── trees.jpg
│   ├── maintenance.jpg
│   └── wash.jpg                 (reuse concrete-patio-modern.jpg)
│
├── instagram/
│   ├── ig-1.jpg  ig-2.jpg  ig-3.jpg  ig-4.jpg
│
└── videos/                      (optional — for the .mov files you sent)
    ├── hero-loop.mp4            — convert one of the project walkthrough .movs
    ├── IMG_6303.mp4
    ├── IMG_6258.mp4
    ├── IMG_1335.mp4
    ├── IMG_1331.mp4
    └── IMG_5184.mp4
```

---

## 🎨 The 4 logos you sent — where each goes

| Logo variation | Filename to save as | Where it's used |
|---|---|---|
| **Cream bg, forest green monogram with arched "Formed by Nature / Refined by us"** | `nf-lockup-cream.png` | About page hero background, "Our Story" section, marketing assets |
| **Forest bg, white NF monogram only** | `nf-monogram-white.svg` | Nav bar (when scrolled), footer |
| **Forest bg, cream monogram with arched text** | `nf-lockup-forest.png` | Footer brand area, hero overlay, business cards |
| **White bg, forest green NF monogram only** | `nf-monogram-forest.svg` | Favicon source, light-background contexts |

**Primary mark to convert to favicon:** the simple NF monogram (logo #4 — white bg, green mark). Export to 512×512 PNG → `images/favicon.png`.

---

## 📸 Your real photos — exact slot-for-slot mapping

### Paver walkway pair (the two herringbone shots)
- **IN-PROGRESS shot** (bricks stacked, bare dirt, orange bucket) → `images/projects/paver-walkway-before.jpg`
  - Goes into: portfolio.html Before/After pair #1 (left side), services.html hardscape alt
- **FINISHED shot** (completed herringbone walkway from front entrance) → `images/projects/paver-walkway-finished.jpg`
  - Goes into: portfolio.html Before/After pair #1 (right side), portfolio grid card #1 (tall), home featured projects rail, services.html hardscape block

### Sod install pair (striped fresh + established green)
- **FRESH install** (visible roller lines + shadow) → `images/projects/sod-install-fresh.jpg`
  - Goes into: portfolio.html Before/After pair #2 (left side)
- **ESTABLISHED lawn** (mature green by pool with palms) → `images/projects/sod-install-established.jpg`
  - Goes into: portfolio.html Before/After pair #2 (right side), portfolio grid card #5, home featured projects rail, **possibly hero-bg.jpg** (it's the best-looking single shot you have — stunning backyard)

### Concrete work (three distinct projects)
- **Modern white home w/ fresh patio pour** → `images/projects/concrete-patio-modern.jpg`
  - Goes into: portfolio grid card #3 (Gilbert concrete patio), home featured projects rail
- **Curved concrete walkway alongside stucco home** → `images/projects/curved-concrete-walkway.jpg`
  - Goes into: portfolio grid card #6 (Chandler)
- **Teal cottage w/ finished concrete driveway** → `images/projects/front-yard-driveway.jpg`
  - Goes into: portfolio.html Before/After pair #3 (right side), portfolio grid card #7 (Tempe)

### Turf + stonework
- **Artificial turf putting-green with stacked stone retaining wall** → `images/projects/putting-green-stonewall.jpg`
  - Goes into: portfolio grid card #4 (tall, Mesa), services.html turf block, home featured projects rail

### Maintenance / cleanup
- **Overgrown shrubs alongside stucco house** → `images/projects/shrub-cleanup-before.jpg`
  - Goes into: portfolio grid card #8 (Garden & Shrub Renewal). Labeling this as a "before" or "in-service" shot rather than a finished project — ideally pair it with an "after" photo when you have one.

---

## 🎬 The 5 videos you sent — suggested placement

The videos can't be viewed yet (they were temp-drop previews), but here's where each .mov should land once you save them to `images/videos/`:

| File | Best use | Notes |
|---|---|---|
| `IMG_6303.mov` → `hero-loop.mp4` | **Homepage hero background** | The most polished, cinematic clip. Convert to MP4 (H.264) + WebM, 10-15s loop, muted, autoplay. |
| `IMG_6258.mov` | Portfolio detail overlay | Pair with a project card as a "walkthrough" |
| `IMG_1335.mov` | Services page hero OR about hero | Process/build-in-progress footage works great here |
| `IMG_1331.mov` | Instagram CTA row (portfolio page) | Drop into one of the 4 IG squares |
| `IMG_5184.mov` | Before/after transformation reveal | Or use as a second portfolio background loop |

### How to add a video to the hero
Replace the `<img>` inside `.hero__bg` with:
```html
<video autoplay muted loop playsinline poster="images/hero-poster.jpg">
  <source src="images/videos/hero-loop.mp4" type="video/mp4">
  <source src="images/videos/hero-loop.webm" type="video/webm">
</video>
```

**Convert .mov → .mp4** with ffmpeg (run once per video):
```bash
ffmpeg -i IMG_6303.mov -vcodec h264 -acodec aac -crf 23 -preset slow -movflags +faststart hero-loop.mp4
```

---

## ⚠️ Open questions — things I need from you to finalize

1. **ROC license number** — currently shows `ROC# [to be added]` in footer across all pages. Send it and I'll drop it in.
2. **Google Maps embed link** — for the contact page map section. Give me the embed `<iframe>` URL from Google Maps (share → embed) for your service area.
3. **Google Analytics / Meta Pixel / Microsoft Clarity IDs** — I've left commented placeholders in every `<head>`. Send any tracking IDs and I'll uncomment and fill them in.
4. **Specific project names + cities** — the 12 portfolio cards use reasonable assumptions (Phoenix, Scottsdale, Gilbert, etc.). If you have actual client neighborhoods you want shown, let me know and I'll update.
5. **Year founded** — I wrote "10+ years." Do you want a specific founding year in the schema/about copy?
6. **Photography sessions** — a couple slots still need photos you may not have yet: design concepts/renderings, weekly maintenance crew in action, irrigation detail shots, twilight lighting photos. Your existing real work is strong; if you want those slots filled faster we can use a placeholder photo creatively (e.g. reusing the pool backyard behind the maintenance block).

---

## 🚀 Going live checklist

1. Save your logo files → `images/logos/` (filenames above)
2. Save the favicon PNG → `images/favicon.png`
3. Save project photos → `images/projects/` (filenames above)
4. Drop any video files → `images/videos/` (convert .mov → .mp4 first)
5. Send me the ROC# + GA/Pixel IDs + Maps embed
6. Push to GitHub → connect Netlify → point domain
7. Done.
