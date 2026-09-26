import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { siteConfig } from "@/config/site";
import { getAllBlogPosts } from "@/lib/api/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();
  const pages: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  try {
    const posts = await getAllBlogPosts();
    pages.push(
      ...posts.map((post) => ({
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: post.updatedAt ?? post.publishedAt,
      })),
    );
  } catch (error) {
    console.error("Blog sitemap entries unavailable:", error);
  }

  return pages;
}
