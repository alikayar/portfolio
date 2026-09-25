import Image from "next/image";
import { connection } from "next/server";
import { getLatestPosts } from "@/lib/api/blog";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

export default async function PageContainer() {
  await connection();
  const latestPosts = await getLatestPosts();

  return (
    <>
      <div className="mt-8 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {latestPosts.map((post) => (
          <article key={post.slug}>
            <Image
              alt=""
              className="aspect-[1200/630] h-auto w-full rounded-lg"
              height={630}
              sizes="(min-width: 768px) 50vw, 100vw"
              src={post.cover}
              unoptimized
              width={1200}
            />
            <div className="mt-5 flex flex-wrap gap-2">
              {post.topics.map((topic) => (
                <span
                  className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  key={topic}
                >
                  {topic}
                </span>
              ))}
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-secondary-foreground">
              {post.title}
            </h3>
            <p className="mt-3 leading-7 text-muted-foreground">{post.description}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span className="mx-2" aria-hidden="true">
                ·
              </span>
              {post.readingTimeMinutes} min read
            </p>
          </article>
        ))}
      </div>

      {!latestPosts.length && (
        <p className="mt-8 text-muted-foreground">No articles published yet.</p>
      )}
    </>
  );
}
