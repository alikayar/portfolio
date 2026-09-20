import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software, systems, and the way I work.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-3.25rem)] max-w-7xl items-center px-6 py-12 sm:px-10 sm:py-16">
      <section className="w-full" aria-labelledby="blog-title">
        <header className="mx-auto max-w-2xl text-center">
          <h1
            className="text-balance font-display text-4xl font-semibold tracking-[-0.035em] text-secondary-foreground sm:text-5xl"
            id="blog-title"
          >
            Notes from building.
          </h1>
          <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Systems, tools, experiments, and lessons worth writing down.
          </p>
        </header>

        <Image
          alt="Notice a worthwhile problem, build a solution, validate it in real use, explain the reusable insight, then learn and repeat."
          className="mt-10 h-auto w-full sm:mt-14"
          height={520}
          preload
          src="/illustrations/blog-hero.svg"
          unoptimized
          width={1200}
        />
      </section>
    </main>
  );
}
