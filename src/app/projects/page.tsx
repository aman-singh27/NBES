import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import FAQAccordion from "@/components/FAQAccordion";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import ProjectGrid, {
  type ProjectItem,
} from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Completed Projects | Electrical, Earthing & Security Portfolio",
  description:
    "View NBES's completed projects — industrial electrical, earthing systems, security installations across Maharashtra, Telangana, Gujarat and more.",
};

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Steel Plant Earthing & HT Panel Installation",
    location: "Nagpur, Maharashtra",
    category: "Earthing",
    gradient: "linear-gradient(135deg, #0d1f3c, #1a2f4a)",
  },
  {
    id: 2,
    title: "Corporate Office Security System",
    location: "Hyderabad, Telangana",
    category: "Security",
    gradient: "linear-gradient(135deg, #1a2a1a, #0d1a0d)",
  },
  {
    id: 3,
    title: "Municipal Substation Upgrade",
    location: "Pune, Maharashtra",
    category: "Electrical",
    gradient: "linear-gradient(135deg, #1a1a2e, #2a2a3e)",
  },
  {
    id: 4,
    title: "Chemical Plant Electrical Audit",
    location: "Ankleshwar, Gujarat",
    category: "Electrical",
    gradient: "linear-gradient(135deg, #2a1a0d, #3a2a1a)",
  },
  {
    id: 5,
    title: "Auto OEM Manpower Contract — 12 Months",
    location: "Chakan, Pune",
    category: "Manpower",
    gradient: "linear-gradient(135deg, #0d1a2a, #1a2a3a)",
  },
  {
    id: 6,
    title: "Factory Perimeter CCTV System",
    location: "Aurangabad, Maharashtra",
    category: "Security",
    gradient: "linear-gradient(135deg, #1a0d2a, #2a1a3a)",
  },
];

export default function ProjectsPage() {
  return (
    <>
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
                Every project reflects our commitment to safety, precision, and
                standards compliance - from industrial earthing to integrated
                security.
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
