import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import { ServiceSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Industrial Electrical Works - HT/LT Panel, Cable Laying & Transformer Installation India",
  description:
    "NBES handles complete industrial and commercial electrical installation: HT/LT panels, cable laying, transformer works, switchgear, load testing and power factor correction across India.",
  alternates: {
    canonical: "https://nbes.vercel.app/services/electrical-works",
  },
};

const services = [
  "HT/LT panel installation and commissioning",
  "Cable laying, termination, and dressing",
  "Transformer installation and testing",
  "Switchgear and protection systems",
  "Load testing, earthing checks, and documentation",
  "Power factor correction and troubleshooting",
];

export default function ElectricalWorksPage() {
  return (
    <>
      <ServiceSchema
        name="Industrial Electrical Works"
        description="HT/LT panel installation, cable laying, transformer works, switchgear, load testing and power factor correction across India."
        url="https://nbes.vercel.app/services/electrical-works"
      />

      <ScrollRevealBlock>
        <section className="bg-black py-24 text-white">
          <div className="container-width grid gap-12 lg:grid-cols-[60fr_40fr] lg:items-center">
            <div>
              <SectionLabel>Electrical Works</SectionLabel>
              <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">
                Industrial Electrical Works
                <br />
                HT/LT Installation India
              </h1>
              <p className="mt-5 max-w-[640px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                New Bharat Engineer Services delivers industrial and commercial
                electrical installation for factories, warehouses, campuses, and
                public facilities. We execute HT/LT panel work, cable laying,
                transformer installation, switchgear upgrades, and complete test
                and handover documentation.
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
              label="Industrial electrical panel installation - NBES"
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
        <CTABand />
      </ScrollRevealBlock>
    </>
  );
}
