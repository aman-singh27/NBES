import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Electrical Services Delhi-NCR - Corporate Office Electrical Maintenance",
  description:
    "NBES provides electrical installation, maintenance, and troubleshooting for corporate offices across Delhi-NCR. Serving Gurgaon, Noida, Delhi, and the broader NCR region since 2003.",
  alternates: {
    canonical: `${SITE_URL}/services/electrical-works`,
  },
};

const services = [
  "Electrical system installation and upgrades",
  "Preventive maintenance for office infrastructure",
  "Troubleshooting and corrective electrical repairs",
  "Panel servicing and distribution board checks",
  "Lighting and power circuit maintenance",
  "Safety testing, compliance checks, and documentation",
];

export default function ElectricalWorksPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
          {
            name: "Electrical Works",
            url: `${SITE_URL}/services/electrical-works`,
          },
        ]}
      />
      <ServiceSchema
        name="Electrical Services Delhi-NCR"
        description="Electrical installation, preventive maintenance, and troubleshooting for corporate offices and commercial facilities across Delhi-NCR."
        url={`${SITE_URL}/services/electrical-works`}
      />

      <ScrollRevealBlock>
        <section className="bg-black py-24 text-white">
          <div className="container-width grid gap-12 lg:grid-cols-[60fr_40fr] lg:items-center">
            <div>
              <SectionLabel>Electrical Works</SectionLabel>
              <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">
                Electrical Services
                <br />
                Delhi-NCR Corporate Facilities
              </h1>
              <p className="mt-5 max-w-[640px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                New Bharat Engineering Services delivers electrical services for
                corporate offices, commercial buildings, and facility teams
                across Delhi-NCR. We handle installation, preventive
                maintenance, breakdown response, upgrades, and compliance
                documentation with minimal operational disruption. NBES ensures
                satisfaction with due consideration to health, safety,
                environment and welfare of all employees and sub-contractors.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-btn bg-accent px-6 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
              >
                Request Electrical Quote
              </Link>
            </div>

            <ImagePlaceholder
              gradient="linear-gradient(135deg, #0a1628 0%, #1a2f4a 100%)"
              label="Corporate electrical maintenance and installation - NBES"
              className="aspect-[4/5] w-full rounded-[8px] border border-white/10"
            />
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white section-padding">
          <div className="container-width grid gap-12 lg:grid-cols-[45fr_55fr]">
            <div>
              <SectionLabel>Scope</SectionLabel>
              <h2 className="mt-3 font-display text-display-md font-extrabold uppercase text-black">
                Complete Execution Scope
              </h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {services.map((item) => (
                <li
                  key={item}
                  className="rounded-[6px] border border-border bg-off-white px-4 py-4 font-body text-[15px] text-charcoal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-off-white py-12">
          <div className="container-width rounded-[8px] border border-border bg-white p-8">
            <SectionLabel>Why NBES</SectionLabel>
            <ul className="mt-4 space-y-3 font-body text-[15px] text-charcoal">
              <li>- On-time delivery aligned to committed timelines</li>
              <li>- High standards of workmanship across every job</li>
              <li>- Cost-effective solutions tailored to facility needs</li>
            </ul>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <CTABand />
      </ScrollRevealBlock>
    </>
  );
}
