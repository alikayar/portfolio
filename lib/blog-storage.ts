import "server-only";

import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

type BlogStorageVariable =
  | "R2_ACCOUNT_ID"
  | "R2_ACCESS_KEY_ID"
  | "R2_SECRET_ACCESS_KEY"
  | "R2_BLOG_BUCKET";

function environment(name: BlogStorageVariable) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Blog storage requires ${name}.`);
  }

  return value;
}

let client: S3Client | undefined;

function getClient() {
  client ??= new S3Client({
    region: "auto",
    endpoint: `https://${environment("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: environment("R2_ACCESS_KEY_ID"),
      secretAccessKey: environment("R2_SECRET_ACCESS_KEY"),
    },
  });

  return client;
}

export async function readBlogObject(key: string) {
  try {
    const response = await getClient().send(
      new GetObjectCommand({
        Bucket: environment("R2_BLOG_BUCKET"),
        Key: key,
      }),
    );

    if (!response.Body) {
      throw new Error("Object body is empty.");
    }

    return response.Body.transformToString("utf-8");
  } catch (error) {
    console.error("Failed to read blog object.", { key, error });
    throw new Error("Blog content could not be loaded.");
  }
}
