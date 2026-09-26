"use client";

import { useState } from "react";
import { SkeletonImage } from "@/components/ui/skeleton-image";

type Props = { src: string; alt?: string; title?: string };

export default function InlineImage({ src, alt, title }: Props) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const failed = failedSrc === src;
  const svg = src.endsWith(".svg");

  return (
    <span className={`relative mx-auto block aspect-[12/5] w-full ${svg ? "sm:max-w-3xl" : ""}`}>
      <SkeletonImage
        alt={alt ?? ""}
        className={`rounded-lg object-contain ${failed ? "invisible" : ""}`}
        fill
        loading="lazy"
        onError={() => setFailedSrc(src)}
        src={src}
        title={title}
        unoptimized
      />
      {failed && (
        <output className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          Image unavailable
        </output>
      )}
    </span>
  );
}
