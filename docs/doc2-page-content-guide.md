# NBES — PAGE-BY-PAGE CONTENT & LAYOUT GUIDE
## Document 2 of 4

---

## PAGE 1: HOME

### Purpose
Convert skeptical B2B visitors into leads. The visitor is a procurement manager, site engineer, or contractor. They are evaluating NBES against 2–3 other vendors. This page must communicate: capability, credibility, and contact — in that order.

### Section-by-Section Breakdown

---

#### Section 1: HERO

**Layout:** Split — 55% text left / 45% image right, image bleeds to viewport edge (no right padding)
**Section background:** Black (#111111)
**Image treatment:** Real site photo (electrical panel or earthing installation), slight dark gradient on left edge to merge into black background

**Content:**

```
[eyebrow — accent blue]
Electrical & Technical Solutions

[H1 — white, Barlow Condensed 800, ~90px]
POWER.
SAFETY.
RELIABILITY.

[body — white 65% opacity, DM Sans 300, 17px, max 460px]
NBES delivers certified electrical works, precision earthing,
integrated security, and skilled technical manpower — for
industrial, commercial, and government projects across India.

[buttons row]
[PRIMARY] Get a Quote →     [GHOST] WhatsApp Us  [WA icon]

[stats strip — below buttons, separated by thin white line]
15+          300+         8            50+
Years        Projects     States       Technicians
```

**Design notes:**
- Stats strip uses `border-top: 1px solid rgba(255,255,255,0.1)` with 40px top margin
- The image side does NOT have any overlay text — the photography is purely visual
- On mobile: image becomes a dimmed full-bleed background, text overlays it

---

#### Section 2: TRUSTED BY (Logos Bar)

**Layout:** Single row, full width
**Section background:** Off-white (#F5F4EF)
**Height:** ~90px

**Content:**
```
TRUSTED BY  |  [Logo 1]  [Logo 2]  [Logo 3]  [Logo 4]  [Logo 5]  [Logo 6]
```

**Design notes:**
- "TRUSTED BY" label left, separated by 1px vertical border
- Client names/logos in greyscale — when you hover, they go to their brand color (subtle)
- If no real logos yet: use company name text in Barlow Condensed 600, grey
- No animation needed here — static trust signal

---

#### Section 3: SERVICES OVERVIEW

**Layout:** Header row (split 50/50: title left, body right) + 2×2 card grid below
**Section background:** White

**Header content:**
```
[eyebrow] WHAT WE OFFER

[H2 — left, ~60px]           [body — right, max 420px, grey]
OUR CORE                     From high-voltage installations to intelligent
SERVICES                     security infrastructure — all compliant with IS,
                             IEC, and BIS standards.
```

**Cards (2×2 grid, separated by 1px border lines between them):**

Each card has:
```
[service number: "01 —"]
[icon: Lucide, 24px, in 48px accent-light container]
[title: Barlow Condensed 700, 24px, uppercase]
[description: 2-3 lines, grey]
[feature list: 3-4 bullet points with accent-blue dots]
[ghost link: "Explore Service →"]
```

Card 1: Electrical Works (icon: Zap)
Card 2: Earthing Solutions (icon: Anchor)  
Card 3: Security Systems (icon: Shield)
Card 4: Technical Manpower (icon: Users)

**Design notes:**
- Cards have `border-right` and `border-bottom` between them — NOT individual card borders
- Top edge of each card gets 3px accent-blue line on hover (scale from 0 to 100% left-to-right)
- Card background shifts to off-white on hover

---

#### Section 4: STATS BAND

**Layout:** 4-column horizontal
**Section background:** Black (#111111)
**Height:** ~200px

**Content:**
```
300+              15+              8                50+
PROJECTS          YEARS            STATES           TECHNICIANS
DELIVERED         OPERATING        COVERED          ON-STAFF
```

**Design notes:**
- Numbers use counter animation on scroll-into-view
- Vertical 1px dividers between columns, `rgba(255,255,255,0.08)`
- This section intentionally has zero imagery — pure typographic authority

---

#### Section 5: FEATURED PROJECTS

**Layout:** Asymmetric — 1 large card (spans 2 cols) + 2 stacked smaller cards on right
**Section background:** Off-white

**Header:**
```
[eyebrow] OUR WORK

[H2 left, ~60px]          [ghost link right, aligned to bottom]
COMPLETED                  View All Projects →
PROJECTS
```

**Project card structure:**
- Full-bleed photography fills card
- Bottom gradient overlay: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)`
- Inside overlay: `[accent tag pill]` → `[project title — white Barlow Condensed 700]` → `[location — small grey-white]`
- "View Project →" link bottom-right (visible on hover only)

**3 showcase projects to highlight:**
1. Large card: Your most visually impressive industrial project
2. Top-right small: Best commercial/office security project
3. Bottom-right small: Earthing or manpower project

**Design notes:**
- Cards have 2px gap between them (the gap IS the divider)
- Hover: image scales 1.04, overlay darkens to 0.9

---

#### Section 6: WHY NBES

**Layout:** Text left (40%) + 3 stacked point items right (60%)
**Section background:** White

**Left side:**
```
[eyebrow] WHY CHOOSE US

[H2]
TRUSTED BUILDERS
WITH YEARS OF
EXPERIENCE

[body paragraph, 3-4 lines]
A brief paragraph about NBES's track record,
commitment to standards, and B2B reliability.

[PRIMARY button] Request a Consultation →
```

**Right side — 3 stacked points:**
Each point:
```
[icon container: 40px, accent-light bg, Lucide icon accent color]
[title: Barlow Condensed 700, 18px, uppercase]
[body: DM Sans 400, 14px, grey, 2 lines max]
```

Point 1: IS & IEC Certified Standards (icon: BadgeCheck)
Point 2: End-to-End Delivery (icon: GitMerge)
Point 3: Zero-Incident Safety Culture (icon: ShieldCheck)

---

#### Section 7: CLIENT REVIEWS

**Layout:** Header + 3-column testimonial cards
**Section background:** Off-white

**Header:**
```
[eyebrow] CLIENT REVIEWS
[H2] WHAT OUR CLIENTS SAY
```

**Each testimonial card:**
```
[large " — Barlow Condensed 800, 60px, accent blue 30% opacity]
[5 stars — yellow]
[quote text — DM Sans 400, 15px]
[author row: avatar circle + name + role/company]
```

**Design notes:**
- Cards have `background: white` (contrast against off-white section)
- No card borders — shadow only on hover: `box-shadow: 0 8px 32px rgba(0,0,0,0.08)`

---

#### Section 8: CTA BAND

**Layout:** Full width, text left + buttons right
**Section background:** Accent blue (#0047CC)

**Content:**
```
[H2 — white, ~52px]           [buttons]
READY TO START                [white bg button] Get a Quote
YOUR PROJECT?                 [outline button]  WhatsApp Us

[sub — white 70%]
Tell us what you need. We respond within 24 hours.
```

**Design notes:**
- Two very subtle background circles (no fill, white 4% opacity) for depth — not decoration
- This is the only section where the background is accent blue

---

## PAGE 2: SERVICES

### Purpose
Rank on Google for "electrical contractor [state]", "earthing solution company India", etc. Every service should be scannable and convincing.

### Layout Philosophy
This page is long but should feel like a designed editorial — not a features list.

---

#### Section 1: PAGE HERO

**Layout:** Centered, full-width text
**Background:** Black

```
[eyebrow, centered] WHAT WE OFFER

[H1, centered, ~80px]
OUR SERVICES

[body, centered, max 580px]
Complete electrical, earthing, security, and manpower solutions —
engineered for industrial, commercial, and government projects.
```

---

#### Section 2–5: EACH SERVICE (Alternating layouts)

**Pattern:** Services alternate between two layouts so the page doesn't feel repetitive.

**Layout A (image left, content right) — odd services:**
```
[large image, 45% width, slight top-offset from section edge]    [service details, 55%]
                                                                  [service number]
                                                                  [eyebrow]
                                                                  [H2: service name]
                                                                  [description paragraph]
                                                                  [what's included list]
                                                                  [who it's for: industry tags]
                                                                  [ghost CTA]
```

**Layout B (content left, image right) — even services:**
Mirror of Layout A.

**Background alternation:**
- Service 1 (Electrical): White
- Service 2 (Earthing): Off-white
- Service 3 (Security): White
- Service 4 (Manpower): Off-white

**Content per service:**

**Electrical Works:**
- Description: HT/LT panels, cable laying, transformers, switchgear, power factor correction
- Included: Panel installation, cable termination, load testing, commissioning
- For: Factories, warehouses, commercial buildings, government facilities

**Earthing Solutions:**
- Description: IS 3043 compliant conventional and chemical earthing, lightning protection
- Included: Soil resistivity testing, chemical earthing pits, earth continuity testing, LA systems
- For: Industrial plants, data centers, telecom towers, government buildings

**Security Systems:**
- Description: CCTV, access control, biometric, fire detection, perimeter security
- Included: Site survey, design, supply, installation, AMC
- For: Factories, corporate offices, warehouses, residential complexes

**Technical Manpower:**
- Description: Certified ITI/diploma electricians and supervisors on-site
- Included: Short-term, long-term, contractual, verified + insured workers
- For: EPC contractors, plant operators, facility managers, project developers

---

#### Section 6: INDUSTRIES WE SERVE

**Layout:** Full-width with 4 industry cards in a row
**Background:** Black

```
[eyebrow, centered] INDUSTRIES
[H2, centered] WHO WE WORK WITH

[4 cards row — each: icon + industry name + 1 line description]
Industrial/Manufacturing | Commercial | Government/PSU | Infrastructure/EPC
```

---

#### Section 7: CERTIFICATIONS

**Layout:** Horizontal strip of certification badges
**Background:** Off-white

```
STANDARDS & CERTIFICATIONS:
IS 3043  |  IS 732  |  IEC 60364  |  BIS Certified  |  ISO 9001:2015
```

---

#### Section 8: SERVICE CTA

Same CTA band as homepage.

---

## PAGE 3: PROJECTS / PORTFOLIO

### Purpose
Visual proof of work. This is what makes a skeptical procurement manager say "okay these guys have done this before." Every project should show scale, type, and location.

---

#### Section 1: PAGE HERO

**Layout:** Left-heavy split — title takes 60% left
**Background:** Black

```
[eyebrow] OUR PORTFOLIO

[H1, ~80px]
OUR COMPLETED
PROJECTS

[body, max 440px]
From industrial earthing to large-scale security systems —
every project reflects our commitment to safety and precision.

[ghost CTA] Have a similar project? Talk to us →

[floating image, right 40%] — overlapping hero and next section boundary
```

**Design note:** The floating image on the right overlaps slightly into the next section, creating depth. This is a signature BUZONE move — the image does not have a clean section boundary.

---

#### Section 2: PROJECT GRID

**Layout:** Filter bar + asymmetric masonry-style grid
**Background:** White

**Filter bar:**
```
[ALL]  [ELECTRICAL]  [EARTHING]  [SECURITY]  [MANPOWER]
```
- Pill-shaped filter items
- Active state: accent blue background, white text
- Inactive: white bg, charcoal text, border

**Grid layout — alternating row patterns:**
Row 1: Large (66%) + Small (33%)
Row 2: Small (33%) + Large (66%)
Row 3: Equal (50%) + Equal (50%)
Row 4: Large (66%) + Small (33%)
— repeat pattern

Each card: full-bleed photography, bottom overlay, tag + title + location + "View Project →"

**Projects to include (placeholders):**
1. Steel plant earthing & HT panels — Nagpur, Maharashtra — EARTHING
2. Corporate office security system — Hyderabad, Telangana — SECURITY
3. Municipal substation upgrade — Pune, Maharashtra — ELECTRICAL
4. Chemical plant electrical audit — Ankleshwar, Gujarat — ELECTRICAL
5. Auto OEM 12-month manpower contract — Chakan, Pune — MANPOWER
6. Factory perimeter CCTV system — Aurangabad, Maharashtra — SECURITY

---

#### Section 3: FAQ (on projects page)

**Layout:** Centered, single column accordion, max 720px wide
**Background:** Off-white

```
[eyebrow, centered] FAQ
[H2, centered] FREQUENTLY ASKED QUESTIONS

[accordion items — 5-6 questions]
```

**Questions to answer:**
1. What types of projects does NBES handle?
2. Which states does NBES operate in?
3. Can NBES take a turnkey electrical project?
4. Are NBES technicians certified and insured?
5. How quickly can you mobilize?
6. Do you offer AMC / maintenance contracts?

**Design notes:**
- Accordion items: `border-bottom: 1px solid var(--color-border)`
- Question row: DM Sans 500, 16px + `+` / `×` icon (Lucide Plus/X) right-aligned
- Answer: DM Sans 400, 15px, grey, max-height animation
- Only one item open at a time

---

#### Section 4: PROJECT CTA

Same CTA band.

---

## PAGE 4: ABOUT US

### Purpose
Due diligence page. Procurement managers and project directors always check "About Us" before calling. This page should humanize the company while reinforcing capability and trust.

---

#### Section 1: PAGE HERO

**Layout:** Full-width centered
**Background:** Black

```
[eyebrow] OUR STORY

[H1, centered]
ABOUT NBES

[body, centered, max 560px]
For over 15 years, NBES has been the trusted electrical and
technical partner for contractors, builders, and industry
across India.
```

---

#### Section 2: COMPANY STORY

**Layout:** Large text left + image right
**Background:** White

Left (60%):
```
[section label] WHO WE ARE

[H2, ~52px]
TRUSTED BY INDUSTRY
FOR 15+ YEARS

[2-3 paragraphs, DM Sans 300, 17px]
How NBES started, the founder's background, what drives the company.
Key milestones (first big project, first state expansion, certifications earned).
What makes NBES different from a typical electrical contractor.
```

Right (40%):
- Stack of two images: large photo on top, smaller photo offset below and to the right
- The offset creates the "not perfectly aligned" feel from BUZONE

---

#### Section 3: STATS

Same stats band as homepage (Black background, 4 numbers).

---

#### Section 4: CORE VALUES / APPROACH

**Layout:** 3 columns, each with icon + heading + paragraph
**Background:** Off-white

Values to feature:
1. **Standards-Driven** — All work to IS/IEC specifications. No shortcuts.
2. **People First** — Skilled workers, properly compensated, properly trained.
3. **Complete Accountability** — One point of contact from design to handover.

**Design note:** These are NOT equal-bordered cards. They are open layout — icon + title + text, separated by subtle vertical dividers only on desktop.

---

#### Section 5: MEET THE TEAM

**Layout:** 1 large founder card + smaller team member cards in a row
**Background:** White

**Founder card (large):**
```
[Full-height portrait photo, left 45%]
[right 55%: name, title, credentials, short bio, LinkedIn icon]
```

**Team row below:**
4 equal cards: photo + name + title

**Design notes:**
- No hard card borders — use off-white background on each card, subtle separation
- Hover: subtle lift (translateY -3px)

---

#### Section 6: CERTIFICATIONS

**Layout:** Left text + right certification grid
**Background:** Off-white

Left:
```
[eyebrow] STANDARDS & COMPLIANCE
[H2] CERTIFIED TO THE HIGHEST STANDARDS
[body] We don't just meet standards — we document every installation for your audit trail.
```

Right: Grid of certification badges (IS 3043, IS 732, IEC 60364, BIS, ISO)

---

#### Section 7: CTA

Same CTA band.

---

## PAGE 5: CONTACT / GET A QUOTE

### Purpose
Frictionless lead capture. Make it as easy as possible to contact NBES. Multiple contact pathways: form, phone, WhatsApp, email.

---

#### Section 1: HERO

**Layout:** Centered
**Background:** Black

```
[eyebrow] GET IN TOUCH
[H1] LET'S DISCUSS YOUR PROJECT
[body] We respond to all enquiries within 24 working hours.
```

---

#### Section 2: CONTACT SPLIT

**Layout:** Two columns (55% form / 45% contact info)
**Background:** White

**Left — Contact Form:**
```
[H3] Send Us a Message

Fields:
- Full Name *
- Company Name *
- Phone Number *
- Email Address *
- Service Needed [dropdown: Electrical / Earthing / Security / Manpower / Multiple]
- State / Location *
- Project Description [textarea]

[PRIMARY BUTTON, full width] Send Message →
```

**Right — Direct Contact:**
```
[section label] DIRECT CONTACT

[Phone]
+91 XXXX XXXXXX
[small] Mon–Sat, 9am–7pm

[WhatsApp]
+91 XXXX XXXXXX
[small] Quick response on WhatsApp

[Email]
info@nbes.in

[Address]
[Office address here]

---

[section label] STATES WE COVER
[list of states in a horizontal wrap]
```

---

#### Section 3: MAP

Full-width Google Maps embed, `height: 400px`.
Clean — no label above it, just the map.

---
