import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import ArticleMarkdown from "@/app/blog/_components/article-markdown";
import ArticleToc from "@/app/blog/_components/article-toc";
import CoverImage from "@/app/blog/_components/cover-image";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { getBlogPost } from "@/lib/api/blog";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };
const loadPost = cache(async (slug: string) => {
  const post = await getBlogPost(slug);
  if (!post) notFound();
  return post;
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await loadPost(slug);
  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      images: [{ url: post.cover, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.cover],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await loadPost(slug);
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: url,
    image: post.cover,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }).replace(/</g, "\\u003c");

  return (
    <main className="page-top mx-auto max-w-4xl pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      <header>
        <div className="flex flex-wrap gap-2">
          {post.topics.map((topic) => (
            <Badge key={topic}>{topic}</Badge>
          ))}
        </div>
        <h1 className="mt-5 max-w-3xl [overflow-wrap:anywhere]">{post.title}</h1>
        <p>{post.description}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span className="inline-flex items-center gap-3">
            <span aria-hidden="true">·</span>
            {post.readingTimeMinutes} min read
          </span>
        </div>
      </header>

      <figure className="mt-6">
        <CoverImage
          key={post.cover}
          preload
          sizes="(min-width: 1024px) 56rem, 100vw"
          src={post.cover}
        />
      </figure>

      <ArticleToc toc={post.toc} />

      <ArticleMarkdown markdown={post.markdown} toc={post.toc} />
      <div className="mt-16">
        <Link href="/blog">
          ← <span data-underline="">More articles</span>
        </Link>
      </div>
    </main>
  );
}
