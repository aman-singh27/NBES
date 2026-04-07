# NBES — AI IDE PROMPTS (NEXT.JS / REACT)
## Document 3 of 4 — Rewritten for Parallel Codex Agents

---

## HOW TO USE THESE PROMPTS

- Each prompt below is for ONE parallel agent building ONE page
- All 5 can run simultaneously since they build independent page files
- Before running any page prompt, run PROMPT 0 first (project setup) — all agents depend on it
- Every prompt references doc1-master-design-system, doc2-page-content-guide, doc4-anti-ai-constraints
  — make sure those files are in your project root as /docs/ so the IDE can read them
- Format follows the prompt-engineer skill: [CONTEXT] → [OBJECTIVE] → [TASK] → [CONSTRAINTS] → [DONE WHEN]

---

---

# PROMPT 0 — PROJECT SETUP & SHARED SYSTEM
## Run this FIRST before any page agent

---

**Prompt 0 of 6 — Next.js Project Setup & Design System Foundation**

```
[CONTEXT]
- Fresh repository, nothing built yet
- Target: NBES — a B2B electrical contractor website (India)
- 5 pages: Home, Services, Projects, About, Contact
- Design reference docs exist at /docs/doc1-master-design-system.md,
  /docs/doc2-page-content-guide.md, /docs/doc4-anti-ai-constraints.md
- READ ALL THREE DOCS before writing any code

[OBJECTIVE]
Bootstrap a Next.js 14 App Router project with TypeScript, Tailwind CSS, the full NBES
design system as CSS variables + Tailwind config, all shared components (Navbar, Footer,
CTABand, SectionLabel), and the animation utility — so all 5 page agents can build on top
of this foundation without duplicating any setup.

[TASK]

1. INITIALIZE PROJECT
   - Next.js 14, App Router, TypeScript strict mode
   - Install dependencies:
     npm install lucide-react framer-motion clsx
   - Configure next.config.ts:
     * images.domains: ['placeholder.com'] (for dev phase)
     * Enable experimental optimizeCss: false (keep Tailwind standard)

2. CONFIGURE FONTS — src/app/layout.tsx
   - Import from 'next/font/google':
     * Barlow_Condensed: weights [700, 800], subsets ['latin'], variable '--font-display'
     * DM_Sans: weights [300, 400, 500], subsets ['latin'], variable '--font-body'
   - Apply both font variables to <html> tag className
   - Never use Inter, Roboto, or Arial anywhere in this project

3. TAILWIND CONFIG — tailwind.config.ts
   Extend theme with EXACT values from doc1, Section 2 (Color System) and Section 3 (Typography):

   colors:
     white:        '#FFFFFF'
     'off-white':  '#F5F4EF'    ← WARM off-white, NOT #F5F5F5
     black:        '#111111'
     charcoal:     '#2C2C2C'
     'mid-grey':   '#6B6B6B'
     border:       '#E4E3DE'
     accent:       '#0047CC'
     'accent-dark':'#003399'
     'accent-light':'#EBF0FF'

   fontFamily:
     display: ['var(--font-display)', 'sans-serif']
     body:    ['var(--font-body)', 'sans-serif']

   fontSize (extend, don't replace):
     'display-xl': ['clamp(60px, 8vw, 110px)', { lineHeight: '0.88', fontWeight: '800' }]
     'display-lg': ['clamp(40px, 5vw, 72px)',  { lineHeight: '0.92', fontWeight: '800' }]
     'display-md': ['clamp(28px, 3.5vw, 48px)',{ lineHeight: '1.0',  fontWeight: '700' }]
     'display-sm': ['clamp(20px, 2.5vw, 28px)',{ lineHeight: '1.1',  fontWeight: '700' }]

   spacing: add 18: '72px' (nav height token)

   borderRadius: add 'btn': '3px' (buttons use 3px — not pill, not sharp)

4. GLOBAL CSS — src/app/globals.css
   - @tailwind base/components/utilities
   - Add these custom utilities via @layer utilities:
     .section-padding { @apply py-24 md:py-18 sm:py-14 }
     .container-width { @apply max-w-[1240px] mx-auto px-10 md:px-6 sm:px-5 }
     .heading-uppercase { @apply font-display uppercase tracking-[-0.01em] }
     .body-light { @apply font-body font-light leading-[1.75] text-mid-grey }
     .eyebrow-label { @apply font-body text-[12px] font-medium tracking-[0.14em] uppercase text-accent flex items-center gap-3 }
     .eyebrow-label::before { content: ''; @apply block w-6 h-[2px] bg-accent flex-shrink-0 }

   - Remove all default margin/padding from body

5. SHARED COMPONENTS — create these files:

   A. src/components/Navbar.tsx
      - 'use client' directive
      - Fixed, height 72px, white bg, border-b border-border
      - Left: logo mark (square div, bg-accent, 38×38, rounded-[4px], "N" icon or SVG) + "NBES" wordmark (font-display text-[22px] font-extrabold tracking-[0.06em])
      - Center: nav links array — ['Home','Services','Projects','About','Contact']
        mapped to <Link> — font-body text-sm font-medium text-charcoal
        hover underline: relative ::after pseudo, bg-accent, scaleX 0→1 from left, transition
      - Right: phone number text + <Link> "Get a Quote" (bg-accent text-white font-display
        text-[13px] font-bold uppercase px-5 py-[10px] rounded-btn hover:bg-accent-dark)
      - useScrollPosition hook: add shadow-[0_2px_20px_rgba(0,0,0,0.07)] after 60px scroll
      - Mobile (<768px): hide nav links + phone. Show hamburger (Lucide Menu icon, 24px).
        Click opens fullscreen black overlay (fixed inset-0 bg-black z-50) with:
        * Large nav links (font-display text-[32px] font-bold uppercase, white)
        * Phone number + WhatsApp link at bottom
        * Lucide X icon to close
      - Export as default

   B. src/components/Footer.tsx
      - Background: bg-black text-white
      - 4 columns: Brand+contact (2fr) | Company links (1fr) | Services links (1fr) | Industries (1fr)
      - Brand column: logo (white version) + tagline paragraph + contact items
        Contact items: Lucide icons (Phone, Mail, MapPin) — 15px, flex row, text-white/45 hover:text-white
      - Link columns: column title (font-display 13px font-bold tracking-[0.12em] uppercase text-white mb-5)
        Links: font-body text-sm text-white/45 hover:text-white hover:pl-1 transition-all
      - Bottom bar: border-t border-white/8, copyright left, legal links right
      - Mobile: 4 cols → 1 col stack
      - Export as default

   C. src/components/CTABand.tsx
      - Background: bg-accent
      - Layout: flex justify-between items-center, gap-10
      - Left: H2 "READY TO START YOUR PROJECT?" (font-display text-display-lg text-white uppercase)
             Sub: "Tell us what you need. We respond within 24 hours." (text-white/70 mt-3)
      - Right: two buttons side by side
        * "Get a Quote" → bg-white text-accent font-display font-bold uppercase px-7 py-[14px] rounded-btn hover:bg-off-white
        * "WhatsApp Us" → border border-white/50 text-white + Lucide MessageCircle icon, hover:border-white hover:bg-white/10
      - Two subtle bg circles (absolute, rounded-full, white/4, pointer-events-none) for depth
      - Mobile: flex-col text-center, buttons full-width
      - Accepts optional props: title?: string, subtitle?: string
      - Export as default

   D. src/components/SectionLabel.tsx
      - Simple: <div className="eyebrow-label">{children}</div>
      - The ::before pseudo is already in globals.css
      - Export as default

   E. src/hooks/useScrollReveal.ts
      - Custom hook using IntersectionObserver, threshold 0.12
      - Returns ref + inView boolean
      - Usage: const { ref, inView } = useScrollReveal()
      - Apply to any element: className={`transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}

   F. src/hooks/useCounter.ts
      - Animates a number from 0 to target over 1800ms (ease-out) using requestAnimationFrame
      - Triggers when element enters viewport
      - Usage: const count = useCounter(300, inView)

