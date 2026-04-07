import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export type ServiceDetailProps = {
  num: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  included: string[];
  industries: string[];
  imageGradient: string;
  imageLabel: string;
  layout: "image-left" | "image-right";
  background: "white" | "off-white";
};

export default function ServiceDetail({
  num,
  id,
  title,
  subtitle,
  description,
  included,
  industries,
  imageGradient,
  imageLabel,
  layout,
  background,
}: ServiceDetailProps) {
  const isImageLeft = layout === "image-left";

  return (
    <section className={background === "off-white" ? "bg-off-white section-padding" : "bg-white section-padding"}>
      <div
        className={
          isImageLeft
            ? "container-width grid items-start gap-10 lg:grid-cols-[45fr_55fr]"
            : "container-width grid items-start gap-10 lg:grid-cols-[55fr_45fr]"
        }
      >
        {isImageLeft ? (
          <>
            <div className="mt-6">
              <ImagePlaceholder
                gradient={imageGradient}
                label={imageLabel}
                className="aspect-[4/5] w-full rounded-[8px] border border-black/10"
              />
            </div>

            <div>
              <p className="font-display text-[11px] tracking-[0.14em] text-accent mb-3">{num}</p>
              <SectionLabel>{subtitle}</SectionLabel>
              <h2
                id={id}
                className="scroll-mt-28 whitespace-pre-line font-display text-display-md font-extrabold uppercase text-black mt-3 mb-5"
              >
                {title}
              </h2>
              <p className="body-light">{description}</p>

              <div className="mt-8">
                <h3 className="font-display text-[12px] font-bold tracking-[0.1em] uppercase text-charcoal mb-4">
                  What&apos;s Included
                </h3>
                <ul className="flex flex-col gap-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-charcoal">
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-body text-[12px] font-medium text-mid-grey uppercase tracking-[0.08em] mb-3">
                  Ideal For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="font-body text-[13px] text-charcoal bg-off-white border border-border px-3 py-1 rounded-[4px]"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center font-display text-[13px] font-bold uppercase tracking-[0.08em] text-charcoal transition-colors hover:text-accent"
              >
                Get a Quote for This Service &rarr;
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <p className="font-display text-[11px] tracking-[0.14em] text-accent mb-3">{num}</p>
              <SectionLabel>{subtitle}</SectionLabel>
              <h2
                id={id}
                className="scroll-mt-28 whitespace-pre-line font-display text-display-md font-extrabold uppercase text-black mt-3 mb-5"
              >
                {title}
              </h2>
              <p className="body-light">{description}</p>

              <div className="mt-8">
                <h3 className="font-display text-[12px] font-bold tracking-[0.1em] uppercase text-charcoal mb-4">
                  What&apos;s Included
                </h3>
                <ul className="flex flex-col gap-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-charcoal">
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-body text-[12px] font-medium text-mid-grey uppercase tracking-[0.08em] mb-3">
                  Ideal For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <span
                      key={industry}
                      className="font-body text-[13px] text-charcoal bg-off-white border border-border px-3 py-1 rounded-[4px]"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center font-display text-[13px] font-bold uppercase tracking-[0.08em] text-charcoal transition-colors hover:text-accent"
              >
                Get a Quote for This Service &rarr;
              </Link>
            </div>

            <div className="mt-6">
              <ImagePlaceholder
                gradient={imageGradient}
                label={imageLabel}
                className="aspect-[4/5] w-full rounded-[8px] border border-black/10"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}