import "server-only";
import { parseAssetsOrigin } from "@/config/assets-url";

type EnvironmentVariable = "ASSETS_URL" | "CONTACT_EMAIL" | "PORTFOLIO_API_URL";

function requireEnvironmentVariable(name: EnvironmentVariable) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`${name} is required`);
  }

  return value;
}

const assetsOrigin = parseAssetsOrigin(process.env.ASSETS_URL);

export const contactEmail = requireEnvironmentVariable("CONTACT_EMAIL");
export const portfolioApiUrl = new URL(requireEnvironmentVariable("PORTFOLIO_API_URL"));

export function assetUrl(assetPath: string) {
  return new URL(assetPath.replace(/^\/+/, ""), assetsOrigin).toString();
}
