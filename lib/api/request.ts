import "server-only";
import { portfolioApiUrl } from "@/config/environment";
import { APIError } from "./error-catalog";

export async function getAPI<T>(path: string): Promise<T> {
  const response = await fetch(new URL(path, portfolioApiUrl));
  if (!response.ok) {
    throw new APIError(response.status);
  }

  return response.json() as Promise<T>;
}
