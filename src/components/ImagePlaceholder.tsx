import clsx from "clsx";

type ImagePlaceholderProps = {
  gradient: string;
  label: string;
  className?: string;
};

export default function ImagePlaceholder({ gradient, label, className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={clsx(
        "relative overflow-hidden border border-white/10 bg-charcoal",
        "flex items-center justify-center",
        className,
      )}
      style={{ backgroundImage: gradient }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <span className="relative z-10 font-body text-sm font-medium uppercase tracking-[0.08em] text-white/20">
        {label}
      </span>
    </div>
  );
}
