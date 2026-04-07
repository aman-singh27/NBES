import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  ExternalLink,
  GitMerge,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import StatsCounter from "@/components/StatsCounter";

type ValueItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type TeamMember = {
  name: string;
  role: string;
  gradient: string;
};

type Certification = {
  name: string;
  description: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

const valueItems: ValueItem[] = [
  {
    title: "Standards-Driven",
    description:
      "Every installation is executed to IS and IEC specifications with documentation ready for technical audits.",
    icon: BadgeCheck,
  },
  {
    title: "Complete Accountability",
    description:
      "One accountable team from survey to handover, with clear reporting and coordination at every milestone.",
    icon: GitMerge,
  },
  {
    title: "Safety First",
    description:
      "Our teams follow strict safety procedures with zero-compromise site discipline and risk controls.",
    icon: ShieldCheck,
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Priya Menon",
    role: "Operations Head",
    gradient: "linear-gradient(135deg, #304f75 0%, #13263e 100%)",
  },
  {
    name: "Rajat Kulkarni",
    role: "Project Engineering Lead",
    gradient: "linear-gradient(135deg, #4a5f7d 0%, #1a2537 100%)",
  },
  {
    name: "Nisha Verma",
    role: "Compliance Manager",
    gradient: "linear-gradient(135deg, #48688a 0%, #1d3149 100%)",
  },
  {
    name: "Amit Khanna",
    role: "Regional Delivery Manager",
    gradient: "linear-gradient(135deg, #435f80 0%, #1d2d42 100%)",
  },
];

const certifications: Certification[] = [
  { name: "IS 3043", description: "Earthing design and execution standards" },
  { name: "IS 732", description: "Electrical wiring installation practices" },
  { name: "IEC 60364", description: "Low-voltage electrical installations" },
  { name: "BIS Compliance", description: "Conformance to Indian standards" },
  { name: "ISO 9001:2015", description: "Quality management system" },
  {
    name: "Internal Safety Audit",
    description: "Documented zero-incident safety process",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Site Assessment",
    description:
      "We evaluate load, risk, and operational constraints to define scope with clarity.",
  },
  {
    title: "Design & Proposal",
    description:
      "Our team submits compliant technical designs, BOQs, and practical execution plans.",
  },
  {
    title: "Execution",
    description:
      "Certified technicians deliver with safety controls, supervision, and progress checkpoints.",
  },
  {
    title: "Test & Handover",
    description:
      "We test, document, and hand over with full reports for operations and audit readiness.",
  },
];

export const metadata: Metadata = {
  title: "About Us - New Bharat Engineer Services",
  description:
    "NBES is a certified electrical and technical services company serving industrial, commercial, and government clients across India with IS, IEC, and BIS-compliant execution.",
  alternates: {
    canonical: "https://nbes.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <ScrollRevealBlock>
        <section className="bg-black py-28 text-center">
          <div className="container-width">
            <SectionLabel centered>Our Story</SectionLabel>
            <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">
              ABOUT NBES
            </h1>
            <p className="mx-auto mt-5 max-w-[560px] font-body text-[17px] font-light leading-[1.75] text-white/65">
              For over 15 years, NBES has been the trusted electrical and
              technical partner for contractors, builders, and industry across
              India.
            </p>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white section-padding">
          <div className="container-width grid grid-cols-1 items-start gap-14 lg:grid-cols-[60fr_40fr] lg:gap-20">
            <div>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="mt-3 font-display text-display-md font-extrabold uppercase text-black">
                TRUSTED BY INDUSTRY
                <br />
                FOR 15+ YEARS
              </h2>
              <div className="mt-5 space-y-5 font-body text-[17px] font-light leading-[1.75] text-mid-grey">
                <p>
                  NBES began with a simple goal: deliver dependable electrical
                  execution that project teams can trust under pressure. Founded
                  by engineers with on-site contracting experience, we built our
                  reputation by solving complex industrial and commercial
                  requirements without compromising safety.
                </p>
                <p>
                  From our early panel and earthing assignments to multi-state
                  contracts, each phase of growth was earned through measurable
                  outcomes, on-time delivery, and disciplined coordination with
                  client teams. Key milestones include our first large
                  industrial commissioning project, expansion into multiple
                  states, and documented alignment with IS and IEC-driven
                  practices.
                </p>
                <p>
                  What sets NBES apart is execution ownership. We do not operate
                  as a fragmented vendor chain. We provide a single accountable
                  team across design inputs, installation, testing, and final
                  handover so clients get clarity, speed, and consistency from
                  day one.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                <ImagePlaceholder
                  gradient="linear-gradient(135deg, #1f3a5d 0%, #102338 100%)"
                  label="NBES industrial project team"
                  className="w-full aspect-[4/3]"
                />

                <div className="hidden lg:block">
                  <ImagePlaceholder
                    gradient="linear-gradient(135deg, #325786 0%, #193354 100%)"
                    label="Site execution in progress"
                    className="absolute -bottom-6 -right-6 z-10 w-[70%] aspect-[4/3] border-4 border-white"
                  />
                </div>

                <div className="absolute -bottom-6 left-4 z-20 rounded-[8px] bg-accent p-5 text-white shadow-[0_12px_40px_rgba(0,71,204,0.3)]">
                  <p className="font-display text-[44px] font-extrabold leading-none">
                    15+
                  </p>
                  <p className="mt-1 font-body text-[13px] text-white/80">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <StatsCounter />
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-off-white section-padding">
          <div className="container-width">
            <div className="mb-16 text-center">
              <SectionLabel centered>Our Approach</SectionLabel>
              <h2 className="mt-3 font-display text-display-md font-extrabold uppercase text-black">
                HOW WE WORK
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:divide-x md:divide-border md:gap-0">
              {valueItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={[
                      "text-center md:px-8 md:text-left",
                      index < valueItems.length - 1
                        ? "border-b border-border pb-8 md:border-b-0 md:pb-0"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent-light md:mx-0">
                      <Icon size={28} className="text-accent" />
                    </div>
                    <h3 className="mb-3 font-display text-[20px] font-bold uppercase text-black">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm leading-[1.65] text-mid-grey">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white section-padding">
          <div className="container-width">
            <div className="mb-12">
              <SectionLabel>Our People</SectionLabel>
              <h2 className="mt-3 font-display text-display-md font-extrabold uppercase text-black">
                OUR PROFESSIONAL TEAM
              </h2>
            </div>

            <article className="mb-16 grid overflow-hidden rounded-[8px] bg-off-white md:grid-cols-[45fr_55fr]">
              <ImagePlaceholder
                gradient="linear-gradient(135deg, #395478 0%, #15283f 100%)"
                label="Founder portrait"
                className="h-full min-h-[360px] md:min-h-[420px]"
              />
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="font-display text-[32px] font-extrabold uppercase text-black">
                  Arvind S. Nair
                </h3>
                <p className="mt-1 font-body text-[15px] font-medium text-accent">
                  Founder & Managing Director, NBES
                </p>
                <div className="mt-5 space-y-4 font-body text-[16px] font-light leading-[1.75] text-mid-grey">
                  <p>
                    With over two decades in electrical execution and project
                    leadership, Arvind founded NBES to bridge the gap between
                    design intent and disciplined on-ground delivery.
                  </p>
                  <p>
                    He has led teams across industrial plants, commercial
                    facilities, and government projects with a clear focus on
                    compliance, safety culture, and long-term client
                    relationships.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 font-body text-sm text-charcoal">
                  <Award size={18} className="text-accent" />
                  <span>
                    Certified Electrical Project Lead | Safety & Quality Systems
                  </span>
                </div>

                <Link
                  href="https://www.linkedin.com"
                  aria-label="Founder LinkedIn profile"
                  className="mt-5 inline-flex w-fit text-mid-grey transition-colors hover:text-accent"
                >
                  <ExternalLink size={20} />
                </Link>
              </div>
            </article>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="overflow-hidden rounded-[6px] bg-off-white transition-transform duration-300 hover:-translate-y-[3px]"
                >
                  <ImagePlaceholder
                    gradient={member.gradient}
                    label={member.name}
                    className="aspect-square w-full"
                  />
                  <div className="p-4">
                    <h3 className="font-display text-[17px] font-bold uppercase text-black">
                      {member.name}
                    </h3>
                    <p className="mt-1 font-body text-sm text-mid-grey">
                      {member.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-off-white section-padding">
          <div className="container-width grid grid-cols-1 items-start gap-12 lg:grid-cols-[55fr_45fr] lg:gap-20">
            <div>
              <SectionLabel>Standards & Compliance</SectionLabel>
              <h2 className="mt-3 font-display text-display-md font-extrabold uppercase text-black">
                CERTIFIED TO THE
                <br />
                HIGHEST STANDARDS
              </h2>
              <p className="body-light mt-5 max-w-[560px]">
                We don&apos;t just meet standards - we document every
                installation for your audit trail. All certifications on
                request.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certifications.map((cert) => (
                <article
                  key={cert.name}
                  className="rounded-[6px] border border-border bg-white p-5"
                >
                  <Award size={24} className="mb-3 text-accent" />
                  <h3 className="font-display text-[15px] font-bold uppercase text-black">
                    {cert.name}
                  </h3>
                  <p className="mt-1 font-body text-[12px] text-mid-grey">
                    {cert.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white section-padding">
          <div className="container-width">
            <div className="mb-16 text-center">
              <SectionLabel centered>Execution Workflow</SectionLabel>
              <h2 className="mt-3 font-display text-display-md font-extrabold uppercase text-black">
                OUR PROCESS
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-[12.5%] right-[12.5%] top-9 z-0 hidden h-px bg-border lg:block" />
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="relative z-10 text-center"
                  >
                    <div className="mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-border bg-white font-display text-[24px] font-extrabold text-accent transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_8px_24px_rgba(0,71,204,0.3)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mb-2 font-display text-[17px] font-bold uppercase text-black">
                      {step.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.6] text-mid-grey">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
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
