import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import { ServiceSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "CCTV Installation Delhi-NCR - Corporate Office Surveillance Systems",
  description:
    "NBES designs and installs CCTV surveillance, access control, and fire alarm systems for corporate offices and commercial properties across Delhi-NCR.",
  alternates: {
    canonical: "https://nbes.vercel.app/services/security-systems",
  },
};

const securityItems = [
  "CCTV surveillance design and installation",
  "Biometric and card-based access control",
  "Fire alarm and detection integration",
  "Monitoring coverage for office floors and entries",
  "Video management software setup",
  "Preventive maintenance and support",
];

export default function SecuritySystemsPage() {
  return (
    <>
      <ServiceSchema
        name="CCTV Installation Delhi-NCR"
        description="CCTV, access control, and fire alarm system services for corporate offices and commercial properties across Delhi-NCR."
        url="https://nbes.vercel.app/services/security-systems"
      />

      <ScrollRevealBlock>
        <section className="bg-black py-24 text-white">
          <div className="container-width grid gap-12 lg:grid-cols-[58fr_42fr] lg:items-center">
            <div>
              <SectionLabel>Security Systems</SectionLabel>
              <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">
                CCTV Installation & Access Control
                <br />
                Delhi-NCR Corporate Offices
              </h1>
              <p className="mt-5 max-w-[640px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                We design and install integrated security systems for office
                campuses, corporate floors, and commercial properties. Our team
                covers CCTV, access control, and fire alarm integration for
                reliable day-to-day facility security in Delhi-NCR.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-btn bg-accent px-6 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
              >
                Request Security Quote
              </Link>
            </div>

            <ImagePlaceholder
              gradient="linear-gradient(135deg, #1a0d2a 0%, #2a1a3a 100%)"
              label="CCTV and access control installation - NBES"
              className="aspect-[4/5] w-full rounded-[8px] border border-white/10"
            />
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white section-padding">
          <div className="container-width grid gap-8 lg:grid-cols-3">
            {securityItems.map((item) => (
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
