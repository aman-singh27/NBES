"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCounter } from "@/hooks/useCounter";

type HeroStat = {
  num: number;
  suffix: string;
  label: string;
};

const stats: HeroStat[] = [
  { num: 20, suffix: "+", label: "Years" },
  { num: 8, suffix: "+", label: "Clients" },
  { num: 2, suffix: "", label: "Offices" },
  { num: 7, suffix: "+", label: "Services" },
];

function HeroStatItem({ stat }: { stat: HeroStat }) {
  const count = useCounter(stat.num, true);

  return (
    <div>
      <p className="font-display text-[44px] font-extrabold leading-none text-white">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-1 font-body text-sm text-white/50">{stat.label}</p>
    </div>
  );
}

const contentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { ref, inView } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-black">
      <div className="grid lg:grid-cols-[55fr_45fr]">
        <motion.div
          ref={ref}
          variants={contentVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="container-width py-24 lg:py-28"
        >
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>Electrical & Technical Solutions</SectionLabel>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display text-[clamp(48px,7vw,100px)] font-extrabold uppercase leading-[0.92] text-white"
          >
            Electrical & Facility
            <br />
            <span className="text-accent">Services Delhi-NCR</span>
            <br />
            New Bharat Engineering Services
          </motion.h1>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[460px] font-body text-[17px] font-light leading-[1.75] text-white/65"
          >
            NBES - New Bharat Engineering Services - has delivered reliable
            electrical, plumbing, civil, CCTV, earthing, carpentry, and interior
            services for corporate offices across Delhi-NCR since 2003. Trusted
            by HCL, Nestle, Deloitte, and leading organizations.
          </motion.p>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white/55"
          >
            Delivering Reliable Infrastructure Solutions with Precision
          </motion.p>

          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-btn bg-accent px-7 py-[14px] font-display text-sm font-bold uppercase tracking-[0.06em] text-white transition-all hover:-translate-y-px hover:bg-accent-dark hover:shadow-[0_8px_20px_rgba(0,71,204,0.25)]"
            >
              Get a Quote
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="https://wa.me/919999060083"
              className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.06em] text-white/70 transition-colors hover:text-white"
            >
              <MessageCircle size={18} fill="#25D366" stroke="none" />
              WhatsApp Us
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <HeroStatItem key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </motion.div>

        <div className="relative hidden lg:block">
          <ImagePlaceholder
            gradient="linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)"
            label="Hero site photo"
            className="h-full min-h-[600px] w-full border-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,71,204,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,71,204,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />
        </div>
      </div>
    </section>
  );
}
