# NBES — SEO & Site Completion Task Board
> **Project:** New Bharat Engineer Services (NBES) — Next.js 14 / TypeScript / Tailwind  
> **Live URL:** https://nbes.vercel.app  
> **Repo:** https://github.com/aman-singh27/NBES  
> **Goal:** Make this site fully SEO-optimised and production-complete.  
> **Agent Instructions:** Each section below is an independent workstream. Run them in parallel. Do NOT block on each other unless a dependency is explicitly noted.

---

## 🔴 AGENT 1 — Meta, Title Tags & Page-Level SEO

### Context
Every page currently has weak or missing `<title>` and `<meta description>` tags. The homepage title is literally `"NBES"` — zero keywords. Google uses these as the primary signals for ranking and CTR in search results. The full company name is **New Bharat Engineer Services**.

### Tasks

#### 1.1 — Fix `layout.tsx` Root Metadata
In `src/app/layout.tsx`, replace the existing metadata export with a full base metadata object:

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://nbes.vercel.app'),
  title: {
    default: 'New Bharat Engineer Services | Industrial Electrical, Earthing & Security Solutions India',
    template: '%s | NBES — New Bharat Engineer Services',
  },
  description:
    'NBES delivers certified electrical works, IS 3043 earthing systems, CCTV & access control security, and ITI-certified technical manpower for industrial, commercial, and government projects across India.',
  keywords: [
    'electrical contractor India',
    'industrial earthing solutions',
    'IS 3043 chemical earthing',
    'HT LT panel installation',
    'technical manpower India',
    'CCTV security installation',
    'electrical works Maharashtra',
    'New Bharat Engineer Services',
    'NBES',
  ],
  authors: [{ name: 'New Bharat Engineer Services' }],
  creator: 'NBES',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nbes.vercel.app',
    siteName: 'New Bharat Engineer Services',
    title: 'New Bharat Engineer Services | Electrical, Earthing & Security Solutions India',
    description:
      'Certified electrical works, IS 3043 earthing, integrated security systems, and technical manpower for industrial and commercial projects across India.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'NBES — New Bharat Engineer Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Bharat Engineer Services | Electrical & Earthing Solutions India',
    description: 'Industrial electrical works, IS 3043 earthing, CCTV security, and certified manpower across India.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};
```

#### 1.2 — Per-Page Metadata
Add a `generateMetadata` or static `metadata` export to each page file:

**`src/app/page.tsx` (Homepage)**
```ts
export const metadata: Metadata = {
  title: 'Industrial Electrical Works, Earthing & Security Solutions India',
  description:
    'New Bharat Engineer Services (NBES) delivers HT/LT panel installation, IS 3043 earthing, CCTV security, and certified electrical manpower for factories, commercial buildings, and government projects across India.',
};
```

**`src/app/services/page.tsx`**
```ts
export const metadata: Metadata = {
  title: 'Electrical, Earthing, Security & Manpower Services',
  description:
    'NBES offers industrial electrical installation, IS 3043-compliant earthing, integrated CCTV & access control, and ITI-certified technical manpower. Serving Maharashtra, Telangana, Gujarat and pan-India.',
};
```

**`src/app/projects/page.tsx`**
```ts
export const metadata: Metadata = {
  title: 'Completed Projects — Industrial & Commercial Electrical Works',
  description:
    'View NBES project portfolio: steel plant earthing, HT panel installation, corporate security systems, and municipal substation upgrades across India.',
};
```

**`src/app/about/page.tsx`**
```ts
export const metadata: Metadata = {
  title: 'About Us — New Bharat Engineer Services',
  description:
    'NBES is a certified electrical and technical services company serving industrial, commercial, and government clients across India with IS, IEC, and BIS-compliant execution.',
};
```

**`src/app/contact/page.tsx`**
```ts
export const metadata: Metadata = {
  title: 'Contact NBES — Get a Quote for Electrical & Earthing Works',
  description:
    'Contact New Bharat Engineer Services for a project quote. We respond within 24 hours for electrical works, earthing systems, security installation, and manpower supply.',
};
```

#### 1.3 — Fix Homepage H1
In the homepage component, the current `<h1>` reads "POWER. SAFETY. RELIABILITY." — this is not crawlable as a keyword signal. Change it to visually keep the tagline but wrap a semantic heading around the actual value prop. Use a visually hidden H1 if needed:

```tsx
// Option A — Replace H1 content entirely (preferred)
<h1>Industrial Electrical Works & Earthing Solutions — New Bharat Engineer Services</h1>
<p className="hero-tagline">POWER. SAFETY. RELIABILITY.</p>

