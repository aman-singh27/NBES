import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, GitMerge, ShieldCheck } from "lucide-react";
import CTABand from "@/components/CTABand";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import StatsCounter from "@/components/StatsCounter";

export const metadata: Metadata = {
  title: "Electrical & Facility Services Delhi-NCR | Since 2003",
  description:
    "New Bharat Engineering Services (NBES) delivers electrical, plumbing, CCTV, earthing, civil, carpentry, and interior works for corporate offices across Delhi-NCR. Serving HCL, Nestle, Deloitte, and more since 2003.",
  alternates: {
    canonical: "https://nbes.vercel.app/",
  },
};

const logos = [
  "HCL",
  "Nestle",
  "Fidelity",
  "MetLife",
  "Mercer",
  "Deloitte",
  "R1 RCM",
  "Huron Consulting",
];

const whyItems = [
  {
    title: "20+ Years of Experience",
    description:
      "Founded in 2003, NBES brings over two decades of reliable facility service delivery to corporate clients across Delhi-NCR.",
    icon: BadgeCheck,
  },
  {
    title: "Corporate-Grade Execution",
    description:
      "We understand corporate environments - minimal disruption, documented handovers, and consistent quality across all service categories.",
    icon: GitMerge,
  },
  {
    title: "Full-Facility Coverage",
    description:
      "From electrical and earthing to plumbing, civil, CCTV, and interior works - one trusted partner for your complete facility needs.",
    icon: ShieldCheck,
  },
] as const;

const serviceAreas = [
  "Gurgaon",
  "Noida",
  "Delhi",
  "Faridabad",
  "Greater Noida",
  "NCR Region",
];

export default function Home() {
  return (
    <>
      <Hero />

      <ScrollRevealBlock>
        <section className="border-b border-border bg-off-white py-8">
          <div className="container-width flex items-center gap-4 lg:gap-12">
            <p className="mr-2 whitespace-nowrap border-r border-border pr-6 font-body text-[11px] font-medium uppercase tracking-[0.14em] text-mid-grey lg:mr-12 lg:pr-12">
              Trusted By
            </p>

            <div className="flex flex-1 flex-wrap gap-3 lg:gap-4">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="rounded-[6px] border border-border bg-white px-4 py-[10px] font-display text-sm font-bold uppercase tracking-[0.06em] text-[#999] transition-colors hover:text-charcoal"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealBlock>

      <ServicesGrid />
      <StatsCounter />
      <FeaturedProjects />

      <section className="bg-white section-padding">
        <div className="container-width grid items-start gap-20 lg:grid-cols-[40fr_60fr]">
          <ScrollRevealBlock>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="mt-3 mb-5 font-display text-display-md font-extrabold uppercase text-black">
              TRUSTED PARTNER
              <br />
              FOR CORPORATE
              <br />
              FACILITIES
            </h2>
            <p className="body-light max-w-[560px]">
              NBES combines technical depth, disciplined service workflows, and
              responsive on-ground teams to support day-to-day facility
              operations for corporate offices across Delhi-NCR.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-btn bg-accent px-7 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-all hover:-translate-y-px hover:bg-accent-dark"
            >
              Request a Consultation
              <ArrowRight size={16} />
            </Link>
          </ScrollRevealBlock>

          <ScrollRevealBlock>
            <div className="flex flex-col gap-8">
              {whyItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[8px] bg-accent-light">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-display text-[17px] font-bold uppercase text-black">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm leading-[1.6] text-mid-grey">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </ScrollRevealBlock>
        </div>
      </section>

      <Testimonials />

      <ScrollRevealBlock>
        <section className="bg-black section-padding text-white">
          <div className="container-width grid gap-10 lg:grid-cols-[40fr_60fr] lg:items-start">
            <div>
              <SectionLabel centered={false}>Service Areas</SectionLabel>
              <h2 className="mt-3 font-display text-display-md font-extrabold uppercase text-white">
                WHERE WE WORK
              </h2>
            </div>
            <div>
              <p className="max-w-[720px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                New Bharat Engineering Services operates across Delhi-NCR, with
                offices in Gurgaon (Haryana) and Noida (Uttar Pradesh). We serve
                corporate clients across Delhi, Gurgaon, Noida, Faridabad,
                Greater Noida, and the broader NCR region.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-[999px] border border-white/10 bg-white/5 px-4 py-2 font-body text-sm text-white/80"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollRevealBlock>

      <CTABand />
    </>
  );
}
