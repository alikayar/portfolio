import { Skeleton } from "@/components/ui/skeleton";

export default function ArticleSkeleton() {
  return (
    <main className="page-top mx-auto max-w-4xl pb-20">
      <output className="block">
        <span className="sr-only">Loading article</span>
        <div>
          <div className="flex gap-2">
            <Skeleton className="h-7 w-20 rounded-full" />
            <Skeleton className="h-7 w-24 rounded-full" />
          </div>
          <Skeleton className="mt-5 h-9 w-4/5 rounded sm:h-10" />
          <Skeleton className="mt-3 h-9 w-2/3 rounded sm:h-10" />
          <Skeleton className="mt-5 h-5 w-full max-w-2xl rounded" />
          <Skeleton className="mt-6 h-4 w-44 rounded" />
          <Skeleton className="mt-6 aspect-[12/5] w-full rounded-lg" />
          <div className="mt-8 space-y-3 border-y border-border/60 py-4">
            <Skeleton className="h-4 w-3/5 rounded" />
            <Skeleton className="h-4 w-2/5 rounded" />
            <Skeleton className="h-4 w-1/2 rounded" />
          </div>
        </div>
      </output>
    </main>
  );
}
