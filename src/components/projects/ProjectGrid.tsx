"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import FilterBar, {
  type FilterCategory,
} from "@/components/projects/FilterBar";

export type ProjectCategory =
  | "Electrical"
  | "Earthing"
  | "Security"
  | "Civil"
  | "Interior";

export type ProjectItem = {
  id: number;
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  gradient: string;
};

type ProjectGridProps = {
  projects: ProjectItem[];
};

const rowPatterns = ["2-1", "1-2", "1-1"] as const;

function chunkProjects(items: ProjectItem[]): ProjectItem[][] {
  const rows: ProjectItem[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }
  return rows;
}

function isWideCard(
  pattern: (typeof rowPatterns)[number],
  cardIndex: number,
  rowLength: number,
): boolean {
  if (rowLength < 2) {
    return false;
  }

  if (pattern === "2-1") {
    return cardIndex === 0;
  }

  if (pattern === "1-2") {
    return cardIndex === 1;
  }

  return false;
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory, projects],
  );

  const rows = useMemo(
    () => chunkProjects(filteredProjects),
    [filteredProjects],
  );

  return (
    <div>
      <FilterBar activeCategory={activeCategory} onChange={setActiveCategory} />

      <motion.div layout className="space-y-[2px] bg-border">
        <AnimatePresence mode="popLayout">
          {rows.map((row, rowIndex) => {
            const pattern = rowPatterns[rowIndex % rowPatterns.length];
            const rowClass =
              row.length < 2
                ? "grid-cols-1"
                : pattern === "2-1"
                  ? "grid-cols-1 md:grid-cols-[2fr_1fr]"
                  : pattern === "1-2"
                    ? "grid-cols-1 md:grid-cols-[1fr_2fr]"
                    : "grid-cols-1 md:grid-cols-[1fr_1fr]";

            return (
              <motion.div
                key={`row-${rowIndex}-${row.map((project) => project.id).join("-")}`}
                layout
                className={`grid gap-[2px] ${rowClass}`}
              >
                {row.map((project, cardIndex) => {
                  const isWide = isWideCard(pattern, cardIndex, row.length);

                  return (
                    <motion.article
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={`group relative overflow-hidden bg-black ${
                        isWide ? "md:min-h-[360px]" : "aspect-[4/3]"
                      }`}
                    >
                      <ImagePlaceholder
                        gradient={project.gradient}
                        label={project.title}
                        className="absolute inset-0 h-full w-full border-0"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/82 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                        <span className="inline-flex rounded-[4px] bg-white/12 px-3 py-1 font-body text-[11px] font-medium uppercase tracking-[0.08em] text-white/90">
                          {project.category}
                        </span>
                        <h3
                          className={`mt-3 font-display font-bold uppercase text-white ${
                            isWide
                              ? "text-[28px] leading-[0.95]"
                              : "text-[22px] leading-[1.05]"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p className="mt-1 font-body text-[13px] text-white/60">
                          {project.location}
                        </p>
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        aria-label={`View ${project.title} in ${project.location}`}
                        className="absolute inset-0 z-20"
                      />

                      <div className="absolute bottom-5 right-5 z-10 flex items-center gap-1 font-display text-[12px] uppercase text-white opacity-0 transition-opacity group-hover:opacity-80">
                        <span>View Project</span>
                        <span aria-hidden="true">&rarr;</span>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
