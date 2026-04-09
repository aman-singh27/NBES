"use client";

import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";

const testimonials = [
  {
    quote:
      "NBES has been our go-to electrical and facility partner for years. Their response time and quality of work stands out - we never have to follow up twice.",
    name: "Facility Manager",
    role: "IT Services Company, Gurgaon",
    initials: "FM",
  },
  {
    quote:
      "The team handles everything from electrical faults to plumbing issues with equal professionalism. Managing our office facility has become much simpler since we engaged NBES.",
    name: "Operations Head",
    role: "Financial Services Firm, Noida",
    initials: "OH",
  },
  {
    quote:
      "What sets NBES apart is their reliability. They show up on time, complete the work correctly, and document it well. That's exactly what a corporate facility needs.",
    name: "Admin & Facility Lead",
    role: "Consulting Group, Delhi-NCR",
    initials: "AL",
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
                WHAT CLIENTS SAY
                <br />
                ABOUT OUR WORK
              </h2>
            </div>
            <p className="body-light">
              Trusted by teams that value standards, accountability, and safe
              project delivery.
            </p>
          </div>
          <p className="-mt-8 mb-8 font-body text-[13px] text-mid-grey">
            Testimonials from verified facility and operations managers across
            our client portfolio.
          </p>
        </ScrollRevealBlock>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[8px] bg-white p-8 transition-all hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            >
              <p className="mb-5 font-display text-[64px] font-extrabold leading-[0.5] text-accent/30">
                &ldquo;
              </p>
              <div className="mb-4 flex gap-[3px] text-sm text-[#F5A623]">
                ★★★★★
              </div>
              <p className="mb-7 font-body text-sm leading-[1.7] text-charcoal">
                {item.quote}
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent font-display text-[16px] font-bold text-white">
                  {item.initials}
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-black">
                    {item.name}
                  </p>
                  <p className="mt-[2px] font-body text-[12px] text-mid-grey">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
