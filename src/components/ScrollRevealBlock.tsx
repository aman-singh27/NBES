"use client";

import { type ReactNode, useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ScrollRevealBlockProps = {
  children: ReactNode;
  className?: string;
};

export default function ScrollRevealBlock({
  children,
  className = "",
}: ScrollRevealBlockProps) {
  const { ref, inView } = useScrollReveal<HTMLDivElement>();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  const motionClassName = prefersReducedMotion
    ? "translate-y-0 opacity-100 transform-none transition-none"
    : `transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`;

  return (
    <div
      ref={ref}
      className={`${motionClassName} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
