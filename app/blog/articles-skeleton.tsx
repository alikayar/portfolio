export default function ArticlesSkeleton() {
  return (
    <div role="status">
      <span className="sr-only">Loading articles</span>
      <div
        aria-hidden="true"
        className="mt-8 grid gap-x-8 gap-y-12 motion-safe:animate-pulse md:grid-cols-2"
      >
        {[0, 1].map((index) => (
          <div key={index}>
            <div className="aspect-[1200/630] w-full rounded-lg bg-secondary/40" />
            <div className="mt-5 flex gap-2">
              <div className="h-6 w-20 rounded-full bg-secondary/55" />
              <div className="h-6 w-24 rounded-full bg-secondary/55" />
            </div>
            <div className="mt-4 h-7 w-4/5 rounded bg-secondary/60" />
            <div className="mt-3 space-y-2">
              <div className="h-4 w-full rounded bg-secondary/45" />
              <div className="h-4 w-3/4 rounded bg-secondary/45" />
            </div>
            <div className="mt-4 h-4 w-36 rounded bg-secondary/45" />
          </div>
        ))}
      </div>
    </div>
  );
}
