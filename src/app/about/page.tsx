import type { Metadata } from "next";
import { Award, BadgeCheck, GitMerge, ShieldCheck } from "lucide-react";
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
    title: "Client-Centric Approach",
    description:
      "We take time to understand each client's operational requirements and deliver solutions that are practical, scalable, and aligned with their needs.",
    icon: BadgeCheck,
  },
  {
    title: "Planned Execution",
    description:
      "Defined timelines, structured workflows, and disciplined on-site processes ensure minimal disruption to your operations.",
    icon: GitMerge,
  },
  {
    title: "Safety & Compliance",
    description:
      "All service delivery adheres to safety norms and regulatory requirements - protecting your employees, environment, and assets.",
    icon: ShieldCheck,
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Operations Team",
    role: "Field & Site Operations",
    gradient: "linear-gradient(135deg, #304f75 0%, #13263e 100%)",
  },
  {
    name: "Electrical Division",
    role: "Electrical & Earthing",
    gradient: "linear-gradient(135deg, #4a5f7d 0%, #1a2537 100%)",
  },
  {
    name: "Facility Services",
    role: "Plumbing, Civil & Carpentry",
    gradient: "linear-gradient(135deg, #48688a 0%, #1d3149 100%)",
  },
  {
    name: "Technology Team",
    role: "CCTV & Security Systems",
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
    title: "Requirement Assessment",
    description:
      "Clear evaluation of client needs, site conditions, and operational constraints before any work begins.",
  },
  {
    title: "Planned Scheduling",
    description:
      "Defined timelines and workflows submitted to the client to ensure alignment and minimal disruption.",
  },
  {
    title: "Skilled Execution",
    description:
      "Trained technicians carry out work with safety controls, quality checks, and site discipline.",
  },
  {
    title: "Handover & Follow-Up",
    description:
      "Completed work is documented and handed over. We remain available for follow-up and ongoing support.",
  },
];

export const metadata: Metadata = {
  title: "About Us - New Bharat Engineering Services | Since 2003",
  description:
    "NBES (New Bharat Engineering Services) has delivered electrical and facility management services to leading corporate clients across Delhi-NCR since 2003. Learn about our approach, values, and team.",
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
              Established in 2003, NBES has built a reputation for reliability,
              responsiveness, and disciplined facility service delivery across
              Delhi-NCR.
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
                TRUSTED BY CORPORATES
                <br />
                FOR 20+ YEARS
              </h2>
              <div className="mt-5 space-y-5 font-body text-[17px] font-light leading-[1.75] text-mid-grey">
                <p>
                  NBES began with a clear purpose: to give corporate
                  organisations a dependable single partner for all their
                  facility service needs. Founded in Gurgaon in 2003, we have
                  spent over two decades building relationships with leading
                  companies across Delhi-NCR by delivering consistent,
                  high-quality service.
                </p>
                <p>
                  From electrical installations and earthing to plumbing, CCTV,
                  carpentry, civil works, and interior fit-outs, we handle the
                  full range of facility requirements. Our clients include HCL,
                  Nestle, Fidelity, MetLife, Mercer, Deloitte, R1 RCM, and Huron
                  Consulting Group.
                </p>
                <p>
                  What distinguishes NBES is our client-centric approach: we
                  assess requirements clearly, execute with discipline, and
                  maintain quality standards across every service category so
                  facility managers can rely on one team rather than managing
                  multiple vendors.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                <ImagePlaceholder
                  gradient="linear-gradient(135deg, #1f3a5d 0%, #102338 100%)"
                  label="NBES corporate facility team"
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
                    20+
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
                label="Leadership team"
                className="h-full min-h-[360px] md:min-h-[420px]"
              />
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="font-display text-[32px] font-extrabold uppercase text-black">
                  Our Leadership
                </h3>
                <p className="mt-1 font-body text-[15px] font-medium text-accent">
                  Director & Founder
                </p>
                <div className="mt-5 space-y-4 font-body text-[16px] font-light leading-[1.75] text-mid-grey">
                  <p>
                    NBES was founded with a vision to provide dependable,
                    multi-discipline facility services to corporate
                    organisations. With over two decades in operation, our
                    leadership has guided the company through consistent growth
                    while maintaining the same commitment to quality and client
                    satisfaction that defined us from day one.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 font-body text-sm text-charcoal">
                  <Award size={18} className="text-accent" />
                  <span>
                    20+ Years of Operational Excellence in Corporate Facilities
                  </span>
                </div>
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
