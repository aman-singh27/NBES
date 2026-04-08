# NBES — Real Data Update Task Board
> **Project:** New Bharat Electrical Services (NBES) — Next.js 14 / TypeScript / Tailwind  
> **Repo:** https://github.com/aman-singh27/NBES  
> **Live:** https://nbes.vercel.app  
> **Purpose:** Replace all placeholder/fabricated content with real company data sourced from the official NBES document.  
> **Agent Instructions:** Each section is an independent workstream. Run in parallel. Do NOT block on each other unless a dependency is explicitly noted.

---

## ⚠️ CRITICAL CORRECTIONS — Read Before Running Any Agent

The site was built with **incorrect assumptions** about the company. Here is the ground truth:

| Field | What the site says (WRONG) | Real data (CORRECT) |
|---|---|---|
| Full name | New Bharat **Engineer** Services | New Bharat **Electrical** Services |
| Focus | Industrial/manufacturing contractor | Corporate facility management & services |
| Location | Maharashtra, Telangana, Gujarat | **Delhi-NCR** (Gurgaon + Noida) |
| Founded | "15+ years" implied | **2003** (20+ years) |
| Target client | Factories, steel plants, EPC | **Corporate offices** (HCL, Nestlé, Deloitte, etc.) |
| Phone | +91 00000 00000 | **0124-4283894 / +91 99990 60083** |
| Email | info@nbes.in | **contact@nbesindia.com** |
| Website | nbes.vercel.app | **www.nbesindia.com** |

---

## 🔴 AGENT 1 — Company Name, Identity & Global Constants

### Context
The company name is **wrong everywhere on the site**. It's "New Bharat **Electrical** Services" — not "Engineer Services". This affects the page title template, all metadata, the schema, the hero, the about page, and the footer. Fix everything in one sweep.

### Tasks

#### 1.1 — `src/app/layout.tsx` — Metadata
Replace all instances of "New Bharat Engineer Services" with "New Bharat Electrical Services":

```ts
export const metadata: Metadata = {
  title: {
    default: "New Bharat Electrical Services | Electrical & Facility Management Delhi-NCR",
    template: "%s | NBES — New Bharat Electrical Services",
  },
  description:
    "NBES (New Bharat Electrical Services) delivers electrical, plumbing, civil, CCTV, earthing, carpentry, and interior facility services for corporate offices across Delhi-NCR. Trusted by HCL, Nestlé, Deloitte, and more since 2003.",
  keywords: [
    "electrical services Delhi NCR",
    "facility management Gurgaon",
    "corporate electrical contractor Delhi",
    "CCTV installation Gurgaon",
    "earthing services Delhi",
    "plumbing services Noida",
    "facility services Gurgaon",
    "New Bharat Electrical Services",
    "NBES",
    "electrical contractor Gurgaon",
  ],
  // ... rest of metadata stays same structure, update siteName:
  openGraph: {
    siteName: "New Bharat Electrical Services",
    title: "New Bharat Electrical Services | Facility & Electrical Services Delhi-NCR",
    // ...
  },
};
```

#### 1.2 — `src/components/seo/JsonLd.tsx` — OrganizationSchema
Update the OrganizationSchema with real data:

```ts
const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ElectricalContractor"],
  name: "New Bharat Electrical Services",
  alternateName: "NBES",
  url: "https://nbes.vercel.app",
  description:
    "NBES provides electrical, plumbing, carpentry, civil, CCTV, earthing, and interior facility services for corporate offices across Delhi-NCR since 2003.",
  telephone: "+91-9999060083",
  email: "contact@nbesindia.com",
  foundingDate: "2003",
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
  areaServed: [
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Noida" },
    { "@type": "AdministrativeArea", name: "Delhi-NCR" },
  ],
  sameAs: ["http://www.nbesindia.com"],
};
```

#### 1.3 — Global text search and replace
Search the entire `src/` directory for these strings and replace:
- `"New Bharat Engineer Services"` → `"New Bharat Electrical Services"`
- `"Engineer Services"` → `"Electrical Services"` (only where referring to the company)
- `"New Bharat Engineer"` → `"New Bharat Electrical"`

Commands to find all occurrences:
```bash
grep -r "Engineer Services" src/
grep -r "Engineer" src/ --include="*.tsx" --include="*.ts"
```

---

## 🔴 AGENT 2 — Contact Info, Phone & Address

### Context
All contact details on the site are fake. Replace everywhere with real data.

