# NBES — MASTER DESIGN SYSTEM
## Document 1 of 4

---

## SECTION 1: CORE DESIGN PHILOSOPHY

### What This Design Must Feel Like

Looking at the BUZONE reference deeply, the design achieves something specific and hard to fake:
**it feels like a real company, not a website template.**

The reason it doesn't feel AI-generated is not complexity — it's *restraint with intention*. Every section makes a deliberate compositional choice. Some are asymmetric. Some are centered. Some have full-bleed photography. But they share a common visual language that makes the whole thing feel coherent.

For NBES, we carry this forward. The design should feel:

- **Quiet authority** — A B2B buyer opening this site should feel "these people know what they're doing" within 3 seconds. Not impressed by flashy animations. Impressed by precision and confidence.
- **Human-assembled, not grid-locked** — Sections do not all follow the same column split. One section might be 60/40. The next might be full-width text with an inset image. The next might be a 2-col unequal project grid.
- **Controlled irregularity** — The layouts are never chaotic, but they are never perfectly symmetric either. Premium design is asymmetric but balanced. Think of a well-laid editorial magazine, not a SaaS pricing page.
- **Information before decoration** — Every visual element earns its place by serving the content. No decorative blobs, no gradient orbs, no geometric shapes floating around for "visual interest."

---

## SECTION 2: COLOR SYSTEM

### Primary Palette

Extracted directly from BUZONE reference, with orange replaced by NBES blue.

```
--color-white:        #FFFFFF       /* Page background, card fills */
--color-off-white:    #F5F4EF       /* Alternate section background (warm, not cold grey) */
--color-black:        #111111       /* Primary text, footer background */
--color-charcoal:     #2C2C2C       /* Secondary text, nav links */
--color-mid-grey:     #6B6B6B       /* Body paragraphs, captions */
--color-border:       #E4E3DE       /* Dividers, card borders */

/* NBES Brand Blue — replaces BUZONE orange exactly */
--color-accent:       #0047CC       /* Buttons, labels, icons, highlights */
--color-accent-dark:  #003399       /* Button hover state */
--color-accent-light: #EBF0FF       /* Light blue backgrounds, icon containers */
```

### Color Usage Rules