6. ROOT LAYOUT — src/app/layout.tsx
   - Import Navbar + Footer
   - <html lang="en"> with font variables
   - <body>
       <Navbar />
       <main>{children}</main>
       <Footer />
     </body>
   - Metadata: default title template "NBES | %s" + default description

7. PLACEHOLDER IMAGE UTILITY — src/components/ImagePlaceholder.tsx
   - A styled div that replaces <img> during development
   - Props: gradient (string, CSS gradient), label (string), className (string)
   - Renders a div with the gradient bg + centered label text (white/20, text-sm)
   - Used by all page agents until real photos are added

[CONSTRAINTS]
- READ doc1-master-design-system.md FULLY before writing any CSS or Tailwind classes
- READ doc4-anti-ai-constraints.md — especially the STRICTLY FORBIDDEN list
- App Router only — no pages/ directory
- TypeScript strict — no 'any' types
- Lucide React for ALL icons — no other icon library
- No emoji anywhere
- No inline styles except for dynamic values (gradient strings, counter numbers)
- Tailwind only for styling — no CSS modules, no styled-components
- framer-motion for animations — no CSS animation keyframes in globals.css
- border-radius for buttons: always rounded-btn (3px) — never rounded-full
- Off-white color: ALWAYS #F5F4EF — never use bg-gray-50 or #F5F5F5

[DONE WHEN]
- npm run dev starts without errors
- / renders with Navbar + empty main + Footer
- No TypeScript errors
- All 7 shared components/hooks exist and export correctly
- Tailwind config has all NBES color tokens
- Both fonts load correctly (inspect network tab — Barlow Condensed + DM Sans present)
- The eyebrow-label CSS utility renders correctly with the accent-blue line before text

[NEXT UP]
Prompt 1 will cover: Home page — all 8 sections
```

---

---

# PROMPT 1 — HOME PAGE
## src/app/page.tsx

---

**Prompt 1 of 6 — Home Page (index)**

```
[CONTEXT]
- Prompt 0 is complete: Next.js 14, TypeScript, Tailwind with NBES tokens,
  Navbar, Footer, CTABand, SectionLabel, useScrollReveal, useCounter all exist
- Shared layout in src/app/layout.tsx already wraps Navbar + Footer
- ImagePlaceholder component exists at src/components/ImagePlaceholder.tsx
- Design reference: READ doc1-master-design-system.md (all sections)
- Content reference: READ doc2-page-content-guide.md → PAGE 1: HOME
- Anti-AI rules: READ doc4-anti-ai-constraints.md → PART 1 fully

[OBJECTIVE]
Build the complete NBES homepage at src/app/page.tsx with 8 sections:
Hero, Logos Bar, Services Overview, Stats Band, Featured Projects,
Why NBES, Testimonials, and CTA Band — following the BUZONE-inspired
asymmetric editorial design from doc1.

[TASK]

Create src/app/page.tsx as a Server Component (no 'use client' at file level).
Extract interactive sub-sections into separate 'use client' components where needed.

── SECTION 1: HERO ──────────────────────────────────────────

File: src/components/home/Hero.tsx ('use client')
Layout: CSS Grid, 2 columns — 55fr 45fr. Right column image bleeds to viewport right edge.
Background: bg-black

Left column content (padding: pl-10 md:pl-6 sm:pl-5, pr-0):
  <SectionLabel>Electrical & Technical Solutions</SectionLabel>

  <h1 className="font-display text-display-xl font-extrabold uppercase text-white mt-4 leading-[0.88]">
    POWER.<br/>
    <span className="text-accent">SAFETY.</span><br/>
    RELIABILITY.
  </h1>

  <p className="font-body font-light text-[17px] text-white/65 max-w-[460px] mt-6 leading-[1.75]">
    NBES delivers certified electrical works, precision earthing, integrated security,
    and skilled technical manpower — for industrial, commercial, and government projects across India.
  </p>

  Buttons row (flex gap-4 mt-10 flex-wrap):
    Primary: bg-accent text-white font-display font-bold uppercase text-sm tracking-[0.06em]
             px-7 py-[14px] rounded-btn flex items-center gap-2 hover:bg-accent-dark
             hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(0,71,204,0.25)] transition-all
             Text: "Get a Quote" + Lucide ArrowRight (14px, arrow moves right on hover)

    Ghost: flex items-center gap-2 text-white/70 hover:text-white font-display font-bold
           uppercase text-sm tracking-[0.06em] transition-colors
           Icon: Lucide MessageCircle (18px, fill="#25D366" stroke="none")
           Text: "WhatsApp Us"

  Stats strip (mt-16 pt-10 border-t border-white/10 grid grid-cols-4 gap-8 sm:grid-cols-2):
    Each stat: { num: "15+", label: "Years Operating" } etc.
    Number: font-display text-[44px] font-extrabold text-white leading-none
    Label: font-body text-sm text-white/50 mt-1
    Use useCounter hook on the numeric part (strip the + suffix, animate number, add + back)

Right column (relative overflow-hidden):
  <ImagePlaceholder
    gradient="linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)"
    label="Hero site photo"
    className="w-full h-full min-h-[600px]"
  />
  Subtle animated CSS grid lines overlay (absolute inset-0, pointer-events-none):
    background-image: two linear-gradients making a grid
    background-size: 60px 60px
    opacity: 0.04 using accent color

Mobile (sm): grid-cols-1, right column hidden, hero text full width,
             adjust H1 font-size via clamp, stats 2x2 grid

Framer Motion: wrap the left column content in <motion.div> with
  initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
  Stagger children using variants with staggerChildren: 0.1

── SECTION 2: LOGOS BAR ──────────────────────────────────────

File: inline in page.tsx (no separate component needed)
Background: bg-off-white border-b border-border
Height: py-8
Layout: flex items-center container-width

Left: "TRUSTED BY" — font-body text-[11px] font-medium tracking-[0.14em] uppercase text-mid-grey
       pr-12 border-r border-border mr-12 whitespace-nowrap flex-shrink-0

