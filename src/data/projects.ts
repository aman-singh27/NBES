export type ProjectRecord = {
  slug: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  scope: string[];
  image: string;
};

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
    category: "Interior",
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
  {
    slug: "plumbing-maintenance-corporate-noida",
    title: "Plumbing & Civil Maintenance Contract",
    category: "Civil",
    location: "Noida, Uttar Pradesh",
    summary:
      "Annual plumbing and minor civil maintenance contract for a multi-floor corporate facility in Noida, covering preventive upkeep and breakdown response.",
    scope: [
      "Preventive plumbing inspection",
      "Fixture repair and replacement",
      "Minor civil repair works",
      "Emergency response coverage",
    ],
    image: "/projects/plumbing-noida.jpg",
  },
];
