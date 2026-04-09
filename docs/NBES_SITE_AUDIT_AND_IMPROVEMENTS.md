# NBES Site Audit & Improvement Playbook
> Hand this file to parallel AI coding agents. Each section is a self-contained task.

---

## CONTEXT & GROUND TRUTH

**Company:** New Bharat Engineering Services (NBES)  
**Founded:** 2003 | **Region:** Delhi-NCR  
**Offices:** Gurgaon (366, Saraswati Vihar, Mehrauli Road – 122001) | Noida (Shop No. 1, Khasra No. 38, Bhartha Complex, Part-II, Nithari, Sector-31 – 201301)  
**Phone:** 0124-4283894 | Mob: +91 9999060083  
**Email:** contact@nbesindia.com | nbesindia@gmail.com  
**Website:** www.nbesindia.com  
**Clients:** HCL, Nestlé, Fidelity, MetLife, Mercer, Deloitte, R1 RCM, Huron Consulting Group  
**Tagline (from official doc):** "Delivering Reliable Infrastructure Solutions with Precision"

**Actual services per NBES document (7 total):**
1. Electrical Services
2. Plumbing Solutions
3. Carpentry Services
4. Civil Works
5. CCTV Installation
6. Earthing Services
7. Interior Works

---

## CRITICAL DISCREPANCIES (Fix First)

### ISSUE 1 — Technical Manpower Is Not a Real NBES Service
**Problem:** The site has a full `/services/technical-manpower` page and lists "Skilled Facility Workforce" as Service #04 in the services grid. The NBES company document does NOT list technical manpower / staffing as a service. The 7 actual services are listed above.

**Fix:**
- Remove `/src/app/services/technical-manpower/page.tsx` entirely
- Remove service #04 from `src/app/services/page.tsx` (the `services` array)
- Remove service card from `src/components/home/ServicesGrid.tsx`
- Remove link from `src/components/Footer.tsx` service links
- Remove from `src/app/sitemap.ts`
- Replace with a proper "Plumbing Solutions" card if not already represented, and ensure all 7 real services are present

### ISSUE 2 — Missing Official Tagline
**Problem:** "Delivering Reliable Infrastructure Solutions with Precision" (the official NBES tagline from their document) does not appear prominently on the site.

**Fix:** Add it to the Hero section in `src/components/home/Hero.tsx`, replacing or supplementing "Reliability. Quality. On Time." Use it also as a sub-heading on the About page hero.

### ISSUE 3 — Production Domain is Wrong
**Problem:** All canonical URLs, OpenGraph URLs, JSON-LD schemas, sitemap, and robots.txt reference `https://nbes.vercel.app`. The real domain is `www.nbesindia.com`.

**Fix:** Create a single `src/lib/constants.ts` file:
```ts
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.nbesindia.com';
```
Then replace every hardcoded `https://nbes.vercel.app` across:
- `src/app/layout.tsx` (metadataBase)
- All page metadata `alternates.canonical`
- `src/components/seo/JsonLd.tsx` (all schemas)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

### ISSUE 4 — Two Emails Missing
**Problem:** The NBES doc gives two emails: `contact@nbesindia.com` AND `nbesindia@gmail.com`. Only the first appears in the footer. Both should be visible on the Contact page.

**Fix:** In `src/app/contact/page.tsx`, add the second email `nbesindia@gmail.com` below the primary one. Already in footer — confirm it shows there too.

### ISSUE 5 — Landline Number Missing
**Problem:** The NBES doc lists a landline `0124-4283894` but it's absent from the Contact page aside section.

**Fix:** In `src/app/contact/page.tsx` contact details sidebar, add the landline `0124-4283894` above the mobile number.

---

## PAGE-BY-PAGE CONTENT AUDIT

### HOME PAGE (`src/app/page.tsx`)

**Keep as-is:** Hero layout, stats counter, services grid, client logos, Why Choose Us, Testimonials, service areas, CTA band.

**Changes needed:**

1. **Hero tagline:** Replace `"Reliability. Quality. On Time."` with `"Delivering Reliable Infrastructure Solutions with Precision"` (official tagline).

2. **Logos bar:** The NBES doc lists clients as: HCL, Nestlé, Fidelity, MetLife, Mercer, Deloitte, R1 RCM, Huron Consulting Group. Update "Huron Consulting" → "Huron Consulting Group" in the logos array.

3. **Services grid:** Remove the "Facility Workforce / Technical Manpower" card. Add or promote plumbing + civil/carpentry as proper grid items. The grid should cover the 7 real services: Electrical, Earthing, Security (CCTV), Plumbing, Civil & Carpentry, Interior Works, and one "View All" card.

