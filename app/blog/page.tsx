import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { SkeletonImage } from "@/components/ui/skeleton-image";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { assetUrl } from "@/config/environment";
import { getOpenGraphMetadata, socialPreview } from "@/config/site";
import { getLatestPosts } from "@/lib/api/blog";
import { formatDate } from "@/lib/utils";
import ArticlesSkeleton from "./_components/articles-skeleton";
import CoverImage from "./_components/cover-image";

const title = "Systems in Practice";
const description = "Notes on systems I build, test, and use in real-world work.";
const socialImage = assetUrl(socialPreview.assetPath);

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    ...getOpenGraphMetadata(socialImage, "/blog"),
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function BlogPage() {
  return (
    <main>
      <section
        className="page-top grid w-full justify-items-center gap-6"
        aria-labelledby="blog-title"
      >
        <header className="mx-auto max-w-2xl text-center">
          <h1 id="blog-title">{title}</h1>
          <p>{description}</p>
        </header>

        <SkeletonImage
          alt="Notice a worthwhile problem, build a solution, validate it in real use, explain the reusable insight, then learn and repeat."
          className="h-auto w-full"
          height={342}
          preload
          src="/illustrations/blog-hero.svg"
          unoptimized
          width={1200}
          wrapperClassName="w-[92%] max-w-4xl"
        />
      </section>
      <section className="section-gap pb-14 sm:pb-20" aria-labelledby="latest-articles">
        <header className="mx-auto max-w-xl text-center">
          <h2 id="latest-articles">Latest articles</h2>
        </header>
        <Suspense fallback={<ArticlesSkeleton />}>
          <Articles />
        </Suspense>
      </section>
    </main>
  );
}

async function Articles() {
  await connection();
  const latestPosts = await getLatestPosts();

  return (
    <>
      <div className="mt-8 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {latestPosts.map((post) => (
          <article key={post.slug}>
            <Link className="group block rounded-lg" href={`/blog/${post.slug}`}>
              <CoverImage
                key={post.cover}
                sizes="(min-width: 768px) 50vw, 100vw"
                src={post.cover}
              />
              <div className="mt-5 flex flex-wrap gap-2">
                {post.topics.map((topic) => (
                  <Badge key={topic}>{topic}</Badge>
                ))}
              </div>
              <h3 className="mt-4 transition-colors group-hover:text-ring [overflow-wrap:anywhere]">
                <span data-underline="">{post.title}</span>
              </h3>
              <p>{post.description}</p>
              <div className="mt-4 text-sm text-muted-foreground">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span className="mx-2" aria-hidden="true">
                  ·
                </span>
                {post.readingTimeMinutes} min read
              </div>
            </Link>
          </article>
        ))}
      </div>

      {!latestPosts.length && <p>No articles published yet.</p>}
    </>
  );
}
