import { getAPI } from "./request";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  topics: string[];
  publishedAt: string;
  readingTimeMinutes: number;
  cover: string;
};

export async function getLatestPosts(): Promise<BlogPost[]> {
  const { posts } = await getAPI<{ posts: BlogPost[] }>("/blog/posts?limit=10", 60);
  return posts;
}
