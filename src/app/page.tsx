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
      <CTABand />
    </>
  );
}