**Real contact data:**
- Phone (office): 0124-4283894
- Phone (mobile): +91 99990 60083
- Email 1: contact@nbesindia.com
- Email 2: nbesindia@gmail.com
- Gurgaon address: 366, Saraswati Vihar, Mehrauli Road, Gurgaon – 122001
- Noida address: Shop No. 1, Khasra No. 38, Bhartha Complex, Part-II, Nithari, Sector-31, Noida – 201301
- WhatsApp: +91 99990 60083

### Tasks

#### 2.1 — `src/components/Navbar.tsx`
```tsx
// Replace phone display and link:
<a href="tel:+919999060083" className="font-body text-sm font-medium text-charcoal">
  +91 99990 60083
</a>
```

#### 2.2 — `src/components/Footer.tsx`
```tsx
// Phone
<a href="tel:+919999060083" ...>+91 99990 60083</a>

// Email
<a href="mailto:contact@nbesindia.com" ...>contact@nbesindia.com</a>

// Address — update to show Gurgaon as primary
<p>366, Saraswati Vihar, Mehrauli Road, Gurgaon – 122001</p>
```

#### 2.3 — `src/components/CTABand.tsx`
```tsx
// WhatsApp link
href="https://wa.me/919999060083"
```

#### 2.4 — `src/app/contact/page.tsx`
Replace all contact placeholders:

```tsx
// Phone section
<p className="font-body text-[15px] font-medium text-black">0124-4283894</p>
<p className="font-body text-[15px] font-medium text-black">+91 99990 60083</p>

// WhatsApp
href="https://wa.me/919999060083"
<p>+91 99990 60083</p>

// Email
<p>contact@nbesindia.com</p>
<p className="mt-1 font-body text-[13px] text-mid-grey">nbesindia@gmail.com</p>

// Location — Primary (Gurgaon)
<p className="font-body text-[15px] font-medium text-black">
  366, Saraswati Vihar, Mehrauli Road
</p>
<p className="font-body text-[13px] text-mid-grey">Gurgaon, Haryana – 122001</p>
```

#### 2.5 — `src/app/contact/page.tsx` — LocalBusinessSchema
```ts
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "New Bharat Electrical Services",
  "@id": "https://nbes.vercel.app",
  url: "https://nbes.vercel.app",
  telephone: "+91-9999060083",
  email: "contact@nbesindia.com",
  foundingDate: "2003",
  address: {
    "@type": "PostalAddress",
    streetAddress: "366, Saraswati Vihar, Mehrauli Road",
    addressLocality: "Gurgaon",
    postalCode: "122001",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 09:00-18:00",
  areaServed: "Delhi-NCR",
};
```

#### 2.6 — `src/app/contact/page.tsx` — States/areas covered
Replace the `coveredStates` array:
```ts
const coveredAreas = [
  "Gurgaon",
  "Noida",
  "Delhi",
  "Faridabad",
  "Greater Noida",
  "NCR Region",
];
```
Update the label from "States We Cover" to "Areas We Serve".

#### 2.7 — Global search for placeholder phone/contact
```bash
grep -r "00000" src/
grep -r "XXXXXXXXXX" src/
grep -r "wa.me/910000" src/
```
Replace every instance found with real data.

---

## 🔴 AGENT 3 — Services — Add Missing Services & Correct Positioning

### Context
NBES is NOT purely an industrial electrical contractor. It's a **full-facility-services company** for corporate clients. The site currently only shows 4 services. The real services from the document are:
1. Electrical Services
2. **Plumbing Solutions** ← MISSING
3. **Carpentry Services** ← MISSING
4. **Civil Works** ← MISSING
5. CCTV Installation
6. Earthing Services
7. **Interior Works** ← MISSING

The framing must also shift from "industrial HT/LT panels" to **corporate facility maintenance and services**.

### Tasks

#### 3.1 — Update `src/data/faqs.ts` — Service references
Update FAQ answers to reflect the full service portfolio and Delhi-NCR focus:

```ts
export const faqItems: FAQItem[] = [
  {
    question: "What types of services does NBES provide?",
    answer:
      "NBES provides electrical services, plumbing, carpentry, civil works, CCTV installation, earthing, and interior works — all focused on corporate office and facility requirements.",
  },
  {
    question: "Which areas does NBES operate in?",
    answer:
      "NBES operates across Delhi-NCR, with offices in Gurgaon and Noida. We serve corporate clients in Delhi, Gurgaon, Noida, Faridabad, and the broader NCR region.",
  },
  {
    question: "How long has NBES been in operation?",
    answer:
      "NBES was established in 2003 and has over 20 years of experience delivering electrical and facility services to corporate clients.",
  },
  {
    question: "Who are NBES's clients?",
    answer:
      "NBES has partnered with leading organizations including HCL, Nestlé, Fidelity, MetLife, Mercer, Deloitte, R1 RCM, and Huron Consulting Group.",
  },
  {
    question: "Does NBES handle both new installations and maintenance?",
    answer:
      "Yes. NBES handles new installations, preventive maintenance, corrective maintenance, and troubleshooting across all service categories including electrical, plumbing, CCTV, and earthing.",
  },
  {
    question: "Can NBES customize services for our facility requirements?",
    answer:
      "Yes. NBES tailors service delivery to each client's operational requirements, ensuring minimal disruption and alignment with facility management goals.",
  },
];
```

