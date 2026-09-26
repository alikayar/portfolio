import { cacheLife } from "next/cache";
import { toAPIError } from "./error-catalog";
import { getAPI } from "./request";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  topics: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  cover: string;
};

export type BlogPostDetail = BlogPost & {
  markdown: string;
  toc: { id: string; text: string; level: 2 | 3 }[];
};

type BlogPostsPage = { posts: BlogPost[]; nextCursor?: string };
const blogCacheLife = { stale: 300, revalidate: 60, expire: 3600 };

function getPostsPage(limit: number, cursor?: string) {
  const query = new URLSearchParams({ limit: String(limit) });
  if (cursor) query.set("cursor", cursor);
  return getAPI<BlogPostsPage>(`/blog/posts?${query}`);
}

export async function getLatestPosts(): Promise<BlogPost[]> {
  "use cache";
  cacheLife(blogCacheLife);
  try {
    const { posts } = await getPostsPage(10);
    return posts;
  } catch (error) {
    throw toAPIError(error);
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  "use cache";
  cacheLife(blogCacheLife);
  try {
    const posts: BlogPost[] = [];
    let cursor: string | undefined;

    do {
      const page = await getPostsPage(50, cursor);
      posts.push(...page.posts);
      cursor = page.nextCursor;
    } while (cursor);

    return posts;
  } catch (error) {
    throw toAPIError(error);
  }
}

export async function getBlogPost(slug: string): Promise<BlogPostDetail | null> {
  "use cache";
  cacheLife(blogCacheLife);
  try {
    const { post } = await getAPI<{ post: BlogPostDetail }>(
      `/blog/posts/${encodeURIComponent(slug)}`,
    );
    return post;
  } catch (error) {
    const apiError = toAPIError(error);
    if (apiError.status === 404) {
      return null;
    }
    throw apiError;
  }
}
