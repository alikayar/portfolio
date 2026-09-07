import "server-only";
import { parseAssetsOrigin } from "@/config/assets-url";

function requireEnvironmentVariable(name: "ASSETS_URL" | "CONTACT_EMAIL") {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`${name} is required`);
  }

  return value;
}

const assetsOrigin = parseAssetsOrigin(process.env.ASSETS_URL);

export const contactEmail = requireEnvironmentVariable("CONTACT_EMAIL");

export function assetUrl(assetPath: string) {
  return new URL(assetPath.replace(/^\/+/, ""), assetsOrigin).toString();
}