Right: flex gap-12 overflow-hidden flex-1
  6 client logo pills — each: bg-white border border-border rounded-[6px] px-6 py-[10px]
  Text: font-display text-sm font-bold tracking-[0.06em] text-[#999] uppercase
  Placeholder names: "Client Co.", "Group XYZ", "Industrial Ltd", "Infra Corp", "Gov Agency", "Builder Co."

── SECTION 3: SERVICES OVERVIEW ──────────────────────────────

File: src/components/home/ServicesGrid.tsx ('use client' for hover effects)
Background: bg-white section-padding

Header (mb-14 grid grid-cols-2 gap-16 items-end — 60/40 split, NOT centered):
  Left: <SectionLabel>What We Do</SectionLabel>
        <h2 className="font-display text-display-lg font-extrabold uppercase text-black mt-3">
          OUR CORE<br/>SERVICES
        </h2>
  Right: <p className="body-light text-[17px]">
           From high-voltage installations to intelligent security infrastructure
           — all compliant with IS, IEC, and BIS standards.
         </p>

Services array (define as const above component):
[
  { num: "01", icon: Zap, title: "Electrical Works", desc: "...", features: [...4 items], href: "/services#electrical" },
  { num: "02", icon: Anchor, title: "Earthing Solutions", desc: "...", features: [...4 items], href: "/services#earthing" },
  { num: "03", icon: Shield, title: "Security Systems", desc: "...", features: [...4 items], href: "/services#security" },
  { num: "04", icon: Users, title: "Technical Manpower", desc: "...", features: [...4 items], href: "/services#manpower" },
]

Grid: grid grid-cols-2 — with internal borders ONLY (NOT individual card borders):
  Parent: divide-x divide-y divide-border (Tailwind divide utilities)
  This creates the BUZONE "table cell" grid effect — not individual bordered cards

Each card (p-10 relative overflow-hidden group cursor-pointer):
  Top accent line: absolute top-0 left-0 right-0 h-[3px] bg-accent
                   transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-[350ms]
  Service number: font-display text-[11px] font-bold tracking-[0.14em] text-accent mb-6
  Icon container: w-12 h-12 bg-accent-light rounded-[10px] flex items-center justify-center mb-5
                  group-hover:bg-accent transition-colors
    Icon: size={24} className="text-accent group-hover:text-white transition-colors"
  Title: font-display text-[24px] font-bold uppercase text-black mb-3
  Description: font-body text-sm text-mid-grey leading-[1.65] mb-6
  Features list: flex flex-col gap-2
    Each: flex items-center gap-[10px] text-sm text-charcoal
          Dot: w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0
  Ghost link: flex items-center gap-[6px] font-display text-[13px] font-bold uppercase text-accent
              mt-7 group/link
    ArrowRight (14px) moves: translate-x-0 group-hover/link:translate-x-[6px] transition-transform

Mobile: grid-cols-1 (stack all 4 cards)

── SECTION 4: STATS BAND ──────────────────────────────────────

File: src/components/StatsCounter.tsx ('use client')
Background: bg-black py-16

Stats array: [
  { num: 300, suffix: "+", label: "Projects Delivered" },
  { num: 15,  suffix: "+", label: "Years Operating" },
  { num: 8,   suffix: "",  label: "States Covered" },
  { num: 50,  suffix: "+", label: "Certified Technicians" },
]

Layout: container-width grid grid-cols-4 sm:grid-cols-2
Dividers: divide-x divide-white/8

Each stat:
  text-center py-6 px-5
  Number: font-display text-[60px] font-extrabold text-white leading-none
          The suffix: text-accent (inline, same font)
  Label: font-body text-sm text-white/45 mt-2

Use useCounter hook per stat number. Trigger all counters when section enters viewport.

── SECTION 5: FEATURED PROJECTS ──────────────────────────────

File: src/components/home/FeaturedProjects.tsx ('use client')
Background: bg-off-white section-padding

Header (flex justify-between items-end mb-12):
  Left: <SectionLabel>Our Work</SectionLabel>
        <h2 className="font-display text-display-lg font-extrabold uppercase text-black mt-3">
          COMPLETED<br/>PROJECTS
        </h2>
  Right: Ghost link "View All Projects" + ArrowRight icon

Project grid — ASYMMETRIC (this is critical — NOT equal cards):
  CSS Grid: grid-cols-[2fr_1fr] grid-rows-2 gap-[2px] bg-border
  Card 1: col-span-1 row-span-2 (takes left 2/3, full height)
  Card 2: col-span-1 row-span-1 (top-right 1/3)
  Card 3: col-span-1 row-span-1 (bottom-right 1/3)

Each card (group relative overflow-hidden aspect-[4/3] — card 1 is taller due to row-span-2):
  <ImagePlaceholder> fills card
  Overlay: absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
  Info (absolute bottom-0 left-0 right-0 p-6):
    Category tag: inline-block bg-accent text-white font-display text-[10px] font-bold
                  tracking-[0.1em] uppercase px-[10px] py-[3px] rounded-[2px] mb-2
    Title: font-display font-bold uppercase text-white (text-[20px] on small cards, text-[28px] on large)
    Location: font-body text-[13px] text-white/60 mt-1
  "View Project →": absolute bottom-5 right-5 text-white/0 group-hover:text-white/80
                    font-display text-[12px] font-bold uppercase flex items-center gap-1
                    transition-all duration-300

3 projects: use content from doc2-page-content-guide.md → PAGE 3, Section 2

Mobile: grid-cols-1, all cards equal

── SECTION 6: WHY NBES ──────────────────────────────────────

File: inline in page.tsx
Background: bg-white section-padding

Layout: grid grid-cols-[40fr_60fr] gap-20 items-start
Left:
  <SectionLabel>Why Choose Us</SectionLabel>
  <h2 className="font-display text-display-md font-extrabold uppercase text-black mt-3 mb-5">
    TRUSTED BUILDERS<br/>WITH YEARS OF<br/>EXPERIENCE
  </h2>
  <p className="body-light">3-4 lines about NBES credibility and track record</p>
  <Link href="/contact" className="[primary button styles] mt-9 inline-flex">
    Request a Consultation <ArrowRight size={16} />
  </Link>

Right: flex flex-col gap-8
  3 points from doc2, Section 6 (Why NBES):
    Each: flex gap-4 items-start
    Icon container: w-10 h-10 bg-accent-light rounded-[8px] flex items-center justify-center flex-shrink-0
      Lucide icon: size={20} className="text-accent"
    Content: title (font-display text-[17px] font-bold uppercase text-black mb-1)
             body (font-body text-sm text-mid-grey leading-[1.6])

Mobile: grid-cols-1

── SECTION 7: TESTIMONIALS ──────────────────────────────────

File: src/components/home/Testimonials.tsx
Background: bg-off-white section-padding

Header (mb-12 grid grid-cols-2 gap-16 items-end):
  Left: <SectionLabel>Client Reviews</SectionLabel>
        <h2>WHAT OUR<br/>CLIENTS SAY</h2>
  Right: <p className="body-light">2-line supporting text</p>

3 cards grid (grid grid-cols-3 gap-6 md:grid-cols-1):
  Each card (bg-white p-8 rounded-[8px] border border-border
             hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all):
    Quote mark: font-display text-[64px] font-extrabold text-accent/30 leading-[0.5] mb-5
    Stars: flex gap-[3px] mb-4, 5× span with text-[#F5A623] text-sm: ★
    Quote text: font-body text-sm text-charcoal leading-[1.7] mb-7
    Author: flex items-center gap-3
      Avatar: w-11 h-11 rounded-full bg-accent flex items-center justify-center
              font-display text-[16px] font-bold text-white (initials)
      Name: font-body font-medium text-sm text-black
      Role: font-body text-[12px] text-mid-grey mt-[2px]

── SECTION 8: CTA BAND ──────────────────────────────────────

Import <CTABand /> component built in Prompt 0.

── APPLY SCROLL REVEAL TO ALL SECTIONS ──────────────────────

Use useScrollReveal hook on section wrappers.
Apply framer-motion variants for staggered children where multiple sibling elements exist.
Stats counters trigger on section enter viewport.

[CONSTRAINTS]
- READ doc1-master-design-system.md sections 5, 6, 7, 9 before coding any component
- READ doc4-anti-ai-constraints.md PART 1 — every FORBIDDEN pattern must be avoided
- READ doc2-page-content-guide.md PAGE 1 for all content copy
- Projects grid MUST be asymmetric (2fr/1fr) — if you make it 3 equal columns you have failed
- Service cards use divide-x divide-y on parent — NOT individual card borders
- Stats section background MUST be bg-black — not dark blue, not charcoal
- Off-white: ALWAYS bg-[#F5F4EF] — never bg-gray-50
- No emojis. No gradient blobs. No decorative floating shapes.
- All icons from lucide-react only
- Framer Motion for all animation — no CSS @keyframes

[DONE WHEN]
- / renders all 8 sections correctly
- Hero: 2-col on desktop, image right bleeds to edge, stats strip shows
- Service grid: 2×2 internal borders only (no individual card outlines at rest)
- Stats band: black background, counter animation plays once on scroll
- Projects grid: visibly asymmetric (large left card, 2 stacked small right)
- All sections have scroll reveal animation
- Mobile (375px): hero 1-col, services 1-col, projects 1-col, stats 2×2
- TypeScript: zero errors

[NEXT UP]
Prompt 2 will cover: Services page (services/page.tsx)
```

---

---

# PROMPT 2 — SERVICES PAGE
## src/app/services/page.tsx

---

**Prompt 2 of 6 — Services Page**

```
[CONTEXT]
- Prompt 0 complete: full project setup, all shared components exist
- Prompt 1 complete: homepage built, design patterns established
- Shared: Navbar, Footer, CTABand, SectionLabel, useScrollReveal all available
- Design ref: doc1-master-design-system.md
- Content ref: doc2-page-content-guide.md → PAGE 2: SERVICES
- Anti-AI: doc4-anti-ai-constraints.md

[OBJECTIVE]
Build the Services page at src/app/services/page.tsx — the site's primary SEO page.
Each of the 4 services gets its own full-width alternating section with image + content.
Page must include proper Next.js metadata for SEO.

[TASK]

1. METADATA — export from page.tsx:
   export const metadata: Metadata = {
     title: "Electrical Works, Earthing & Security Services",
     description: "NBES provides certified electrical works, IS 3043 earthing solutions,
       security system installation, and technical manpower across India. 15+ years, 300+ projects.",
     keywords: ["electrical contractor India", "earthing solutions", "security system installation",
       "technical manpower", "IS 3043 earthing", "electrical contractor Maharashtra"],
   }

2. PAGE HERO
   Background: bg-black
   Layout: centered (exception to left-alignment rule — page heroes can be centered)
   py-28 text-center

   <SectionLabel centered>What We Offer</SectionLabel>
   <h1 className="font-display text-display-xl font-extrabold uppercase text-white mt-4">
     OUR SERVICES
   </h1>
   <p className="body-light text-white/65 max-w-[580px] mx-auto mt-5 text-[17px]">
     Complete electrical, earthing, security, and manpower solutions — engineered for
     industrial, commercial, and government projects across India.
   </p>

3. SERVICE SECTIONS (4 total, alternating layouts)

   Create: src/components/services/ServiceDetail.tsx
   Props:
     num: string
     id: string  ← used for anchor links (#electrical etc.)
     title: string
     subtitle: string
     description: string
     included: string[]  ← "What's Included" checklist
     industries: string[]  ← "Ideal For" pills
     imageGradient: string
     imageLabel: string
     layout: 'image-left' | 'image-right'
     background: 'white' | 'off-white'

   Layout logic:
     'image-left':  grid-cols-[45fr_55fr] — image left, content right
     'image-right': grid-cols-[55fr_45fr] — content left, image right

   Image column:
     Relative. <ImagePlaceholder> with passed gradient + label.
     Image is TOP-OFFSET by 24px: className="mt-6" or similar
     This is NOT flush with section top — creates the editorial "hanging" look from doc1

   Content column:
     Service num: font-display text-[11px] tracking-[0.14em] text-accent mb-3
     <SectionLabel>{eyebrow}</SectionLabel>
     <h2 id={id} className="font-display text-display-md font-extrabold uppercase text-black mt-3 mb-5">
       {title}
     </h2>
     <p className="body-light">{description}</p>

     "What's Included" (mt-8):
       Label: font-display text-[12px] font-bold tracking-[0.1em] uppercase text-charcoal mb-4
       List: flex flex-col gap-3
         Each: flex items-center gap-3 text-sm text-charcoal
               Lucide CheckCircle2 (16px, text-accent, flex-shrink-0)

     "Ideal For" (mt-6):
       Label: font-body text-[12px] font-medium text-mid-grey uppercase tracking-[0.08em] mb-3
       Pills: flex flex-wrap gap-2
         Each: font-body text-[13px] text-charcoal bg-off-white border border-border
               px-3 py-1 rounded-[4px]

     Ghost CTA: "Get a Quote for This Service →" (mt-8)

   Services data (in page.tsx):
   [
     {
       num: "01", id: "electrical",
       title: "INDUSTRIAL & COMMERCIAL\nELECTRICAL INSTALLATION",
       subtitle: "Electrical Works",
       description: "[from doc2]",
       included: ["HT/LT Panel Installation & Commissioning","Cable Laying & Termination",
                  "Transformer Installation","Switchgear & Protection Systems",
                  "Load Testing & Documentation","Power Factor Correction"],
       industries: ["Factories","Warehouses","Commercial Buildings","Government Facilities"],
       layout: 'image-left', background: 'white',
       imageGradient: "linear-gradient(135deg, #0a1628 0%, #1a2f4a 100%)",
       imageLabel: "Electrical panel installation"
     },
     {
       num: "02", id: "earthing",
       title: "PRECISION EARTHING —\nIS 3043 COMPLIANT",
       subtitle: "Earthing Solutions",
       description: "[from doc2]",
       included: ["Soil Resistivity Testing","Conventional Plate/Pipe Earthing",
                  "Chemical Earthing Systems","Lightning Arrestor & Down Conductor",
                  "Earth Continuity Testing & Reports","Maintenance & Re-testing"],
       industries: ["Industrial Plants","Data Centers","Telecom Towers","Government Buildings"],
       layout: 'image-right', background: 'off-white',
       imageGradient: "linear-gradient(135deg, #0d1a0d 0%, #1a3a2f 100%)",
       imageLabel: "Earthing installation"
     },
     {
       num: "03", id: "security",
       title: "INTEGRATED SECURITY\nINFRASTRUCTURE",
       subtitle: "Security Systems",
       description: "[from doc2]",
       included: ["CCTV Surveillance System Design & Install","Access Control & Biometrics",
                  "Fire Detection & Alarm Systems","Perimeter Security & Intrusion Detection",
                  "Video Management Software","Annual Maintenance Contract (AMC)"],
       industries: ["Factories","Corporate Offices","Warehouses","Residential Complexes"],
       layout: 'image-left', background: 'white',
       imageGradient: "linear-gradient(135deg, #1a0d2a 0%, #2a1a3a 100%)",
       imageLabel: "Security system installation"
     },
     {
       num: "04", id: "manpower",
       title: "CERTIFIED ELECTRICAL\nWORKFORCE ON DEMAND",
       subtitle: "Technical Manpower",
       description: "[from doc2]",
       included: ["ITI/Diploma Certified Electricians","Site Supervisors & Engineers",
                  "Short & Long-Term Contracts","Workman's Compensation Insured",
                  "Contract Labour Act Compliant","Rapid Mobilization (5–7 working days)"],
       industries: ["EPC Contractors","Plant Operators","Facility Managers","Project Developers"],
       layout: 'image-right', background: 'off-white',
       imageGradient: "linear-gradient(135deg, #1a1a0d 0%, #2a2a1a 100%)",
       imageLabel: "Technical team on site"
     }
   ]

4. INDUSTRIES WE SERVE
   Background: bg-black section-padding
   Header: centered, <SectionLabel centered>Industries</SectionLabel>
           <h2>WHO WE WORK WITH</h2>

   4 cards (grid grid-cols-4 md:grid-cols-2):
     Each: bg-[#1a1a1a] border border-white/8 p-8 rounded-[6px]
           hover:border-accent/30 hover:bg-[#1e1e1e] transition-all
     Lucide icon (32px, text-accent) + title (font-display 17px uppercase text-white mt-4)
     + 1-line description (font-body text-sm text-white/50 mt-2)
   Industries: Building2 / Briefcase / Landmark / HardHat
   Names: Industrial/Manufacturing | Commercial | Government/PSU | Infrastructure/EPC

5. CERTIFICATIONS STRIP
   Background: bg-off-white py-12
   Layout: container-width flex items-center gap-12 flex-wrap

   Left label: "STANDARDS & CERTIFICATIONS:" (eyebrow style, flex-shrink-0)
   Items: flex gap-8 flex-wrap
     Each: flex items-center gap-[10px] font-display text-[13px] font-bold
           tracking-[0.06em] uppercase text-charcoal
           Lucide Award (20px, text-accent)
   Certs: IS 3043 | IS 732 | IEC 60364 | BIS Certified | ISO 9001:2015

6. FAQ ACCORDION
   File: src/components/FAQAccordion.tsx ('use client')
   Background: bg-white section-padding
   Layout: centered, max-w-[720px] mx-auto

   Header: centered
     <SectionLabel centered>FAQ</SectionLabel>
     <h2>FREQUENTLY ASKED\nQUESTIONS</h2>

   Questions from doc2 PAGE 2 and PAGE 3 (6 items):
     Use useState for open index (only one open at a time)
     Item: border-b border-border
     Question row: flex justify-between items-center py-5 cursor-pointer
                   font-body text-[16px] font-medium text-black hover:text-accent transition-colors
       Icon: Lucide Plus (rotates to X when open) — transition-transform duration-300
             w-6 h-6 rounded-full bg-off-white flex items-center justify-center
             open: bg-accent text-white rotate-45
     Answer: overflow-hidden transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]
             max-h-0 → max-h-[200px] when open
             font-body text-[15px] text-mid-grey pb-4

7. CTA BAND — import <CTABand />

[CONSTRAINTS]
- Service sections MUST alternate layout (image-left, image-right, image-left, image-right)
- Image in each service section has top-offset (mt-6) — not flush with section top
- Section backgrounds MUST alternate: white, off-white, white, off-white
- FAQ accordion: only one item open at a time (clicking open item closes it)
- READ doc2 for all content/copy — do not invent descriptions
- All anchor IDs (#electrical, #earthing, etc.) must work for deep-linking from homepage

[DONE WHEN]
- /services renders all 4 service sections
- Layouts visibly alternate (image side switches each section)
- Image top-offset visible (not flush with section edge)
- Certifications strip shows all 5 certs with Award icons
- FAQ accordion opens/closes correctly, only one at a time
- Anchor links work: /services#earthing scrolls to earthing section
- Page metadata set correctly
- Zero TypeScript errors

[NEXT UP]
Prompt 3 will cover: Projects/Portfolio page
```

---

---

# PROMPT 3 — PROJECTS PAGE
## src/app/projects/page.tsx

---

**Prompt 3 of 6 — Projects / Portfolio Page**

```
[CONTEXT]
- Prompts 0, 1, 2 complete
- Shared components all available
- Design ref: doc1 sections 5.5 (Project Card), 7 (Photography), 9 (Anti-AI)
- Content ref: doc2 PAGE 3: PROJECTS
- Anti-AI: doc4 — especially re: project grid asymmetry

[OBJECTIVE]
Build the Projects portfolio page at src/app/projects/page.tsx with an asymmetric
filterable project grid, a page hero with overlapping image, FAQ, and CTA.

[TASK]

1. METADATA:
   title: "Completed Projects | Electrical, Earthing & Security Portfolio"
   description: "View NBES's completed projects — industrial electrical, earthing systems,
     security installations across Maharashtra, Telangana, Gujarat and more."

2. PAGE HERO — LEFT-HEAVY (NOT centered, this is different from Services hero)
   Background: bg-black
   Layout: grid grid-cols-[60fr_40fr] items-start pt-24 pb-0 (note: pb-0, image overlaps)

   Left column (pb-24 pl-10):
     <SectionLabel>Our Portfolio</SectionLabel>
     <h1 className="font-display text-display-xl font-extrabold uppercase text-white mt-4">
       OUR COMPLETED<br/>PROJECTS
     </h1>
     <p className="body-light text-white/65 max-w-[440px] mt-5">
       Every project reflects our commitment to safety, precision,
       and standards compliance — from industrial earthing to integrated security.
     </p>
     Ghost CTA: "Have a similar project? Talk to us →" (mt-8)

   Right column — OVERLAPPING IMAGE:
     This image must extend below the hero section into the white section below.
     Technique: position the right column relative, give the image
     className="w-full aspect-[3/4] object-cover mt-8 mb-[-80px] relative z-10"
     Use <ImagePlaceholder> with gradient "linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)"
     This creates the BUZONE "image bleeds into next section" effect

3. RECENT WORKS SECTION
   Background: bg-white
   pt-24 pb-24 (the top padding accommodates the overlapping hero image)

   Header: centered mb-12
     <SectionLabel centered>Recent Works</SectionLabel>
     <h2>RECENT WORKS</h2>

   FILTER BAR (mb-10 flex justify-center gap-3 flex-wrap):
     File: src/components/projects/FilterBar.tsx ('use client')
     Categories: ['All', 'Electrical', 'Earthing', 'Security', 'Manpower']
     Active pill: bg-accent text-white
     Inactive pill: bg-white text-charcoal border border-border hover:border-accent
     Both: font-body text-[13px] font-medium px-5 py-[9px] rounded-[4px] cursor-pointer transition-all
     State: useState for active category
     Filtering: passes active category up/down via props or context

   PROJECT GRID — ASYMMETRIC ROW PATTERN (critical):
     File: src/components/projects/ProjectGrid.tsx ('use client')

     Projects data array (6 items from doc2):
     [
       { id:1, title:"Steel Plant Earthing & HT Panel Installation",
         location:"Nagpur, Maharashtra", category:"Earthing",
         gradient:"linear-gradient(135deg, #0d1f3c, #1a2f4a)" },
       { id:2, title:"Corporate Office Security System",
         location:"Hyderabad, Telangana", category:"Security",
         gradient:"linear-gradient(135deg, #1a2a1a, #0d1a0d)" },
       { id:3, title:"Municipal Substation Upgrade",
         location:"Pune, Maharashtra", category:"Electrical",
         gradient:"linear-gradient(135deg, #1a1a2e, #2a2a3e)" },
       { id:4, title:"Chemical Plant Electrical Audit",
         location:"Ankleshwar, Gujarat", category:"Electrical",
         gradient:"linear-gradient(135deg, #2a1a0d, #3a2a1a)" },
       { id:5, title:"Auto OEM Manpower Contract — 12 Months",
         location:"Chakan, Pune", category:"Manpower",
         gradient:"linear-gradient(135deg, #0d1a2a, #1a2a3a)" },
       { id:6, title:"Factory Perimeter CCTV System",
         location:"Aurangabad, Maharashtra", category:"Security",
         gradient:"linear-gradient(135deg, #1a0d2a, #2a1a3a)" },
     ]

     Filtered array: projects filtered by active category (or all if 'All')
     Filter animation: framer-motion AnimatePresence + layout prop for smooth reflow

     GRID LAYOUT (bg-border gap-[2px]):
       Row 1 (grid grid-cols-[2fr_1fr]): project[0] + project[1]
       Row 2 (grid grid-cols-[1fr_2fr]): project[2] + project[3]
       Row 3 (grid grid-cols-[1fr_1fr]): project[4] + project[5]
       Each row is its own grid div — this achieves the BUZONE asymmetric layout

     Each card: group relative overflow-hidden (aspect-[4/3] for 1fr cards, auto height for 2fr cards)
       <ImagePlaceholder> fills card
       Gradient overlay: absolute inset-0 bg-gradient-to-t from-black/82 to-transparent
       Info (always visible, absolute bottom-0 left-0 right-0 p-6):
         Category tag pill
         Title: font-display font-bold uppercase text-white (larger on 2fr cards)
         Location: font-body text-[13px] text-white/60 mt-1
       "View Project →": absolute bottom-5 right-5 opacity-0 group-hover:opacity-80
                          transition-opacity font-display text-[12px] uppercase flex items-center gap-1

4. FAQ ACCORDION
   Import <FAQAccordion /> built in Prompt 2
   Background: bg-[#F5F4EF]
   Same 6 questions

5. CTA BAND — import <CTABand />

[CONSTRAINTS]
- Hero image MUST overlap into the next section (negative margin-bottom technique)
- Project grid MUST use 3 separate grid rows with different column ratios
- Filter animation must use framer-motion AnimatePresence
- 2fr project cards should show larger title text than 1fr cards
- READ doc4 anti-AI rules — equal 3-col project grid is explicitly forbidden

[DONE WHEN]
- /projects renders with left-heavy hero (not centered)
- Hero image visibly overlaps the white section below
- Filter bar works — clicking "Earthing" shows only earthing projects
- Grid is visibly asymmetric across 3 row patterns
- Filter transition is animated (framer-motion)
- Mobile: all grid rows collapse to 1-col
- Zero TypeScript errors

[NEXT UP]
Prompt 4 will cover: About page
```

---

---

# PROMPT 4 — ABOUT PAGE
## src/app/about/page.tsx

---

**Prompt 4 of 6 — About Us Page**

```
[CONTEXT]
- Prompts 0–3 complete
- All shared components available
- Design ref: doc1
- Content ref: doc2 PAGE 4: ABOUT US
- Anti-AI: doc4

[OBJECTIVE]
Build the About page at src/app/about/page.tsx — the trust-building page for
procurement managers doing due diligence. Emphasizes company history, team,
certifications, and process.

[TASK]

1. METADATA:
   title: "About NBES | 15+ Years in Electrical & Technical Services"
   description: "Learn about NBES — India's trusted B2B electrical contractor with
     15+ years, 300+ projects, IS/IEC certified teams across multiple states."

2. PAGE HERO — centered
   Background: bg-black, py-28 text-center
   <SectionLabel centered>Our Story</SectionLabel>
   <h1>ABOUT NBES</h1>
   <p className="body-light text-white/65 max-w-[560px] mx-auto mt-5">
     For over 15 years, NBES has been the trusted electrical and technical partner
     for contractors, builders, and industry across India.
   </p>

3. COMPANY STORY
   Background: bg-white section-padding
   Layout: grid grid-cols-[60fr_40fr] gap-20 items-start

   Left (60%):
     <SectionLabel>Who We Are</SectionLabel>
     <h2>TRUSTED BY INDUSTRY<br/>FOR 15+ YEARS</h2>
     3 paragraphs from doc2 (DM Sans 300, 17px, leading-[1.75], text-mid-grey, mt-5 gap-5)

   Right (40%) — OFFSET IMAGE STACK (key design move from doc1 Section 7):
     Outer: relative h-[500px] (or auto)
     Main image: <ImagePlaceholder> w-full aspect-[4/3] (normal position)
     Second image: <ImagePlaceholder> w-[70%] aspect-[4/3]
                   absolute bottom-[-24px] right-[-24px] z-10
                   border-4 border-white (creates separation from main image)
     Blue achievement badge (absolute bottom-[-12px] left-4 z-20):
       bg-accent text-white p-5 rounded-[8px] shadow-[0_12px_40px_rgba(0,71,204,0.3)]
       Number: font-display text-[44px] font-extrabold leading-none
       Text: "Years of Excellence" (font-body text-[13px] text-white/80 mt-1)

   Mobile: grid-cols-1, image stack becomes single image + badge

4. STATS BAND — import <StatsCounter /> from Prompt 1 (bg-black, same 4 stats)

5. CORE VALUES
   Background: bg-off-white section-padding
   Header: centered mb-16
     <SectionLabel centered>Our Approach</SectionLabel>
     <h2>HOW WE WORK</h2>

   3 columns — OPEN LAYOUT (no card backgrounds, no card borders):
     Grid: grid grid-cols-3 gap-12 md:grid-cols-1
     Desktop: divide-x divide-border (only vertical dividers between columns)
     Each column: px-8 text-center md:text-left md:px-0 md:border-none md:pb-8 md:border-b md:border-border

     Icon: w-14 h-14 bg-accent-light rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6
       Lucide icon (28px, text-accent)
     Title: font-display text-[20px] font-bold uppercase text-black mb-3
     Body: font-body text-sm text-mid-grey leading-[1.65]

   Values: BadgeCheck/"Standards-Driven" | GitMerge/"Complete Accountability" | ShieldCheck/"Safety First"
   Content from doc2 Section 5 (Core Values)

6. MEET THE TEAM
   Background: bg-white section-padding
   Header: mb-12
     <SectionLabel>Our People</SectionLabel>
     <h2>OUR PROFESSIONAL TEAM</h2>

   FOUNDER CARD (grid grid-cols-2 gap-0 mb-16 bg-off-white rounded-[8px] overflow-hidden):
     Left (45%): <ImagePlaceholder> className="h-full min-h-[400px]" gradient="linear-gradient..."
     Right (55%): p-12 flex flex-col justify-center
       Name: font-display text-[32px] font-extrabold uppercase text-black
       Title: font-body text-[15px] text-accent font-medium mt-1
       Bio: 2-3 paragraphs from doc2, body-light style
       Credentials: flex items-center gap-2 mt-6 (Lucide Award icon + cert text)
       LinkedIn: Lucide Linkedin (20px, text-mid-grey hover:text-accent)

   TEAM ROW (grid grid-cols-4 gap-6 md:grid-cols-2):
     4 team member cards, each: overflow-hidden rounded-[6px] bg-off-white
       Photo: <ImagePlaceholder> aspect-square
       Info: p-4
         Name: font-display text-[17px] font-bold uppercase text-black
         Title: font-body text-sm text-mid-grey mt-1
     Hover: -translate-y-[3px] transition-transform

7. CERTIFICATIONS
   Background: bg-off-white section-padding
   Layout: grid grid-cols-[55fr_45fr] gap-20 items-start

   Left:
     <SectionLabel>Standards & Compliance</SectionLabel>
     <h2>CERTIFIED TO THE<br/>HIGHEST STANDARDS</h2>
     <p className="body-light mt-5">
       We don't just meet standards — we document every installation
       for your audit trail. All certifications on request.
     </p>

   Right: grid grid-cols-2 gap-4
     Each cert card: bg-white border border-border rounded-[6px] p-5
       Lucide Award (24px, text-accent) mb-3
       Name: font-display text-[15px] font-bold uppercase text-black
       Description: font-body text-[12px] text-mid-grey mt-1
     Certs from doc1 Section 10

8. OUR PROCESS
   Background: bg-white section-padding
   Header: centered mb-16
   4 steps in a row with connecting line (from doc2 Section 8)

   Wrapper: relative
   Connecting line: absolute top-9 left-[12.5%] right-[12.5%] h-px bg-border (z-0)

   Steps: grid grid-cols-4 gap-6 md:grid-cols-2 (line hidden on mobile)
     Each step: text-center relative z-10
       Number circle: w-[72px] h-[72px] rounded-full bg-white border border-border mx-auto mb-6
                      flex items-center justify-center z-10 relative
                      font-display text-[24px] font-extrabold text-accent
                      hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_8px_24px_rgba(0,71,204,0.3)]
                      transition-all duration-300
       Title: font-display text-[17px] font-bold uppercase text-black mb-2
       Description: font-body text-[14px] text-mid-grey leading-[1.6]

   Steps: 01 Site Assessment | 02 Design & Proposal | 03 Execution | 04 Test & Handover

9. CTA BAND — import <CTABand />

[CONSTRAINTS]
- Offset image stack is required (second image positioned outside its container)
- Core values section MUST be open layout (no card boxes) — divide-x only
- Founder card must be a 2-col grid (photo left, text right) — not a standard card
- Team row: 4 equal cards (this IS acceptable here — they're people, not features)
- Process steps: connecting line must be position:absolute behind step numbers
- READ doc2 PAGE 4 for all copy

[DONE WHEN]
- /about renders all 8 sections
- Company story: 2-col with offset image stack (second image clearly offset bottom-right)
- Core values: 3 open columns with only vertical dividers (no card backgrounds)
- Founder: 2-col grid, photo left, text right
- Process: 4 steps with connecting line visible on desktop
- Mobile: all multi-col layouts collapse properly
- Zero TypeScript errors

[NEXT UP]
Prompt 5 will cover: Contact page with working form
```

---

---

# PROMPT 5 — CONTACT PAGE
## src/app/contact/page.tsx

---

**Prompt 5 of 6 — Contact / Get a Quote Page**

```
[CONTEXT]
- Prompts 0–4 complete
- All shared components available
- This is the lead capture page — simplicity and trust are paramount
- Design ref: doc1 Section 12 (Forms)
- Content ref: doc2 PAGE 5: CONTACT

[OBJECTIVE]
Build the Contact page at src/app/contact/page.tsx with a working contact form
(client-side validation + success state), direct contact details, states covered,
and a Google Maps embed — maximum friction removed from lead capture.

[TASK]

1. METADATA:
   title: "Contact NBES | Get a Quote"
   description: "Get in touch with NBES for a quote on electrical works, earthing
     solutions, security systems, or technical manpower. Respond within 24 hours."

   Add LocalBusiness JSON-LD schema:
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     "name": "NBES",
     "@id": "https://nbes.in",
     "url": "https://nbes.in",
     "telephone": "+91-XXXXXXXXXX",
     "email": "info@nbes.in",
     "address": { "@type": "PostalAddress", "addressCountry": "IN" },
     "openingHours": "Mo-Sa 09:00-19:00",
     "areaServed": "India"
   }
   </script>
   (Use Next.js Script component or inline in page head)

2. PAGE HERO — SHORT
   Background: bg-black
   py-20 text-center (shorter than other page heroes)
   <SectionLabel centered>Get In Touch</SectionLabel>
   <h1>LET'S DISCUSS<br/>YOUR PROJECT</h1>
   <p className="body-light text-white/65 mx-auto max-w-md mt-4">
     We respond to all project enquiries within 24 working hours.
   </p>

3. MAIN CONTACT SECTION
   Background: bg-white section-padding
   Layout: grid grid-cols-[55fr_45fr] gap-20 items-start md:grid-cols-1

   LEFT — CONTACT FORM:
   File: src/components/contact/ContactForm.tsx ('use client')

   State: React useState for:
     - formData: { name, company, phone, email, service, state, message }
     - errors: Partial<typeof formData>
     - isSubmitting: boolean
     - isSuccess: boolean

   Validation (on submit + on blur):
     - All fields required except message (but message encouraged)
     - Email: regex validation
     - Phone: minimum 10 digits
     - Error state: border-[#E24B4A] on input
     - Error message: flex items-center gap-1 text-[12px] text-[#E24B4A] mt-1
                      Lucide AlertCircle (12px)

   Form fields styling (all from doc1 Section 12):
     Label: font-body text-[13px] font-medium text-charcoal block mb-[6px]
     Input/Select/Textarea:
       w-full h-[52px] border border-border rounded-[3px]
       font-body text-[15px] text-charcoal px-4
       placeholder:text-mid-grey placeholder:font-light
       focus:border-accent focus:outline-none transition-colors duration-200
       error: border-[#E24B4A]
     Textarea: h-[140px] resize-y pt-4 (override height)
     Select: appearance-none, custom chevron icon (Lucide ChevronDown, absolute right-3)

   Fields (each wrapped in <div className="flex flex-col mb-5">):
     1. Full Name
     2. Company Name
     3. grid grid-cols-2 gap-4: Phone Number | Email Address
     4. Service Needed (select):
        Options: "Electrical Works" | "Earthing Solutions" | "Security Systems" |
                 "Technical Manpower" | "Multiple Services" | "Not Sure Yet"
     5. State / Location
     6. Project Description (textarea)

   Submit button:
     w-full bg-accent text-white font-display font-bold uppercase tracking-[0.06em]
     py-[16px] rounded-btn flex items-center justify-center gap-2
     hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed
     isSubmitting: show Lucide Loader2 (animate-spin) + "Sending..."
     default: "Send Message" + Lucide ArrowRight

   Privacy note below button:
     font-body text-[12px] text-mid-grey mt-3 flex items-center gap-1 justify-center
     Lucide Lock (12px) + "We do not share your information with third parties."

   SUCCESS STATE (replaces form):
     div: text-center py-16
     Lucide CheckCircle2 (64px, text-accent) mx-auto mb-6
     h3: font-display text-[28px] font-bold uppercase text-black "Message Sent!"
     p: body-light mt-3 "Thanks! We'll review your project details and be in touch within 24 hours."
     Link back: "Back to Home" ghost button mt-6

   onSubmit: prevent default, validate all, if valid set isSubmitting=true,
             setTimeout(1500) simulate send (replace with real API later), then isSuccess=true

   RIGHT — DIRECT CONTACT INFO:
   <h3 className="font-display text-[28px] font-bold uppercase text-black mb-8">
     Direct Contact
   </h3>

   Contact blocks (flex flex-col gap-6):
     Each block: flex items-start gap-4
       Icon container: w-10 h-10 bg-accent-light rounded-[8px] flex items-center justify-center flex-shrink-0
         Lucide icon (20px, text-accent)
       Content:
         Label: font-body text-[11px] font-medium tracking-[0.1em] uppercase text-mid-grey mb-1
         Value: font-body text-[15px] font-medium text-black
         Sub: font-body text-[13px] text-mid-grey mt-1

   Blocks:
     Phone (Lucide Phone): +91 XXXX XXXXXX / "Mon–Sat, 9am–7pm IST"
     WhatsApp (Lucide MessageCircle):
       +91 XXXX XXXXXX + accent blue link "Open WhatsApp →" / "Quick responses"
     Email (Lucide Mail): info@nbes.in
     Location (Lucide MapPin): [Address placeholder] / [City], [State], India

   Divider: border-t border-border my-8

   STATES WE COVER:
     Label: eyebrow style
     State pills: flex flex-wrap gap-2 mt-3
       Each: font-body text-[13px] text-charcoal bg-off-white border border-border
             px-3 py-[6px] rounded-[4px]
     Placeholder: "[State 1]" "[State 2]" "[State 3]" "[State 4]" "[State 5]"

   RESPONSE TIME BOX:
     mt-8 bg-accent-light border border-accent/20 rounded-[8px] p-5
     flex items-center gap-3
     Lucide Clock (20px, text-accent)
     font-body text-[14px] text-charcoal
     "We reply to all project enquiries within 24 working hours."

4. MAP SECTION
   Full-width Google Maps iframe
   height: 400px
   No header/label above it — just the map
   Placeholder during dev: bg-[#e8e7e0] h-[400px] with Lucide Map centered + "Map placeholder"

[CONSTRAINTS]
- Form validation must run on blur (not only on submit)
- isSubmitting state must disable the submit button and show spinner
- Success state fully replaces the form (not a toast/alert)
- Input focus state: border-accent ONLY — no box-shadow glow (doc1 Section 12)
- Select must have custom styling (not browser default appearance)
- All Lucide icons at correct sizes per doc1 Section 10

[DONE WHEN]
- /contact renders hero + 2-col contact section + map
- Form: all fields present, labels above each
- Validation: submitting empty form shows red borders + error messages
- Submitting valid form → loading state → success message replaces form
- Direct contact block shows all 4 contact methods with correct icons
- States section shows state pills
- Response time box visible
- Map placeholder renders full-width at 400px
- Mobile: 2-col → 1-col, form first then contact info below
- Zero TypeScript errors

[NEXT UP]
Prompt 6 will cover: SEO infrastructure, sitemap, robots.txt, and final polish
```

---

---

# PROMPT 6 — SEO INFRASTRUCTURE & FINAL POLISH
## Final agent — runs after all 5 pages are complete

---

**Prompt 6 of 6 — SEO, Metadata, Sitemap & Polish**

```
[CONTEXT]
- Prompts 0–5 complete: all 5 pages built and working
- Now adding SEO infrastructure, accessibility fixes, and final cross-page consistency polish
- This prompt runs AFTER all pages are confirmed working

[OBJECTIVE]
Add production-grade SEO infrastructure (sitemap, robots.txt, OG tags, canonical URLs,
schema markup), audit all pages for WCAG accessibility basics, and apply final
polish: smooth mobile nav, 404 page, and loading states.

[TASK]

1. NEXT.JS METADATA — src/app/layout.tsx
   Add to root metadata export:
   {
     metadataBase: new URL('https://nbes.in'),
     alternates: { canonical: '/' },
     openGraph: {
       type: 'website',
       siteName: 'NBES',
       images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'NBES – Electrical & Technical Solutions' }]
     },
     twitter: { card: 'summary_large_image' },
     robots: { index: true, follow: true }
   }

2. SITEMAP — src/app/sitemap.ts
   export default function sitemap(): MetadataRoute.Sitemap {
     return [
       { url: 'https://nbes.in',          lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
       { url: 'https://nbes.in/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
       { url: 'https://nbes.in/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
       { url: 'https://nbes.in/about',    lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
       { url: 'https://nbes.in/contact',  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.8 },
     ]
   }

3. ROBOTS — src/app/robots.ts
   export default function robots(): MetadataRoute.Robots {
     return {
       rules: { userAgent: '*', allow: '/' },
       sitemap: 'https://nbes.in/sitemap.xml'
     }
   }

4. OG IMAGE PLACEHOLDER — public/og-image.jpg
   Create a note/README in public/ that says "Replace og-image.jpg with a 1200×630
   branded image (NBES logo on dark blue background with company tagline)"

5. 404 PAGE — src/app/not-found.tsx
   Background: bg-black, full viewport height, centered
   <SectionLabel centered>404 — Not Found</SectionLabel>
   <h1 className="font-display text-display-xl text-white mt-4">PAGE NOT FOUND</h1>
   <p className="body-light text-white/65 mt-4 max-w-sm mx-auto">
     The page you're looking for doesn't exist.
   </p>
   <Link href="/" className="[primary button] mt-8">Back to Home</Link>

6. MOBILE NAV — complete the Navbar hamburger overlay from Prompt 0
   In Navbar.tsx, ensure the fullscreen mobile nav:
   - Uses framer-motion: initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
   - AnimatePresence wraps the overlay
   - Each nav link: motion.div with staggerChildren 0.05s
   - Closes on route change (usePathname hook, useEffect)
   - Closes on Escape key (addEventListener)
   - Body scroll locked when open (overflow-hidden on body)

7. ACCESSIBILITY AUDIT — check all pages:
   Apply fixes per web-design-guidelines skill:
   - All <img> and ImagePlaceholder have aria-label or alt
   - All buttons have accessible names (aria-label for icon-only buttons)
   - All form fields have associated <label> (htmlFor + id)
   - FAQ accordion: add aria-expanded, aria-controls on button, role="region" on answer
   - Nav: add aria-label="Main navigation" on <nav>
   - Skip link: add <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
                at very top of body before Navbar
   - Color contrast: verify all text passes 4.5:1 ratio (mid-grey #6B6B6B on white is ~4.6:1 — OK)

8. ACTIVE NAV LINK — update Navbar.tsx
   Use usePathname() from next/navigation
   Apply active styles to matching link:
     active: text-accent with permanent underline (scaleX: 1)

9. SCROLL REVEAL CONSISTENCY PASS
   Walk through all 5 pages and ensure:
   - Every major section wrapper has useScrollReveal applied
   - Sibling card grids use staggerChildren variant
   - No section is "dead" (appears instantly without any entrance)
   - Stats counters work on every page they appear

10. PERFORMANCE — next.config.ts additions:
    - images.formats: ['image/avif', 'image/webp']
    - Add 'nbes.in' to images.domains (for future real image CDN)

[CONSTRAINTS]
- Do NOT change any existing page design in this prompt — polish only
- Sitemap and robots must use Next.js 14 App Router API (not manual files)
- Mobile nav AnimatePresence requires 'use client' — Navbar already has this
- Accessibility fixes must not change visual design (sr-only class for hidden elements)
- Keep all changes minimal and surgical

[DONE WHEN]
- /sitemap.xml renders correct XML with all 5 URLs
- /robots.txt renders with allow all + sitemap reference
- 404 page renders on unknown routes
- Mobile nav: opens/closes with framer-motion, closes on route change + Escape key
- usePathname active state highlights current page link in nav
- All form fields have associated labels (htmlFor/id pairs)
- FAQ accordion has aria-expanded attribute
- npm run build completes with zero errors and zero TypeScript errors

[NEXT UP]
🎉 All 6 prompts complete. Your NBES website build sequence is done.
Next steps: replace ImagePlaceholder components with real photos, update placeholder
copy in doc2 with real client names, connect contact form to a backend (Resend/Nodemailer),
and deploy to Vercel.
```
