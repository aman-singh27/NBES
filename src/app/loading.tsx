export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-white px-6 py-20">
      <div className="container-width mx-auto max-w-5xl">
        <div className="h-4 w-32 animate-pulse rounded bg-border" />
        <div className="mt-6 h-16 w-full max-w-2xl animate-pulse rounded bg-off-white" />
        <div className="mt-4 h-6 w-full max-w-xl animate-pulse rounded bg-off-white" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="h-64 animate-pulse rounded-[8px] bg-off-white" />
          <div className="h-64 animate-pulse rounded-[8px] bg-off-white" />
        </div>
      </div>
    </div>
  );
}