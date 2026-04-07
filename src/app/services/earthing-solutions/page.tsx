import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import { FAQSchema, ServiceSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "IS 3043 Earthing Solutions - Chemical & Conventional Earthing India",
  description:
    "NBES provides IS 3043-compliant chemical earthing, conventional plate/pipe earthing, and lightning protection for industrial plants, data centers, and telecom towers across India. Full soil testing and documentation.",
  alternates: {
    canonical: "https://nbes.vercel.app/services/earthing-solutions",
  },
};

const earthingFaqs = [
  {
    question: "What is IS 3043 earthing?",
    answer:
      "IS 3043 is the Indian Standard that defines safe earthing system design, installation, and testing practices for electrical protection and fault current dissipation.",
  },
  {
    question:
      "What is the difference between chemical and conventional earthing?",
    answer:
      "Chemical earthing uses conductive compounds to stabilise soil resistance, while conventional earthing uses plate or pipe electrodes. The right choice depends on soil conditions and the facility load.",
  },
  {
    question: "How often should earthing systems be tested?",
    answer:
      "Testing frequency depends on site conditions, but industrial facilities usually benefit from periodic inspection and resistance testing at least annually or after major electrical changes.",
  },
];

const sections = [
  {
    title: "Chemical Earthing",
    description:
      "Low-maintenance earthing systems designed for stable resistance and reliable fault current dissipation in industrial environments.",
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
      <ServiceSchema
        name="IS 3043 Earthing Solutions"
        description="Chemical earthing, conventional earthing, and lightning protection for industrial plants, data centers, and telecom towers across India."
        url="https://nbes.vercel.app/services/earthing-solutions"
      />
      <FAQSchema faqs={earthingFaqs} />

      <ScrollRevealBlock>
        <section className="bg-black py-24 text-white">
          <div className="container-width grid gap-12 lg:grid-cols-[58fr_42fr] lg:items-center">
            <div>
              <SectionLabel>Earthing Solutions</SectionLabel>
              <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">
                IS 3043 Earthing Solutions
                <br />
                Industrial & Commercial India
              </h1>
              <p className="mt-5 max-w-[640px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                NBES designs and installs earthing systems for industrial
                plants, data centers, telecom towers, warehouses, and government
                facilities. We start with soil resistivity testing, then design
                a compliant system, install it, and finish with testing and
                documentation.
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
        <CTABand />
      </ScrollRevealBlock>
    </>
  );
}