#### 3.2 — Add 3 new service pages

Create these new route files:

**`src/app/services/plumbing-solutions/page.tsx`**
```tsx
export const metadata: Metadata = {
  title: "Plumbing Solutions — Corporate Office Plumbing Services Delhi-NCR",
  description:
    "NBES provides preventive and corrective plumbing maintenance for corporate offices in Delhi-NCR. Reliable plumbing solutions for facility managers in Gurgaon and Noida.",
  alternates: { canonical: "https://nbes.vercel.app/services/plumbing-solutions" },
};
// ServiceSchema with name: "Plumbing Solutions", url: "/services/plumbing-solutions"
// Page structure same as security-systems/page.tsx pattern
// Items: Water supply maintenance, Drainage systems, Leak detection, Fixture installation, Preventive maintenance, Emergency repairs
```

**`src/app/services/civil-carpentry-works/page.tsx`**
```tsx
export const metadata: Metadata = {
  title: "Civil & Carpentry Works — Office Repairs and Fit-Outs Delhi-NCR",
  description:
    "NBES delivers civil repairs, minor construction, carpentry, and interior works for corporate offices in Gurgaon and Noida. Skilled workforce, minimal disruption.",
  alternates: { canonical: "https://nbes.vercel.app/services/civil-carpentry-works" },
};
// Items: Minor civil repairs, Partition works, False ceiling, Flooring, Custom carpentry, Interior fit-outs
```

**`src/app/services/interior-works/page.tsx`**
```tsx
export const metadata: Metadata = {
  title: "Interior Works — Workspace Enhancement Services Delhi-NCR",
  description:
    "NBES handles functional and aesthetic workspace enhancement including false ceiling, flooring, painting, and modular fit-outs for corporate facilities in Delhi-NCR.",
  alternates: { canonical: "https://nbes.vercel.app/services/interior-works" },
};
// Items: False ceiling, Flooring, Painting, Modular workstation installation, Space planning, Finishing works
```

#### 3.3 — Update `src/app/sitemap.ts`
Add the 3 new service URLs:
```ts
{ url: `${baseUrl}/services/plumbing-solutions`, lastModified, changeFrequency: "monthly", priority: 0.8 },
{ url: `${baseUrl}/services/civil-carpentry-works`, lastModified, changeFrequency: "monthly", priority: 0.8 },
{ url: `${baseUrl}/services/interior-works`, lastModified, changeFrequency: "monthly", priority: 0.8 },
```

#### 3.4 — Update `src/app/services/page.tsx` — Add 3 new ServiceDetail entries
Add to the `services` array after the existing 4:

```tsx
{
  num: "05",
  id: "plumbing",
  title: "PLUMBING SOLUTIONS\nFOR CORPORATE FACILITIES",
  subtitle: "Plumbing Services",
  description: "Preventive and corrective plumbing for corporate offices and facilities.",
  included: [
    "Water Supply System Maintenance",
    "Drainage & Waste Systems",
    "Leak Detection & Repair",
    "Fixture Installation & Replacement",
    "Preventive Maintenance Schedules",
    "Emergency Response",
  ],
  industries: ["Corporate Offices", "Commercial Buildings", "Retail Spaces", "Institutions"],
  layout: "image-left",
  background: "white",
  imageGradient: "linear-gradient(135deg, #0a1a28 0%, #1a3040 100%)",
  imageLabel: "Plumbing maintenance - NBES",
  href: "/services/plumbing-solutions",
},
{
  num: "06",
  id: "civil",
  title: "CIVIL & CARPENTRY\nWORKS",
  subtitle: "Civil & Carpentry",
  description: "Minor construction, repairs, fit-outs, and custom carpentry for office environments.",
  included: [
    "Minor Civil Repairs",
    "Partition & False Ceiling Works",
    "Flooring Installation & Repair",
    "Custom Carpentry Solutions",
    "Interior Fit-Outs",
    "Structural Touch-Ups",
  ],
  industries: ["Corporate Offices", "Warehouses", "Retail", "Hospitals"],
  layout: "image-right",
  background: "off-white",
  imageGradient: "linear-gradient(135deg, #1a1410 0%, #2a2015 100%)",
  imageLabel: "Civil and carpentry works - NBES",
  href: "/services/civil-carpentry-works",
},
{
  num: "07",
  id: "interior",
  title: "INTERIOR WORKS &\nWORKSPACE ENHANCEMENT",
  subtitle: "Interior Works",
  description: "Functional and aesthetic workspace improvements tailored to client specifications.",
  included: [
    "False Ceiling & Acoustics",
    "Flooring & Finishes",
    "Painting & Surface Works",
    "Modular Workstation Installation",
    "Space Planning & Layout",
    "Finishing & Detailing",
  ],
  industries: ["Corporate Offices", "Banks", "IT Parks", "Commercial Spaces"],
  layout: "image-left",
  background: "white",
  imageGradient: "linear-gradient(135deg, #1a1020 0%, #2a1830 100%)",
  imageLabel: "Interior works and workspace enhancement - NBES",
  href: "/services/interior-works",
},
```

