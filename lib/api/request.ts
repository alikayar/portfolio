import "server-only";
import { portfolioApiUrl } from "@/config/environment";

export async function getAPI<T>(path: string, revalidate: number): Promise<T> {
  const response = await fetch(new URL(path, portfolioApiUrl), {
    next: { revalidate },
  });
  if (!response.ok) {
    throw new Error(`Portfolio API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