**Blue (#0047CC) is used for:**
- All primary CTA buttons
- Eyebrow labels above section headings ("OUR SERVICES", "ABOUT US")
- Icon fills
- The horizontal rule/dash element before labels
- Hover underlines on nav links
- Active state indicators

**Black (#111111) is used for:**
- All H1, H2, H3 headings
- Footer background
- Dark CTA band background

**Off-white (#F5F4EF) is used for:**
- Every other section background — creates rhythm without color noise
- Testimonial card backgrounds
- Process step cards

**White (#FFFFFF) is used for:**
- Primary page background
- Cards overlaid on dark sections
- Nav background

**Rule:** Blue never appears as a background. It is an accent only. Overuse of blue destroys its power.

---

## SECTION 3: TYPOGRAPHY SYSTEM

### Font Selection

**Display / Headings:** `Barlow Condensed` — weights 700, 800
- Condensed sans-serif feels industrial, authoritative, and confident
- This is what makes BUZONE's headings feel powerful — tight letter-spacing, uppercase, condensed width
- The same font choice is correct for NBES

**Body / UI:** `DM Sans` — weights 300, 400, 500
- Clean, modern, high readability
- Light weight (300) for large body paragraphs creates elegant contrast with bold headings
- Medium (500) for labels, nav items, button text

### Type Scale

```
/* Display — Hero headlines */
display-xl:   clamp(60px, 8vw, 110px)   | Barlow Condensed 800 | uppercase | line-height: 0.88

/* Section headings */
display-lg:   clamp(40px, 5vw, 72px)    | Barlow Condensed 800 | uppercase | line-height: 0.92

/* Sub-section headings */
display-md:   clamp(28px, 3.5vw, 48px)  | Barlow Condensed 700 | uppercase | line-height: 1.0

/* Card / component headings */
display-sm:   clamp(20px, 2.5vw, 28px)  | Barlow Condensed 700 | uppercase | line-height: 1.1

/* Eyebrow labels */
label:        12px                       | DM Sans 500 | uppercase | letter-spacing: 0.14em | color: accent

/* Large body */
body-lg:      17–18px                   | DM Sans 300 | line-height: 1.75

/* Standard body */
body-md:      15–16px                   | DM Sans 400 | line-height: 1.65

/* Small / captions */
body-sm:      13–14px                   | DM Sans 400 | line-height: 1.6 | color: mid-grey
```

### Typography Rules

1. **Headings are always uppercase.** This is not optional. The design language depends on it.
2. **Eyebrow labels always appear above section headings** — they are small, uppercase, in accent blue, with a 24px horizontal rule preceding them.
3. **Body text is never bold** — use font weight 300 or 400 only. Reserve 500 for labels and UI elements.
4. **No center-aligned body text** — only headings in hero/CTA sections are centered. All paragraph text is left-aligned.
5. **Line length**: Body paragraphs max 600px wide. Never let a paragraph span the full container.

---

## SECTION 4: SPACING & LAYOUT SYSTEM

### Spatial Scale
```
--space-xs:    8px
--space-sm:    16px
--space-md:    24px
--space-lg:    40px
--space-xl:    64px
--space-2xl:   96px
--space-3xl:   128px
```

### Section Padding

- **Desktop:** 96px top and bottom per section
- **Tablet:** 72px top and bottom
- **Mobile:** 56px top and bottom

### Container

```
max-width: 1240px
padding: 0 40px (desktop)
padding: 0 24px (tablet)
padding: 0 20px (mobile)
margin: 0 auto
```

### Grid System — The Key to Not Looking Like AI

This is the most important part. **BUZONE never uses the same grid layout twice in a row.**

Observed grid patterns from reference (in order of appearance):

1. **Split 50/50** — equal two-column, image + text
2. **Split 60/40** — text-heavy left, supporting image right
3. **Asymmetric 3-col** — one large card + two stacked smaller items
4. **Unequal 2-col projects** — first row: large left + small right | second row: small left + large right
5. **Full-width** — single column, centered, used for stats/CTA
6. **4-col equal** — only for services/features where all items are equal weight
7. **Text + hanging image** — image appears to float outside the text column, overlapping the section

**Rule:** No two adjacent sections should use the same grid structure. This is what creates visual rhythm without chaos.

---

## SECTION 5: COMPONENT LIBRARY

### 5.1 Navigation

**Structure:**
```
[Logo mark] [NBES]    [Home] [Services] [Projects] [About] [Contact]    [Phone] [Get a Quote →]
```

**Specs:**
- Height: 72px
- Background: white, `border-bottom: 1px solid var(--color-border)`
- On scroll (after 60px): add `box-shadow: 0 2px 20px rgba(0,0,0,0.07)`
- Logo: Icon mark (square, accent blue bg) + wordmark "NBES" in Barlow Condensed 800
- Nav links: DM Sans 14px 500, color charcoal, blue underline slide-in on hover
- CTA button: solid accent blue, Barlow Condensed 700, 10px 20px padding
- **Mobile:** Logo + hamburger only visible. Links in fullscreen overlay.

### 5.2 Buttons

**Primary:**
```
background: #0047CC
color: white
font: Barlow Condensed 700, 14px, uppercase, letter-spacing 0.06em
padding: 14px 28px
border-radius: 3px (not pill, not sharp — slightly rounded)
hover: background #003399, translateY(-1px), box-shadow 0 8px 20px rgba(0,71,204,0.25)
```

**Outline:**
```
background: transparent
border: 1.5px solid #0047CC
color: #0047CC
same font as primary
hover: background #0047CC, color white
```

**Ghost / Text link:**
```
no background, no border
color: accent blue
font: Barlow Condensed 700, 13px, uppercase
arrow icon after: →
hover: gap between text and arrow increases from 6px to 12px (smooth transition)
```

**Rule:** Only one primary button per section. Use ghost/text links for secondary actions.

### 5.3 Eyebrow Label

This appears above every major section heading.

```html
<div class="section-label">
  <span class="label-line"></span>  <!-- 24px wide, 2px tall, accent blue -->
  <span class="label-text">About NBES</span>  <!-- 12px, uppercase, DM Sans 500, accent blue -->
</div>
```

The horizontal line before the text is the designer's signature. It creates hierarchy without using a colored background band.

### 5.4 Section Heading Block

Standard pattern used across all pages:

```
[eyebrow label]
[H2 display heading — 2 to 3 lines, uppercase, black]
[optional: body paragraph, max 500px wide, grey, left-aligned]
```

This block is sometimes left-aligned (most sections) and sometimes centered (CTA, process, FAQ sections). Never right-aligned.

### 5.5 Cards

**Project Card (photography-forward):**
- Full bleed image fills the card
- Text overlay at bottom with gradient fade: transparent → rgba(0,0,0,0.75)
- Inside overlay: accent color tag pill + project title (white, Barlow Condensed) + location (small, grey-white)
- Hover: image scales to 1.04, overlay darkens slightly
- No border. The image IS the card.

**Service Card:**
- Background: white (on off-white section) or off-white (on white section)
- Top accent line: 2px, accent blue, scales from 0 to full width on hover
- Icon container: 48px × 48px, accent-light background (#EBF0FF), 8px border-radius
- Title: Barlow Condensed 700, 22px, uppercase
- Description: DM Sans 400, 15px, grey
- Feature list: dots (accent blue 6px circles) + DM Sans 14px
- Bottom: ghost link with arrow
- Subtle left-border on hover: `border-left: 3px solid accent` — adds without being heavy

**Testimonial Card:**
- Background: off-white
- Opening quote mark: Barlow Condensed 800, 64px, accent blue, 25% opacity
- Stars: yellow (#F5A623)
- Quote body: DM Sans 400, 15px
- Author: small avatar circle (initials, accent bg) + name + company

### 5.6 Stats / Numbers

Used in hero and standalone stats band:

```
[Number: Barlow Condensed 800, 56px, white or black]
[Unit/+: same font, accent blue]
[Label: DM Sans 400, 14px, grey]
```

In the stats band, numbers are separated by 1px vertical dividers. The band background is always black (#111111).

### 5.7 Horizontal Rule / Dividers

- Section dividers: `1px solid var(--color-border)` — used sparingly, only when two white sections are adjacent
- Inside sections: never full-width dividers. Use spacing to separate content.
- Accent line: only in eyebrow labels (24px, 2px, accent blue)

---

## SECTION 6: ANIMATION SYSTEM

### Philosophy
Animations in this design are **functional, not decorative.** They confirm interaction, reveal content, and guide the eye. They never run on loop or attract attention to themselves.

### Scroll Reveal

All major content blocks reveal on scroll into viewport:

```css
/* Initial state */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Triggered state (add class via IntersectionObserver) */
.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger delay for siblings:**
```css
.reveal:nth-child(1) { transition-delay: 0s; }
.reveal:nth-child(2) { transition-delay: 0.1s; }
.reveal:nth-child(3) { transition-delay: 0.2s; }
.reveal:nth-child(4) { transition-delay: 0.3s; }
```

**Threshold:** 0.12 — triggers when 12% of element is visible.

### Hover States

**Image containers:**
```css
img { transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
.card:hover img { transform: scale(1.04); }
```

**Cards:**
```css
.card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
.card:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
```

**Button arrow:**
```css
.btn-ghost .arrow { transition: transform 0.22s ease; }
.btn-ghost:hover .arrow { transform: translateX(6px); }
```

**Nav underline:**
```css
a::after {
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}
a:hover::after { transform: scaleX(1); }
```

### Nav Scroll Behavior
```css
nav {
  transition: box-shadow 0.35s ease, background 0.35s ease;
}
nav.scrolled {
  box-shadow: 0 2px 20px rgba(0,0,0,0.07);
}
```

### Counter Animation (Stats section)
Numbers count up when they scroll into view. Duration: 1800ms. Easing: ease-out. Use `requestAnimationFrame` loop.

### What NEVER to Animate
- Background colors on scroll
- Parallax on text (only on images, and very subtly)
- Entrance animations that take longer than 700ms
- Anything that loops continuously (no spinning icons, no floating elements)
- Page transitions (unnecessary complexity for a B2B site)

---

## SECTION 7: PHOTOGRAPHY & IMAGE RULES

This is the biggest differentiator between a designer-made site and an AI-generated one.

### Image Placement Rules

1. **Images are never all the same size** in a grid. The reference uses 2-col layouts where one image is clearly "hero" and one is supporting.
2. **Images break out of their containers** — in the hero, the image bleeds to the right edge of the viewport with no padding. Some section images hang slightly outside their column, creating depth.
3. **Aspect ratios vary intentionally** — project grid uses 4:3 for most, but the hero project card can be 16:9 or even wider.
4. **Overlay treatment:** All images with text on top use `linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 55%)`. Never a flat dark overlay.
5. **Placeholder treatment** for dev phase: Use dark gradient backgrounds with subtle geometric pattern — never grey boxes with broken image icons.

### Photo Subject Matter
- Real site photos: electrical panels, cables being laid, earthing rods, CCTV installations
- Real people: team in hard hats on site (not stock photo studio poses)
- Real projects: actual buildings/factories/facilities
- Authenticity signals: photos with some imperfection (a bit of dust, real lighting) outperform perfect studio shots for B2B trust

---

## SECTION 8: RESPONSIVE DESIGN

### Breakpoints
```
desktop:  1240px+ (full design)
laptop:   1024px  (minor adjustments)
tablet:   768px   (2-col → 1-col, nav collapses)
mobile:   375px   (full mobile layout)
```

### Desktop → Mobile Behavior

**Navigation:**
- Desktop: Full horizontal nav with links and CTA
- Mobile: Logo + hamburger icon. Tap opens fullscreen dark overlay with large nav links (Barlow Condensed 700, 32px), phone, WhatsApp.

**Hero:**
- Desktop: Split layout — text left, image right (50/50 or 55/45)
- Mobile: Image becomes background (dark overlay), text center-aligned, stats in 2×2 grid

**Section headings:**
- Desktop: Eyebrow + H2 left, body paragraph right (60/40 split)
- Mobile: Full width, stacked vertically

**Service cards:**
- Desktop: 2×2 grid with internal borders
- Mobile: Single column stack

**Project grid:**
- Desktop: Asymmetric 2-col (one card spans 2 cols, others are 1 col)
- Mobile: Single column

**Stats band:**
- Desktop: 4-col horizontal
- Mobile: 2×2 grid

**Testimonials:**
- Desktop: 3-col grid
- Mobile: Single column, slide/scroll behavior (keep all visible, don't hide behind carousel)

**Footer:**
- Desktop: 4 columns
- Mobile: Stacked. Company info top, then accordion-expandable link columns.

### Touch Targets
- All interactive elements minimum 44×44px on mobile
- Buttons: full-width on mobile when they appear alone
- Nav links in mobile overlay: minimum 52px line height

---

## SECTION 9: ANTI-AI DESIGN CONSTRAINTS

These are hard rules. Violating any of these will make the site look template-generated.

### STRICTLY FORBIDDEN

```
✗ Equal-width cards repeated 3 or 4 in a row (the "feature grid" pattern)
✗ Centered hero with text in the middle of the screen
✗ Every section using the same 50/50 image+text split
✗ Perfect vertical symmetry between left and right columns
✗ Generic bordered card components (card outline + title + body + link)
✗ Gradient blobs / geometric decorations as "backgrounds"
✗ Icon + title + 2 lines pattern repeated 6 times (SaaS features section)
✗ Purple/blue gradient backgrounds (cliché premium SaaS look)
✗ Full-width colored banners for every section background
✗ Rounded pill buttons for everything
✗ Identical padding values on all sides of every section
✗ All images the same aspect ratio in a grid
✗ Hero with a big centered headline and two buttons under it
✗ Emojis anywhere
✗ Generic stock-photo people in suits shaking hands
```

### WHAT TO DO INSTEAD

```
✓ Alternate between left-heavy and right-heavy layouts
✓ Let one section be pure typography (no image) — the contrast is powerful
✓ Mix image sizes in the same grid: 1 large + 2 small, or 2 col with unequal widths
✓ Use the full viewport width for photography sections
✓ Let the project images speak — minimal text, maximum photo
✓ Vary the section header position: sometimes left-aligned, sometimes split (title left, body right)
✓ One dark section (stats band) in the middle of otherwise light pages creates contrast
✓ White space is not "empty" — it is deliberate. Let content breathe.
✓ The footer's dark background + large logo is the designer's signature
✓ Use Lucide React icons exclusively — consistent stroke-based icons
```

---

## SECTION 10: ICON SYSTEM

**Library:** Lucide React — exclusively. No mixing with other icon sets.

**Sizes:**
- Navigation: 18px
- Service cards: 24px
- Feature lists: 16px
- CTA arrows: 14px
- Footer: 15px

**Style:** All icons use `stroke` not `fill`. strokeWidth: 1.5 for most, 2 for emphasis.

**Color:** Accent blue (#0047CC) for semantic icons. Charcoal (#2C2C2C) for UI icons.

**Icons to use per service:**
- Electrical Works: `Zap`
- Earthing Solutions: `Anchor`
- Security Systems: `Shield`
- Technical Manpower: `Users`

---

## SECTION 11: SECTION ALTERNATION PATTERN

This is taken directly from BUZONE's exact structure. Sections alternate backgrounds:

```
Section 1 (Hero):           Dark/Black
Section 2 (Logos bar):      Off-white #F5F4EF
Section 3 (Services):       White
Section 4 (Stats):          Black
Section 5 (About/Projects): Off-white
Section 6 (Testimonials):   White
Section 7 (Process):        Off-white
Section 8 (FAQ):            White
Section 9 (CTA band):       Accent Blue
Section 10 (Footer):        Black
```

This alternation creates rhythm, prevents monotony, and eliminates the need for decorative elements — the section itself feels different because of its background.

---

## SECTION 12: FORMS

Used on Contact page.

**Input fields:**
```
height: 52px
background: white
border: 1px solid var(--color-border)
border-radius: 3px
font: DM Sans 400, 15px
padding: 0 16px
focus: border-color accent blue, no box-shadow glow (keep it clean)
placeholder: DM Sans 300, mid-grey
```

**Textarea:**
```
min-height: 140px
same styling as input
padding: 14px 16px
resize: vertical only
```

**Labels:**
```
display block above the field
DM Sans 500, 13px
color: charcoal
margin-bottom: 6px
```

**Submit button:**
Full-width primary button on mobile. Auto-width on desktop.

---
