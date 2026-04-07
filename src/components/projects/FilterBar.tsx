"use client";

const categories = [
  "All",
  "Electrical",
  "Earthing",
  "Security",
  "Manpower",
] as const;

export type FilterCategory = (typeof categories)[number];

type FilterBarProps = {
  activeCategory: FilterCategory;
  onChange: (category: FilterCategory) => void;
};

export default function FilterBar({
  activeCategory,
  onChange,
}: FilterBarProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={[
              "cursor-pointer rounded-[4px] px-5 py-[9px] font-body text-[13px] font-medium transition-all",
              isActive
                ? "bg-accent text-white"
                : "border border-border bg-white text-charcoal hover:border-accent",
            ].join(" ")}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
