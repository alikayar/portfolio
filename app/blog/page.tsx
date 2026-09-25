import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import ArticlesSkeleton from "./articles-skeleton";
import PageContainer from "./page-container";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software, systems, and the way I work.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="px-3 sm:px-5">
      <div className="mx-auto w-full max-w-7xl">
        <section
          className="grid w-full justify-items-center gap-6 pt-8 sm:pt-10"
          aria-labelledby="blog-title"
        >
          <header className="mx-auto max-w-2xl text-center">
            <h1
              className="text-balance font-display text-4xl font-semibold tracking-[-0.035em] text-secondary-foreground sm:text-5xl"
              id="blog-title"
            >
              Systems in Practice
            </h1>
            <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Notes on systems I build, test, and use in real-world work.
            </p>
          </header>

          <Image
            alt="Notice a worthwhile problem, build a solution, validate it in real use, explain the reusable insight, then learn and repeat."
            className="h-auto w-[92%] max-w-4xl"
            height={430}
            preload
            src="/illustrations/blog-hero.svg"
            unoptimized
            width={1200}
          />
        </section>
        <section className="pt-8 pb-14 sm:pt-10 sm:pb-20" aria-labelledby="latest-articles">
          <h2
            className="font-display text-3xl font-semibold tracking-[-0.025em] text-secondary-foreground"
            id="latest-articles"
          >
            Latest articles
          </h2>
          <Suspense fallback={<ArticlesSkeleton />}>
            <PageContainer />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
