# NBES — ANTI-AI DESIGN CONSTRAINTS & QUALITY CHECKLIST
## Document 4 of 4

This document is the final quality gate. Before any page is considered done,
run through every item below. If any item fails, the page needs revision.

---

## PART 1: ANTI-AI DESIGN CONSTRAINTS

### The Problem
AI-generated design converges on the same patterns because it optimizes for "looks correct"
rather than "looks designed." The result is technically competent but visually flat, predictable,
and easily identified as templated.

NBES's site must not look like it was generated in 30 seconds. It must look like a senior
designer spent 3 weeks on it.

---

### STRICTLY FORBIDDEN — LAYOUT PATTERNS

```
✗ THE FEATURE GRID
   3 or 4 equal-width cards in a single row, all same height, same padding, same structure.
   The "Here's what we do: [Card][Card][Card][Card]" layout.
   Why banned: Instantly recognizable as a template. No visual hierarchy.

✗ THE CENTERED HERO
   Full-width hero with centered headline, centered subtext, two centered buttons.
   Why banned: Every SaaS site looks like this. It signals template.

✗ THE REPEATING SPLIT
   Every section is "image left, text right" or "text left, image right" alternating perfectly.
   Why banned: Predictable. Feels like a "website builder" output.

✗ THE BORDERED CARD GRID
   Content divided into individual cards, each with a visible border or shadow,
   arranged in a neat 3×2 or 4×2 grid.
   Why banned: Looks like a WordPress plugin. No spatial sophistication.

✗ THE GRADIENT BLOB
   Abstract gradient circles/blobs floating in backgrounds as decorative elements.
   Why banned: Overused to the point of meaning nothing.

✗ THE IDENTICAL SECTION PADDING
   Every section has exactly 96px top and 96px bottom padding, exactly the same container width.
   Why banned: Creates monotonous vertical rhythm. Real designers vary section weights.

✗ THE STOCK PHOTO HANDSHAKE
   Images of people in suits shaking hands, at whiteboards, or in generic "professional" poses.
   Why banned: No authenticity signal. Real B2B clients need to see real work.

✗ THE SIX-ICON FEATURES LIST
   "Why choose us? Here are 6 reasons with icons:"
   [Icon] Title | [Icon] Title | [Icon] Title
   [Icon] Title | [Icon] Title | [Icon] Title
   Why banned: Looks like every corporate website ever made.

✗ THE PILL BUTTON EVERYWHERE
   All buttons fully rounded (border-radius: 50px). Pills for navigation, CTAs, tags.
   Why banned: Playful/consumer aesthetic. Wrong for industrial B2B.

✗ THE PURPLE/BLUE GRADIENT BACKGROUND
   Sections or hero with gradient background going from deep blue to purple.
   Why banned: Overused SaaS/tech aesthetic. Completely wrong for construction/technical.
```

---

### WHAT TO DO INSTEAD — PREMIUM PATTERNS

```
✓ CONTROLLED ASYMMETRY
   Mix grid proportions deliberately: 60/40, 65/35, 55/45, full-width.
   No two adjacent sections should use the same proportion split.

✓ TYPOGRAPHY-DOMINANT SECTIONS
   One section per page should be pure type — no image, no icons — just a large
   heading and supporting text. The contrast makes surrounding sections feel richer.

✓ PHOTOGRAPHY THAT BREAKS THE GRID
   Allow one image per page to extend beyond its column.
   Either: bleed to the viewport edge, or overlap into the adjacent section.
   This single move makes the layout feel "designed, not generated."

✓ MIXED CARD SIZES IN GRIDS
   Project grids should never be equal-size cells.
   Use: 1 large (2 col span) + 2 small | or 2/3 + 1/3 | or 1/2 + 1/4 + 1/4

✓ THE INTERNAL BORDER TRICK
   Instead of individual card borders (which looks like tiles),
   use internal border-right and border-bottom lines on the parent grid.
   This is exactly what BUZONE does. It feels editorial, not component-based.

✓ VARIED VERTICAL RHYTHM
   Stats band: compact (180px). Hero: tall (90vh). Service cards: medium.
   Certifications strip: very compact (90px). This variation feels editorial.

✓ THE DARK INTERRUPTION
   One full-width black section (stats) in the middle of otherwise light pages
   creates visual contrast and makes the black footer feel earned, not abrupt.

✓ ACCENT COLOR RESTRAINT
   Blue (#0047CC) appears in: eyebrow labels, button fills, icon fills, tag pills,
   hover states, the CTA band background.
   That's it. It does NOT appear as: section backgrounds, text highlights,
   card borders, divider lines, background gradients.
   Restraint gives the accent color its power.

✓ WHITE SPACE AS STRUCTURE
   Generous padding between elements is not "empty" — it IS the structure.
   Never fill space with decorative elements. Let the content breathe.
```

