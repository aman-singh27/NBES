export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectricalContractor"],
    name: "New Bharat Engineering Services",
    alternateName: "NBES",
    url: "https://nbes.vercel.app",
    logo: "https://nbes.vercel.app/logo.png",
    image: "https://nbes.vercel.app/og-image.jpg",
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
            url: "https://nbes.vercel.app/services/electrical-works",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Earthing Services",
            url: "https://nbes.vercel.app/services/earthing-solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CCTV Installation",
            url: "https://nbes.vercel.app/services/security-systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Skilled Facility Workforce",
            url: "https://nbes.vercel.app/services/technical-manpower",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plumbing Solutions",
            url: "https://nbes.vercel.app/services/plumbing-solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Civil & Carpentry Works",
            url: "https://nbes.vercel.app/services/civil-carpentry-works",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Works",
            url: "https://nbes.vercel.app/services/interior-works",
          },
        },
      ],
    },
    sameAs: ["http://www.nbesindia.com"],
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
      url: "https://nbes.vercel.app",
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
      url: "https://nbes.vercel.app",
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
