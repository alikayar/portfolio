import { Skeleton } from "@/components/ui/skeleton";

export default function ArticlesSkeleton() {
  return (
    <output className="block">
      <span className="sr-only">Loading articles</span>
      <div className="mt-8 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {[0, 1].map((index) => (
          <div key={index}>
            <Skeleton className="aspect-[12/5] w-full rounded-lg" />
            <div className="mt-5 flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <Skeleton className="mt-4 h-7 w-4/5 rounded" />
            <div className="mt-3 space-y-2">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-3/4 rounded" />
            </div>
            <Skeleton className="mt-4 h-4 w-36 rounded" />
          </div>
        ))}
      </div>
    </output>
  );
}
