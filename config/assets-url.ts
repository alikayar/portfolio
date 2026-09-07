export function parseAssetsOrigin(value: string | undefined) {
  const assetsUrl = value?.trim();

  if (!assetsUrl) {
    throw new Error("ASSETS_URL is required");
  }

  const assetsOrigin = new URL(assetsUrl);

  if (
    assetsOrigin.protocol !== "https:" ||
    assetsOrigin.pathname !== "/" ||
    assetsOrigin.search ||
    assetsOrigin.hash
  ) {
    throw new Error("ASSETS_URL must be an HTTPS origin without a path, query, or fragment");
  }

  return assetsOrigin;
}
