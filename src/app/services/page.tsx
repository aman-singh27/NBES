import type { Metadata } from "next";
import { Award, Briefcase, Building2, HardHat, Landmark } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import CTABand from "@/components/CTABand";
import FAQAccordion from "@/components/FAQAccordion";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import { FAQSchema } from "@/components/seo/JsonLd";
import ServiceDetail, {
  type ServiceDetailProps,
} from "@/components/services/ServiceDetail";
import { faqItems } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Electrical, Earthing, Security & Manpower Services",
  description:
    "NBES offers industrial electrical installation, IS 3043-compliant earthing, integrated CCTV & access control, and ITI-certified technical manpower. Serving Maharashtra, Telangana, Gujarat and pan-India.",
  alternates: {
    canonical: "https://nbes.vercel.app/services",
  },
  keywords: [
    "electrical contractor India",
    "earthing solutions",
    "security system installation",
    "technical manpower",
    "IS 3043 earthing",
    "electrical contractor Maharashtra",
  ],
};

const services: ServiceDetailProps[] = [
  {
    num: "01",
    id: "electrical",
    title: "INDUSTRIAL & COMMERCIAL\nELECTRICAL INSTALLATION",
    subtitle: "Electrical Works",
    description:
      "HT/LT panels, cable laying, transformers, switchgear, power factor correction.",
    included: [
      "HT/LT Panel Installation & Commissioning",
      "Cable Laying & Termination",
      "Transformer Installation",
      "Switchgear & Protection Systems",
      "Load Testing & Documentation",
      "Power Factor Correction",
    ],
    industries: [
      "Factories",
      "Warehouses",
      "Commercial Buildings",
      "Government Facilities",
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
    title: "PRECISION EARTHING —\nIS 3043 COMPLIANT",
    subtitle: "Earthing Solutions",
    description:
      "IS 3043 compliant conventional and chemical earthing, lightning protection.",
    included: [
      "Soil Resistivity Testing",
      "Conventional Plate/Pipe Earthing",
      "Chemical Earthing Systems",
      "Lightning Arrestor & Down Conductor",
      "Earth Continuity Testing & Reports",
      "Maintenance & Re-testing",
    ],
    industries: [
      "Industrial Plants",
      "Data Centers",
      "Telecom Towers",
      "Government Buildings",
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
    title: "INTEGRATED SECURITY\nINFRASTRUCTURE",
    subtitle: "Security Systems",
    description:
      "CCTV, access control, biometric, fire detection, perimeter security.",
    included: [
      "CCTV Surveillance System Design & Install",
      "Access Control & Biometrics",
      "Fire Detection & Alarm Systems",
      "Perimeter Security & Intrusion Detection",
      "Video Management Software",
      "Annual Maintenance Contract (AMC)",
    ],
    industries: [
      "Factories",
      "Corporate Offices",
      "Warehouses",
      "Residential Complexes",
    ],
    layout: "image-left",
    background: "white",
    imageGradient: "linear-gradient(135deg, #1a0d2a 0%, #2a1a3a 100%)",
    imageLabel: "Security system installation",
    href: "/services/security-systems",
  },
  {
    num: "04",
    id: "manpower",
    title: "CERTIFIED ELECTRICAL\nWORKFORCE ON DEMAND",
    subtitle: "Technical Manpower",
    description: "Certified ITI/diploma electricians and supervisors on-site.",
    included: [
      "ITI/Diploma Certified Electricians",
      "Site Supervisors & Engineers",
      "Short & Long-Term Contracts",
      "Workman's Compensation Insured",
      "Contract Labour Act Compliant",
      "Rapid Mobilization (5-7 working days)",
    ],
    industries: [
      "EPC Contractors",
      "Plant Operators",
      "Facility Managers",
      "Project Developers",
    ],
    layout: "image-right",
    background: "off-white",
    imageGradient: "linear-gradient(135deg, #1a1a0d 0%, #2a2a1a 100%)",
    imageLabel: "Technical team on site",
    href: "/services/technical-manpower",
  },
];

const industries = [
  {
    icon: Building2,
    title: "Industrial/Manufacturing",
    description:
      "Plant-scale systems and process-critical electrical infrastructure.",
  },
  {
    icon: Briefcase,
    title: "Commercial",
    description:
      "Safe and scalable installations for offices and commercial facilities.",
  },
  {
    icon: Landmark,
    title: "Government/PSU",
    description:
      "Compliance-led execution for public and institutional projects.",
  },
  {
    icon: HardHat,
    title: "Infrastructure/EPC",
    description:
      "Reliable support for EPC timelines, quality, and safety goals.",
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
      <ScrollRevealBlock>
        <section className="bg-black py-28 text-center">
          <div className="container-width">
            <SectionLabel centered>What We Offer</SectionLabel>
            <h1 className="font-display text-display-xl font-extrabold uppercase text-white mt-4">
              OUR SERVICES
            </h1>
            <p className="body-light text-white/65 max-w-[580px] mx-auto mt-5 text-[17px]">
              Complete electrical, earthing, security, and manpower solutions -
              engineered for industrial, commercial, and government projects
              across India.
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
