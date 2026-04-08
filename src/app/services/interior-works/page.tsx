import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import { ServiceSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Interior Works - Workspace Enhancement Services Delhi-NCR",
  description:
    "NBES handles functional and aesthetic workspace enhancement including false ceiling, flooring, painting, and modular fit-outs for corporate facilities in Delhi-NCR.",
  alternates: {
    canonical: "https://nbes.vercel.app/services/interior-works",
  },
};

const interiorItems = [
  "False ceiling installation and upgrades",
  "Flooring and finish improvements",
  "Painting and surface treatment works",
  "Modular workstation installation",
  "Space planning support for office layouts",
  "Detailing and final finishing works",
];

export default function InteriorWorksPage() {
  return (
    <>
      <ServiceSchema
        name="Interior Works"
        description="Workspace enhancement services including false ceiling, flooring, painting, and fit-outs for corporate offices in Delhi-NCR."
        url="https://nbes.vercel.app/services/interior-works"
      />

      <ScrollRevealBlock>
        <section className="bg-black py-24 text-white">
          <div className="container-width grid gap-12 lg:grid-cols-[58fr_42fr] lg:items-center">
            <div>
              <SectionLabel>Interior Works</SectionLabel>
              <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">
                Workspace Enhancement
                <br />
                Interior Services Delhi-NCR
              </h1>
              <p className="mt-5 max-w-[640px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                NBES improves functional and visual quality of office spaces
                through practical interior works. We execute upgrades such as
                false ceiling, flooring, painting, and modular setup with a
                delivery plan aligned to facility operations.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-btn bg-accent px-6 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
              >
                Request Interior Works Quote
              </Link>
            </div>

            <ImagePlaceholder
              gradient="linear-gradient(135deg, #1a1020 0%, #2a1830 100%)"
              label="Interior workspace enhancement services - NBES"
              className="aspect-[4/5] w-full rounded-[8px] border border-white/10"
            />
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white section-padding">
          <div className="container-width grid gap-8 lg:grid-cols-3">
            {interiorItems.map((item) => (
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
