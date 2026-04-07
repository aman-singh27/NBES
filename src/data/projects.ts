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
    slug: "steel-plant-earthing-nagpur",
    title: "Steel Plant Earthing & HT Panel Installation",
    category: "Earthing",
    location: "Nagpur, Maharashtra",
    summary:
      "IS 3043-compliant chemical earthing and HT panel installation for a steel manufacturing facility in Nagpur.",
    scope: [
      "Soil resistivity testing",
      "Chemical earthing system design",
      "HT panel installation",
      "Earth continuity testing and documentation",
    ],
    image: "/projects/steel-plant.jpg",
  },
  {
    slug: "corporate-office-security-hyderabad",
    title: "Corporate Office Security System",
    category: "Security",
    location: "Hyderabad, Telangana",
    summary:
      "Integrated CCTV, biometric access control, and fire alarm installation for a corporate campus in Hyderabad.",
    scope: [
      "CCTV system design and installation",
      "Biometric access control",
      "Fire alarm integration",
      "Video management software setup",
    ],
    image: "/projects/corporate-security.jpg",
  },
  {
    slug: "municipal-substation-pune",
    title: "Municipal Substation Upgrade",
    category: "Electrical",
    location: "Pune, Maharashtra",
    summary:
      "Complete substation electrical upgrade including LT panels, cable laying, and load testing for a municipal facility in Pune.",
    scope: [
      "LT panel replacement",
      "Cable laying and termination",
      "Switchgear upgrade",
      "Load testing and documentation",
    ],
    image: "/projects/substation.jpg",
  },
];