// Option B — Visually hidden H1 (if design must not change)
<h1 className="sr-only">New Bharat Engineer Services — Industrial Electrical, Earthing & Security Solutions India</h1>
```

---

## 🔴 AGENT 2 — Sitemap, Robots.txt & Crawlability

### Context
There is no `sitemap.xml` or `robots.txt` in the project. Without a sitemap, Google's crawler has to discover pages on its own — it may miss pages or take much longer to index them. `robots.txt` tells crawlers what to index.

### Tasks

#### 2.1 — Create `src/app/sitemap.ts`
```ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nbes.vercel.app';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/electrical-works`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/earthing-solutions`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/security-systems`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/technical-manpower`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  ];
}
```
> **Note:** Add individual project slug URLs here once project detail pages are created (Agent 5).

#### 2.2 — Create `src/app/robots.ts`
```ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://nbes.vercel.app/sitemap.xml',
  };
}
```

#### 2.3 — Create OG Image
Create `/public/og-image.jpg` — a 1200×630px branded image for social sharing previews (used in Agent 1's metadata). Can be a simple branded card with the NBES logo and tagline. If no design asset is available, generate a placeholder with the text "New Bharat Engineer Services" on a dark background.

---

## 🔴 AGENT 3 — Structured Data / JSON-LD Schema

### Context
Structured data tells Google exactly what this business is, what it offers, and where it operates. For a B2B services company, `LocalBusiness`, `Service`, and `FAQPage` schemas are the highest-value additions. These can unlock rich results (FAQ dropdowns, business info panels) in search.

### Tasks

#### 3.1 — Create `src/components/seo/JsonLd.tsx`
```tsx
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ElectricalContractor'],
    name: 'New Bharat Engineer Services',
    alternateName: 'NBES',
    url: 'https://nbes.vercel.app',
    logo: 'https://nbes.vercel.app/logo.png',
    image: 'https://nbes.vercel.app/og-image.jpg',
    description:
      'NBES provides certified industrial electrical works, IS 3043-compliant earthing systems, integrated security infrastructure, and ITI-certified technical manpower across India.',
    telephone: '+91-XXXXXXXXXX', // Replace with real number
    email: 'info@nbes.in',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Maharashtra', // Update with actual state
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'State', name: 'Maharashtra' },
      { '@type': 'State', name: 'Telangana' },
      { '@type': 'State', name: 'Gujarat' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical & Technical Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industrial Electrical Works', url: 'https://nbes.vercel.app/services/electrical-works' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IS 3043 Earthing Solutions', url: 'https://nbes.vercel.app/services/earthing-solutions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Security Systems Installation', url: 'https://nbes.vercel.app/services/security-systems' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Certified Technical Manpower', url: 'https://nbes.vercel.app/services/technical-manpower' } },
      ],
    },
    sameAs: [], // Add LinkedIn, IndiaMART, JustDial etc. when available
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ServiceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: { '@type': 'Organization', name: 'New Bharat Engineer Services', url: 'https://nbes.vercel.app' },
    areaServed: { '@type': 'Country', name: 'India' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
```

#### 3.2 — Inject into Pages
- Add `<OrganizationSchema />` to `src/app/layout.tsx` (renders on all pages)
- Add `<FAQSchema faqs={...} />` to `src/app/services/page.tsx` using the existing FAQ content
- Add `<ServiceSchema />` to each individual service page (created in Agent 4)

---

## 🔴 AGENT 4 — Individual Service Pages (Critical for SEO)

### Context
Currently all 4 services live on one URL: `/services`. This means:
- Google cannot rank individual services for specific queries
- You cannot target "IS 3043 earthing contractor India" with a dedicated page
- Internal linking has no depth

Each service must have its own URL, its own `<h1>`, its own meta description, and its own content.

### Tasks

#### 4.1 — Create Route Structure
```
src/app/services/
  page.tsx                    ← Keep as overview/hub (already exists)
  electrical-works/
    page.tsx
  earthing-solutions/
    page.tsx
  security-systems/
    page.tsx
  technical-manpower/
    page.tsx
```

#### 4.2 — Earthing Solutions Page (`/services/earthing-solutions`)
This is the highest-value SEO page — "IS 3043 earthing" is a low-competition, high-intent search.

```tsx
export const metadata: Metadata = {
  title: 'IS 3043 Earthing Solutions — Chemical & Conventional Earthing India',
  description:
    'NBES provides IS 3043-compliant chemical earthing, conventional plate/pipe earthing, and lightning protection for industrial plants, data centers, and telecom towers across India. Full soil testing and documentation.',
};
```

Page content must include:
- `<h1>`: "IS 3043 Earthing Solutions — Industrial & Commercial Earthing India"
- Dedicated section explaining what IS 3043 compliance means (keyword-rich prose)
- Types of earthing: chemical earthing, conventional, lightning protection — each as `<h2>`
- Who needs it: industrial plants, data centers, telecom towers, government buildings
- Process section: Soil Resistivity Testing → System Design → Installation → Testing & Reports
- FAQ section using `<FAQSchema />` with questions like:
  - "What is IS 3043 earthing?"
  - "What is the difference between chemical and conventional earthing?"
  - "How often should earthing systems be tested?"

#### 4.3 — Electrical Works Page (`/services/electrical-works`)
```tsx
export const metadata: Metadata = {
  title: 'Industrial Electrical Works — HT/LT Panel, Cable Laying & Transformer Installation India',
  description:
    'NBES handles complete industrial and commercial electrical installation: HT/LT panels, cable laying, transformer works, switchgear, load testing and power factor correction across India.',
};
```

#### 4.4 — Security Systems Page (`/services/security-systems`)
```tsx
export const metadata: Metadata = {
  title: 'Industrial CCTV, Access Control & Fire Alarm Installation India',
  description:
    'NBES designs and installs CCTV surveillance, biometric access control, fire detection systems, and perimeter security for factories, corporate offices, and warehouses across India.',
};
```

#### 4.5 — Technical Manpower Page (`/services/technical-manpower`)
```tsx
export const metadata: Metadata = {
  title: 'Certified Electrical Manpower Supply — ITI Electricians & Supervisors India',
  description:
    'NBES supplies ITI and diploma-certified electricians, site supervisors, and engineers for short and long-term contracts. Insured workforce, Contract Labour Act compliant, rapid mobilization in 5–7 days.',
};
```

#### 4.6 — Update Services Hub Page
On `/services/page.tsx`, each service card must link to its individual page, not an anchor (`#electrical`). Update hrefs:
- `href="/services/electrical-works"`
- `href="/services/earthing-solutions"`
- `href="/services/security-systems"`
- `href="/services/technical-manpower"`

---

## 🟡 AGENT 5 — Project Detail Pages

### Context
Currently `/projects` shows cards with no individual URLs. Each project should have its own page for SEO value. Project pages rank well for location + service queries like "steel plant earthing contractor Nagpur".

### Tasks

#### 5.1 — Create Data File
Create `src/data/projects.ts`:
```ts
export const projects = [
  {
    slug: 'steel-plant-earthing-nagpur',
    title: 'Steel Plant Earthing & HT Panel Installation',
    category: 'Earthing',
    location: 'Nagpur, Maharashtra',
    summary: 'IS 3043-compliant chemical earthing and HT panel installation for a steel manufacturing facility in Nagpur.',
    scope: ['Soil resistivity testing', 'Chemical earthing system design', 'HT panel installation', 'Earth continuity testing and documentation'],
    image: '/projects/steel-plant.jpg',
  },
  {
    slug: 'corporate-office-security-hyderabad',
    title: 'Corporate Office Security System',
    category: 'Security',
    location: 'Hyderabad, Telangana',
    summary: 'Integrated CCTV, biometric access control, and fire alarm installation for a corporate campus in Hyderabad.',
    scope: ['CCTV system design and installation', 'Biometric access control', 'Fire alarm integration', 'Video management software setup'],
    image: '/projects/corporate-security.jpg',
  },
  {
    slug: 'municipal-substation-pune',
    title: 'Municipal Substation Upgrade',
    category: 'Electrical',
    location: 'Pune, Maharashtra',
    summary: 'Complete substation electrical upgrade including LT panels, cable laying, and load testing for a municipal facility in Pune.',
    scope: ['LT panel replacement', 'Cable laying and termination', 'Switchgear upgrade', 'Load testing and documentation'],
    image: '/projects/substation.jpg',
  },
];
```

#### 5.2 — Create Dynamic Route
```
src/app/projects/[slug]/page.tsx
```

Implement `generateStaticParams` and `generateMetadata`:
```ts
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: `${project.title} — ${project.location}`,
    description: project.summary,
  };
}
```

Each project page should include:
- `<h1>` with project title
- Location, category badge
- Scope of work as a list
- A `ProjectSchema` JSON-LD (use `Service` type with location)
- CTA linking to `/contact`

#### 5.3 — Update Sitemap
After creating pages, go back to Agent 2's `sitemap.ts` and add:
```ts
...projects.map((p) => ({
  url: `${baseUrl}/projects/${p.slug}`,
  lastModified,
  changeFrequency: 'yearly' as const,
  priority: 0.6,
})),
```
> ⚠️ **Dependency:** Agent 5.3 depends on Agent 2 completing the sitemap file first.

---

## 🟡 AGENT 6 — On-Page Content & Keyword Enrichment

### Context
The current homepage content is well-structured but not keyword-dense enough. Google needs to see the actual search terms people use, written naturally in the body copy.

### Tasks

#### 6.1 — Homepage Hero Section
Update the subheading/body text below the H1 to be keyword-rich:
```
NBES — New Bharat Engineer Services — delivers IS 3043-certified earthing systems, 
industrial HT/LT electrical installation, integrated CCTV and access control security, 
and ITI-certified technical manpower for factories, commercial buildings, and 
government projects across India.
```

#### 6.2 — Homepage Stats — Replace "0" Values
All counters showing `0+` must be replaced with real values before launch. If real values aren't confirmed yet, use conservative minimums. Example placeholders:
- Years: `8+`
- Projects: `150+`
- States: `6`
- Technicians: `50+`

> ⚠️ **Content Note:** Coordinate with the client to confirm actual numbers. Do NOT hardcode fabricated values.

#### 6.3 — Add a "Service Areas" Section to Homepage
Add a new section before the footer listing the states/cities NBES operates in. This directly helps for location-based search queries:

```tsx
<section>
  <h2>Where We Work</h2>
  <p>
    New Bharat Engineer Services executes projects across India, with active presence in 
    Maharashtra (Nagpur, Pune, Mumbai), Telangana (Hyderabad), Gujarat, and other 
    industrial corridors. We mobilise teams pan-India for project requirements.
  </p>
  {/* Render as a tag/badge list of states/cities */}
</section>
```

#### 6.4 — Add Alt Text to All Images
Every `<Image />` component must have a descriptive `alt` attribute — not empty, not "image":
- Hero image: `alt="Industrial electrical panel installation by NBES team"`
- Service images: `alt="IS 3043 chemical earthing installation — NBES"`, etc.
- Project images: `alt="[Project title] — [Location]"`

---

## 🟡 AGENT 7 — Site Completion (Missing Pages & Broken Elements)

### Context
Several parts of the site are incomplete or broken. These need to be fixed for the site to feel production-ready.

### Tasks

#### 7.1 — Fix Privacy Policy & Terms Pages
Currently both links in the footer point to `/` (homepage). Create:

`src/app/privacy/page.tsx` — Basic privacy policy covering:
- What data is collected (contact form submissions)
- How it's used (to respond to inquiries)
- No third-party data selling
- Contact email for data requests

`src/app/terms/page.tsx` — Basic terms of use.

Update footer links accordingly.

#### 7.2 — Add `canonical` Tag
In `layout.tsx` metadata, add:
```ts
alternates: {
  canonical: 'https://nbes.vercel.app',
},
```
Each page should also define its own canonical URL in its metadata.

#### 7.3 — Fix Navigation Logo Text
The logo in the navbar currently renders as "NNBES" (double N visible in the live site). Fix the text/component to render "NBES" correctly.

#### 7.4 — Add 404 Page
Create `src/app/not-found.tsx` with a proper branded 404 page linking back to Home and Services.

#### 7.5 — Add Loading State
Create `src/app/loading.tsx` with a minimal branded loading skeleton.

#### 7.6 — Replace Placeholder Contact Info
The phone `+91 00000 00000` and WhatsApp link `wa.me/910000000000` appear in the header, footer, and CTAs. These are placeholders — update them site-wide once the real number is confirmed. Search for `00000` across the codebase to find all instances.

---

## 🟢 AGENT 8 — Performance & Core Web Vitals (SEO Signal)

### Context
Google uses Core Web Vitals (LCP, CLS, FID) as a ranking signal. A fast, stable site ranks better.

### Tasks

#### 8.1 — Audit `next.config.mjs`
Ensure these are set:
```js
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  compress: true,
};
```

#### 8.2 — Ensure All Images Use `next/image`
All `<img>` tags must be replaced with Next.js `<Image />` component for automatic optimization, lazy loading, and correct sizing.

#### 8.3 — Add `priority` to Hero Image
The hero image is above the fold (LCP element). Add `priority` prop:
```tsx
<Image src="/hero.jpg" alt="..." priority />
```

#### 8.4 — Preconnect to External Domains
In `layout.tsx` `<head>`, add preconnect hints for any external domains used (fonts, analytics, etc.):
```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
```

---

## ✅ Final Checklist Before Launch

> Run through this after all agents complete their tasks.

- [ ] All page titles contain primary keywords
- [ ] All pages have unique meta descriptions (150–160 chars)
- [ ] `sitemap.xml` accessible at `/sitemap.xml`
- [ ] `robots.txt` accessible at `/robots.txt`
- [ ] JSON-LD Organisation schema on every page
- [ ] FAQ schema on Services page
- [ ] Service schema on each individual service page
- [ ] Each service has its own URL
- [ ] Each project has its own URL
- [ ] All images have descriptive `alt` text
- [ ] No "0+" stat counters visible — replaced with real values
- [ ] Real phone number and address in place
- [ ] Privacy Policy and Terms pages exist and link correctly
- [ ] OG image (`/public/og-image.jpg`) exists (1200×630px)
- [ ] Logo renders as "NBES" not "NNBES"
- [ ] 404 page exists
- [ ] Hero image has `priority` prop
- [ ] Canonical URLs set on all pages
- [ ] Submit sitemap to Google Search Console after deployment

---

*Generated for NBES project. All agent tasks are independent unless a dependency note is present.*