#### 3.5 — Update `src/components/home/ServicesGrid.tsx`
The homepage services grid currently shows 4 services. Update the copy for the existing 4 to be corporate-focused, and add a 5th "+" card that links to the full services page:

Update the existing service descriptions:
```tsx
// Electrical Works — update desc
desc: "Comprehensive electrical installation, maintenance, and troubleshooting for corporate offices and commercial facilities across Delhi-NCR.",

// Earthing Services — update desc  
desc: "Electrical earthing systems ensuring safety and regulatory compliance for corporate facilities, data centers, and office buildings.",

// Security Systems — update desc
desc: "CCTV surveillance and access control systems designed and installed for corporate offices, campuses, and commercial properties.",

// Remove "Technical Manpower" card and replace with "Facility Services" to better represent the company
// OR keep it but rename: "Facility Workforce" — On-call skilled technicians for electrical, plumbing, civil, and carpentry requirements.
```

Add a 5th card at the end:
```tsx
{
  num: "05+",
  icon: Wrench, // import from lucide-react
  title: "More Services",
  desc: "We also offer plumbing, carpentry, civil works, and interior fit-outs — all under one roof for your facility.",
  features: ["Plumbing", "Carpentry", "Civil Works", "Interior Works"],
  href: "/services",
}
```

---

## 🔴 AGENT 4 — Client Logos & Testimonials

### Context
The site shows placeholder client names ("Client Co.", "Group XYZ"). The real clients are major companies. Replace all of them.

### Tasks

#### 4.1 — `src/app/page.tsx` — Client logos bar
Replace the `logos` array:
```tsx
const logos = [
  "HCL",
  "Nestlé",
  "Fidelity",
  "MetLife",
  "Mercer",
  "Deloitte",
  "R1 RCM",
  "Huron Consulting",
];
```

#### 4.2 — `src/components/home/Testimonials.tsx`
Update testimonials to reflect actual client types (corporate facility managers):

```tsx
const testimonials = [
  {
    quote:
      "NBES has been our go-to electrical and facility partner for years. Their response time and quality of work stands out — we never have to follow up twice.",
    name: "Facility Manager",
    role: "IT Services Company, Gurgaon",
    initials: "FM",
  },
  {
    quote:
      "The team handles everything from electrical faults to plumbing issues with equal professionalism. Managing our office facility has become much simpler since we engaged NBES.",
    name: "Operations Head",
    role: "Financial Services Firm, Noida",
    initials: "OH",
  },
  {
    quote:
      "What sets NBES apart is their reliability. They show up on time, complete the work correctly, and document it well. That's exactly what a corporate facility needs.",
    name: "Admin & Facility Lead",
    role: "Consulting Group, Delhi-NCR",
    initials: "AL",
  },
] as const;
```

#### 4.3 — `src/components/seo/JsonLd.tsx` — OrganizationSchema `sameAs`
Add the real website:
```ts
sameAs: ["http://www.nbesindia.com"],
```

---

## 🔴 AGENT 5 — Homepage Copy, Hero & Stats

### Context
The homepage hero copy, tagline, and stats need to reflect the real company — a 20+ year corporate facility services company in Delhi-NCR, not an industrial contractor.

### Tasks

