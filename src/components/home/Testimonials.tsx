"use client";

import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";

const testimonials = [
  {
    quote:
      "NBES delivered our earthing and panel work with exceptional documentation quality. Their team was technically strong and highly disciplined on-site.",
    name: "S. Patil",
    role: "Plant Head, Steel Manufacturing Unit",
    initials: "SP",
  },
  {
    quote:
      "From survey to commissioning, NBES handled our security and electrical integration smoothly. Timelines were met without compromising safety.",
    name: "R. Menon",
    role: "Facilities Manager, Corporate Campus",
    initials: "RM",
  },
  {
    quote:
      "Their manpower support and supervision gave us real execution confidence during peak project windows. Professional and responsive throughout.",
    name: "A. Desai",
    role: "Project Director, EPC Contractor",
    initials: "AD",
  },
] as const;

export default function Testimonials() {
  return (
    <section className="bg-off-white section-padding">
      <div className="container-width">
        <ScrollRevealBlock>
          <div className="mb-12 grid items-end gap-16 lg:grid-cols-2">
            <div>
              <SectionLabel>Client Reviews</SectionLabel>
              <h2 className="mt-3 font-display text-display-lg font-extrabold uppercase text-black">
                WHAT OUR
                <br />
                CLIENTS SAY
              </h2>
            </div>
            <p className="body-light">Trusted by teams that value standards, accountability, and safe project delivery.</p>
          </div>
        </ScrollRevealBlock>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[8px] bg-white p-8 transition-all hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            >
              <p className="mb-5 font-display text-[64px] font-extrabold leading-[0.5] text-accent/30">&ldquo;</p>
              <div className="mb-4 flex gap-[3px] text-sm text-[#F5A623]">★★★★★</div>
              <p className="mb-7 font-body text-sm leading-[1.7] text-charcoal">{item.quote}</p>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-[16px] font-bold text-white">
                  {item.initials}
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-black">{item.name}</p>
                  <p className="mt-[2px] font-body text-[12px] text-mid-grey">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
