import { SITE_URL } from "@/lib/constants";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectricalContractor"],
    name: "New Bharat Engineering Services",
    alternateName: "NBES",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description:
      "NBES provides electrical, plumbing, carpentry, civil, CCTV, earthing, and interior facility services for corporate offices across Delhi-NCR since 2003.",
    telephone: "+91-9999060083",
    email: "contact@nbesindia.com",
    foundingDate: "2003",
    priceRange: "INR",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
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
        streetAddress:
          "Shop No. 1, Khasra No. 38, Bhartha Complex, Part-II, Nithari, Sector-31",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical & Facility Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Services",
            url: `${SITE_URL}/services/electrical-works`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Earthing Services",
            url: `${SITE_URL}/services/earthing-solutions`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CCTV Installation",
            url: `${SITE_URL}/services/security-systems`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plumbing Solutions",
            url: `${SITE_URL}/services/plumbing-solutions`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Civil & Carpentry Works",
            url: `${SITE_URL}/services/civil-carpentry-works`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Works",
            url: `${SITE_URL}/services/interior-works`,
          },
        },
      ],
    },
    sameAs: ["https://www.nbesindia.com"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
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

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "New Bharat Engineering Services",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectSchema({
  name,
  description,
  url,
  location,
}: {
  name: string;
  description: string;
  url: string;
  location: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "New Bharat Engineering Services",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: location,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
