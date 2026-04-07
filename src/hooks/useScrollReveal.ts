"use client";

import { RefObject, useEffect, useRef, useState } from "react";

type UseScrollRevealResult<T extends HTMLElement> = {
  ref: RefObject<T>;
  inView: boolean;
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(): UseScrollRevealResult<T> {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [inView]);

  return { ref, inView };
}
