"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import clsx from "clsx";
import SectionLabel from "@/components/SectionLabel";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What types of projects does NBES handle?",
    answer:
      "NBES handles industrial and commercial electrical installations, IS 3043 earthing systems, integrated security installations, and technical manpower deployment.",
  },
  {
    question: "Which states does NBES operate in?",
    answer:
      "NBES executes projects across India, with active work documented in Maharashtra, Telangana, and Gujarat among other regions.",
  },
  {
    question: "Can NBES take a turnkey electrical project?",
    answer:
      "Yes. NBES supports complete delivery including HT/LT panel installation, cable laying and termination, transformer and switchgear installation, testing, and commissioning.",
  },
  {
    question: "Are NBES technicians certified and insured?",
    answer:
      "Yes. NBES deploys ITI and diploma-certified electricians, supervisors, and engineers with insured manpower and compliance-focused site deployment.",
  },
  {
    question: "How quickly can you mobilize?",
    answer:
      "NBES can rapidly mobilize technical teams for short-term and long-term engagements, typically within 5 to 7 working days depending on project scope.",
  },
  {
    question: "Do you offer AMC and maintenance contracts?",
    answer:
      "Yes. NBES provides annual maintenance contracts and periodic re-testing support for electrical, earthing, and security systems.",
  },
];

type FAQAccordionProps = {
  sectionClassName?: string;
};

export default function FAQAccordion({
  sectionClassName = "bg-white section-padding",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className={sectionClassName}>
      <div className="container-width">
        <div className="mx-auto max-w-[720px]">
          <div className="text-center">
            <SectionLabel centered>FAQ</SectionLabel>
            <h2 className="mt-4 font-display text-display-md font-extrabold uppercase text-black">
              FREQUENTLY ASKED
              <br />
              QUESTIONS
            </h2>
          </div>

          <div className="mt-10">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.question} className="border-b border-border">
                  <button
                    type="button"
                    id={`faq-question-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => toggleItem(index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-body text-[16px] font-medium text-black transition-colors hover:text-accent"
                  >
                    <span>{item.question}</span>
                    <span
                      className={clsx(
                        "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-off-white text-black transition-all duration-300",
                        isOpen && "rotate-45 bg-accent text-white",
                      )}
                    >
                      <Plus size={16} />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={clsx(
                      "overflow-hidden font-body text-[15px] text-mid-grey transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "max-h-[200px] pb-4" : "max-h-0",
                    )}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