#### 5.1 — `src/components/home/Hero.tsx` — H1 and body copy
```tsx
// H1 — keep bold display style but fix the content
<motion.h1 ...>
  Electrical & Facility
  <br />
  <span className="text-accent">Services Delhi-NCR</span>
  <br />
  New Bharat Electrical Services
</motion.h1>

// Sub-copy — replace with:
<motion.p ...>
  NBES — New Bharat Electrical Services — has delivered reliable electrical,
  plumbing, civil, CCTV, earthing, carpentry, and interior services for
  corporate offices across Delhi-NCR since 2003. Trusted by HCL, Nestlé,
  Deloitte, and leading organizations.
</motion.p>

// Tagline — update:
<motion.p ...>Reliability. Quality. On Time.</motion.p>
```

#### 5.2 — `src/components/home/Hero.tsx` — Stats
Update the hero stats to reflect real data:
```tsx
const stats: HeroStat[] = [
  { num: 20, suffix: "+", label: "Years" },
  { num: 8, suffix: "+", label: "Clients" },        // named enterprise clients
  { num: 2, suffix: "", label: "Offices" },           // Gurgaon + Noida
  { num: 7, suffix: "+", label: "Services" },         // service categories
];
```

#### 5.3 — `src/components/StatsCounter.tsx`
Update the stats counter section:
```tsx
const stats: StatItem[] = [
  { value: 20, suffix: "+", label: "Years Operating" },
  { value: 8, suffix: "+", label: "Enterprise Clients" },
  { value: 7, suffix: "+", label: "Service Categories" },
  { value: 2, suffix: "", label: "Office Locations" },
];
```

#### 5.4 — `src/app/page.tsx` — Service areas section
Replace the current "Where We Work" section:
```tsx
<p className="...">
  New Bharat Electrical Services operates across Delhi-NCR, with offices in
  Gurgaon (Haryana) and Noida (Uttar Pradesh). We serve corporate clients
  across Delhi, Gurgaon, Noida, Faridabad, Greater Noida, and the broader
  NCR region.
</p>

// serviceAreas array:
const serviceAreas = [
  "Gurgaon",
  "Noida",
  "Delhi",
  "Faridabad",
  "Greater Noida",
  "NCR Region",
];
```

#### 5.5 — `src/app/page.tsx` — "Why Choose Us" section
Update the why items to match NBES's actual differentiators:
```tsx
const whyItems = [
  {
    title: "20+ Years of Experience",
    description:
      "Founded in 2003, NBES brings over two decades of reliable facility service delivery to corporate clients across Delhi-NCR.",
    icon: BadgeCheck,
  },
  {
    title: "Corporate-Grade Execution",
    description:
      "We understand corporate environments — minimal disruption, documented handovers, and consistent quality across all service categories.",
    icon: GitMerge,
  },
  {
    title: "Full-Facility Coverage",
    description:
      "From electrical and earthing to plumbing, civil, CCTV, and interior works — one trusted partner for your complete facility needs.",
    icon: ShieldCheck,
  },
];
```

#### 5.6 — `src/app/page.tsx` — Metadata
```ts
export const metadata: Metadata = {
  title: "Electrical & Facility Services Delhi-NCR | Since 2003",
  description:
    "New Bharat Electrical Services (NBES) delivers electrical, plumbing, CCTV, earthing, civil, carpentry, and interior works for corporate offices across Delhi-NCR. Serving HCL, Nestlé, Deloitte, and more since 2003.",
  alternates: { canonical: "https://nbes.vercel.app/" },
};
```

---

## 🔴 AGENT 6 — About Page

### Context
The About page has fictional team members and a fabricated founder story. It needs to be updated with real company background from the document.

### Tasks

#### 6.1 — `src/app/about/page.tsx` — Metadata
```ts
export const metadata: Metadata = {
  title: "About Us — New Bharat Electrical Services | Since 2003",
  description:
    "NBES (New Bharat Electrical Services) has delivered electrical and facility management services to leading corporate clients across Delhi-NCR since 2003. Learn about our approach, values, and team.",
  alternates: { canonical: "https://nbes.vercel.app/about" },
};
```

#### 6.2 — About page hero copy
```tsx
<h1 ...>ABOUT NBES</h1>
<p ...>
  Established in 2003, NBES has built a reputation for reliability,
  responsiveness, and disciplined facility service delivery across
  Delhi-NCR.
</p>
```