---

## PART 2: QUALITY CHECKLIST

### Before declaring any page complete, verify every item:

---

#### A. LAYOUT & COMPOSITION

- [ ] No two adjacent sections use the same grid proportion
- [ ] At least one section breaks expected symmetry (image bleeds, offset image stack, etc.)
- [ ] Section backgrounds properly alternate: white → off-white → black → (repeat)
- [ ] No "feature grid" of 4+ equal-width cards in a row
- [ ] Project/portfolio grid uses asymmetric column widths (not 3 equal columns)
- [ ] CTA band is blue background (#0047CC), not black or off-white
- [ ] Footer is black (#111111), full-width, 4 columns desktop

---

#### B. TYPOGRAPHY

- [ ] All headings are uppercase, Barlow Condensed
- [ ] All body text is DM Sans, weight 300 or 400
- [ ] Every major section heading has an eyebrow label above it
- [ ] Eyebrow label has the 24px horizontal accent-blue line before the text
- [ ] No body paragraphs span the full container width (max ~600px)
- [ ] No body text is centered unless it's inside a CTA/hero (centered layout) section
- [ ] Page hero H1 is at minimum 60px on desktop
- [ ] Type scale is clearly hierarchical: H1 > H2 > H3 > body, all distinctly different sizes

---

#### C. COLOR

- [ ] Accent blue (#0047CC) only used for: buttons, eyebrow labels, icons, tag pills, CTA band bg
- [ ] Blue is NOT used as: section backgrounds, decorative gradients, text highlights
- [ ] No gradient backgrounds except the single CTA band
- [ ] Off-white (#F5F4EF) is warm, not cold grey (#F5F5F5 is NOT the same — check the hex)
- [ ] Dark sections use #111111 black, not a navy or charcoal
- [ ] Form focus states use blue border, NOT a glowing box-shadow

---

#### D. ICONS

- [ ] Only Lucide icons used — no other icon library present
- [ ] All icons are stroke-based (not filled), strokeWidth: 1.5 default
- [ ] No emojis anywhere on the page
- [ ] Icon sizes: 24px for service cards, 16px for feature lists, 14px for arrows

---

#### E. PHOTOGRAPHY & IMAGES

- [ ] No grey placeholder boxes with broken image icons
- [ ] All image placeholders use dark gradient backgrounds (not flat grey)
- [ ] Images inside cards have overflow: hidden with scale hover effect
- [ ] Cards with text overlays use gradient fade (not flat dark overlay)
- [ ] At least one image per page extends to/near the viewport edge

---

#### F. BUTTONS & INTERACTIONS

- [ ] Primary buttons: solid blue, 14px Barlow Condensed, border-radius 3px (NOT pill shaped)
- [ ] Only ONE primary button per section
- [ ] Ghost/text link arrows animate translateX on hover
- [ ] All interactive elements have visible hover states
- [ ] Nav link hover: accent-blue underline slides in from left (scaleX 0 → 1)
- [ ] Card hover: translateY(-3px) + subtle box-shadow (not dramatic)

---

#### G. ANIMATIONS

- [ ] Scroll reveal works: opacity 0 + translateY(28px) → in-view state
- [ ] IntersectionObserver threshold is 0.12
- [ ] Sibling elements stagger at 0.1s delay intervals
- [ ] Counter animation on stats numbers (counts up on scroll-into-view)
- [ ] No animations run on loop or continuously
- [ ] All animation durations ≤ 700ms
- [ ] No parallax on text (only subtle parallax on images, if any)

---

#### H. NAVIGATION

- [ ] Nav is position: fixed, always visible on scroll
- [ ] Nav scrolled state adds box-shadow (not color change)
- [ ] Active page link is highlighted (accent blue color or underline)
- [ ] "Get a Quote" CTA button in nav is accent blue solid
- [ ] Mobile: hamburger opens fullscreen dark overlay, not a sidebar

---

#### I. FORMS (Contact page only)

- [ ] All required fields validated on blur (not just on submit)
- [ ] Error states: red border + error message with Lucide AlertCircle icon
- [ ] Success state: form replaced with confirmation message (not just an alert())
- [ ] Submit button is full-width on mobile
- [ ] Dropdown/select is custom-styled to match inputs (not browser default)
- [ ] No autofocus on first field (distracting on mobile)

---

#### J. RESPONSIVENESS

- [ ] All 4 breakpoints tested: 1440px, 1024px, 768px, 375px
- [ ] No horizontal scroll on any screen width
- [ ] All text readable without zooming on mobile
- [ ] Touch targets ≥ 44×44px on mobile
- [ ] Images don't break their containers on small screens
- [ ] Multi-column grids collapse correctly (2-col → 1-col at 768px)
- [ ] Stats band: 4-col → 2×2 grid on mobile (not 4 stacked items with tiny text)
- [ ] Footer: 4 columns → 1 column stack on mobile

---

#### K. SEO

- [ ] Unique <title> tag per page
- [ ] Unique meta description per page
- [ ] Proper heading hierarchy: one H1, logical H2/H3 nesting
- [ ] Images have descriptive alt attributes (even placeholders: alt="Electrical panel installation")
- [ ] JSON-LD schema markup present on Home and Contact pages
- [ ] No duplicate content between pages

---

#### L. THE FINAL HUMAN TEST

This is the most important check. After completing all technical checks, ask:

**"Could this website have been built by an AI in 5 minutes?"**

Signs it still looks AI-generated:
- Sections all feel the same height and weight
- Every card is the same size
- The layout is perfectly symmetrical at every level
- There are no "interesting" compositional choices — no tension, no surprise
- The photography/images are afterthoughts, not integral to the layout
- It looks like it could be a competitor's site with the name swapped out

Signs it looks designer-made:
- You can tell someone made compositional decisions (this image goes here, oversized)
- There's a section that makes you think "huh, interesting choice" — and it works
- The dark stats section creates a genuine visual break
- The project grid has visual hierarchy — some projects feel more important
- The typography has real weight — the headings feel heavy and authoritative
- The overall palette feels cohesive — not "let me add some color here"

If the page passes the human test, it's done.
If it doesn't, find what's making it feel generic and eliminate it.

---

## PART 3: SPECIFIC PATTERNS TO STEAL FROM BUZONE

These are the exact design moves observed in the reference images that make it feel premium:

1. **The tag pill inside project cards** — small, accent-colored, uppercase, tight padding.
   Not a badge, not a chip — a TAG. `background: accent | color: white | padding: 3px 10px | border-radius: 2px`

2. **The eyebrow line** — 24px wide, 2px tall, accent blue, inline with label text.
   Appears before EVERY section heading. Consistent. Elegant.

3. **The internal card grid** — service cards don't have individual borders.
   The PARENT grid has `border-right` and `border-bottom` on child items.
   Result: cards feel like sections of one cohesive grid, not separate components.

4. **The hero stat strip** — bottom of hero, separated by a 1px white/10% opacity line.
   Numbers large, label small below. Clean. Authoritative.

5. **The footer repeat of the logo** — same logo, white version, at footer left.
   Not just text — the actual logo mark + wordmark. Reinforces brand at exit point.

6. **The section eyebrow centering rule** — when a section header is centered (CTA, process, FAQ),
   the eyebrow label is also centered. When left-aligned section, eyebrow is left.
   Never mix alignment within a heading block.

7. **The project card "view project" on hover only** — the link is invisible by default.
   On hover, overlay darkens slightly and "View Project →" appears.
   Makes the grid feel interactive without being noisy at rest.

8. **The dark background CTA section mid-page** — not the footer, not the top.
   A standalone full-width blue section in the body of the page.
   It creates a visual "destination" the eye travels toward while scrolling.

---
