import type { Metadata } from "next";
import { Award, Briefcase, Building2, HardHat, Landmark } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import FAQAccordion from "@/components/FAQAccordion";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/JsonLd";
import ServiceDetail, {
  type ServiceDetailProps,
} from "@/components/services/ServiceDetail";
import { faqItems } from "@/data/faqs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Services - Electrical, Plumbing, CCTV, Earthing & Facility Services Delhi-NCR",
  description:
    "Electrical installation, plumbing, CCTV, earthing, carpentry, civil and interior works for corporate offices in Delhi-NCR. Single facility partner serving Gurgaon and Noida since 2003.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
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
  ],
};

const services: ServiceDetailProps[] = [
  {
    num: "01",
    id: "electrical",
    title: "CORPORATE ELECTRICAL\nSERVICES & MAINTENANCE",
    subtitle: "Electrical Works",
    description:
      "Installation, maintenance, and troubleshooting for corporate office electrical systems across Delhi-NCR.",
    included: [
      "Electrical Installation & Upgrades",
      "Preventive Electrical Maintenance",
      "Fault Detection & Rectification",
      "Panel Servicing & Distribution Checks",
      "Lighting & Power Circuit Works",
      "Safety Testing & Documentation",
    ],
    industries: [
      "Corporate Offices",
      "Commercial Buildings",
      "IT Parks",
      "Institutions",
    ],
    layout: "image-left",
    background: "white",
    imageGradient: "linear-gradient(135deg, #0a1628 0%, #1a2f4a 100%)",
    imageLabel: "Electrical panel installation",
    href: "/services/electrical-works",
  },
  {
    num: "02",
    id: "earthing",
    title: "EARTHING SERVICES FOR\nCORPORATE FACILITIES",
    subtitle: "Earthing Solutions",
    description:
      "Electrical earthing systems to improve safety, compliance, and reliability in office facilities.",
    included: [
      "Soil Resistivity Testing",
      "Conventional Earthing Systems",
      "Chemical Earthing Systems",
      "Lightning Protection Integration",
      "Earth Continuity Testing",
      "Periodic Maintenance & Re-Testing",
    ],
    industries: [
      "Corporate Offices",
      "Data Centers",
      "Commercial Complexes",
      "IT Campuses",
    ],
    layout: "image-right",
    background: "off-white",
    imageGradient: "linear-gradient(135deg, #0d1a0d 0%, #1a3a2f 100%)",
    imageLabel: "Earthing installation",
    href: "/services/earthing-solutions",
  },
  {
    num: "03",
    id: "security",
    title: "CCTV & ACCESS CONTROL\nFOR OFFICE CAMPUSES",
    subtitle: "Security Systems",
    description:
      "Integrated surveillance, access control, and fire alarm systems for office safety and visibility.",
    included: [
      "CCTV System Design & Installation",
      "Biometric/Card Access Control",
      "Fire Alarm & Detection Integration",
      "Video Monitoring Configuration",
      "Coverage Optimization for Office Floors",
      "Maintenance & Support",
    ],
    industries: [
      "Corporate Offices",
      "Commercial Buildings",
      "Campuses",
      "Retail Properties",
    ],
    layout: "image-left",
    background: "white",
    imageGradient: "linear-gradient(135deg, #1a0d2a 0%, #2a1a3a 100%)",
    imageLabel: "Security system installation",
    href: "/services/security-systems",
  },
  {
    num: "04",
    id: "plumbing",
    title: "PLUMBING SOLUTIONS\nFOR CORPORATE FACILITIES",
    subtitle: "Plumbing Services",
    description:
      "Preventive and corrective plumbing for corporate offices and facilities.",
    included: [
      "Water Supply System Maintenance",
      "Drainage & Waste Systems",
      "Leak Detection & Repair",
      "Fixture Installation & Replacement",
      "Preventive Maintenance Schedules",
      "Emergency Response",
    ],
    industries: [
      "Corporate Offices",
      "Commercial Buildings",
      "Retail Spaces",
      "Institutions",
    ],
    layout: "image-left",
    background: "white",
    imageGradient: "linear-gradient(135deg, #0a1a28 0%, #1a3040 100%)",
    imageLabel: "Plumbing maintenance - NBES",
    href: "/services/plumbing-solutions",
  },
  {
    num: "05",
    id: "civil",
    title: "CIVIL & CARPENTRY\nWORKS",
    subtitle: "Civil & Carpentry",
    description:
      "Minor construction, repairs, fit-outs, and custom carpentry for office environments.",
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
    num: "06",
    id: "interior",
    title: "INTERIOR WORKS &\nWORKSPACE ENHANCEMENT",
    subtitle: "Interior Works",
    description:
      "Functional and aesthetic workspace improvements tailored to client specifications.",
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
];

const industries = [
  {
    icon: Building2,
    title: "Corporate Offices",
    description:
      "End-to-end facility services for active office operations and workplaces.",
  },
  {
    icon: Briefcase,
    title: "Commercial Buildings",
    description:
      "Reliable maintenance and service execution for multi-tenant properties.",
  },
  {
    icon: Landmark,
    title: "IT Parks & Campuses",
    description:
      "Scalable electrical, security, and infrastructure support for tech campuses.",
  },
  {
    icon: HardHat,
    title: "Institutional Facilities",
    description:
      "Facility upkeep and project execution with compliance and minimal disruption.",
  },
] as const;

const certifications = [
  "IS 3043",
  "IS 732",
  "IEC 60364",
  "BIS Certified",
  "ISO 9001:2015",
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
        ]}
      />
      <ScrollRevealBlock>
        <section className="bg-black py-28 text-center">
          <div className="container-width">
            <SectionLabel centered>What We Offer</SectionLabel>
            <h1 className="font-display text-display-xl font-extrabold uppercase text-white mt-4">
              OUR SERVICES
            </h1>
            <p className="body-light text-white/65 max-w-[580px] mx-auto mt-5 text-[17px]">
              Corporate facility services for Delhi-NCR offices, campuses, and
              commercial properties. From electrical and plumbing to CCTV,
              earthing, civil-carpentry, and interiors.
            </p>
          </div>
        </section>
      </ScrollRevealBlock>

      {services.map((service) => (
        <ScrollRevealBlock key={service.id}>
          <ServiceDetail {...service} />
        </ScrollRevealBlock>
      ))}

      <ScrollRevealBlock>
        <section className="bg-black section-padding">
          <div className="container-width">
            <div className="text-center">
              <SectionLabel centered>Industries</SectionLabel>
              <h2 className="mt-4 font-display text-display-md font-extrabold uppercase text-white">
                WHO WE WORK WITH
              </h2>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-4 md:grid-cols-2">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <article
                    key={industry.title}
                    className="rounded-[6px] border border-white/8 bg-[#1a1a1a] p-8 transition-all hover:border-accent/30 hover:bg-[#1e1e1e]"
                  >
                    <Icon size={32} className="text-accent" />
                    <h3 className="mt-4 font-display text-[17px] uppercase text-white">
                      {industry.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-white/50">
                      {industry.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-off-white py-12">
          <div className="container-width flex items-center gap-12 flex-wrap">
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-charcoal flex-shrink-0">
              STANDARDS & CERTIFICATIONS:
            </p>

            <div className="flex gap-8 flex-wrap">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-[10px] font-display text-[13px] font-bold tracking-[0.06em] uppercase text-charcoal"
                >
                  <Award size={20} className="text-accent" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <FAQSchema faqs={faqItems} />
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <FAQAccordion />
      </ScrollRevealBlock>
      <ScrollRevealBlock>
        <CTABand />
      </ScrollRevealBlock>
    </>
  );
}
