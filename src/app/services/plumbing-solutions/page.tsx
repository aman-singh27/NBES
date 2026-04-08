import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import { ServiceSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Plumbing Solutions - Corporate Office Plumbing Services Delhi-NCR",
  description:
    "NBES provides preventive and corrective plumbing maintenance for corporate offices in Delhi-NCR. Reliable plumbing solutions for facility managers in Gurgaon and Noida.",
  alternates: {
    canonical: "https://nbes.vercel.app/services/plumbing-solutions",
  },
};

const plumbingItems = [
  "Water supply system maintenance",
  "Drainage system upkeep and repairs",
  "Leak detection and corrective plumbing",
  "Fixture installation and replacement",
  "Preventive plumbing maintenance schedules",
  "Emergency plumbing response support",
];

export default function PlumbingSolutionsPage() {
  return (
    <>
      <ServiceSchema
        name="Plumbing Solutions"
        description="Preventive and corrective plumbing maintenance for corporate offices and commercial facilities across Delhi-NCR."
        url="https://nbes.vercel.app/services/plumbing-solutions"
      />

      <ScrollRevealBlock>
        <section className="bg-black py-24 text-white">
          <div className="container-width grid gap-12 lg:grid-cols-[58fr_42fr] lg:items-center">
            <div>
              <SectionLabel>Plumbing Solutions</SectionLabel>
              <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">
                Corporate Plumbing Services
                <br />
                Delhi-NCR Facilities
              </h1>
              <p className="mt-5 max-w-[640px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                NBES supports facility and admin teams with preventive and
                corrective plumbing services for offices and commercial
                properties. We handle routine upkeep, urgent breakdowns, fixture
                work, and system reliability improvements.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-btn bg-accent px-6 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
              >
                Request Plumbing Quote
              </Link>
            </div>

            <ImagePlaceholder
              gradient="linear-gradient(135deg, #0a1a28 0%, #1a3040 100%)"
              label="Plumbing solutions for corporate facilities - NBES"
              className="aspect-[4/5] w-full rounded-[8px] border border-white/10"
            />
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white section-padding">
          <div className="container-width grid gap-8 lg:grid-cols-3">
            {plumbingItems.map((item) => (
              <article
                key={item}
                className="rounded-[6px] border border-border bg-off-white p-6"
              >
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                  Scope
                </span>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-charcoal">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <CTABand />
      </ScrollRevealBlock>
    </>
  );
}
