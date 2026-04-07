import type { Metadata } from "next";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Privacy Policy - New Bharat Engineer Services",
  description:
    "Read how NBES handles contact form submissions, inquiry data, and privacy requests.",
  alternates: {
    canonical: "https://nbes.vercel.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <ScrollRevealBlock>
      <section className="section-padding bg-white">
        <div className="container-width prose prose-neutral max-w-none">
          <SectionLabel>Privacy Policy</SectionLabel>
          <h1 className="mt-4 font-display text-display-md font-extrabold uppercase text-black">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-[760px] font-body text-[17px] leading-[1.75] text-mid-grey">
            We collect contact form submissions, project requirements, and
            related inquiry details to respond to requests from potential
            clients. We do not sell personal data to third parties.
          </p>
          <p className="mt-4 max-w-[760px] font-body text-[17px] leading-[1.75] text-mid-grey">
            If you want your data updated or removed, contact us at
            info@nbes.in.
          </p>
        </div>
      </section>
    </ScrollRevealBlock>
  );
}
