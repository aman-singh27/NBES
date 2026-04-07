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
  title: "Industrial Electrical Works, Earthing & Security Solutions India",
  description:
    "New Bharat Engineer Services (NBES) delivers HT/LT panel installation, IS 3043 earthing, CCTV security, and certified electrical manpower for factories, commercial buildings, and government projects across India.",
  alternates: {
    canonical: "https://nbes.vercel.app/",
  },
};

const logos = [
  "Client Co.",
  "Group XYZ",
  "Industrial Ltd",
  "Infra Corp",
  "Gov Agency",
  "Builder Co.",
];

const whyItems = [
  {
    title: "IS & IEC Certified Standards",
    description:
      "Every execution follows documented standards for safety, quality, and compliance readiness.",
    icon: BadgeCheck,
  },
  {
    title: "End-to-End Delivery",
    description:
      "From assessment to commissioning, one accountable team manages your complete scope.",
    icon: GitMerge,
  },
  {
    title: "Zero-Incident Safety Culture",
    description:
      "Disciplined site protocols and supervised teams keep project environments safe and controlled.",
    icon: ShieldCheck,
  },
] as const;

const serviceAreas = [
  "Nagpur",
  "Pune",
  "Mumbai",
  "Hyderabad",
  "Gujarat",
  "Pan-India Mobilization",
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
              TRUSTED BUILDERS
              <br />
              WITH YEARS OF
              <br />
              EXPERIENCE
            </h2>
            <p className="body-light max-w-[560px]">
              NBES combines technical depth, certified field teams, and
              disciplined project controls to deliver dependable outcomes for
              industrial, commercial, and government clients across India.
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
                New Bharat Engineer Services executes projects across India,
                with active presence in Maharashtra, Telangana, Gujarat, and
                other industrial corridors. We mobilise teams pan-India for
                project requirements.
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
