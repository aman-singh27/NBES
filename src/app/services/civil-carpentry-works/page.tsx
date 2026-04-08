import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import { ServiceSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Civil & Carpentry Works - Office Repairs and Fit-Outs Delhi-NCR",
  description:
    "NBES delivers civil repairs, minor construction, carpentry, and interior works for corporate offices in Gurgaon and Noida. Skilled workforce, minimal disruption.",
  alternates: {
    canonical: "https://nbes.vercel.app/services/civil-carpentry-works",
  },
};

const civilCarpentryItems = [
  "Minor civil repairs and reinstatement works",
  "Office partition and drywall works",
  "False ceiling installation and repairs",
  "Flooring upgrades and patch repairs",
  "Custom carpentry and joinery",
  "Interior fit-outs and finishing support",
];

export default function CivilCarpentryWorksPage() {
  return (
    <>
      <ServiceSchema
        name="Civil & Carpentry Works"
        description="Civil repairs, partition works, carpentry, and fit-outs for corporate office facilities across Delhi-NCR."
        url="https://nbes.vercel.app/services/civil-carpentry-works"
      />

      <ScrollRevealBlock>
        <section className="bg-black py-24 text-white">
          <div className="container-width grid gap-12 lg:grid-cols-[58fr_42fr] lg:items-center">
            <div>
              <SectionLabel>Civil & Carpentry</SectionLabel>
              <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">
                Civil & Carpentry Works
                <br />
                For Corporate Offices
              </h1>
              <p className="mt-5 max-w-[640px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                NBES executes office repair and fit-out requirements including
                civil touch-ups, partition changes, carpentry, and finishing.
                Our teams plan work around office operations to reduce
                disruption and maintain site safety.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-btn bg-accent px-6 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
              >
                Request Civil & Carpentry Quote
              </Link>
            </div>

            <ImagePlaceholder
              gradient="linear-gradient(135deg, #1a1410 0%, #2a2015 100%)"
              label="Civil and carpentry works for office fit-outs - NBES"
              className="aspect-[4/5] w-full rounded-[8px] border border-white/10"
            />
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white section-padding">
          <div className="container-width grid gap-8 lg:grid-cols-3">
            {civilCarpentryItems.map((item) => (
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