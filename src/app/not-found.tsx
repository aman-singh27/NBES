import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-black px-5 text-center">
      <div>
        <SectionLabel centered>404 - Not Found</SectionLabel>
        <h1 className="mt-4 font-display text-display-xl text-white">PAGE NOT FOUND</h1>
        <p className="body-light mx-auto mt-4 max-w-sm text-white/65">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-btn bg-accent px-7 py-[14px] font-display text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-accent-dark"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
