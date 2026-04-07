import Link from "next/link";
import { MessageCircle } from "lucide-react";

type CTABandProps = {
  title?: string;
  subtitle?: string;
};

export default function CTABand({
  title = "READY TO START YOUR PROJECT?",
  subtitle = "Tell us what you need. We respond within 24 hours.",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-accent section-padding">
      <div className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-white/4" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-white/4" />

      <div className="container-width relative z-10 flex flex-col items-center justify-between gap-10 text-center md:flex-row md:text-left">
        <div>
          <h2 className="font-display text-display-lg font-extrabold uppercase text-white">
            {title}
          </h2>
          <p className="mt-3 max-w-[560px] font-body text-[17px] font-light leading-[1.75] text-white/70">
            {subtitle}
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-btn bg-white px-7 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-accent transition-colors hover:bg-off-white"
          >
            Get a Quote
          </Link>
          <Link
            href="https://wa.me/910000000000"
            className="inline-flex items-center justify-center gap-2 rounded-btn border border-white/50 px-7 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:border-white hover:bg-white/10"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  );
}
