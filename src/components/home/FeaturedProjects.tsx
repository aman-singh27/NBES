"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollRevealBlock from "@/components/ScrollRevealBlock";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import SectionLabel from "@/components/SectionLabel";

type Project = {
  title: string;
  location: string;
  category: string;
  gradient: string;
  large?: boolean;
};

const projects: Project[] = [
  {
    title: "Steel Plant Earthing & HT Panel Installation",
    location: "Nagpur, Maharashtra",
    category: "Earthing",
    gradient: "linear-gradient(135deg, #0d1f3c, #1a2f4a)",
    large: true,
  },
  {
    title: "Corporate Office Security System",
    location: "Hyderabad, Telangana",
    category: "Security",
    gradient: "linear-gradient(135deg, #1a2a1a, #0d1a0d)",
  },
  {
    title: "Municipal Substation Upgrade",
    location: "Pune, Maharashtra",
    category: "Electrical",
    gradient: "linear-gradient(135deg, #1a1a2e, #2a2a3e)",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-off-white section-padding">
      <div className="container-width">
        <ScrollRevealBlock>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>Our Work</SectionLabel>
              <h2 className="mt-3 font-display text-display-lg font-extrabold uppercase text-black">
                COMPLETED
                <br />
                PROJECTS
              </h2>
            </div>

            <Link href="/projects" className="group inline-flex items-center gap-2 font-display text-[13px] font-bold uppercase text-accent">
              View All Projects
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollRevealBlock>

        <div className="grid grid-cols-1 gap-[2px] bg-border lg:grid-cols-[2fr_1fr] lg:grid-rows-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden ${
                index === 0 ? "aspect-[4/3] lg:row-span-2 lg:h-full" : "aspect-[4/3]"
              }`}
            >
              <ImagePlaceholder
                gradient={project.gradient}
                label={project.title}
                className="absolute inset-0 h-full w-full border-0 transition-transform duration-500 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="mb-2 inline-block rounded-[2px] bg-accent px-[10px] py-[3px] font-display text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                  {project.category}
                </span>
                <h3 className={`font-display font-bold uppercase text-white ${index === 0 ? "text-[28px]" : "text-[20px]"}`}>
                  {project.title}
                </h3>
                <p className="mt-1 font-body text-[13px] text-white/60">{project.location}</p>
              </div>

              <div className="absolute bottom-5 right-5 flex items-center gap-1 font-display text-[12px] font-bold uppercase text-white/0 transition-all duration-300 group-hover:text-white/80">
                <span>View Project</span>
                <span aria-hidden="true">&rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
