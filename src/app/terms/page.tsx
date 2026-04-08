import type { Metadata } from "next";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Terms of Use - New Bharat Engineering Services",
  description: "Basic terms of use for the NBES website and inquiry forms.",
  alternates: {
    canonical: "https://nbes.vercel.app/terms",
  },
};

export default function TermsPage() {
  return (
    <ScrollRevealBlock>
      <section className="section-padding bg-white">
        <div className="container-width prose prose-neutral max-w-none">
          <SectionLabel>Terms of Use</SectionLabel>
          <h1 className="mt-4 font-display text-display-md font-extrabold uppercase text-black">
            Terms of Use
          </h1>
          <p className="mt-6 max-w-[760px] font-body text-[17px] leading-[1.75] text-mid-grey">
            The information on this website is provided for general business
            inquiry purposes. Service scope, estimates, and timelines are
            confirmed only through direct discussion and formal quotation.
          </p>
          <p className="mt-4 max-w-[760px] font-body text-[17px] leading-[1.75] text-mid-grey">
            By using this site, you agree not to misuse forms, copy site
            content, or submit false project information.
          </p>
        </div>
      </section>
    </ScrollRevealBlock>
  );
}