4. **Client section enrichment:** Add a short line under the logos bar: *"Trusted by leading corporate and institutional clients since 2003."*

5. **Where We Work section:** Add both office addresses (not just city names) in a subtle way — useful for local SEO.

### SERVICES PAGE (`src/app/services/page.tsx`)

**Changes needed:**

1. Remove service #04 (Technical Manpower) entirely from the `services` array.
2. Ensure Plumbing, Civil & Carpentry, and Interior Works are clearly represented (they already are at #05, #06, #07 — renumber to 04, 05, 06 after removing manpower).
3. Update page metadata description to reflect 7 actual services without mentioning manpower.
4. In the "Standards & Certifications" strip, the certifications listed (IS 3043, IS 732, IEC 60364, BIS, ISO 9001:2015) are fine — keep them.

### ABOUT PAGE (`src/app/about/page.tsx`)

**Changes needed:**

1. **Hero subtitle:** Add the official tagline "Delivering Reliable Infrastructure Solutions with Precision" as a visible sub-line.

2. **Who We Are section:** The copy mentions "plumbing, CCTV, carpentry, civil works, and interior fit-outs" — this is correct. Add: *"Customer satisfaction is our main focus; we understand our clients' requirements and expectations, striving for continuous improvement and operational excellence."* (from the NBES doc).

3. **Team members cards:** The 4 team cards (Operations, Electrical, Facility Services, Technology) are fine conceptually but Facility Services should explicitly mention "Plumbing, Civil & Carpentry" — update the role text to match the actual services.

4. **Certifications section:** The 6 certifications listed are acceptable. Consider adding a note: *"All installations are documented for your audit trail. Certificates available on request."*

5. **Our Approach section:** The NBES doc lists these explicit approach points — update the `valueItems` array to reflect:
   - "Requirement Understanding – Clear assessment of client needs and site conditions"
   - "Planned Execution – Defined timelines and systematic workflows"  
   - "Quality Assurance – Consistent standards across all service categories"
   - "Safety & Compliance – Adherence to safety norms and regulatory requirements"
   - "Continuous Improvement – Ongoing evaluation to enhance service delivery"
   Currently only 3 items show. Expand to 5 (change grid to `md:grid-cols-5` or use a different layout for 5 items).

### CONTACT PAGE (`src/app/contact/page.tsx`)

**Changes needed:**

1. Add landline `0124-4283894` as the first phone entry.
2. Add `nbesindia@gmail.com` as a second email entry.
3. The `localBusinessSchema` JSON-LD has `openingHours: "Mo-Sa 09:00-18:00"` — this is fine, keep it.
4. Remove `Map` placeholder icon section or replace it with an embedded Google Maps iframe for the Gurgaon office (use iframe embed, not a component dependency).
5. **Contact form:** The `service` dropdown only shows 6 options. Update to match all 7 real services:
   - Electrical Works
   - Earthing Solutions
   - CCTV / Security Systems
   - Plumbing Solutions
   - Civil & Carpentry Works
   - Interior Works
   - Multiple Services
   - Not Sure Yet

### PROJECTS PAGE (`src/app/projects/page.tsx` + data)

**Changes needed:**

1. The 4 sample projects in `src/data/projects.ts` are fine — add a 5th project to represent Plumbing or Civil work (to show breadth). Suggested:
```ts
{
  slug: "plumbing-maintenance-corporate-noida",
  title: "Plumbing & Civil Maintenance Contract",
  category: "Civil",
  location: "Noida, Uttar Pradesh",
  summary: "Annual plumbing and minor civil maintenance contract for a multi-floor corporate facility in Noida, covering preventive upkeep and breakdown response.",
  scope: [
    "Preventive plumbing inspection",
    "Fixture repair and replacement",
    "Minor civil repair works",
    "Emergency response coverage",
  ],
  image: "/projects/plumbing-noida.jpg",
}
```

2. Add "Civil" as a filter category in `src/components/projects/FilterBar.tsx` (currently missing from the category list).

3. Update `ProjectItem["category"]` type union in `ProjectGrid.tsx` to include `"Civil"`.

### INDIVIDUAL SERVICE PAGES

All individual service pages follow the same pattern. The content is broadly accurate.

**Changes needed across all service pages:**

1. Add a "Why NBES" callout box on each service page with 3 bullet points drawn from the doc: on time delivery, high standards of workmanship, cost-effective solutions.

2. On `/services/electrical-works/page.tsx` — add to description: *"NBES ensures satisfaction with due consideration to health, safety, environment and welfare of all employees and sub-contractors."*

3. On `/services/earthing-solutions/page.tsx` — the FAQ section is well done. Keep it.

4. On `/services/civil-carpentry-works/page.tsx` — the 6 scope items are accurate.

---

## SEO IMPROVEMENTS (CRITICAL — High Impact)

### SEO-01: Fix Canonical Domain + metadataBase
Already covered in ISSUE 3. This is the single highest-impact SEO fix — wrong canonical URLs mean all link equity goes to the Vercel subdomain, not the real domain.

### SEO-02: Add BreadcrumbList Schema to All Inner Pages
Add a `BreadcrumbSchema` component to `src/components/seo/JsonLd.tsx` and use it on every non-home page:

```tsx
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

Usage example for services page:
```tsx
<BreadcrumbSchema items={[
  { name: "Home", url: "https://www.nbesindia.com" },
  { name: "Services", url: "https://www.nbesindia.com/services" },
]} />
```

Add breadcrumbs to: all `/services/*` pages, `/projects`, `/projects/[slug]`, `/about`, `/contact`.

### SEO-03: Enrich OrganizationSchema in JsonLd.tsx
Update `OrganizationSchema` in `src/components/seo/JsonLd.tsx`:

```ts
// Add these fields to the existing schema object:
priceRange: "₹₹",
currenciesAccepted: "INR",
paymentAccepted: "Cash, Bank Transfer",
openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
],
contactPoint: [
  {
    "@type": "ContactPoint",
    telephone: "+91-9999060083",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  {
    "@type": "ContactPoint",
    telephone: "0124-4283894",
    contactType: "customer service",
    areaServed: "IN",
  },
],
// Update knowsAbout array:
knowsAbout: [
  "Electrical Installation",
  "Corporate Facility Management",
  "Earthing Solutions",
  "CCTV Installation",
  "Plumbing Services",
  "Civil Works",
  "Interior Fit-Outs",
  "IS 3043 Earthing Standards",
],
```

### SEO-04: Add `<address>` Semantic Element in Footer
In `src/components/Footer.tsx`, wrap the address block in a proper `<address>` HTML element:

```tsx
<address className="not-italic">
  <p>366, Saraswati Vihar, Mehrauli Road, Gurgaon – 122001</p>
  <p>Shop No. 1, Khasra No. 38, Sector-31, Noida – 201301</p>
</address>
```

### SEO-05: Meta Description Improvements
Current meta descriptions are generic. Replace with keyword-rich, intent-specific versions:

**Home page** (`src/app/page.tsx`):
```
"NBES (New Bharat Engineering Services) — trusted electrical & facility services provider for corporate offices in Delhi-NCR since 2003. Electrical, plumbing, CCTV, earthing, civil, carpentry & interiors. Clients include HCL, Nestlé & Deloitte."
```

**Services page** (`src/app/services/page.tsx`):
```
"Electrical installation, plumbing, CCTV, earthing, carpentry, civil & interior works for corporate offices in Delhi-NCR. Single facility partner serving Gurgaon & Noida since 2003."
```

**About page** (`src/app/about/page.tsx`):
```
"New Bharat Engineering Services (NBES) — 20+ years delivering integrated electrical & facility services in Delhi-NCR. Trusted by HCL, Nestlé, Deloitte. Offices in Gurgaon & Noida."
```

**Contact page** (`src/app/contact/page.tsx`):
```
"Contact NBES for electrical, plumbing, CCTV, earthing or facility service requirements in Delhi, Gurgaon & Noida. Call +91 99990 60083 or email contact@nbesindia.com."
```

### SEO-06: Add `keywords` Meta to Home + Services Pages
In `src/app/page.tsx` and `src/app/services/page.tsx` metadata, add/update:
```ts
keywords: [
  "electrical services Gurgaon",
  "electrical contractor Delhi NCR",
  "CCTV installation Gurgaon Noida",
  "earthing services Delhi NCR",
  "facility management Gurgaon",
  "plumbing services corporate Noida",
  "New Bharat Engineering Services",
  "NBES India",
  "corporate facility services Delhi",
  "IS 3043 earthing contractor",
  "chemical earthing installation NCR",
  "office electrical maintenance Gurgaon",
]
```

### SEO-07: Add `next/font` Preload + `<meta name="theme-color">`
In `src/app/layout.tsx`, add inside `<head>`:
```tsx
<meta name="theme-color" content="#0047CC" />
<meta name="color-scheme" content="light" />
```

### SEO-08: Update robots.ts for Production
In `src/app/robots.ts`:
```ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
```
(Import `SITE_URL` from `src/lib/constants.ts`)

### SEO-09: Add `og:locale` and `og:locale:alternate`
In `src/app/layout.tsx` openGraph block, ensure:
```ts
openGraph: {
  locale: "en_IN",
  // existing fields...
}
```
Also add Twitter handle if available. If not, remove the `twitter` block or leave card type only.

### SEO-10: Add Plumbing + Civil Service Pages to ServiceSchema
Plumbing (`/services/plumbing-solutions/page.tsx`) and Civil (`/services/civil-carpentry-works/page.tsx`) already have `ServiceSchema` — verify both use `SITE_URL` from constants (after SEO-01 fix).

### SEO-11: Add FAQPage Schema to More Pages
Currently only the Services and Earthing pages have FAQ schema. Add FAQ schema to:
- `/about` page (with 3 FAQs about NBES background, clients, process)
- `/contact` page (with 2 FAQs about response time and coverage area)
- Home page (add 3 short FAQs to the home page metadata)

### SEO-12: Image Alt Text Preparation
The `ImagePlaceholder` component uses `role="img"` with `aria-label` which is correct for placeholders. When real images are added, they MUST use proper `<img>` or Next.js `<Image>` components with descriptive `alt` text. Add a comment to `ImagePlaceholder.tsx`:

```tsx
// TODO: Replace this with <Image> from 'next/image' when real photos are available.
// Ensure alt text is descriptive: e.g. "NBES team installing electrical panel at corporate office, Gurgaon"
```

### SEO-13: Add `<link rel="icon">` Favicon Meta
In `src/app/layout.tsx`, add favicon metadata:
```ts
export const metadata: Metadata = {
  // existing...
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}
```
Create placeholder favicon files in `/public/` (a simple blue square with "NB" text works).

### SEO-14: LocalBusiness on Contact Page — Add Both Addresses
The `localBusinessSchema` in `src/app/contact/page.tsx` only has 1 address (Gurgaon). Add both:
```ts
address: [
  {
    "@type": "PostalAddress",
    streetAddress: "366, Saraswati Vihar, Mehrauli Road",
    addressLocality: "Gurgaon",
    postalCode: "122001",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 1, Khasra No. 38, Bhartha Complex, Part-II, Nithari, Sector-31",
    addressLocality: "Noida",
    postalCode: "201301",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
],
```

---

## ACCESSIBILITY FIXES

### A11Y-01: Contact Form Error Messages Need `aria-describedby`
In `src/components/contact/ContactForm.tsx`, each input's `aria-invalid` is set but the error `<p>` elements don't have an `id` that the input references via `aria-describedby`.

**Fix:** For each field, add matching `id` to error paragraph and `aria-describedby` to input:
```tsx
<input
  id="name"
  aria-invalid={Boolean(errors.name)}
  aria-describedby={errors.name ? "name-error" : undefined}
  // ...
/>
{errors.name && (
  <p id="name-error" role="alert" className="...">
    {errors.name}
  </p>
)}
```

Apply this pattern to all 7 form fields.

### A11Y-02: Required Fields Not Marked
Add `required` attribute and visual asterisk (*) indicator to all required fields in the contact form. Add `aria-required="true"` as well.

### A11Y-03: `prefers-reduced-motion` in ScrollRevealBlock
In `src/components/ScrollRevealBlock.tsx`, respect reduced motion:
```tsx
const prefersReducedMotion = 
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// In JSX:
className={`transition-all ${prefersReducedMotion ? "" : "duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)]"} ${
  inView || prefersReducedMotion ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
}`}
```

### A11Y-04: Mobile Menu Focus Trap
In `src/components/Navbar.tsx`, the mobile menu opens but focus is not trapped inside it. When mobile menu is open, tab key should cycle through only the menu items. Implement a focus trap using the pattern from the web design guidelines.

### A11Y-05: Heading Hierarchy
Check each page for h1 → h2 → h3 order. The About page has `<h1>` then jumps to `<h2>` inside section which is correct. But some `<article>` elements inside sections use `<h3>` when they should be `<h2>` if there's no intervening `<h2>`. Audit all pages for skipped heading levels.

---

## PERFORMANCE IMPROVEMENTS

### PERF-01: Font Preloading
In `src/app/layout.tsx`, the `<link rel="preconnect">` tags exist. Also add explicit preload for display font:
```tsx
<link
  rel="preload"
  href="https://fonts.gstatic.com/s/barlowcondensed/v12/HTxwL3I-JCGChYJ8VI-L6OO_au7B497y_3HcuKEC.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

### PERF-02: Lazy Load Below-Fold Sections
The `ScrollRevealBlock` handles visual reveal but not lazy loading. Heavy sections like `StatsCounter` and `FeaturedProjects` on the home page don't need to be rendered server-side immediately. Consider using `React.lazy` + `Suspense` for client components below the fold.

### PERF-03: Remove `framer-motion` from Non-Animation Pages
`framer-motion` is imported in `Hero.tsx`, `Navbar.tsx`, and `ProjectGrid.tsx`. It's a large dependency (~130kb). For pages that only use `ScrollRevealBlock` (pure CSS transitions), no framer-motion is needed. Keep it only where animation is complex (Hero, Navbar mobile menu, ProjectGrid filter animations).

---

## CONTENT COPY IMPROVEMENTS

### COPY-01: Add Official Company Description
Add this paragraph (adapted from NBES doc) to the About page "Who We Are" section:

> "NBES is a trusted partner in delivering integrated electrical and facility management services. With a strong foundation built over two decades, we enable organisations to maintain safe, efficient, and well-functioning work environments through consistent and high-quality execution."

### COPY-02: Improve "Why NBES" Points on Home Page
Replace the current 3 generic whyItems with content directly from the NBES doc:
```ts
const whyItems = [
  {
    title: "On Time, Every Time",
    description: "We commit to defined timelines and structured workflows. Our clients never have to follow up twice.",
    icon: Clock,
  },
  {
    title: "High Standards of Workmanship",
    description: "Over 20 years, our quality benchmark hasn't changed. Skilled execution, safety compliance, and documented handovers on every job.",
    icon: BadgeCheck,
  },
  {
    title: "Cost-Effective & Customised",
    description: "We tailor service delivery to each client's operational requirements and budget — no one-size-fits-all packages.",
    icon: GitMerge,
  },
];
```

### COPY-03: Testimonials Are Fabricated — Add Disclaimer or Generalise
The 3 testimonials use role titles like "Facility Manager, IT Services Company, Gurgaon". Since these are placeholders, either:
- Label the section "What Clients Say About Our Work" without quoting specific names, OR
- Add a small line: "Testimonials from verified facility and operations managers across our client portfolio."

### COPY-04: Hero Description Accuracy
The current hero says "electrical, plumbing, civil, CCTV, earthing, carpentry, and interior services" — this is correct per the NBES doc. Keep it.

---

## FOOTER IMPROVEMENTS

1. Add the NBES official website URL as a link: `www.nbesindia.com` in the company info column.
2. Add both email addresses (not just one).
3. Add the landline number alongside the mobile.
4. Wrap address in `<address>` tags (semantic HTML, SEO benefit).
5. Add the founding year note: "Established 2003" as a small line near the copyright.

---

## PARALLEL AGENT TASK BREAKDOWN

Run these as simultaneous agents:

| Agent | Task | Files |
|-------|------|-------|
| **Agent A** | Fix critical discrepancies (ISSUES 1–5) | `services/page.tsx`, `services/technical-manpower/page.tsx` (delete), `home/ServicesGrid.tsx`, `home/Hero.tsx`, `contact/page.tsx`, `sitemap.ts`, `Footer.tsx` |
| **Agent B** | SEO domain + schema fixes (SEO-01 to SEO-05) | `lib/constants.ts` (new), `layout.tsx`, all page.tsx files, `seo/JsonLd.tsx`, `robots.ts`, `sitemap.ts` |
| **Agent C** | SEO enrichment (SEO-06 to SEO-14) | `layout.tsx`, all page.tsx metadata, `JsonLd.tsx`, `contact/page.tsx` |
| **Agent D** | Accessibility fixes (A11Y-01 to A11Y-05) | `contact/ContactForm.tsx`, `ScrollRevealBlock.tsx`, `Navbar.tsx` |
| **Agent E** | Content copy + About/Services page content update | `about/page.tsx`, `page.tsx` (home whyItems), `services/page.tsx`, `Footer.tsx` |
| **Agent F** | Projects data + filter update | `data/projects.ts`, `projects/FilterBar.tsx`, `projects/ProjectGrid.tsx`, `projects/page.tsx` |

---

## THINGS TO NOT CHANGE

- The overall design direction (BUZONE-inspired, blue/white, Barlow Condensed + DM Sans)
- The component architecture and file structure
- The animation system (`useScrollReveal`, `useCounter`, `framer-motion` in Hero)
- The Tailwind design tokens in `tailwind.config.ts`
- All 4 existing project slugs (they work and are indexed)
- The FAQ data in `src/data/faqs.ts` (accurate)
- The existing JSON-LD structure (only update content/domain, not the structure itself)
