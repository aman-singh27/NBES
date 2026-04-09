"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function useScrollPosition(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition(60);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const openMenuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenuButtonRef = useRef<HTMLButtonElement>(null);
  const wasMobileOpenRef = useRef(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.classList.remove("overflow-hidden");

      if (wasMobileOpenRef.current) {
        openMenuButtonRef.current?.focus();
      }

      wasMobileOpenRef.current = false;
      return;
    }

    wasMobileOpenRef.current = true;
    document.body.classList.add("overflow-hidden");
    closeMenuButtonRef.current?.focus();

    const getFocusableElements = () => {
      if (!mobileMenuRef.current) {
        return [] as HTMLElement[];
      }

      const selector =
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

      return Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>(selector),
      ).filter((element) => {
        return (
          !element.hasAttribute("disabled") &&
          !element.getAttribute("aria-hidden")
        );
      });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;
      const isFocusInsideMenu =
        !!activeElement && mobileMenuRef.current?.contains(activeElement);

      if (event.shiftKey) {
        if (!isFocusInsideMenu || activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (!isFocusInsideMenu || activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 h-18 border-b border-border bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.07)]" : "shadow-none"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-width flex h-full items-center justify-between gap-6"
      >
        <Link href="/" className="inline-flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-[38px] w-[38px] items-center justify-center rounded-[4px] bg-accent"
          >
            <span className="h-3.5 w-3.5 rounded-[2px] border border-white/70" />
          </span>
          <span className="font-display text-[22px] font-extrabold tracking-[0.06em] text-black">
            NBES
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative font-body text-sm font-medium after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 after:content-[''] ${
                pathname === item.href
                  ? "text-accent after:scale-x-100"
                  : "text-charcoal after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="tel:+919999060083"
            className="font-body text-sm font-medium text-charcoal"
          >
            +91 99990 60083
          </a>
          <Link
            href="/contact"
            className="rounded-btn bg-accent px-5 py-[10px] font-display text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
          >
            Get a Quote
          </Link>
        </div>

        <button
          ref={openMenuButtonRef}
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-menu"
          onClick={() => setMobileOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center text-charcoal md:hidden"
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black md:hidden"
          >
            <div
              id="mobile-navigation-menu"
              ref={mobileMenuRef}
              className="container-width flex h-full flex-col py-8"
            >
              <div className="mb-12 flex justify-end">
                <button
                  ref={closeMenuButtonRef}
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <motion.div
                className="flex flex-1 flex-col justify-center gap-6"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.05 } },
                }}
              >
                {navLinks.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`font-display text-[32px] font-bold uppercase leading-none ${
                        pathname === item.href ? "text-accent" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <div className="border-t border-white/10 pt-6">
                <a
                  href="tel:+919999060083"
                  className="block font-body text-sm font-medium text-white/70"
                >
                  +91 99990 60083
                </a>
                <a
                  href="https://wa.me/919999060083"
                  className="mt-2 inline-flex font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
