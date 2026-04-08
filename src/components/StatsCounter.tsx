"use client";

import { useCounter } from "@/hooks/useCounter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

const stats: StatItem[] = [
  { value: 20, suffix: "+", label: "Years Operating" },
  { value: 8, suffix: "+", label: "Enterprise Clients" },
  { value: 7, suffix: "+", label: "Service Categories" },
  { value: 2, suffix: "", label: "Office Locations" },
];

type StatCellProps = {
  stat: StatItem;
  index: number;
};

function StatCell({ stat, index }: StatCellProps) {
  const count = useCounter(stat.value, true);
  const isMobileLeft = index === 0 || index === 2;
  const isMobileTop = index === 0 || index === 1;
  const isDesktopLast = index === stats.length - 1;

  return (
    <div
      className={[
        "px-5 py-6 text-center",
        isMobileLeft ? "border-r border-white/8 md:border-r-0" : "",
        isMobileTop ? "border-b border-white/8 md:border-b-0" : "",
        !isDesktopLast ? "md:border-r md:border-white/8" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="font-display text-[52px] font-extrabold leading-none text-white sm:text-[46px]">
        {count}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-2 font-body text-sm uppercase tracking-[0.06em] text-white/45">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  const { ref, inView } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-black py-16">
      <div className="container-width grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) =>
          inView ? (
            <StatCell key={stat.label} stat={stat} index={index} />
          ) : (
            <StatCell
              key={stat.label}
              stat={{ ...stat, value: 0 }}
              index={index}
            />
          ),
        )}
      </div>
    </section>
  );
}
