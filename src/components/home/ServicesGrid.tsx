"use client";

import Link from "next/link";
import { Anchor, ArrowRight, Shield, Users, Wrench, Zap } from "lucide-react";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";

const services = [
  {
    num: "01",
    icon: Zap,
    title: "Electrical Works",
    desc: "Comprehensive electrical installation, maintenance, and troubleshooting for corporate offices and commercial facilities across Delhi-NCR.",
    features: [
      "Office Electrical Upgrades",
      "Preventive Maintenance",
      "Fault Rectification",
      "Safety Documentation",
    ],
    href: "/services/electrical-works",
  },
  {
    num: "02",
    icon: Anchor,
    title: "Earthing Solutions",
    desc: "Electrical earthing systems ensuring safety and regulatory compliance for corporate facilities, data centers, and office buildings.",
    features: [
      "Soil Testing",
      "Chemical Earthing",
      "Lightning Protection",
      "Compliance Reports",
    ],
    href: "/services/earthing-solutions",
  },
  {
    num: "03",
    icon: Shield,
    title: "Security Systems",
    desc: "CCTV surveillance and access control systems designed and installed for corporate offices, campuses, and commercial properties.",
    features: [
      "CCTV Systems",
      "Access Control",
      "Fire Alarm Integration",
      "Support Services",
    ],
    href: "/services/security-systems",
  },
  {
    num: "04",
    icon: Users,
    title: "Facility Workforce",
    desc: "On-call skilled technicians for electrical, plumbing, civil, and carpentry requirements across Delhi-NCR facilities.",
    features: [
      "Electrical Teams",
      "Plumbing Technicians",
      "Civil & Carpentry",
      "Rapid Deployment",
    ],
    href: "/services/technical-manpower",
  },
  {
    num: "05+",
    icon: Wrench,
    title: "More Services",
    desc: "Explore plumbing solutions, civil and carpentry works, and interior workspace enhancement for corporate offices.",
    features: [
      "Plumbing Solutions",
      "Civil & Carpentry Works",
      "Interior Works",
      "Full Service Portfolio",
    ],
    href: "/services",
  },
] as const;

export default function ServicesGrid() {
  return (
    <section className="bg-white section-padding">
      <div className="container-width">
        <ScrollRevealBlock>
          <div className="mb-14 grid items-end gap-16 lg:grid-cols-[60fr_40fr]">
            <div>
              <SectionLabel>What We Offer</SectionLabel>
              <h2 className="mt-3 font-display text-display-lg font-extrabold uppercase text-black">
                OUR CORE
                <br />
                SERVICES
              </h2>
            </div>
            <p className="body-light text-[17px]">
              Integrated corporate facility services across Delhi-NCR, from
              electrical maintenance and earthing to CCTV, workforce support,
              plumbing, and interior works.
            </p>
          </div>
        </ScrollRevealBlock>

        <div className="grid overflow-hidden border border-border lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isRight = index % 2 === 1;
            const isBottom = index > 1;

            return (
              <article
                key={service.title}
                className={`group relative overflow-hidden p-10 transition-colors hover:bg-off-white ${
                  isRight ? "lg:border-l lg:border-border" : ""
                } ${isBottom ? "lg:border-t lg:border-border" : ""}`}
              >
                <span className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-[350ms] group-hover:scale-x-100" />

                <p className="mb-6 font-display text-[11px] font-bold tracking-[0.14em] text-accent">
                  {service.num} -
                </p>

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-accent-light transition-colors group-hover:bg-accent">
                  <Icon
                    size={24}
                    className="text-accent transition-colors group-hover:text-white"
                  />
                </div>

                <h3 className="mb-3 font-display text-[24px] font-bold uppercase text-black">
                  {service.title}
                </h3>
                <p className="mb-6 font-body text-sm leading-[1.65] text-mid-grey">
                  {service.desc}
                </p>

                <ul className="flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-[10px] text-sm text-charcoal"
                    >
                      <span className="h-[6px] w-[6px] flex-shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="group/link mt-7 inline-flex items-center gap-[6px] font-display text-[13px] font-bold uppercase text-accent"
                >
                  Explore Service
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/link:translate-x-[6px]"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
