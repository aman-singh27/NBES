"use client";

import { type ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ScrollRevealBlockProps = {
  children: ReactNode;
  className?: string;
};

export default function ScrollRevealBlock({ children, className = "" }: ScrollRevealBlockProps) {
  const { ref, inView } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}