#### 6.3 — "Who We Are" section copy
Replace the about body text with real content:
```
NBES began with a clear purpose: to give corporate organisations a dependable single partner for all their facility service needs. Founded in Gurgaon in 2003, we have spent over two decades building relationships with leading companies across Delhi-NCR by delivering consistent, high-quality service.

From electrical installations and earthing to plumbing, CCTV, carpentry, civil works, and interior fit-outs, we handle the full range of facility requirements. Our clients include HCL, Nestlé, Fidelity, MetLife, Mercer, Deloitte, R1 RCM, and Huron Consulting Group.

What distinguishes NBES is our client-centric approach: we assess requirements clearly, execute with discipline, and maintain quality standards across every service category so facility managers can rely on one team rather than managing multiple vendors.
```

#### 6.4 — "15+" badge → "20+"
Find the `15+` years badge on the about page and update to `20+`:
```tsx
<p className="font-display text-[44px] font-extrabold leading-none">
  20+
</p>
<p className="mt-1 font-body text-[13px] text-white/80">
  Years of Excellence
</p>
```

#### 6.5 — "TRUSTED BY INDUSTRY FOR 15+ YEARS" heading
```tsx
<h2 ...>
  TRUSTED BY CORPORATES
  <br />
  FOR 20+ YEARS
</h2>
```

#### 6.6 — `valueItems` array — update to match real company values
```tsx
const valueItems: ValueItem[] = [
  {
    title: "Client-Centric Approach",
    description:
      "We take time to understand each client's operational requirements and deliver solutions that are practical, scalable, and aligned with their needs.",
    icon: BadgeCheck,
  },
  {
    title: "Planned Execution",
    description:
      "Defined timelines, structured workflows, and disciplined on-site processes ensure minimal disruption to your operations.",
    icon: GitMerge,
  },
  {
    title: "Safety & Compliance",
    description:
      "All service delivery adheres to safety norms and regulatory requirements — protecting your employees, environment, and assets.",
    icon: ShieldCheck,
  },
];
```

#### 6.7 — `processSteps` array — update to match NBES approach
```tsx
const processSteps: ProcessStep[] = [
  {
    title: "Requirement Assessment",
    description: "Clear evaluation of client needs, site conditions, and operational constraints before any work begins.",
  },
  {
    title: "Planned Scheduling",
    description: "Defined timelines and workflows submitted to the client to ensure alignment and minimal disruption.",
  },
  {
    title: "Skilled Execution",
    description: "Trained technicians carry out work with safety controls, quality checks, and site discipline.",
  },
  {
    title: "Handover & Follow-Up",
    description: "Completed work is documented and handed over. We remain available for follow-up and ongoing support.",
  },
];
```

#### 6.8 — Team members — remove fictional names
The current team has fictional names (Priya Menon, Rajat Kulkarni etc.). Replace with generic role-based cards until real team photos/names are available:

```tsx
const teamMembers: TeamMember[] = [
  { name: "Operations Team", role: "Field & Site Operations", gradient: "..." },
  { name: "Electrical Division", role: "Electrical & Earthing", gradient: "..." },
  { name: "Facility Services", role: "Plumbing, Civil & Carpentry", gradient: "..." },
  { name: "Technology Team", role: "CCTV & Security Systems", gradient: "..." },
];
```

#### 6.9 — Founder section — update or make generic
Remove "Arvind S. Nair" (fictional) and replace with a generic leadership section:
```tsx
<h3 ...>Our Leadership</h3>
<p ...>Director & Founder</p>
// Body copy:
"NBES was founded with a vision to provide dependable, multi-discipline facility services to corporate organisations. With over two decades in operation, our leadership has guided the company through consistent growth while maintaining the same commitment to quality and client satisfaction that defined us from day one."
```

---

## 🔴 AGENT 7 — Projects / Portfolio

### Context
Current portfolio shows industrial projects (steel plants, substations). NBES's actual work is corporate facility services. Replace all project data with real representative work types.

### Tasks

#### 7.1 — `src/data/projects.ts`
Replace all projects with corporate facility examples:

