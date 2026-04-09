import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import FAQAccordion from "@/components/FAQAccordion";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import ProjectGrid, {
  type ProjectItem,
} from "@/components/projects/ProjectGrid";
import { projects as projectData } from "@/data/projects";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Completed Projects - Corporate Facility Services Delhi-NCR",
  description:
    "View NBES project portfolio across Delhi-NCR: corporate electrical maintenance, CCTV installations, earthing compliance work, and office interior fit-outs.",
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
};

const projects: ProjectItem[] = projectData.map((project, index) => ({
  id: index + 1,
  slug: project.slug,
  title: project.title,
  location: project.location,
  category: project.category as ProjectItem["category"],
  gradient:
    project.category === "Earthing"
      ? "linear-gradient(135deg, #0d1f3c, #1a2f4a)"
      : project.category === "Security"
        ? "linear-gradient(135deg, #1a2a1a, #0d1a0d)"
        : project.category === "Civil"
          ? "linear-gradient(135deg, #2f2a23, #4a4035)"
        : project.category === "Interior"
          ? "linear-gradient(135deg, #2c1f12, #4a3420)"
          : "linear-gradient(135deg, #1a1a2e, #2a2a3e)",
}));

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Projects", url: `${SITE_URL}/projects` },
        ]}
      />
      <ScrollRevealBlock>
        <section className="bg-black">
          <div className="container-width grid items-start pt-24 pb-0 md:grid-cols-[60fr_40fr]">
            <div className="pb-24 pl-10 md:pl-0">
              <SectionLabel>Our Portfolio</SectionLabel>
              <h1 className="mt-4 font-display text-display-xl font-extrabold uppercase text-white">
                OUR COMPLETED
                <br />
                PROJECTS
              </h1>
              <p className="body-light mt-5 max-w-[440px] text-white/65">
                Facility service delivery across corporate offices, campuses,
                and commercial properties in Delhi-NCR - from electrical
                maintenance to CCTV installation and office fit-outs.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
              >
                <span>Have a similar project? Talk to us</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="relative">
              <ImagePlaceholder
                gradient="linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)"
                label="NBES project site overview"
                className="relative z-10 mt-8 mb-[-80px] w-full aspect-[3/4]"
              />
            </div>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white pt-24 pb-24">
          <div className="container-width">
            <div className="mb-12 text-center">
              <SectionLabel centered>Recent Works</SectionLabel>
              <h2 className="mt-4 font-display text-display-lg font-extrabold uppercase text-black">
                RECENT WORKS
              </h2>
            </div>

            <ProjectGrid projects={projects} />
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <FAQAccordion sectionClassName="bg-off-white section-padding" />
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <CTABand />
      </ScrollRevealBlock>
    </>
  );
}
