import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import { ServiceSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Certified Electrical Manpower Supply - ITI Electricians & Supervisors India",
  description:
    "NBES supplies ITI and diploma-certified electricians, site supervisors, and engineers for short and long-term contracts. Insured workforce, Contract Labour Act compliant, rapid mobilization in 5-7 days.",
  alternates: {
    canonical: "https://nbes.vercel.app/services/technical-manpower",
  },
};

const manpowerItems = [
  "ITI and diploma-certified electricians",
  "Site supervisors and project engineers",
  "Short and long-term contract support",
  "Contract Labour Act compliant deployment",
  "Workmen's compensation insured workforce",
  "Rapid mobilization in 5-7 working days",
];

export default function TechnicalManpowerPage() {
  return (
    <>
      <ServiceSchema
        name="Certified Electrical Manpower Supply"
        description="ITI and diploma-certified electricians, supervisors, and engineers for short and long-term contracts across India."
        url="https://nbes.vercel.app/services/technical-manpower"
      />

      <ScrollRevealBlock>
        <section className="bg-black py-24 text-white">
          <div className="container-width grid gap-12 lg:grid-cols-[58fr_42fr] lg:items-center">
            <div>
              <SectionLabel>Technical Manpower</SectionLabel>
              <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">
                Certified Electrical Manpower
                <br />
                ITI Electricians India
              </h1>
              <p className="mt-5 max-w-[640px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                New Bharat Engineer Services supplies trained electricians,
                supervisors, and engineers for industrial and commercial
                contracts. We support rapid mobilization, site supervision, and
                compliance-led workforce deployment.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-btn bg-accent px-6 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
              >
                Request Manpower Quote
              </Link>
            </div>

            <ImagePlaceholder
              gradient="linear-gradient(135deg, #1a1a0d 0%, #2a2a1a 100%)"
              label="Certified technical manpower on site - NBES"
              className="aspect-[4/5] w-full rounded-[8px] border border-white/10"
            />
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white section-padding">
          <div className="container-width grid gap-8 lg:grid-cols-3">
            {manpowerItems.map((item) => (
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