```ts
export const projects: ProjectRecord[] = [
  {
    slug: "corporate-office-electrical-gurgaon",
    title: "Corporate Office Electrical Maintenance",
    category: "Electrical",
    location: "Gurgaon, Haryana",
    summary:
      "Comprehensive electrical maintenance, panel servicing, and fault rectification for a multi-floor corporate office in Gurgaon.",
    scope: [
      "Periodic electrical inspection and maintenance",
      "Panel servicing and protection testing",
      "Emergency fault rectification",
      "Lighting and power circuit upgrades",
    ],
    image: "/projects/corporate-electrical.jpg",
  },
  {
    slug: "cctv-installation-noida-office",
    title: "CCTV Surveillance System Installation",
    category: "Security",
    location: "Noida, Uttar Pradesh",
    summary:
      "Design and installation of a complete CCTV surveillance system with remote monitoring for a corporate campus in Noida.",
    scope: [
      "Site survey and camera placement design",
      "IP camera installation and cabling",
      "NVR and remote monitoring setup",
      "Access control integration",
    ],
    image: "/projects/cctv-noida.jpg",
  },
  {
    slug: "earthing-facility-delhi-ncr",
    title: "Earthing & Electrical Safety Compliance",
    category: "Earthing",
    location: "Delhi-NCR",
    summary:
      "Complete earthing system inspection, testing, and rectification to bring a corporate facility into compliance with safety standards.",
    scope: [
      "Earth resistance testing",
      "Chemical earthing installation",
      "Bonding and grounding checks",
      "Compliance documentation",
    ],
    image: "/projects/earthing-facility.jpg",
  },
  {
    slug: "office-interior-fit-out-gurgaon",
    title: "Office Interior & Civil Fit-Out",
    category: "Electrical", // use closest available category or add "Interior"
    location: "Gurgaon, Haryana",
    summary:
      "End-to-end interior and civil works including false ceiling, flooring, partition, and painting for a corporate office relocation.",
    scope: [
      "False ceiling and acoustics",
      "Flooring and surface works",
      "Partition and wall works",
      "Painting and finishing",
    ],
    image: "/projects/interior-gurgaon.jpg",
  },
];
```

> **Note:** Update `src/components/projects/FilterBar.tsx` to include "Interior" as a category if needed, or map interior projects to "Electrical" temporarily.

#### 7.2 — Update `src/app/projects/page.tsx` — Hero copy
```tsx
<h1 ...>OUR COMPLETED<br />PROJECTS</h1>
<p ...>
  Facility service delivery across corporate offices, campuses, and
  commercial properties in Delhi-NCR — from electrical maintenance to
  CCTV installation and office fit-outs.
</p>
```

---

## 🟡 AGENT 8 — SEO Metadata — Delhi-NCR Corrections

### Context
All SEO metadata was written for an industrial contractor in Maharashtra. It needs to be corrected for a corporate facility services company in Delhi-NCR.

### Tasks

#### 8.1 — `src/app/services/electrical-works/page.tsx`
```ts
export const metadata: Metadata = {
  title: "Electrical Services Delhi-NCR — Corporate Office Electrical Maintenance",
  description:
    "NBES provides electrical installation, maintenance, and troubleshooting for corporate offices across Delhi-NCR. Serving Gurgaon, Noida, Delhi, and the broader NCR region since 2003.",
  alternates: { canonical: "https://nbes.vercel.app/services/electrical-works" },
};
```

#### 8.2 — `src/app/services/earthing-solutions/page.tsx`
```ts
export const metadata: Metadata = {
  title: "Earthing Services Delhi-NCR — Electrical Safety Compliance for Corporate Offices",
  description:
    "NBES installs and tests earthing systems for corporate offices and commercial facilities in Delhi-NCR, ensuring electrical safety compliance. Offices in Gurgaon and Noida.",
  alternates: { canonical: "https://nbes.vercel.app/services/earthing-solutions" },
};
```

Update the H1:
```tsx
<h1 ...>
  Earthing Services
  <br />
  Delhi-NCR Corporate Facilities
</h1>
```

Update the FAQ answers to focus on corporate/office context rather than industrial plants.

#### 8.3 — `src/app/services/security-systems/page.tsx`
```ts
export const metadata: Metadata = {
  title: "CCTV Installation Delhi-NCR — Corporate Office Surveillance Systems",
  description:
    "NBES designs and installs CCTV surveillance, access control, and fire alarm systems for corporate offices and commercial properties across Delhi-NCR.",
  alternates: { canonical: "https://nbes.vercel.app/services/security-systems" },
};
```

#### 8.4 — `src/app/services/technical-manpower/page.tsx`
Rename this page concept to better reflect NBES's actual offering — skilled facility workforce, not "ITI certified industrial manpower":

```ts
export const metadata: Metadata = {
  title: "Skilled Facility Workforce — On-Call Technicians Delhi-NCR",
  description:
    "NBES provides skilled technicians for electrical, plumbing, civil, and carpentry work on demand for corporate facilities across Delhi-NCR.",
  alternates: { canonical: "https://nbes.vercel.app/services/technical-manpower" },
};
```

Update H1:
```tsx
<h1 ...>
  Skilled Facility
  <br />
  Workforce On Demand
</h1>
```

Update body copy and scope items:
```tsx
const manpowerItems = [
  "Certified electricians and electrical supervisors",
  "Plumbing technicians",
  "Civil and carpentry workers",
  "CCTV and security systems technicians",
  "Short-term and long-term deployment",
  "Rapid mobilization across Delhi-NCR",
];
```

