import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import {
  BreadcrumbSchema,
  FAQSchema,
  ServiceSchema,
} from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Earthing Services Delhi-NCR - Electrical Safety Compliance for Corporate Offices",
  description:
    "NBES installs and tests earthing systems for corporate offices and commercial facilities in Delhi-NCR, ensuring electrical safety compliance. Offices in Gurgaon and Noida.",
  alternates: {
    canonical: `${SITE_URL}/services/earthing-solutions`,
  },
};

const earthingFaqs = [
  {
    question: "What is IS 3043 earthing?",
    answer:
      "IS 3043 is the Indian Standard for earthing design, installation, and testing. For corporate offices, it helps maintain safe fault-current dissipation and electrical protection compliance.",
  },
  {
    question:
      "What is the difference between chemical and conventional earthing?",
    answer:
      "Chemical earthing uses conductive compounds to maintain stable resistance, while conventional earthing typically uses plate or pipe electrodes. NBES recommends the right option based on office load and site conditions.",
  },
  {
    question: "How often should earthing systems be tested?",
    answer:
      "Corporate facilities should schedule periodic earthing inspection and resistance testing, typically at least once a year or after major electrical modifications, to maintain safety and compliance.",
  },
];

const sections = [
  {
    title: "Chemical Earthing",
    description:
      "Low-maintenance earthing systems designed for stable resistance and reliable fault current dissipation in corporate and commercial facilities.",
  },
  {
    title: "Conventional Earthing",
    description:
      "Plate and pipe earthing options suited to project-specific soil conditions, load profiles, and budget requirements.",
  },
  {
    title: "Lightning Protection",
    description:
      "Lightning arrestor and down-conductor installation to reduce risk to structures, equipment, and personnel.",
  },
];

export default function EarthingSolutionsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
          {
            name: "Earthing Solutions",
            url: `${SITE_URL}/services/earthing-solutions`,
          },
        ]}
      />
      <ServiceSchema
        name="Earthing Services Delhi-NCR"
        description="Corporate earthing installation, testing, and safety compliance services for offices and commercial buildings in Delhi-NCR."
        url={`${SITE_URL}/services/earthing-solutions`}
      />
      <FAQSchema faqs={earthingFaqs} />

      <ScrollRevealBlock>
        <section className="bg-black py-24 text-white">
          <div className="container-width grid gap-12 lg:grid-cols-[58fr_42fr] lg:items-center">
            <div>
              <SectionLabel>Earthing Solutions</SectionLabel>
              <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">
                Earthing Services
                <br />
                Delhi-NCR Corporate Facilities
              </h1>
              <p className="mt-5 max-w-[640px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                NBES designs and installs earthing systems for corporate
                offices, commercial properties, and data-heavy workspaces in
                Delhi-NCR. We begin with site and soil checks, deploy a
                compliant system, and complete testing with clear documentation
                for facility teams.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-btn bg-accent px-6 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
              >
                Request Earthing Quote
              </Link>
            </div>

            <ImagePlaceholder
              gradient="linear-gradient(135deg, #0d1a0d 0%, #1a3a2f 100%)"
              label="IS 3043 chemical earthing installation - NBES"
              className="aspect-[4/5] w-full rounded-[8px] border border-white/10"
            />
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white section-padding">
          <div className="container-width grid gap-8 lg:grid-cols-3">
            {sections.map((item) => (
              <article
                key={item.title}
                className="rounded-[6px] border border-border bg-off-white p-6"
              >
                <SectionLabel>{item.title}</SectionLabel>
                <p className="mt-4 font-body text-[15px] leading-[1.7] text-mid-grey">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-black section-padding text-white">
          <div className="container-width grid gap-8 lg:grid-cols-[40fr_60fr]">
            <div>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-3 font-display text-display-md font-extrabold uppercase text-white">
                Common Earthing Questions
              </h2>
            </div>
            <div className="space-y-4">
              {earthingFaqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[6px] border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="font-display text-[17px] font-bold uppercase text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 font-body text-[15px] leading-[1.7] text-white/70">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
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
