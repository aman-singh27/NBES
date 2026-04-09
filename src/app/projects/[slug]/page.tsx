import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import SectionLabel from "@/components/SectionLabel";
import { BreadcrumbSchema, ProjectSchema } from "@/components/seo/JsonLd";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/lib/constants";

type ProjectPageParams = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageParams): Promise<Metadata> {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} - ${project.location}`,
    description: project.summary,
    alternates: {
      canonical: `${SITE_URL}/projects/${project.slug}`,
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageParams) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Projects", url: `${SITE_URL}/projects` },
          { name: project.title, url: `${SITE_URL}/projects/${project.slug}` },
        ]}
      />
      <ProjectSchema
        name={project.title}
        description={project.summary}
        url={`${SITE_URL}/projects/${project.slug}`}
        location={project.location}
      />

      <ScrollRevealBlock>
        <section className="bg-black py-24 text-white">
          <div className="container-width grid gap-12 lg:grid-cols-[56fr_44fr] lg:items-center">
            <div>
              <SectionLabel>Project Detail</SectionLabel>
              <h1 className="mt-4 font-display text-display-lg font-extrabold uppercase text-white">
                {project.title}
              </h1>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-[999px] bg-accent px-4 py-2 font-body text-[13px] font-medium text-white">
                  {project.category}
                </span>
                <span className="rounded-[999px] border border-white/10 bg-white/5 px-4 py-2 font-body text-[13px] text-white/80">
                  {project.location}
                </span>
              </div>
              <p className="mt-6 max-w-[640px] font-body text-[17px] font-light leading-[1.75] text-white/70">
                {project.summary}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center rounded-btn bg-accent px-6 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
              >
                Discuss a Similar Project
              </Link>
            </div>

            <ImagePlaceholder
              gradient={
                project.category === "Earthing"
                  ? "linear-gradient(135deg, #0d1f3c, #1a2f4a)"
                  : project.category === "Security"
                    ? "linear-gradient(135deg, #1a2a1a, #0d1a0d)"
                    : project.category === "Civil"
                      ? "linear-gradient(135deg, #2f2a23, #4a4035)"
                    : "linear-gradient(135deg, #1a1a2e, #2a2a3e)"
              }
              label={`${project.title} - ${project.location}`}
              className="aspect-[4/5] w-full rounded-[8px] border border-white/10"
            />
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <section className="bg-white section-padding">
          <div className="container-width grid gap-12 lg:grid-cols-[40fr_60fr]">
            <div>
              <SectionLabel>Scope</SectionLabel>
              <h2 className="mt-3 font-display text-display-md font-extrabold uppercase text-black">
                Scope of Work
              </h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="rounded-[6px] border border-border bg-off-white px-4 py-4 font-body text-[15px] text-charcoal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollRevealBlock>

      <ScrollRevealBlock>
        <CTABand />
      </ScrollRevealBlock>
    </>
  );
}