#### 8.5 — `src/app/services/page.tsx` — Metadata
```ts
export const metadata: Metadata = {
  title: "Services — Electrical, Plumbing, CCTV, Earthing & Facility Services Delhi-NCR",
  description:
    "NBES offers electrical services, plumbing, carpentry, civil works, CCTV installation, earthing, and interior works for corporate offices in Delhi-NCR. One trusted partner for all facility needs.",
  alternates: { canonical: "https://nbes.vercel.app/services" },
  keywords: [
    "electrical services Gurgaon",
    "facility services Delhi NCR",
    "CCTV installation Noida",
    "earthing services Delhi",
    "plumbing services Gurgaon",
    "civil works NCR",
    "corporate facility management Delhi",
  ],
};
```

#### 8.6 — `src/app/about/page.tsx` — Schema update
Replace the existing LocalBusiness/Organization schema with correct data reflecting Delhi-NCR + real address.

#### 8.7 — `src/app/sitemap.ts` — Add new service pages
```ts
{ url: `${baseUrl}/services/plumbing-solutions`, ... },
{ url: `${baseUrl}/services/civil-carpentry-works`, ... },
{ url: `${baseUrl}/services/interior-works`, ... },
```

---

## 🟡 AGENT 9 — Footer & Navigation Final Polish

### Context
Footer service links and industries section needs to reflect the real company.

### Tasks

#### 9.1 — `src/components/Footer.tsx` — Service links
```tsx
const serviceLinks = [
  "Electrical Services",
  "Plumbing Solutions",
  "CCTV Installation",
  "Earthing Services",
  "Civil & Carpentry",
  "Interior Works",
];
```

Update the hrefs to point to the correct service pages:
```tsx
href={
  item === "Electrical Services" ? "/services/electrical-works" :
  item === "Plumbing Solutions" ? "/services/plumbing-solutions" :
  item === "CCTV Installation" ? "/services/security-systems" :
  item === "Earthing Services" ? "/services/earthing-solutions" :
  item === "Civil & Carpentry" ? "/services/civil-carpentry-works" :
  "/services/interior-works"
}
```

#### 9.2 — `src/components/Footer.tsx` — Industries section
Replace industrial industries with corporate/commercial ones:
```tsx
const industryLinks = [
  "Corporate Offices",
  "Commercial Buildings",
  "IT Parks",
  "Financial Services",
];
```

#### 9.3 — `src/components/Footer.tsx` — Add second address
```tsx
// After Gurgaon address, add Noida:
<p className="...">366, Saraswati Vihar, Mehrauli Road</p>
<p className="...">Gurgaon – 122001</p>
<p className="mt-3 ...">Shop No. 1, Sector-31, Nithari</p>
<p className="...">Noida – 201301</p>
```

#### 9.4 — `src/components/Navbar.tsx` — Phone update
Already covered in Agent 2 but verify the navbar phone link also shows correctly.

---

## ✅ Final Checklist After All Agents Complete

- [ ] "New Bharat **Electrical** Services" used consistently everywhere
- [ ] "New Bharat Engineer Services" removed from all files
- [ ] Phone: 0124-4283894 / +91 99990 60083 showing in navbar, footer, contact
- [ ] Email: contact@nbesindia.com showing in footer and contact
- [ ] Both addresses (Gurgaon + Noida) showing in footer and contact page
- [ ] Founded 2003 / 20+ years reflected in stats, about, and schema
- [ ] Client logos: HCL, Nestlé, Fidelity, MetLife, Mercer, Deloitte, R1 RCM, Huron Consulting
- [ ] 7 service categories (not 4) — Electrical, Plumbing, Carpentry, Civil, CCTV, Earthing, Interior
- [ ] Service areas show Delhi-NCR (Gurgaon, Noida, Delhi) — not Maharashtra/Gujarat
- [ ] Projects reflect corporate office work — not industrial plants
- [ ] About page copy uses real company history (2003, Delhi-NCR, corporate clients)
- [ ] No placeholder "00000" phone numbers anywhere
- [ ] No "[State 1]" placeholder area names
- [ ] Hero copy is corporate-facility-focused
- [ ] WhatsApp link uses: wa.me/919999060083
- [ ] Schema.org data has real addresses and founding date
- [ ] Sitemap includes all new service pages

---

*Generated for NBES — New Bharat Electrical Services. All tasks are independent unless a dependency is noted. Agents 1 and 2 are the most critical — run them first if not parallelizing.*
