export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectricalContractor"],
    name: "New Bharat Engineer Services",
    alternateName: "NBES",
    url: "https://nbes.vercel.app",
    logo: "https://nbes.vercel.app/logo.png",
    image: "https://nbes.vercel.app/og-image.jpg",
    description:
      "NBES provides certified industrial electrical works, IS 3043-compliant earthing systems, integrated security infrastructure, and ITI-certified technical manpower across India.",
    telephone: "+91-XXXXXXXXXX",
    email: "info@nbes.in",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Maharashtra",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Gujarat" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical & Technical Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Industrial Electrical Works",
            url: "https://nbes.vercel.app/services/electrical-works",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IS 3043 Earthing Solutions",
            url: "https://nbes.vercel.app/services/earthing-solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Security Systems Installation",
            url: "https://nbes.vercel.app/services/security-systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Certified Technical Manpower",
            url: "https://nbes.vercel.app/services/technical-manpower",
          },
        },
      ],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
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
      name: "New Bharat Engineer Services",
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
      name: "New Bharat Engineer Services",
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